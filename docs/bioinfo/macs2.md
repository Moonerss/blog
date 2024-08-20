---
title: peak calling工具-MACS2
author: Jeason
createTime: 2023/12/25 19:35:05
permalink: /bioinfo/macs2/
tags:
  - biosoftware
---


> MACS2是peak calling最常用的工具  

## callpeak用法

这是MACS2的主要功能，因为MACS2的目的就是找peak  

```sh
# 常规的peak calling
macs2 callpeak -t ChIP.bam -c Control.bam -f BAM -g hs -n test -B -q 0.01
# 较宽的peak calling
macs2 callpeak -t ChIP.bam -c Control.bam --broad -g hs --broad-cutoff 0.1
```

主要参数介绍如下：  

**输入文件参数：**  

+ `-t/--treatment`: 处理样本输入文件  
+ `-c/--control`: 对照样本输入文件，该样本会作为call peak的对照进行处理  
+ `-f/--format`: 用来声明输入的文件格式，目前MACS能够识别的格式有`ELAND`, `BED`, `ELANDMULTI`, `ELANDEXPORT`, `ELANDMULTIPET`, `SAM`, `BAM`, `BOWTIE`, `BAMPE`, `BEDPE`. 其中除`BAMPE`, `BEDPE`需要特别声明外，其他格式都可以自动检测。`BAMPE`和`BEDPE`指的是paired-end的BAM和BED格式文件。  
+ `-g`表示有效基因组大小，由于基因组序列的重复性，基因组实际可以mapping的大小小于原始的基因组。MACS2提供了`hs` for human (2.7e9), `mm` for mouse (1.87e9), `ce` for C. elegans (9e7) and `dm` for fruitfly (1.2e8)  

**输出文件参数：**  

+ `--outdir`:输出结果的存储路径  
+ `-n`:输出文件名的前缀  
+ `-B/--bdg`:以bedGraph格式存放fragment pileup, control lambda, -log10pvalue 和log10qvale.  
  + `NAME_treat_pileup.bdg`: 处理后数据  
  + `NAME_control_lambda.bdg`： 对照的局部lambda值  
  + `NAME_treat_pvalue.bdg`： 泊松检验的P值  
  + `NAME_treat_qvalue.bdg`：Benjamini–Hochberg–Yekutieli处理后的Q值  

**peak calling参数：**  

+ `-q/--qvalue` 和 `-p/--pvalue`: `qvalue`默认值是0.05，与`pvalue`不能同时使用。  
+ `--broad`:peak有narrow peak和broad peak, 设置时可以call broad peak。  
+ `--broad-cutoff`: 和`pvalue`一样，在设置`--broad`时生效。用于call broad peak的阈值。  
+ `--nolambda`: 不要考虑在峰值候选区域的局部偏差/λ  

**Shift 模型参数：**  

+ `--nomodel`:不使用shift模型，这个参数和extsize、shift是配套使用的，有这个参数才可以设置extsize和shift。  
+ `--extsize`:当设置了nomodel时，MACS会用--extsize这个参数从5’->3’方向扩展reads修复fragments。比如说你的转录因子结合范围200bp，就设置这个参数是200。  
+ `--shift`:当设置了–nomodel，MACS用这个参数从5’ 端移动剪切，然后用–extsize延伸，如果–shift是负值表示从3’端方向移动。建议ChIP-seq数据集这个值保持默认值为0，对于检测富集剪切位点如DNAsel数据集设置为EXTSIZE的一半。  
  1. 想找富集剪切位点，如DNAse-seq，所有5’端的序列reads应该从两个方向延伸，如果想设置移动的窗口是200bp，参数设置如下：`--nomodel --shift -100 --extsize 200`  
  2. 对nucleosome-seq数据，用核小体大小的一半进行extsize,所以参数设置如下：`--nomodel --shift 37 --extsize 73`  
+ `--call-summits` MACS利用此参数重新分析信号谱，解析每个peak中包含的subpeak。对相似的结合图谱，推荐使用此参数，当使用此参数时，输出的subpeak会有相同的peak边界，不同的绩点和peak summit poisitions.  

## MACS2模型原理  
正如MACS的名字所示, Model-based Analysis of ChIP-seq, 它需要先建立模型然后分析。那么问题来了，建立什么模型？模型的目的是什么？这里的模型指的是双峰模型，建立双模模型的目的是为了更好的将原始reads朝3'偏移，更好的表示蛋白和DNA的作用位置。这里还要多问一句为什么要偏倚。

这需要从实验建库说起。ChIP-seq目标是**找到蛋白和DNA的作用位置**，所以先要让蛋白和DNA进行交联，之后用超声打碎，再用抗体把与蛋白结合的DNA收集起来测序。在MACS发表的2008年，那个时候的测序大多都以单端50bp为主，而超声破碎的片段肯定大于50 bp（这可以通过电泳图来了解），也就是说最开始的SE50数据比对到参考基因组之后，得到的峰图并没有真实反映出原来的文库情况。但由于比对到基因组正负链的概率是相似的，那么就会形成两个峰（如下图），为了更好的还原出最来的文库片段，就先建立了双峰模型，以两峰距离d的一半作为偏倚长度。

> 如果你的数据是SE50或者SE100，为了更准确地找peak，你需要建立双峰模型，你可能要调整--bw, --mfold, --fix-bimodal, --shift, --extsize。 但是对于双端测序而言，它本身测的就是文库的两端，因此建立模型没有必要，偏倚也没有必要，只需要设置参数`--nomodel`，使用paired-end模式进行分析。

## Reference  

1. [Practical 3: ChIP-seq Peak calling](https://bioinformatics-core-shared-training.github.io/cruk-summer-school-2018/ChIP/Practicals/Practical3_peakcalling_SS.html)
2. [MACS -- Model-based Analtsis of ChiP-Seq 原理](https://blog.csdn.net/BoringFantasy/article/details/80622699)
3. https://blog.csdn.net/u012110870/article/details/102804191