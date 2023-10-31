---
title: Hemberg-lab单细胞转录组数据分析（四）
date: 2020-09-28 19:40:47
categories:
  - NGS 
  - SingleCell
tags: 
  - Hemberg-lab
  - SingleCell
---

# UMI表达定量 (UMI)  

## UMI表达定量 (UMI)   

### UMI表达定量简介  

基因定量后会整理成一个行为基因（或转录本）列为细胞的**表达矩阵**。虽然前面做了原始数据质控和测序数据质控移除了一部分从reads数层面就不合格的细胞，还需要进一步根据表达矩阵移除其它类型低质量细胞。如果未能识别并移除低质量细胞会混淆下游分析中的有意义的生物信息。  

鉴于scRNASeq还没有标准方法，后续用到的质控质量值的标准会因为实验方法不同而有很大变化。因此，执行质控时，我们是通过数据集内部比较找到异常细胞，而不是依赖于其它独立的质量标准。因此比较不同的建库方法获得的不同数据集时需要格外注意。  

### Tung数据集  

我们使用芝加哥大学`Yoav Gilad`实验室的3个不同来源的诱导多能性干细胞 (iPSC)的数据集。细胞分选采用`Fluidigm C1`微流控台，同时使用`UMIs`和`ERCC spike in`进行质控为了保证可重复性，数据是2016年3月15生成的原始数据的拷贝，存储于tung文件夹下。  

```R
library(SingleCellExperiment)
library(scater)
options(stringsAsFactors = FALSE)
```

读入数据和注释：  

```R
molecules <- read.table("tung/molecules.txt", sep = "\t")
anno <- read.table("tung/annotation.txt", sep = "\t", header = TRUE)
```

查看读入的数据：  

```R
head(molecules[ , 1:3])
```

```R
##                 NA19098.r1.A01 NA19098.r1.A02 NA19098.r1.A03
## ENSG00000237683              0              0              0
## ENSG00000187634              0              0              0
## ENSG00000188976              3              6              1
## ENSG00000187961              0              0              0
## ENSG00000187583              0              0              0
## ENSG00000187642              0              0              0
```

```R
head(anno)
```

```R
##   individual replicate well      batch      sample_id
## 1    NA19098        r1  A01 NA19098.r1 NA19098.r1.A01
## 2    NA19098        r1  A02 NA19098.r1 NA19098.r1.A02
## 3    NA19098        r1  A03 NA19098.r1 NA19098.r1.A03
## 4    NA19098        r1  A04 NA19098.r1 NA19098.r1.A04
## 5    NA19098        r1  A05 NA19098.r1 NA19098.r1.A05
## 6    NA19098        r1  A06 NA19098.r1 NA19098.r1.A06
```

数据包含 3个个体，3次重复和9个批次。

通过使用`SingleCellExperiment` (SCE) 和`scater`包标准化分析过程。首先构建`SCE`对象:  

```R
umi <- SingleCellExperiment(
    assays = list(counts = as.matrix(molecules)), 
    colData = anno
)
```

移除不在任何细胞表达的基因:  

```R
keep_feature <- rowSums(counts(umi) > 0) > 0
umi <- umi[keep_feature, ]
```

定义对照特征基因集：`ERCC spike-ins`和线粒体基因  

```R
isSpike(umi, "ERCC") <- grepl("^ERCC-", rownames(umi))
isSpike(umi, "MT") <- rownames(umi) %in% 
    c("ENSG00000198899", "ENSG00000198727", "ENSG00000198888",
    "ENSG00000198886", "ENSG00000212907", "ENSG00000198786",
    "ENSG00000198695", "ENSG00000198712", "ENSG00000198804",
    "ENSG00000198763", "ENSG00000228253", "ENSG00000198938",
    "ENSG00000198840")
```

计算质量矩阵:  

```R
umi <- calculateQCMetrics(
    umi,
    feature_controls = list(
        ERCC = isSpike(umi, "ERCC"), 
        MT = isSpike(umi, "MT")
    )
)
```

`SingleCellExperiment`对象结构。`str` (structure)是一个很好的工具，可以用来查看数据的结构组成。  

如下面的展示`SingleCellExperiment`有10个数据槽 (`slots`)，使用`@`索引。比如想获得降维后的结果，使用`umi@reduceDims`，使用`umi@colData`可以获取质控信息，都有哪些质控变量，进一步的使用`umi@colData@listData$total_features_by_counts`可以获得每个细胞的基因数。`umi@rowRanges@elementMetadata@listData`基因的属性信息。  

