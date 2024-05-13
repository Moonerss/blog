---
title: Maxquant软件
author: Jeason
createTime: 2023/04/05 15:32:53
permalink: /bioinfo/maquant/
tags:
  - biosoftware
  - Proteomics
---
## 参考文献

The MaxQuant computational platform for mass spectrometry–based shotgun proteomics

## 简介

**MaxQuant是基于质谱(Ms)的蛋白质组学数据分析最常用的平台之一**，目前认可度相对较高，可针对多种质谱数据。拥有自己的肽段搜索引擎- Andromeda。对于碰撞诱导离解(**CID)**、高能碰撞离解(**HCD**)和电子转移离解(**ETD**)所产生的串联光谱可以很容易地用MaxQuant进行分析。针对每种方法，采用自定义的多级评分方案，对每种特定的碎片化技术的多肽鉴定进行优化。MaxQuant使用target-decoy搜索策略以估计和控制假阳性。

## 原理

MaxQuant使用target-decoy搜索策略以估计和控制假阳性，主要思路如下：

1. 将原数据库（target database）中的所有蛋白序列逐条反转，或随机打乱顺序, 得到反相数据库 (decoy database)
2. 反相数据库 (decoy database) 中的蛋白数目，长度，酶切后获得的多肽的数目，氨基酸组成均与原数据库相同。
3. 与原始数据库不同的是，这些多肽序列是虚构的，不可能在样品中存在
4. 采用相同的条件检索反相数据库，或者将两个数据库合并检索，用来模拟随机匹配的过程。在此时MaxQuant会计算，每条肽段搜库的FDR值，即搜库结果的准确性。

## 质控的主要数参数解释

+ Andromeda score: 理论谱图与实际谱图的匹配程度
+ PSM(peptide spectrum match): 肽谱匹配，也就是被软件认为实际谱图与理论谱图可以匹配上的那些谱图
+ PEP：一张匹配谱(PSM)配的概率
+ PSM FDR:以 target-decoy 控制假阳性的原理为基础，在PSM水平监测假阳性，PSM FDR 在 1%以内。
+ Protein groups: 有些蛋白质非常相似，在MaxQuant中，为了避免蛋白质水平上的识别计数过高，并使定量信息明确。通常这些蛋白含有特定蛋白的异构体，也可能是来自不同基因座的同源蛋白质。这个蛋白被归为Protein groups
+ Protein group score:类似于PEP考虑的是整个蛋白的肽段谱图匹配正确的概率
+ Protein FDR and q values：蛋白层面的FDR控制概率，要求1%
+ Razor peptides：某一个肽段是存在于多个protein group 中。这种肽被分配具有较多得分的protein group上。肽只能对这个protein group的得分做出贡献，确保光谱不被用于多个protein group使用。

## 定量的主要参数解释

+ Peptide intensity: 每一个肽段的相对丰度，也就是相对含量，可以理解为含量或者丰度，值越大，丰度越高。
+ Protein intensity ：对于 Protein groups，是该group 内所有肽段强度（Peptide intensity）的总和
+ Protein ratio：在标记定量中出现，指感兴趣的蛋白的所有肽段的同位素丰度比值的中位数。
+ Normalized protein ratio：标准化之后的Protein ratio
+ LFQ intensity：LFQ intensity 非标定量所得的蛋白的相对丰度，是一个经过标准化之后的相对定量值（定量方法:[Cox et al](https://pubmed.ncbi.nlm.nih.gov/24942700/)）
+ iBAQ protein intensity：类似于绝对定量值（其实并不是，TMT和LFQ都是相对定量的），值得是某一特定蛋白所鉴定的所有肽段丰度的总和除以这一蛋白中包含的肽段数目
+ Reporter intensity：报告的定量值（即计算的信号强度和）。用于后续标准分析

## 运行结果中的重要文件

在运行结果中每个样本对应一个文件夹，包含了每个样本对应的谱图解析信息，我们需要关注的是一个 `combined` 文件夹，其中包含了我们需要的定量表达信息。我们关注的是其下的 `txt` 文件夹中的文件

+ summary.txt: 包含了所有样本的参数，一级谱图数，二级谱图数，鉴定谱图数等信息
+ proteinGroups.txt：包含鉴定到的蛋白的基础信息，包含识别蛋白的蛋白量等参考信息
+ peptides.txt：非冗余肽段的定量信息（指质谱打到的所有肽段）
+ parameters.txt：分析中用到的所有参数信息
+ modificationSpecificPeptides.txt：带有修饰信息的肽段信息
+ allPeptides.txt：Maxquant检测到的所有的peptide信息(包含识别到的和未识别到的)，主要是质谱相关的一些信息
+ evidence.txt：包含了打到的所有peptide的信息【主要蛋白定量参考的信息】，同一个肽段可能会被打到多次

> peptides.txt和evidence.txt的区别：
>
> 1. peptides.txt指的是质谱打到的所有肽段信息的统计，这里是unique的，即每个肽段只出现一次
> 2. evidence.txt指的是质谱检测道德所有肽段的信息，这里包含了所有打到的信息，即有的肽段会被打到多次，也会包含在这里边
>
