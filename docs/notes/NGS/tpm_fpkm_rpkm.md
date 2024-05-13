---
title: TPM、RPKM与FPKM
author: Jeason
icon: mdi:tooltip-text-outline
createTime: 2020/08/10 19:42:05
permalink: /NGS/tpm_fpkm_rpkm/
---
# 背景

在RNA-Seq的分析中，对基因或转录本的read counts数目进行標准化（normalization）是一个极其重要的步骤，因为落在一个基因区域內的read counts数目取决於基因长度和测序深度。一个基因越长，测序深度越高，落在其內部的read counts数目就会相对越多。当我们进行基因差异表达的分析时，往往是在多个样本中比较不同基因的表达量，**如果不进行数据标准化，那么这样的比较结果是没有意义的**。

# 常用丰度计算方法

## Count

+ 定义：高通量测序中比对到参考基因序列上的reads数。可使用featureCount等软件进行计算。
+ 优点：可有效说明该区域是否真的有表达及真实的表达丰度。能够近似呈现真实的表达情况。有利于实验验证。
+ 缺点：由于exon长度不同，难以进行不同exon丰度比较；由于测序总数不同，难以对不同测序样本间进行比较。

## RPM

+ 定义：RPM/CPM: Reads/Counts of exon model per Million mapped reads (每百万映射读取的reads)
+ 计算方法：

  $$
  M=\frac{GeneMappedReads*10^6}{TotalMappedReads}
  $$
+ 优点：利于进行样本间比较。根据比对到基因组上的总reads count，进行标准化。即：不论比对到基因组上的总reads count是多少，都将总reads count标准化为10^6。sRNA_seq等测序长度较短的高通量测序经常采用RPM进行标准化，因为sRNA长度差异较小，18-35 nt较多，所以长度对不同的small RNAs相互比较影响较小 (优点：计算简单、方便。)。
+ 缺点：未消除exon长度造成的表达差异，难以进行样本内exon差异表达的比较。

## RPKM/FPKM

+ 定义：

  **RPKM**: Reads Per Kilobase of exon model per Million mapped reads (每千个碱基的转录每百万映射读取的reads)

  **FPKM**: Fragments Per Kilobase of exon model per Million mapped fragments(每千个碱基的转录每百万映射读取的fragments)
+ 计算方法：

$$
RPKM=\frac{GeneMappedReads*10^9}{TotalMappedReads*GeneLength}
$$

$$
FPKM=\frac{GeneMappedFragments*10^9}{TotalMappedFragments*GeneLength}
$$

+ 优点：tophat-cufflinks流程固定，应用范围广。理论上，可弥补reads Count的缺点，消除样本间和基因间差异

> FPKM与RPKM计算过程类似。只有一点差异：RPKM计算的是reads，FPKM计算的是fragments。single-end/paired-end测序数据均可计算reads count，fragments count只能通过paired-end测序数据计算。paired-end测序数据时，两端的reads比对到相同区域，且方向相反，即计数1个fragments；如果只有单端reads比对到该区域，则一个reads即计数1个fragments。所以fragments count接近且小于2 * reads count

## TPM

+ 定义：TPM: Transcripts Per Kilobase of exon model per Million mapped reads (每千个碱基的转录每百万映射读取的Transcripts)
+ 计算方法：
  $$
  M=\frac{X_i}{L_i}*(\frac{1}{\sum_{j}{\frac{X_j}{L_j}}})*10^6=\frac{\frac{X_i}{L_i}}{\sum_{j}{\frac{X_j}{L_j}}}*10^6
  $$

  ($X_i$代表比对到基因i上的reads数目； $L_i$表示基因i的长度)

# 度量相互转换关系

TPM和FPKM之间的联系

$$
TPM=\frac{X_i}{L_i}*(\frac{1}{\sum_{j}{\frac{X_j}{L_j}}})*10^6=\frac{\frac{X_i}{L_i}}{\sum_{j}{\frac{X_j}{L_j}}}*10^6=(\frac{FPKM_i}{\sum_j{FPKM_j}})*10^6
$$

# RPKM, FPKM, TPM区别

## RPKM表达值标化流程

+ 原始counts

  以下表为例，比较各个指标的特点以及使用场景

  | Gene Name | Sample1 | Sample2 | Sample3 |
  | :-------: | :-----: | :-----: | :-----: |
  |  A (2kb)  |   10   |   12   |   30   |
  |  B (4kb)  |   20   |   25   |   60   |
  |  C (1kb)  |    5    |    8    |   15   |
  | D (10kb) |    0    |    0    |    1    |

  根据观察可以看到：


  1. 样本3的4个基因read counts数目明显多於其他两个样本，説明其测序深度较高
  2. 基因B的长度的基因A的两倍，也使得其read counts在三个样本中都高于A