```R
head(umi@assays$data@listData$counts)[,1:3]
```

```R
##                 NA19098.r1.A01 NA19098.r1.A02 NA19098.r1.A03
## ENSG00000237683              0              0              0
## ENSG00000187634              0              0              0
## ENSG00000188976              3              6              1
## ENSG00000187961              0              0              0
## ENSG00000187583              0              0              0
## ENSG00000187642              0              0              0
```

```R
str(umi)
```

```R
## Formal class 'SingleCellExperiment' [package "SingleCellExperiment"] with 10 slots##   ..@ int_elementMetadata:Formal class 'DataFrame' [package "S4Vectors"] with 6 slots
##   .. .. ..@ rownames       : NULL
##   .. .. ..@ nrows          : int 18726
##   .. .. ..@ listData       :List of 3
##   .. .. .. ..$ is_spike_ERCC: logi [1:18726] FALSE FALSE FALSE FALSE FALSE FALSE ...
##   .. .. .. ..$ is_spike     : logi [1:18726] FALSE FALSE FALSE FALSE FALSE FALSE ...
##   .. .. .. ..$ is_spike_MT  : logi [1:18726] FALSE FALSE FALSE FALSE FALSE FALSE ...
##   .. .. ..@ elementType    : chr "ANY"
##   .. .. ..@ elementMetadata: NULL
##   .. .. ..@ metadata       : list()
##   ..@ int_colData        :Formal class 'DataFrame' [package "S4Vectors"] with 6 slots
##   .. .. ..@ rownames       : NULL
##   .. .. ..@ nrows          : int 864
##   .. .. ..@ listData       : Named list()
##   .. .. ..@ elementType    : chr "ANY"
##   .. .. ..@ elementMetadata: NULL
##   .. .. ..@ metadata       : list()
##   ..@ int_metadata       :List of 3
##   .. ..$ version          :Classes 'package_version', 'numeric_version'  hidden list of 1
##   .. .. ..$ : int [1:3] 1 4 1
##   .. ..$ spike_names      : chr [1:2] "ERCC" "MT"
##   .. ..$ size_factor_names: chr(0) 
##   ..@ reducedDims        :Formal class 'SimpleList' [package "S4Vectors"] with 4 slots
##   .. .. ..@ listData       : Named list()
##   .. .. ..@ elementType    : chr "ANY"
##   .. .. ..@ elementMetadata: NULL
##   .. .. ..@ metadata       : list()
##   ..@ rowRanges          :Formal class 'CompressedGRangesList' [package "GenomicRanges"] with 5 slots
##   .. .. ..@ unlistData     :Formal class 'GRanges' [package "GenomicRanges"] with 7 slots
##   .. .. .. .. ..@ seqnames       :Formal class 'Rle' [package "S4Vectors"] with 4 slots
##   .. .. .. .. .. .. ..@ values         : Factor w/ 0 levels: 
##   .. .. .. .. .. .. ..@ lengths        : int(0) 
##   .. .. .. .. .. .. ..@ elementMetadata: NULL
##   .. .. .. .. .. .. ..@ metadata       : list()
##   .. .. .. .. ..@ ranges         :Formal class 'IRanges' [package "IRanges"] with 6 slots
##   .. .. .. .. .. .. ..@ start          : int(0) 
##   .. .. .. .. .. .. ..@ width          : int(0) 
##   .. .. .. .. .. .. ..@ NAMES          : NULL
##   .. .. .. .. .. .. ..@ elementType    : chr "ANY"
##   .. .. .. .. .. .. ..@ elementMetadata: NULL
##   .. .. .. .. .. .. ..@ metadata       : list()
##   .. .. .. .. ..@ strand         :Formal class 'Rle' [package "S4Vectors"] with 4 slots
##   .. .. .. .. .. .. ..@ values         : Factor w/ 3 levels "+","-","*": 
##   .. .. .. .. .. .. ..@ lengths        : int(0) 
##   .. .. .. .. .. .. ..@ elementMetadata: NULL
##   .. .. .. .. .. .. ..@ metadata       : list()
##   .. .. .. .. ..@ seqinfo        :Formal class 'Seqinfo' [package "GenomeInfoDb"] with 4 slots
##   .. .. .. .. .. .. ..@ seqnames   : chr(0) 
##   .. .. .. .. .. .. ..@ seqlengths : int(0) 
##   .. .. .. .. .. .. ..@ is_circular: logi(0) 
##   .. .. .. .. .. .. ..@ genome     : chr(0) 
##   .. .. .. .. ..@ elementMetadata:Formal class 'DataFrame' [package "S4Vectors"] with 6 slots
##   .. .. .. .. .. .. ..@ rownames       : NULL
##   .. .. .. .. .. .. ..@ nrows          : int 0
##   .. .. .. .. .. .. ..@ listData       : Named list()
##   .. .. .. .. .. .. ..@ elementType    : chr "ANY"
##   .. .. .. .. .. .. ..@ elementMetadata: NULL
##   .. .. .. .. .. .. ..@ metadata       : list()
##   .. .. .. .. ..@ elementType    : chr "ANY"
##   .. .. .. .. ..@ metadata       : list()
##   .. .. ..@ elementMetadata:Formal class 'DataFrame' [package "S4Vectors"] with 6 slots
##   .. .. .. .. ..@ rownames       : NULL
##   .. .. .. .. ..@ nrows          : int 18726
##   .. .. .. .. ..@ listData       :List of 9
##   .. .. .. .. .. ..$ is_feature_control     : logi [1:18726] FALSE FALSE FALSE FALSE FALSE FALSE ...
##   .. .. .. .. .. ..$ is_feature_control_ERCC: logi [1:18726] FALSE FALSE FALSE FALSE FALSE FALSE ...
##   .. .. .. .. .. ..$ is_feature_control_MT  : logi [1:18726] FALSE FALSE FALSE FALSE FALSE FALSE ...
##   .. .. .. .. .. ..$ mean_counts            : num [1:18726] 0.2824 0.0301 2.6389 0.2384 0.0116 ...
##   .. .. .. .. .. ..$ log10_mean_counts      : num [1:18726] 0.108 0.0129 0.561 0.0929 0.005 ...
##   .. .. .. .. .. ..$ n_cells_by_counts      : int [1:18726] 201 24 728 178 10 11 20 632 798 19 ...
##   .. .. .. .. .. ..$ pct_dropout_by_counts  : num [1:18726] 76.7 97.2 15.7 79.4 98.8 ...
##   .. .. .. .. .. ..$ total_counts           : int [1:18726] 244 26 2280 206 10 11 21 1638 2873 19 ...
##   .. .. .. .. .. ..$ log10_total_counts     : num [1:18726] 2.39 1.43 3.36 2.32 1.04 ...
##   .. .. .. .. ..@ elementType    : chr "ANY"
##   .. .. .. .. ..@ elementMetadata: NULL
##   .. .. .. .. ..@ metadata       : list()
##   .. .. ..@ elementType    : chr "GRanges"
##   .. .. ..@ metadata       : list()
##   .. .. ..@ partitioning   :Formal class 'PartitioningByEnd' [package "IRanges"] with 5 slots
##   .. .. .. .. ..@ end            : int [1:18726] 0 0 0 0 0 0 0 0 0 0 ...
##   .. .. .. .. ..@ NAMES          : chr [1:18726] "ENSG00000237683" "ENSG00000187634" "ENSG00000188976" "ENSG00000187961" ...
##   .. .. .. .. ..@ elementType    : chr "ANY"
##   .. .. .. .. ..@ elementMetadata: NULL
##   .. .. .. .. ..@ metadata       : list()
##   ..@ colData            :Formal class 'DataFrame' [package "S4Vectors"] with 6 slots
##   .. .. ..@ rownames       : chr [1:864] "NA19098.r1.A01" "NA19098.r1.A02" "NA19098.r1.A03" "NA19098.r1.A04" ...
##   .. .. ..@ nrows          : int 864
##   .. .. ..@ listData       :List of 50
##   .. .. .. ..$ individual                                    : chr [1:864] "NA19098" "NA19098" "NA19098" "NA19098" ...
##   .. .. .. ..$ replicate                                     : chr [1:864] "r1" "r1" "r1" "r1" ...
##   .. .. .. ..$ well                                          : chr [1:864] "A01" "A02" "A03" "A04" ...
##   .. .. .. ..$ batch                                         : chr [1:864] "NA19098.r1" "NA19098.r1" "NA19098.r1" "NA19098.r1" ...
##   .. .. .. ..$ sample_id                                     : chr [1:864] "NA19098.r1.A01" "NA19098.r1.A02" "NA19098.r1.A03" "NA19098.r1.A04" ...
##   .. .. .. ..$ is_cell_control                               : logi [1:864] FALSE FALSE FALSE FALSE FALSE FALSE ...
##   .. .. .. ..$ total_features_by_counts                      : int [1:864] 8368 8234 7289 7985 8619 8659 8054 9429 8243 9407 ...
##   .. .. .. ..$ log10_total_features_by_counts                : num [1:864] 3.92 3.92 3.86 3.9 3.94 ...
##   .. .. .. ..$ total_counts                                  : int [1:864] 63322 63976 43630 53922 70887 68051 58069 89082 60053 87489 ...
##   .. .. .. ..$ log10_total_counts                            : num [1:864] 4.8 4.81 4.64 4.73 4.85 ...
##   .. .. .. ..$ pct_counts_in_top_50_features                 : num [1:864] 17.6 16.5 18.2 16.8 16.2 ...
##   .. .. .. ..$ pct_counts_in_top_100_features                : num [1:864] 25.2 24.4 26.1 24.4 24.1 ...
##   .. .. .. ..$ pct_counts_in_top_200_features                : num [1:864] 34.9 34.5 36 34.1 34 ...
##   .. .. .. ..$ pct_counts_in_top_500_features                : num [1:864] 50.2 50.5 51.5 49.8 50 ...
##   .. .. .. ..$ total_features_by_counts_endogenous           : int [1:864] 8324 8190 7248 7942 8573 8616 8009 9384 8201 9361 ...
##   .. .. .. ..$ log10_total_features_by_counts_endogenous     : num [1:864] 3.92 3.91 3.86 3.9 3.93 ...
##   .. .. .. ..$ total_counts_endogenous                       : int [1:864] 57252 58967 39420 49076 65244 63508 53456 83920 56280 82287 ...
##   .. .. .. ..$ log10_total_counts_endogenous                 : num [1:864] 4.76 4.77 4.6 4.69 4.81 ...
##   .. .. .. ..$ pct_counts_endogenous                         : num [1:864] 90.4 92.2 90.4 91 92 ...
##   .. .. .. ..$ pct_counts_in_top_50_features_endogenous      : num [1:864] 12.5 13 13.1 12.3 12.5 ...
##   .. .. .. ..$ pct_counts_in_top_100_features_endogenous     : num [1:864] 20 20.7 21 19.8 20.2 ...
##   .. .. .. ..$ pct_counts_in_top_200_features_endogenous     : num [1:864] 29.8 30.8 31.1 29.5 30.1 ...
##   .. .. .. ..$ pct_counts_in_top_500_features_endogenous     : num [1:864] 45.9 47.3 47.4 45.9 46.7 ...
##   .. .. .. ..$ total_features_by_counts_feature_control      : int [1:864] 44 44 41 43 46 43 45 45 42 46 ...
##   .. .. .. ..$ log10_total_features_by_counts_feature_control: num [1:864] 1.65 1.65 1.62 1.64 1.67 ...
##   .. .. .. ..$ total_counts_feature_control                  : int [1:864] 6070 5009 4210 4846 5643 4543 4613 5162 3773 5202 ...
##   .. .. .. ..$ log10_total_counts_feature_control            : num [1:864] 3.78 3.7 3.62 3.69 3.75 ...
##   .. .. .. ..$ pct_counts_feature_control                    : num [1:864] 9.59 7.83 9.65 8.99 7.96 ...
##   .. .. .. ..$ pct_counts_in_top_50_features_feature_control : num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ pct_counts_in_top_100_features_feature_control: num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ pct_counts_in_top_200_features_feature_control: num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ pct_counts_in_top_500_features_feature_control: num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ total_features_by_counts_ERCC                 : int [1:864] 31 31 28 30 33 30 32 32 29 33 ...
##   .. .. .. ..$ log10_total_features_by_counts_ERCC           : num [1:864] 1.51 1.51 1.46 1.49 1.53 ...
##   .. .. .. ..$ total_counts_ERCC                             : int [1:864] 1187 1277 1121 1240 1262 1308 1203 1217 1217 1339 ...
##   .. .. .. ..$ log10_total_counts_ERCC                       : num [1:864] 3.07 3.11 3.05 3.09 3.1 ...
##   .. .. .. ..$ pct_counts_ERCC                               : num [1:864] 1.87 2 2.57 2.3 1.78 ...
##   .. .. .. ..$ pct_counts_in_top_50_features_ERCC            : num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ pct_counts_in_top_100_features_ERCC           : num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ pct_counts_in_top_200_features_ERCC           : num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ pct_counts_in_top_500_features_ERCC           : num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ total_features_by_counts_MT                   : int [1:864] 13 13 13 13 13 13 13 13 13 13 ...
##   .. .. .. ..$ log10_total_features_by_counts_MT             : num [1:864] 1.15 1.15 1.15 1.15 1.15 ...
##   .. .. .. ..$ total_counts_MT                               : int [1:864] 4883 3732 3089 3606 4381 3235 3410 3945 2556 3863 ...
##   .. .. .. ..$ log10_total_counts_MT                         : num [1:864] 3.69 3.57 3.49 3.56 3.64 ...
##   .. .. .. ..$ pct_counts_MT                                 : num [1:864] 7.71 5.83 7.08 6.69 6.18 ...
##   .. .. .. ..$ pct_counts_in_top_50_features_MT              : num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ pct_counts_in_top_100_features_MT             : num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ pct_counts_in_top_200_features_MT             : num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. .. ..$ pct_counts_in_top_500_features_MT             : num [1:864] 100 100 100 100 100 100 100 100 100 100 ...
##   .. .. ..@ elementType    : chr "ANY"
##   .. .. ..@ elementMetadata: NULL
##   .. .. ..@ metadata       : list()
##   ..@ assays             :Reference class 'ShallowSimpleListAssays' [package "SummarizedExperiment"] with 1 field
##   .. ..$ data: NULL
##   .. ..and 14 methods.
##   ..@ NAMES              : NULL
##   ..@ elementMetadata    :Formal class 'DataFrame' [package "S4Vectors"] with 6 slots
##   .. .. ..@ rownames       : NULL
##   .. .. ..@ nrows          : int 18726
##   .. .. ..@ listData       : Named list()
##   .. .. ..@ elementType    : chr "ANY"
##   .. .. ..@ elementMetadata: NULL
##   .. .. ..@ metadata       : list()
##   ..@ metadata           : list()
```

