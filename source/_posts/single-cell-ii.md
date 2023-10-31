---
title: Orchestrating Single-Cell Analysis (一)
date: 2020-08-10
categories:
  - NGS
  - SingleCell
tags:
  - SingleCell
---

单细胞数据结构  

<!--more-->  




## 背景

在单细胞分析当中，最为基础重要的是单细胞特有的数据结构，用户应该能够使用不同的封装R包来分析他们的数据，而不需要格式之间转换。`SingleCellExperiment`是最为重要的数据类型。  

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/single-cell-ii/SingleCellExperiment.png)  

图中最核心的部分，是蓝色的data部分；另外还有绿色的基因注释信息`feature metadata`、橙色的细胞注释信息`cell metadata`。除了这三大件，还会包含一些下游分析结果，比如PCA、tSNE降维结果就会保存在紫色的`Dimension Reductions`  

这个`SingleCellExperiment`对象来自`SingleCellExperiment`R包，现在Bioconductor上的70多个单细胞相关的R包都使用了这个对象，**可以说是单细胞领域的通用货币**。  

## 原始实验数据存储  

### Filling the `assays` slot  

**创建一个`SingleCellExperiment`对象很容易，只需要一个`assays`就可以了**。这是一个列表，其中包含了许多表达数据，例如原始数据count或者其他标准化处理过的数据，行是基因，列是样本  

可以构建一个10个基因，3个细胞的矩阵  


```r
counts_matrix <- data.frame(cell_1 = rpois(10, 10), 
                    cell_2 = rpois(10, 10), 
                    cell_3 = rpois(10, 30))
rownames(counts_matrix) <- paste0("gene_", 1:10)
counts_matrix <- as.matrix(counts_matrix) # must be a matrix object!
```

有了这个，就可以用一个list构建出SingleCellExperiment对象。当然，这个**list中可以包括任意个矩阵**  


```r
sce <- SingleCellExperiment(assays = list(counts = counts_matrix))
sce
```

```
## class: SingleCellExperiment 
## dim: 10 3 
## metadata(0):
## assays(1): counts
## rownames(10): gene_1 gene_2 ... gene_9 gene_10
## rowData names(0):
## colnames(3): cell_1 cell_2 cell_3
## colData names(0):
## reducedDimNames(0):
## altExpNames(0):
```

为了得到这个对象中的矩阵，可以用两种方式获得：  

- `assay(sce, "counts")`：这个方法是最通用的办法，而且其中的counts可以换成其他的名称，只要是出现在之前的list中都可以
- `counts(sce)`：它实现的东西和上面一样，只不过这个方法只适合提取`counts`这个名称的矩阵


```r
counts(sce)
```

```
##         cell_1 cell_2 cell_3
## gene_1      10     10     27
## gene_2       6      9     41
## gene_3       9      9     22
## gene_4       5     14     31
## gene_5      13      9     32
## gene_6       7     14     30
## gene_7       8      5     35
## gene_8       8      6     41
## gene_9      12     10     27
## gene_10      9     11     25
```

### Adding more `assays`    

> 使用`assays`非常强大的是我们可以对他进行各种扩展，这对于存储原始的计数矩阵以及数据的标准化版本特别有用。  

之前`assays`中只有原始表达矩阵，其实还能根据它扩展到归一化矩阵，例如使用`scater`R包的函数对包装的矩阵进行操作：  


```r
sce <- scran::computeSumFactors(sce)
sce <- scater::logNormCounts(sce)
sce
```

```
## class: SingleCellExperiment 
## dim: 10 3 
## metadata(0):
## assays(2): counts logcounts
## rownames(10): gene_1 gene_2 ... gene_9 gene_10
## rowData names(0):
## colnames(3): cell_1 cell_2 cell_3
## colData names(1): sizeFactor
## reducedDimNames(0):
## altExpNames(0):
```

这样，`assays` 就从一个存储原始矩阵的`counts` ，又扩增了归一化矩阵的`logcounts`。同理，这个`logcounts`也是能有两种提取方法：  