+ 测序深度标化

  首先对测序深度进行标化,假设以10为单位，先分別计算出每个样本的总reads数，然后將表中数据分別除以总reads数即可，这样就得到了RPM.

  | Gene Name | Sample1 | Sample2 | Sample3 |
  | :-------: | :-----: | :-----: | :-----: |
  |  A (2kb)  |  2.86  |  2.67  |  2.83  |
  |  B (4kb)  |  5.71  |  5.56  |  5.66  |
  |  C (1kb)  |  1.43  |  1.78  |  1.42  |
  | D (10kb) |    0    |    0    |  0.09  |


  > 以A基因为例，在Sample1中RPM值为：$\frac{10}{\frac{(10+20+5+0)}{10}}=2.86$
  >
+ 基因长度标化

  在深度标化之后，我们直接除以基因长度，即可对基因长度标化，得到RPKM值

  | Gene Name | Sample1 | Sample2 | Sample3 |
  | :-------: | :-----: | :-----: | :-----: |
  |  A (2kb)  |  1.43  |  1.33  |  1.42  |
  |  B (4kb)  |  1.43  |  1.39  |  1.42  |
  |  C (1kb)  |  1.43  |  1.78  |  1.42  |
  | D (10kb) |    0    |    0    |  0.009  |

## TPM表达值标化流程

虽然同样是标准化测序深度和基因长度，TPM的不同在于它的处理顺序是不同的。即先考虑基因长度，再是测序深度。过程如下：

+ 基因长度标化

  原始count除以基因长度即可得到，这里的值可以看作是reads per kilobase

  | Gene Name | Sample1 | Sample2 | Sample3 |
  | :-------: | :-----: | :-----: | :-----: |
  |  A (2kb)  |    5    |    6    |   15   |
  |  B (4kb)  |    5    |  6.25  |   15   |
  |  C (1kb)  |    5    |    8    |   15   |
  | D (10kb) |    0    |    0    |   0.1   |
+ 测序深度标化

  用上一步的结果除以每个样本中的read数（假设以10为单位）

  | Gene Name | Sample1 | Sample2 | Sample3 |
  | :-------: | :-----: | :-----: | :-----: |
  |  A (2kb)  |  3.33  |  2.96  |  3.326  |
  |  B (4kb)  |  3.33  |  3.09  |  3.326  |
  |  C (1kb)  |  3.33  |  3.95  |  3.326  |
  | D (10kb) |    0    |    0    |  0.02  |

## TPM和RPKM比较

根据以上我们可以得到每个样本整体的测序情况：

| Gene Name | Sample1 | Sample2 | Sample3 |
| :--------: | :-----: | :-----: | :-----: |
| Total RPKM |  4.29  |   4.5   |  4.25  |
| Total TPM |   10   |   10   |   10   |

通过观察我们可以知道：

+ 每个样本的TPM的总和是相同的，这就意味着TPM数值能体现出比对上某个基因的reads的比例，使得该数值可以直接进行样本间的比较。

# 相互转换代码

```r
countToTpm <- function(counts, effLen)
{
    rate <- log(counts) - log(effLen)
    denom <- log(sum(exp(rate)))
    exp(rate - denom + log(1e6))
}
 
countToFpkm <- function(counts, effLen)
{
    N <- sum(counts)
    exp( log(counts) + log(1e9) - log(effLen) - log(N) )
}
 
fpkmToTpm <- function(fpkm)
{
    exp(log(fpkm) - log(sum(fpkm)) + log(1e6))
}
 
countToEffCounts <- function(counts, len, effLen)
{
    counts * (len / effLen)
}
 
################################################################################
# An example
################################################################################
cnts <- c(4250, 3300, 200, 1750, 50, 0)
lens <- c(900, 1020, 2000, 770, 3000, 1777)
countDf <- data.frame(count = cnts, length = lens)
 
# assume a mean(FLD) = 203.7
countDf$effLength <- countDf$length - 203.7 + 1
countDf$tpm <- with(countDf, countToTpm(count, effLength))
countDf$fpkm <- with(countDf, countToFpkm(count, effLength))
with(countDf, all.equal(tpm, fpkmToTpm(fpkm)))
countDf$effCounts <- with(countDf, countToEffCounts(count, length, effLength))
```