### 细胞质控  

#### 文库大小  

查看每个样品(细胞）检测到的总分子数 (`UMI count`)或总reads数 (`reads count`)，拥有很少的reads或分子数的样品可能是细胞破损或捕获失败，应该移除。  

```R
hist(umi$total_counts, breaks = 100)
abline(v = 25000, col = "red")
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab4/total-counts-hist-1.png)   

#### 检测到的基因数  

除了确保每个样品的测序深度，也需要保证测序reads在转录本中分布均衡，而不是集中在少数高表达的基因上。每个样品检测到的基因数也是衡量样品质量好坏的一个标准。  

```R
hist(umi$total_features_by_counts, breaks = 100)
abline(v = 7000, col = "red")
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab4/total-features-hist-1.png)

从图中可以看出，大部分细胞能检测到`7,000-10,000`基因，这对高深度`scRNA-seq`是正常的。当然这个受测序深度和实验方法的影响。比如居于`droplet`的方法或样品测序深度低时每个细胞检测到的基因数要少一些，表现在图上是，左侧拖尾严重。如果细胞之间的基因检出率相当，应该符合正态分布。因此选择移除分布尾部的细胞 (本例中是检测出的基因数少于7000的细胞)。  

#### ERCCs和MTs  

另外一个测量细胞质量的方式是比较`ERCC spike-in`测到的reads数与内源转录本测到的reads数的比例，可以衡量捕获到的内源性RNA的总量。如果`spike in`的reads数很高，则表示起始内源性RNA总量低，可能是由于细胞死亡或胁迫诱导的RNA降解导致的，也有可能是细胞体积小。  