```r
logcounts(sce)
```

```
##           cell_1   cell_2   cell_3
## gene_1  4.319439 4.170751 3.937792
## gene_2  3.629859 4.027621 4.507948
## gene_3  4.175442 4.027621 3.663575
## gene_4  3.389947 4.633108 4.124903
## gene_5  4.681178 4.027621 4.168120
## gene_6  3.835506 4.633108 4.080351
## gene_7  4.015463 3.248710 4.290508
## gene_8  4.015463 3.486223 4.507948
## gene_9  4.570379 4.170751 3.937792
## gene_10 4.175442 4.300954 3.834273
```

```r
# assay(sce, "logcounts")
```

除了使用R包进行扩展之外，同样可以根据自己的想法，去根据原始矩阵得到一个新的对象，并储存在`assay`里边  


```r
counts_100 <- counts(sce) + 100
assay(sce, "counts_100") <- counts_100 # assign a new entry to assays slot
assays(sce) # new assay has now been added.
```

```
## List of length 3
## names(3): counts logcounts counts_100
```

> 新增用的是`assay`单数，查看结果用的是`assays`复数  

**`assays`可以包含多个矩阵；构建sce对象可以一次一次加入新的矩阵，也可以用列表的形式，一次加入多个矩阵。**这与最开始的图形表示内容是相同的  

## Handling metadata   

### On the columns  

为了进一步注释我们的`SingleCellExperiment`对象，那么我们需要添加注释信息来描述我们的数据，这部分来介绍列的注释，针对的就是实验样本、细胞。这部分信息将会保存在`colData`中，它的主体是样本，于是将行名设定为样本，列名设为注释信息（如：批次、作者等等），对应上面图中的橙色部分。  

先添加一个细胞的注释信息：  


```r
cell_metadata <- data.frame(batch = c(1, 1, 2))
rownames(cell_metadata) <- paste0("cell_", 1:3)
```

有两种方法可以添加到`SingleCellExperiment`对象中：一种是**直接构建**，一种是**后续添加**   

+ 直接构建：  

  
  ```r
  sce <- SingleCellExperiment(assays = list(counts = counts_matrix),
      colData = cell_metadata)
  ```

   

+ 后续添加：  

  
  ```r
  colData(sce) <- DataFrame(cell_metadata)
  ```


```r
sce
```

```
## class: SingleCellExperiment 
## dim: 10 3 
## metadata(0):
## assays(1): counts
## rownames(10): gene_1 gene_2 ... gene_9 gene_10
## rowData names(0):
## colnames(3): cell_1 cell_2 cell_3
## colData names(1): batch
## reducedDimNames(0):
## altExpNames(0):
```

可以看到`colData`增加了之前设置的`batch`信息  

同样有两种方式获取这个注释信息  


```r
colData(sce)
```

```
## DataFrame with 3 rows and 1 column
##            batch
##        <numeric>
## cell_1         1
## cell_2         1
## cell_3         2
```

```r
sce$batch
```

```
## [1] 1 1 2
```

有一些函数可以帮助我们自动计算这些注释信息并添加到元数据当中，例如`scater`包的`calculateQCMetrics()`就会帮你计算几十项细胞的质量信息，结果依然是使用`colData`调用注释结果信息  


```r
sce <- scater::addPerCellQC(sce)
colData(sce)[, 1:5]
```

```
## DataFrame with 3 rows and 5 columns
##            batch       sum  detected percent_top_50 percent_top_100
##        <numeric> <integer> <integer>      <numeric>       <numeric>
## cell_1         1        87        10            100             100
## cell_2         1        97        10            100             100
## cell_3         2       311        10            100             100
```

或者，我们可能想要手动添加更多的字段到元数据当中:  


```r
sce$more_stuff <- runif(ncol(sce))
colnames(colData(sce))
```

```
## [1] "batch"           "sum"             "detected"        "percent_top_50"  "percent_top_100"
## [6] "percent_top_200" "percent_top_500" "total"           "more_stuff"
```

