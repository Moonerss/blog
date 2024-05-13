---
title: VAF、MAF、MCF、CCF
author: Jeason
icon: ic:baseline-anchor
createTime: 2023/04/04 20:54:24
permalink: /NGS/vcf/
---
# VAF的概念和计算方法

**VAF** 的全称是**Variant Allele Frequency（变异等位基因频率）** 或 **Variant Allele Fraction（变异等位基因分数）**。简单来说就是在基因组某个位点支持alternate/mutant allele的reads覆盖深度占这个位点总reads覆盖深度的比例。以VCF文件中的字段为例，其中DP代表Total Depth，AD代表Allele Depth，因此VAF的计算就是：

$$
VAF = \frac{Allele\ Depth}{Total\ Depth} = \frac{AD}{DP}
$$

VAF用得比较多的地方是在二倍体germline的genotyping中，杂合位点的VAF在高深度（比如depth>80）情况下应该接近50%；如果VAF接近0.25/0.75说明基因组上可能还有另一份拷贝。另一个应用场景就是癌症基因组的somatic genotyping。肿瘤组织、cfDNA、ctDNA、CTC genotyping的结果中会包含正常的allele（与正常体细胞一致）以及突变的allele，其中突变allele的所占的比例就是VAF。[VAF可以用于推断肿瘤的异质性和肿瘤纯度](https://byteofbio.com/archives/11.html)，此外VAF的高低可能会影响癌症的预后。

# MAF的概念和计算方法

**MAF** 的全称是**Minor Allele Frequency（次等位基因频率）** ，是群体遗传学中的概念。MAF描述的是群体中丰度次高（第二高）的allele的频率。打个比方，在1000个人的群体中，某个位点有3种碱基类型：A、C、G。其中A碱基的频率是0.6，C碱基频率0.3，G碱基频率0.1，那么次等位基因频率指的就是C碱基的频率0.3。MAF可以用来区分某个allele是常见的多态性还是稀有变异。
要注意的是MAF在生物信息学中可能还指代[Mutation Annotation Format](https://byteofbio.com/archives/4.html)、[Multiple Alignment Format](http://genome.ucsc.edu/FAQ/FAQformat.html#format5)，也看到有人用mutant allele frequency表述VAF的概念，所以一定要注意区分。

# 肿瘤纯度的概念和计算方法

**肿瘤纯度（tumor purity）** 指的是样本中肿瘤细胞占所有细胞的比例。因为取样过程很难保证取到的所有细胞都是肿瘤细胞，并且混杂的正常体细胞会对后续的分析产生影响（比如基因的表达水平），因此在生物信息学分析中最好计算肿瘤纯度并做相应的校正。常用的估算肿瘤纯度的生物信息学工具有：ABSOLUTE、PyClone、SciClone、EXPANDS、ESTIMATE等。

# MCF的概念和计算方法

**MCF（Mutant Cell Fraction）** 指的是包含某个SNV的细胞比例。在简化模型下——不考虑CNV，并且是二倍体杂合SNV的时候，MCF就是VAF的2倍：

$$
MCF = VAF*2
$$

# CCF的概念和计算方法

**CCF（Cancer Cell Fraction）** 指的是肿瘤细胞中包含某个SNV的细胞所占比例。CCF和MCF之间也可以换算，设肿瘤纯度为α，在不考虑CNV，并且是二倍体杂合SNV时：

$$
CCF = \frac{MCF}{α}
$$