```R
plotColData(umi, x = "total_features_by_counts", y = "pct_counts_MT", colour = "batch")
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab4/mt-vs-counts-1.png)  

```R
plotColData(
    umi,
    x = "total_features_by_counts",
    y = "pct_counts_ERCC",
    colour = "batch"
)
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab4/ercc-vs-counts-1.png)   

上图显示来源于`NA19098.r2`批次的细胞有较高的`ERCC/内源RNA`比例。作者在文章中证实这一点，说这个批次的细胞体积小。  

### 细胞过滤  

#### 手动过滤  

基于前面的分析定义一个过滤器，不满足任何一个条件的细胞都过滤掉:  

```R
umi$use <- (
    # sufficient features (genes)
    filter_by_expr_features &
    # sufficient molecules counted
    filter_by_total_counts &
    # sufficient endogenous RNA
    filter_by_ERCC &
    # remove cells with unusual number of reads in MT genes
    filter_by_MT
)
```

```R
table(umi$use)
```

```R
## 
## FALSE  TRUE 
##   207   657
```

#### 自动过滤  

`scater`提供了一个根据质控数据进行PCA分析进而自动挑出异常细胞的方法。默认，下面这些统计量将用于PCA异常细胞检测的分析：  

- **pct_counts_top_100_features**
- **total_features_by_counts**
- **pct_counts_feature_controls**
- **n_detected_feature_controls**
- **log10_counts_endogenous_features**
- **log10_counts_feature_controls**  