既然`colData`可以包含这么多的注释信息，那么怎么从中选取一部分呢？  

colData的一个常用操作就是取子集，看下面操作：  

例如想从colData中选择批次信息，和数据框取子集是类似的  


```r
sce$batch
# 或者colData(sce)$batch
```

```
## [1] 1 1 2
```

然后如果再想取批次中属于第一个批次的信息，就可以继续按照数据框的思路取子集  


```r
sce[, sce$batch == 1]
```

```
## class: SingleCellExperiment 
## dim: 10 2 
## metadata(0):
## assays(1): counts
## rownames(10): gene_1 gene_2 ... gene_9 gene_10
## rowData names(0):
## colnames(2): cell_1 cell_2
## colData names(9): batch sum ... total more_stuff
## reducedDimNames(0):
## altExpNames(0):
```

### On the rows  

既然样本有注释信息，那么同样的，基因也有自己的注释，它就存放在`rowData`或者`rowRanges`中，这两个的区别就是：  

+ `rowData`：是一个数据框的结构，它就存储了核心`assays`矩阵的基因相关信息  

  
  ```r
  sce <- scater::addPerFeatureQC(sce)
  rowData(sce)
  ```
  
  ```
  ## DataFrame with 10 rows and 2 columns
  ##              mean  detected
  ##         <numeric> <numeric>
  ## gene_1    15.6667       100
  ## gene_2    18.6667       100
  ## gene_3    13.3333       100
  ## gene_4    16.6667       100
  ## gene_5    18.0000       100
  ## gene_6    17.0000       100
  ## gene_7    16.0000       100
  ## gene_8    18.3333       100
  ## gene_9    16.3333       100
  ## gene_10   15.0000       100
  ```

  

+ `rowRanges`：也是基因相关，但是它是GRange对象，存储了基因坐标信息，例如染色体信息、起始终点坐标  

  
  ```r
  rowRanges(sce) # empty
  ```
  
  ```
  ## GRangesList object of length 10:
  ## $gene_1
  ## GRanges object with 0 ranges and 0 metadata columns:
  ##    seqnames    ranges strand
  ##       <Rle> <IRanges>  <Rle>
  ##   -------
  ##   seqinfo: no sequences
  ## 
  ## $gene_2
  ## GRanges object with 0 ranges and 0 metadata columns:
  ##    seqnames    ranges strand
  ##       <Rle> <IRanges>  <Rle>
  ##   -------
  ##   seqinfo: no sequences
  ## 
  ## $gene_3
  ## GRanges object with 0 ranges and 0 metadata columns:
  ##    seqnames    ranges strand
  ##       <Rle> <IRanges>  <Rle>
  ##   -------
  ##   seqinfo: no sequences
  ## 
  ## ...
  ## <7 more elements>
  ```

同样类似于数据框，可以按位置、名称取子集：  


```r
sce[c("gene_1", "gene_4"), ]
```

```
## class: SingleCellExperiment 
## dim: 2 3 
## metadata(0):
## assays(1): counts
## rownames(2): gene_1 gene_4
## rowData names(2): mean detected
## colnames(3): cell_1 cell_2 cell_3
## colData names(9): batch sum ... total more_stuff
## reducedDimNames(0):
## altExpNames(0):
```

### Other metadata  

#### `metadata` 信息  

除了以上介绍的，还有一些重要的元数据信息需要储存，这些可以用`metadata`来表示  


```r
my_genes <- c("gene_1", "gene_5")
metadata(sce) <- list(favorite_genes = my_genes)
metadata(sce)
```

```
## $favorite_genes
## [1] "gene_1" "gene_5"
```

我们可以用`$`对其进行扩展  


```r
your_genes <- c("gene_4", "gene_8")
metadata(sce)$your_genes <- your_genes
metadata(sce)
```

```
## $favorite_genes
## [1] "gene_1" "gene_5"
## 
## $your_genes
## [1] "gene_4" "gene_8"
```

#### 对样本进行归一化：`sizeFactors`  

