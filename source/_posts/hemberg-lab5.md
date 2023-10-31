---
title: Hemberg-lab单细胞转录组数据分析（五）
date: 2020-09-28 20:35:14
categories:
  - NGS 
  - SingleCell
tags: 
  - Hemberg-lab
  - SingleCell
---

## 数据可视化  

我们继续使用上一步生成的`Tung`数据集。我们将探索不同的数据可视化方式来让你意识到质控后发生了什么。`scater`包提供了几个有用的简化可视化的函数。  

scRNA-seq分析的一个重要方面是控制`批次效应`。批次效应是实验过程中引入的技术偏差。例如两个不同实验室准备的样品或同一实验室不同时间准备的样品，同时或同地准备的样品相似度更高。最差的情况，批次效应引入的差异可能大于生物本身的偏差，进而获得错误结果。因为样品处理过程记录详细，所以`Tung`数据集将允许我们探索这一现象。理想上，如果同一个体来源的细胞聚在一起，分组的数目与个体是对应的，就说明存在批次效应。  

```R
library(SingleCellExperiment)
library(scater)
options(stringsAsFactors = FALSE)
umi <- readRDS("data/tung/umi.rds")
umi.qc <- umi[rowData(umi)$use, colData(umi)$use]
endog_genes <- !rowData(umi.qc)$is_feature_control
```

### PCA分析  

查看数据整体分布的最简单方式是[PCA主成分分析](https://mp.weixin.qq.com/s?__biz=MzI5MTcwNjA4NQ==&mid=2247484036&idx=1&sn=22ee356d0c9680d56dada1b777985ed2&scene=21#wechat_redirect),在其前两个主成分轴查看数据的分布。  

主成分分析 (PCA)是一种数学降维方法, 利用正交变换 (orthogonal transformation)把一系列可能线性相关的变量转换为一组线性不相关的新变量，也称为主成分，从而利用新变量在更小的维度下展示数据的特征。  

PCA分析不是简单地选取2个或3个变化最大的基因，而是先把原始的变量做一个评估，计算各个变量各自的变异度(方差)和两两变量的相关度（协方差），得到一个协方差矩阵。在这个协方差矩阵中，对角线的值为每一个变量的方差，其它值为每两个变量的协方差。随后对原变量的协方差矩阵对角化处理，即求解其特征值和特征向量。原变量与特征向量的乘积（对原始变量的线性组合）即为新变量（回顾下线性代数中的矩阵乘法）；新变量的协方差矩阵为对角协方差矩阵且对角线上的方差由大到小排列；然后从新变量中选择信息最丰富也就是方差最大的的前2个或前3个新变量也就是主成分用以可视化。  

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab5/pca.png)  

#### QC前  

不进行log转换:  

```R
umi_endog <- runPCA(umi_endog, exprs_values = "counts")
scater::plotPCA(
    umi_endog,
    by_exprs_values = "counts",
    colour_by = "batch",
    size_by = "total_features_by_counts",
    shape_by = "individual"
)
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab5/expr-overview-pca-before-qc1-1.png)  

log转化后  

```R
tmp <- runPCA(
  umi[endog_genes, ],
  exprs_values = "logcounts_raw"
)
plotPCA(
    tmp,
    colour_by = "batch",
    size_by = "total_features_by_counts",
    shape_by = "individual"
)
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab5/expr-overview-pca-before-qc2-1.png)  

从图中可以看出，`log`转换更适合我们的数据，降低了第一主成分的变化，数据点的分布散开了些。对数转换可以使表达值更符合正态分布，在后续的分析中，我们都是使用对数转换后的数据。  

**请注意,只是对数转换不足以屏蔽掉细胞之间不同的技术因子如测序深度带来的差异。因此实际分析时不要使用`logcounts_raw`,至少使用`SingleCellExperiment`对象中`logcounts`通道的值，这是CPM标准化后的log转换的值。**  

#### QC后  

```R
tmp <- runPCA(
  umi.qc[endog_genes, ],
  exprs_values = "logcounts_raw"
)
plotPCA(
    tmp,
    colour_by = "batch",
    size_by = "total_features_by_counts",
    shape_by = "individual"
)
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab5/expr-overview-pca-after-qc-1.png)   

比较发现质控后`NA19098.r2`细胞不再成为离群组.  

默认，`runPCA`函数只用了前500个在细胞之间表达变化最大的基因做PCA分析。可以通过参数`ntop`进行修改。  

### tSNE聚类  

scRNA-seq中另一个常用的可视化方法是`tSNE`。tSNE (t-Distributed Stochastic Neighbor Embedding) 通过组合降维（如PCA）和最近邻网络随机行走算法在保留细胞的局部距离的基础上实现高维数据（14000维基因表达）到二维空间的映射。与PCA不同，`tSNE`算法有随机性，每次运行结果都会不同。因为它的非线性和随机性特征，`tSNE`结果难以直观解释。为了保证重复性，我们固定一个随机数种子使得每次结果都一致。  

PCA线性降维算法在集中将不相似的数据点放置在较低维度区域时，尽可能多的保留原始数据的差异，因此导致小部分数据点相距甚远，大部分数据重叠放置。tSNE把点的高维空间的`距离`转换成点的`相似度的概率`，维持高维空间和低维空间中一对点之间的`条件概率差值总和最小`。同时使用`t-分布的长尾性解决高维数据映射到低维时的重叠问题`。t-SNE算法定义了数据的局部和全局结构之间的软边界，既可以使点在局部分散，又在全局聚集，同时照顾近距离和远距离的点。其性能优于任何非线性降维算法。  

#### QC前TSNE  

```R
set.seed(123456)
tmp <- runTSNE(
    umi[endog_genes, ],
    exprs_values = "logcounts_raw",
    perplexity = 130
)
plotTSNE(
    tmp,
    colour_by = "batch",
    size_by = "total_features_by_counts",
    shape_by = "individual"
)
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab5/expr-overview-tsne-before-qc-1.png)   

#### QC后TSNE  

```R
set.seed(123456)
tmp <- runTSNE(
    umi.qc[endog_genes, ],
    exprs_values = "logcounts_raw",
    perplexity = 130
)
plotTSNE(
    tmp,
    colour_by = "batch",
    size_by = "total_features_by_counts",
    shape_by = "individual"
)
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab5/expr-overview-tsne-after-qc-1.png)  

比较两张图可以发现质控过滤后`NA19098.r2`来源的细胞不再是异常值。

`tSNE`要求提供一个`perplexity`参数用于指定构建最近邻网络的邻居数，这个值越高网络越致密细胞越成团围抱；这个值越小网络会越稀疏使得细胞不同的相似度分组相对分散。`scater`默认的`perplexity`值是细胞总数除以5（不能整除的部分舍去）。  