`scater`首先生成一个行是细胞，列是细胞中对应的上述质控数据的值，然后使用`mvoutlier`包筛选质控数据与大部分细胞不同的样品定义为低质量细胞。 package on the QC metrics for all cells. This will identify cells that have substantially different QC metrics from the others, possibly corresponding to low-quality cells. We can visualize any outliers using a principal components plot as shown below:  

```R
umi <- runPCA(umi, use_coldata = TRUE, 
              detect_outliers = TRUE)
reducedDimNames(umi)
## [1] "PCA_coldata"
```

鉴定结果存储于`umi`变量的`$outlier`部分，指示细胞是否被判断未异常细胞。自动异常细胞检测是很有意义的，可以作为工厂化大批量模式使用，但特异性的手动检测数据集和根据结果、实验调整过滤是推荐的方式。  

```R
table(umi$outlier)
## 
## FALSE  TRUE 
##   791    73
```

绘制PCA结果展示异常细胞分布：  

```R
plotReducedDim(umi, use_dimred = "PCA_coldata",
               size_by = "total_features_by_counts", shape_by = "use", 
               colour_by="outlier")
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab4/unnamed-chunk-15-1.png)  

#### 手动过滤和自动过滤比较  

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab4/cell-filt-comp-1.png)  

### 基因分析  

#### 基因表达  

除了移除低质量的细胞，也会排除受技术操作影响较大的一部分基因。而且查看基因表达结果，可以帮助改进实验操作。  

通常会看`top 50`表达的基因占据了多少reads。  

```R
plotHighestExprs(umi, exprs_values = "counts")
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab4/top50-gene-expr-1.png)  

