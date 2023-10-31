---
title: Hemberg-lab单细胞转录组数据分析（三）
date: 2020-09-28 15:47:07
categories:
  - NGS 
  - SingleCell
tags: 
  - Hemberg-lab
  - SingleCell
---

我们使用 Tabula Muris最开始释放的数据做为测试数据来完成完整的单细胞数据分析。`The Tabula Muris`是一个国际合作组织，目的是采用标准方法生成小鼠每个细胞的图谱。建库测序方法包括通量高覆盖率低的`10X`数据和通量低覆盖率高的`FACS`筛选+`Smartseq2`建库技术。  

原始数据于2017年12月20日释放，包含`20`个组织/器官的`100,000`细胞的转录组图谱。  

## 下载数据  

下载FACS数据:  

```sh
wget https://ndownloader.figshare.com/files/10038307
unzip 10038307
wget https://ndownloader.figshare.com/files/10038310
mv 10038310 FACS_metadata.csv
wget https://ndownloader.figshare.com/files/10039267
mv 10039267 FACS_annotations.csv
```

下载10X数据:  

```sh
wget https://ndownloader.figshare.com/files/10038325
unzip 10038325
wget https://ndownloader.figshare.com/files/10038328
mv 10038328 droplet_metadata.csv
wget https://ndownloader.figshare.com/files/10039264
mv 10039264 droplet_annotation.csv
```

现在应该有两个文件夹: `FACS`和`droplet`，每个对应一个`annotation`和`metadata`文件。使用`head`命令查看前10行：  

```sh
head -n 10 droplet_metadata.csv
```

使用`wc -l`查看文件的行数:  

```sh
wc -l droplet_annotation.csv
```

## 读入数据 (Smartseq2)  

读入逗号分隔的`count matrix`，存储为数据框:  

```R
dat = read.delim("FACS/Kidney-counts.csv", sep=",", header=TRUE)
dat[1:5,1:5]
```

数据库第一列是基因名字，把它移除作为列名字：  

```R
dim(dat)
rownames(dat) <- dat[,1]
dat <- dat[,-1]
```

这是`Smartseq2`数据集，可能含有`spike-ins`:  

```R
rownames(dat)[grep("^ERCC-", rownames(dat))]
```

```
[1] "ERCC-00002" "ERCC-00003" "ERCC-00004" "ERCC-00009" "ERCC-00012"
 [6] "ERCC-00013" "ERCC-00014" "ERCC-00016" "ERCC-00017" "ERCC-00019"
[11] "ERCC-00022" "ERCC-00024" "ERCC-00025" "ERCC-00028" "ERCC-00031"
[16] "ERCC-00033" "ERCC-00034" "ERCC-00035" "ERCC-00039" "ERCC-00040"
[21] "ERCC-00041" "ERCC-00042" "ERCC-00043" "ERCC-00044" "ERCC-00046"
[26] "ERCC-00048" "ERCC-00051" "ERCC-00053" "ERCC-00054" "ERCC-00057"
[31] "ERCC-00058" "ERCC-00059" "ERCC-00060" "ERCC-00061" "ERCC-00062"
[36] "ERCC-00067" "ERCC-00069" "ERCC-00071" "ERCC-00073" "ERCC-00074"
[41] "ERCC-00075" "ERCC-00076" "ERCC-00077" "ERCC-00078" "ERCC-00079"
[46] "ERCC-00081" "ERCC-00083" "ERCC-00084" "ERCC-00085" "ERCC-00086"
[51] "ERCC-00092" "ERCC-00095" "ERCC-00096" "ERCC-00097" "ERCC-00098"
[56] "ERCC-00099" "ERCC-00104" "ERCC-00108" "ERCC-00109" "ERCC-00111"
[61] "ERCC-00112" "ERCC-00113" "ERCC-00116" "ERCC-00117" "ERCC-00120"
[66] "ERCC-00123" "ERCC-00126" "ERCC-00130" "ERCC-00131" "ERCC-00134"
[71] "ERCC-00136" "ERCC-00137" "ERCC-00138" "ERCC-00142" "ERCC-00143"
[76] "ERCC-00144" "ERCC-00145" "ERCC-00147" "ERCC-00148" "ERCC-00150"
[81] "ERCC-00154" "ERCC-00156" "ERCC-00157" "ERCC-00158" "ERCC-00160"
[86] "ERCC-00162" "ERCC-00163" "ERCC-00164" "ERCC-00165" "ERCC-00168"
[91] "ERCC-00170" "ERCC-00171"
```

