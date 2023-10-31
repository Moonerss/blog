---
title: 蛋白组数据标化和预处理
date: 2023-04-05 15:47:01
categories:
  - Proteomics
tags:
  - Proteomics
password: IandYOU   
abstract: Welcome to my blog, enter password to read. 
message: 试试你的小手,输入密码
---

# 现有初分析平台分析流程

目前现有蛋白质组学和翻译后修饰组数据预处理流程相对比较简单，基本上从搜库结果出来后直接进行样本间的横向均一化（L0G0）或者横纵向均一化后直接用于后续的标准分析，没有缺失值处理，没有批次效应校正等质控和处理过程，不同技术类型的预处理流程如图2（TMT，Label Free和DIA）：  

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/protein_normalize/fig1.png)

1. DIA-spectronaut: 使用Spectronaut软件对DIA的原始谱图数据进行搜库，搜库结果利用R包MSstats进行定量，获得log2的Intensity值，随后对Intensity进行2的幂次处理，获得每个样本的Intensity值。后续基于该Intensity值在不同样本间进行均值均一化，即L0的操作。均一化的结果用于后续标准分析。
2. DIA-DIA-NN：使用DIA-NN软件对DIA数据进行搜库，直接得到单样本的Intensity值，进行样本间均值均一化后用于后续Ratio计算和标准分析。
3. LQ-Maxquant：使用Maxquant软件对Label Free的原始数据进行搜库和定量，一般会有三种Intensity值(Intensity, LFQ and iBAQ)。Intensity值ProteinGroup里面所有unique peptide+razor peptides的Intensity总和，是原始Intensity值；iBAQ是在原始Intensity值基础上除以每个蛋白的理论肽段数，理论是可以进行样本内部进行比较的值；LFQ也是在原始Intensity基础上进行了样本之间的校正，排除样本处理、上样、预分、仪器等造成的样本间误差，样本间比较可以用LFQ。如果利用IBAQ，可能需要利用每个样本的总Intensity做校正。在我们公司的流程中，如果是利用LFQ，则进行样本间的均值校正；若是利用iBAQ值，则同时进行样本间的均值校正（L0）和样本内的中值校正，即L1操作。校正后的相对定量值，用于后续的标准分析。
4. LQ-PD：使用Proteome Discoverer(PD)软件对Label Free的原始数据进行搜库，PD默认使用iBAQ值进行定量，所以我们的标准化处理方式也是先进行样本间的横向均值均一化，然后进行纵向的样本中值均一化。校正后的相对定量值，用于后续的标准分析。
5. TQ-Maxquant：使用Maxquant软件对TMT labeling的原始数据进行搜库，先在peptide层面对所有peptides的Reporter Intensity进行样本间的横向均值归一化，随后再利用样本内的中值进行归一化。随后对Unique肽段进行分组，将同属于一个蛋白的肽段归为一组，将同一个蛋白Group中Unique peptide的中值作为该蛋白的相对定量值，并用于后续的标准分析。
6. TQ-PD：使用Proteome Discoverer(PD)软件对TMT labeling的原始数据进行搜库，也是先在peptide层面对所有peptides的Abundances(Grouped)进行样本间的横向均值归一化，随后再利用样本内的中值进行归一化。随后对Unique肽段进行分组，将同属于一个蛋白的肽段归为一组，将同一个蛋白Group中Unique peptide的中值作为该蛋白的相对定量值，并用于后续的标准分析。

这里，我们只总结从原始Intensity开始，到后续标准分析之前的过程进行总结，其他过程如去除返库和污染库等，这里不再进行赘述。

# 文献汇总处理情况

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/protein_normalize/fig2.png)

我们首先对其中6篇文献的数据预处理流程进行了汇总比较（图3），这些文献均采用Spectronaut软件进行搜库，从Intensity值开始到后续的差异分析，总体上大同小异。均对原始Intensity进行了log2转换，也都进行了NA过滤和填充。不同的是，2篇血液蛋白组的数据没有进行任何横向或者纵向的标准化；3篇组织磷酸化/泛素化组数据做了样本内的纵向中值标准化，另外1篇做了zscore的横向均一化；另外一个不同的点在于NA填充的方法和统计检验的方法不同。

# 缺失值填充  

关于NA值的填充方法，在2022年3月Briefings in Bioinformatics (BIB)上发表了一篇关于蛋白质组数据不同差异表达鉴定方法的测试文章。该文章的结果显示，当蛋白的缺失数量很低（如只有2-3个样本缺失）时，0值填充的效果是最差的，其次是KNN，随后是基于最大似然估计（MLE）填充的方法，基于Perseus软件的正态分布随机值填充的效果相对较好（图4）。而当缺失值数量大于3个样本时，除了0值填充，不同NA填充方法的效果相差不大。因此，对于临床大样本，我们一般利用KNN进行NA填充，基本不会有太大问题，但是对于小样本来说，采用KNN填充，其效果可能会差一些，对后续的差异鉴定结果可能会有影响。  

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/protein_normalize/fig3.png)

# 差异检验

关于差异蛋白或者差异修饰位点的鉴定方法，不同工作采用的统计检验方法不同。T-test从文献调研来看确实是最常见的，但是其准确度怎么样还是有待考究。同样地，在2022年3月Briefings in Bioinformatics (BIB)上发表的那篇工作对不同差异鉴定的方法进行了3套不同测试数据集的比较，发现T-test准确率是最低的，ROTS和基于二代测序数据的EdgeR-LRT、DESeq2-parametric方法的准确率最高（图7）。因此，在他们最后的结论中，对不同数据集推荐了不同的差异鉴定方法。即，一般的蛋白质组学数据采用EdgeR-LRT、DESeq2、ROTS方法进行差异鉴定是最佳的；当样本中的差异蛋白数量不平衡时（上下调差异很大），EdgeR-LRT和EdgeR-QLF最佳；而样本数据集中的差异蛋白数量很少时，不推荐使用T-test进行差异蛋白的鉴定（PMID：35397162）。  

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/protein_normalize/fig4.png)