这里面装了根据样本文库计算的文库大小因子，是一个数值型向量，用于后面的归一化  


```r
sce <- scran::computeSumFactors(sce)
sizeFactors(sce)
```

```
## [1] 0.5272727 0.5878788 1.8848485
```


```r
# 手动添加
sizeFactors(sce) <- scater::librarySizeFactors(sce)
sizeFactors(sce)
```

```
##    cell_1    cell_2    cell_3 
## 0.5272727 0.5878788 1.8848485
```

前面提到的：`assays` (primary data), `colData` (sample metadata),`rowData`/`rowRanges` (feature metadata), and `sizeFactors` 。其实这其中前三个都来自于`SummarizedExperiment`这个对象。还有一些基于`SummarizedExperiment`计算得到的信息同样可以一起储存在`SummarizedExperiment`对象当中。  

#### 降维结果：`reducedDims`  

存储了原始矩阵的降维结果，可以通过PCA、tSNE、UMAP等得到，它是一个数值型矩阵的list，行名是原来矩阵的列名（就是细胞、样本），它的列就是各种维度信息  

它和`assays`一样，也可以包含许多降维的结果，例如用`scater`包计算PCA：  


```r
sce <- scater::logNormCounts(sce)
sce <- scater::runPCA(sce)
```

```
## Warning in check_numbers(k = k, nu = nu, nv = nv, limit = min(dim(x)) - : more singular
## values/vectors requested than available
```

```
## Warning in (function (A, nv = 5, nu = nv, maxit = 1000, work = nv + 7, reorth = TRUE, : You're
## computing too large a percentage of total singular values, use a standard svd instead.
```

```r
reducedDim(sce, "PCA")
```

```
##              PC1        PC2
## cell_1 -0.792842 -0.6994112
## cell_2  1.113535 -0.2302468
## cell_3 -0.320693  0.9296580
## attr(,"percentVar")
## [1] 58.36254 41.63746
## attr(,"rotation")
##                   PC1         PC2
## gene_4   0.5826349629  0.28228727
## gene_7  -0.4778380724  0.30732611
## gene_8  -0.3790515744  0.41216988
## gene_2   0.0818326382  0.51529505
## gene_6   0.4106910258  0.03126769
## gene_5  -0.2856972185 -0.23213641
## gene_9  -0.1228230993 -0.35271423
## gene_3  -0.0002291474 -0.31414168
## gene_10  0.1263935133 -0.24605811
## gene_1  -0.0219019212 -0.22792469
```

除了PCA，tSNE的结果也是存储在这里：  


```r
sce <- scater::runTSNE(sce, perplexity = 0.1)
```

```
## Perplexity should be lower than K!
```

```r
reducedDim(sce, "TSNE")
```

```
##             [,1]       [,2]
## cell_1  2121.516 -5285.0599
## cell_2  3516.243  4479.8174
## cell_3 -5637.759   805.2426
```

查看下全部的结果都包含什么：


```r
reducedDims(sce)
```

```
## List of length 2
## names(2): PCA TSNE
```

**调取方法也十分类似**：`assay`，数据矩阵存储在`assays`，而调用是`assay`；这里的降维结果存储在`reducedDims`，调用是`reducedDim`  

同样的这些信息可以通过其他包计算后直接添加到对象中  


```r
u <- uwot::umap(t(logcounts(sce)), n_neighbors = 2)
reducedDim(sce, "UMAP_uwot") <- u
reducedDims(sce)
```

```
## List of length 3
## names(3): PCA TSNE UMAP_uwot
```

#### 对列添加label  

使用`colLabels()` ，尤其在非监督聚类过程中对细胞添加label，进行分组  


```r
colLabels(sce) <- LETTERS[1:3]
colLabels(sce)
```

```
## [1] "A" "B" "C"
```

例如`scran::findMarkers`就是通过`colLabels()`来提取细胞信息的

--------------------------------------------

#### Reference  

[Orchestrating Single-Cell Analysis with Bioconductor](https://osca.bioconductor.org/)  