从列名字中提取`metadata`信息:  

```R
cellIDs <- colnames(dat)
cell_info <- strsplit(cellIDs, "\\.")
Well <- unlist(lapply(cell_info, function(x){x[1]}))
Plate <- unlist(lapply(cell_info, function(x){x[2]}))
Mouse <- unlist(lapply(cell_info, function(x){x[3]}))
```

检测每种`metadata`类型的数据分布：  

```R
summary(factor(Mouse))
```

```
3_10_M 3_11_M 3_38_F 3_39_F  3_8_M  3_9_M
   104    196    237    169     82     77
```

查看有没有技术因子是`cofounded`，实验批次与供体小鼠批次一致:  

```R
table(Mouse, Plate)
```

```
        Plate
Mouse    B001717 B002775 MAA000545 MAA000752 MAA000801 MAA000922
  3_10_M       0       0         0       104         0         0
  3_11_M       0       0         0         0       196         0
  3_38_F     237       0         0         0         0         0
  3_39_F       0     169         0         0         0         0
  3_8_M        0       0        82         0         0         0
  3_9_M        0       0         0         0         0        77
```

最后读入计算预测的细胞类型注释，并与表达矩阵中的细胞注释做比较:  

```R
ann <- read.table("FACS_annotations.csv", sep=",", header=TRUE)
ann <- ann[match(cellIDs, ann[,1]),]
celltype <- ann[,3]
table(celltype)
```

## 构建scater对象  

为了构建`SingleCellExperiment`对象，先把所有的细胞注释放到一个数据框中。因为实验批次(`pcr plate`)和供体小鼠完全重合，所以只保留一个信息。  

```R
suppressMessages(require("SingleCellExperiment"))
suppressMessages(require("scater"))
cell_anns <- data.frame(mouse = Mouse, well=Well, type=celltype)
rownames(cell_anns) <- colnames(dat)
sceset <- SingleCellExperiment(assays = list(counts = as.matrix(dat)), colData=cell_anns)
str(sceset)
```

如果数据集包含`spike-ins`，我们在`SingleCellExperiment`对象中定义一个变量记录它们。  

```R
isSpike(sceset, "ERCC") <- grepl("ERCC-", rownames(sceset))
str(sceset)
```

## 读入10X的数据  

因为`10X`技术细胞通量高但测序覆盖度低，所以其count matrix是一个大的稀疏矩阵(矩阵中高达90%的数据的数值为0)。CellRanger默认的输出格式是`.mtx`文件用于存储这个稀疏矩阵，第一列是基因的坐标（0-based），第二列是细胞的坐标（0-based），第三列是大于0的表达值 (*长表格形式*)。 打开`.mtx`文件会看到两行标题行后面是包含总行数 (*基因数*)、列数 (*样本数*)和稀疏矩阵总行数 (*所有细胞中表达不为0的基因的总和*)的一行数据。  

鉴于`.mtx`文件中只存储了基因和样品名字的坐标，而实际的基因和样品的名字必须单独存储到文件`genes.tsv`和`barcodes.tsv`。  

下面使用`Matrix`包读入稀疏矩阵：  

```R
suppressMessages(require("Matrix"))
cellbarcodes <- read.table("droplet/Kidney-10X_P4_5/barcodes.tsv")
genenames <- read.table("droplet/Kidney-10X_P4_5/genes.tsv")
molecules <- Matrix::readMM("droplet/Kidney-10X_P4_5/matrix.mtx")
```

下一步增加合适的行或列的名字。首先查看read的`cellbarcode`信息会发现这个文件只有`barcode`序列。考虑到`10X`数据每一批的`cellbarcode`是有重叠的，所以在合并数据前，需要把批次信息与barcode信息合并一起。  

```R
head(cellbarcodes)
rownames(molecules) <- genenames[,1]
colnames(molecules) <- paste("10X_P4_5", cellbarcodes[,1], sep="_")
```

读入计算注释的细胞类型信息:  

```R
meta <- read.delim("droplet_metadata.csv", sep=",", header=TRUE)
head(meta)
```

```
   channel mouse.id  tissue   subtissue mouse.sex
1 10X_P4_0    3-M-8  Tongue        <NA>         M
2 10X_P4_1    3-M-9  Tongue        <NA>         M
3 10X_P4_2  3-M-8/9   Liver hepatocytes         M
4 10X_P4_3    3-M-8 Bladder        <NA>         M
5 10X_P4_4    3-M-9 Bladder        <NA>         M
6 10X_P4_5    3-M-8  Kidney        <NA>         M
```