表达最高的50个基因的reads分布相对平缓，且比例不大，在一定程度上反应了测序对整个转录组覆盖较好。但是最高表达的15个基因里面有4个`ERCC spikein`，表明下次重复时可以稀释下`spike in`的浓度，把测序的机会更多留给内源性基因。  

#### 基因过滤  

通常建议移除那些表达水平极低以至于可以视为”未检测出”的基因。这里针对UMI数据，“检出”定义为至少有2个细胞检测到某个基因存在多于一个转录本。如果是reads counts数据, “检出”可以定义为至少有2个细胞检测到某个基因有至少5个reads count支持。请注意，对两种表达量计算方式，阈值的选择都与测序深度有关。自己的数据可以做相应的修改。另外一个需要注意的点是基因的过滤必须在细胞过滤后面，因为部分基因可能只在低质量细胞中能检测的到 (注意下面的`colData(umi)$use`过滤).  

```R
keep_feature <- nexprs(umi[,colData(umi)$use], byrow=TRUE, 
                       detection_limit=1) >= 2
rowData(umi)$use <- keep_feature
table(keep_feature)
```

```R
## keep_feature
## FALSE  TRUE 
##  4660 14066
```

细胞类型，建库方案，测序深度都会影响阈值选择，勿硬套。  

### 存储过滤后的数据  

查看过滤后的数据集中保留的基因数和细胞数:   

```R
dim(umi[rowData(umi)$use, colData(umi)$use])
## [1] 14066   657
```

获取对数转换的原始count值，供下一章节使用，并且移除PCA的结果：  

```R
assay(umi, "logcounts_raw") <- log2(counts(umi) + 1)
reducedDim(umi) <- NULL
```

```R
saveRDS(umi, file = "data/tung/umi.rds")
```