我们需要用`10X_P4_5`获得这批数据对应的`metadata`信息。这时需要注意`metadata`表格中`mouse ID`与前面`plate-based (FACS SmartSeq2)`数据集的`mouse ID`不同，这里用`-`而非`_`作为分隔符，并且性别在中间。通过查阅文献中的描述得知`droplet (10X)`和`plate-based (FACS SmartSeq2)`的技术用了同样的8只老鼠。所以对数据做下修正，使得`10X`与`FACS`的数据一致。  

```R
meta[meta$channel == "10X_P4_5",]
mouseID <- "3_8_M"
```

***注意***：有些组织的`10X`数据可能来源于多个小鼠的样品，如`mouse id = 3-M-5/6`。也需要格式化这些信息，但可能这些与`FACS`数据的`mouse id`会不一致，进而影响下游分析。如果小鼠不是纯系，可能需要通过`exonic-SNP`把细胞和对应的小鼠联系起来。  

```R
ann <- read.delim("droplet_annotation.csv", sep=",", header=TRUE)
head(ann)
```

```r
                       cell  tissue cell_ontology_class                    cell_ontology_term_iri cell_ontology_id
1 10X_P4_3_AAAGTAGAGATGCCAG Bladder    mesenchymal cell http://purl.obolibrary.org/obo/CL_0008019       CL:0008019
2 10X_P4_3_AACCGCGTCCAACCAA Bladder    mesenchymal cell http://purl.obolibrary.org/obo/CL_0008019       CL:0008019
3 10X_P4_3_AACTCCCGTCGGGTCT Bladder    mesenchymal cell http://purl.obolibrary.org/obo/CL_0008019       CL:0008019
4 10X_P4_3_AACTCTTAGTTGCAGG Bladder        bladder cell http://purl.obolibrary.org/obo/CL_1001319       CL:1001319
5 10X_P4_3_AACTCTTTCATAACCG Bladder    mesenchymal cell http://purl.obolibrary.org/obo/CL_0008019       CL:0008019
6 10X_P4_3_AAGACCTAGATCCGAG Bladder    endothelial cell http://purl.obolibrary.org/obo/CL_0000115       CL:0000115
```

注释中的`cellID`和`cellbarcodes`也存在细微差别，少了最后的`-1`，在匹配前需要做下校正。  

```r
ann[,1] <- paste(ann[,1], "-1", sep="")
ann_subset <- ann[match(colnames(molecules), ann[,1]),]
celltype <- ann_subset[,3]
```

构建`cell-metadata`数据框:  

```R
cell_anns <- data.frame(mouse = rep(mouseID, times=ncol(molecules)), type=celltype)
rownames(cell_anns) <- colnames(molecules)
head(cell_anns)
```

```r
                            mouse                        type
10X_P4_5_AAACCTGAGATGCCAG-1 3_8_M                   leukocyte
10X_P4_5_AAACCTGAGTGTCCAT-1 3_8_M            fenestrated cell
10X_P4_5_AAACCTGCAAGGCTCC-1 3_8_M          smooth muscle cell
10X_P4_5_AAACCTGTCCTTGCCA-1 3_8_M          kidney tubule cell
10X_P4_5_AAACGGGAGCTGAACG-1 3_8_M kidney collecting duct cell
10X_P4_5_AAACGGGCAGGACCCT-1 3_8_M          kidney tubule cell
```

## 创建`scater`对象  

现在读入了多个批次的`10X`数据，把它们组合成一个`SingleCellExperiment object`对象。首先检查不同批次数据的基因名字是否一致:  

```R
identical(rownames(molecules1), rownames(molecules2))
identical(rownames(molecules1), rownames(molecules3))
```

确认没有重复的细胞ID:  

```R
sum(colnames(molecules1) %in% colnames(molecules2))
sum(colnames(molecules1) %in% colnames(molecules3))
sum(colnames(molecules2) %in% colnames(molecules3))
```

检查无误，把它们组合起来:  

```R
# 获得大的表达矩阵
all_molecules <- cbind(molecules1, molecules2, molecules3)
# 获得大的数据矩阵
all_cell_anns <- as.data.frame(rbind(cell_anns1, cell_anns2, cell_anns3))
# 增加批次信息
all_cell_anns$batch <- rep(c("10X_P4_5", "10X_P4_6","10X_P7_5"), times = c(nrow(cell_anns1), nrow(cell_anns2), nrow(cell_anns3)))
```

