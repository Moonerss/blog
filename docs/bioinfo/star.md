---
title: STAR比对
author: Jeason
createTime: 2023/04/05 22:47:45
permalink: /bioinfo/star/
tags:
  - biosoftware
---
# 简介

+ STAR （Spliced Transcripts Alignment to a Reference），用于将测序的 Read 对齐到参考基因组的比对软件，常用于 RNAseq。
+ 因其具有较高的准确率，映射速度较其他比对软件高 50 多倍，因此作为 ENCODE 项目的御用 pipeline 工具。
+ 它需要占用大量内存，对计算资源有较高的要求。
+ STAR 的默认参数针对哺乳动物基因组进行了优化

# 安装

```sh
conda install -c bioconda star
```

# 使用

生成索引

```sh
STAR --runThreadN 6 --runMode genomeGenerate \
 --genomeDir ~/reference/index/STAR/mm10/ \
 --genomeFastaFiles ~/reference/genome/mm10/GRCm38.p5.genome.fa \ 
 --sjdbGTFfile ~/annotation/mm10/gencode.vM13.annotation.gtf \
 --sjdbOverhang 100
# annotation: 来源要和参考基因组匹配,比如注释和基因组都是来源ENSEMBL的,或者都是来自UCSC的;千万不要混用。这是因为它们对染色体的命名不一样。
# 如果你手动更改成一样的也可以使用。


# --sjdbGTFfile	<anno.gtf>		选项默认只处理GTF中exon的行;
# --sddbGTFfeatureExon exon 	默认值为exon,使只处理exon的行.
# --sjdbGTFtagExonParent 		如果使用的是GTF3格式文件,需要指定本选项。
# --sjdbGTFtagExonParentTranscript <transcript_id> 	如果指定,将只会处理能比对到指定transcript(transcript_id)的exon
# --sjdbFileChrStartEnd <sjdbFile.txt> 指定可变剪接的注释文件
# sjdbOverhang: 对于2x100b的Illumina双端测序来说, 是100-1=99.如果length是变化的，就用max(length)-1
# --genomeSAindexNbases <int> 	对于较小的基因组,需要用此选项指定N的值.计算方式: min(14, log2(genomeLength)/2-1). 1Mb的基因组一般为7.
# --genomeChrBinNbits <int>		对于较大的基因组,需要用此选项指定N的值,计算方式: min(18, log2(genomeLength/NumberofReference)).对于3GB含100000个染色体/scaffolds的基因组来说,取15.
```

+ `--runThreadN` ：设置线程数
+ `--genomeDir` ：index输出的路径
+ `--genomeFastaFiles` ：参考基因组序列
+ `--sjdbGTFfile` ：参考基因组注释文件
+ `--sjdbOverhang` ：这个是reads长度的最大值减1，默认是100

进行比对

```sh
 STAR --runThreadN 20 --genomeDir ~/reference/index/STAR/mm10/ \
 --readFilesIn SRR3589959_1.fastq SRR3589959_2.fastq \
 --outSAMtype BAM SortedByCoordinate \
 --outFileNamePrefix ./SRR3589959
# --readFilesCommand <command>		如果是压缩文件,可以提供解压缩命令.zcat, gzip -c, bzip2 -c.依据压缩文件的压缩形式而不同.
# --outSAMstrandField introMotif 	指定值为introMotif将会为unstranded RNA-seq数据生成可用于cufflinks和cuffdiff的文件(含XS strand attribute)
# --outFilterIntroMotifs RemoveNoncanonical 	后续进行cufflinks的话,推荐设定此选项.
# --outSAMtype BAM Unsorted 		输出未排序的aligned.out.bam,可以直接用于HTSeq,不用进行name sorting
# --outSAMtype BAM SortedByCoordinate 输出根据坐标排序的aligned.sortedByCoord.out.bam,与samtools sort命令的输出一致
# --outSAMtype BAM Unsorted SortedByCoordinate	两种情况均输出.
# --quantMode TranscriptomeSAM		将会输出翻译成转录本坐标的bam文件,aligned.toTranscriptome.out.bam.
```

# 结果文件

> SRR3589959Aligned.sortedByCoord.out.bam
> SRR3589959Log.final.out
> SRR3589959Log.out
> SRR3589959Log.progress.out
> SRR3589959SJ.out.tab

# STAR 2-pass mode

为了发现更加灵敏的new junction，STAR建议使用2-pass mode，其能增加检测到的new junction数目，使得更多的splices reads能mapping到new junction。因此STAR先用一般参数做一遍mapping，收集检测到的junction信息，然后利用这已经annotated junction来做第二次mapping。

## original 2-pass

首先做一遍常规的比对，结果中会生成一个 `SJ.out.tab`文件，如上面所提到的 `SRR3589959SJ.out.tab`。然后用 `--sjdbFileChrStartEnd`参数将所有样品的 `SJ.out.tab`文件作为输入的 `annotated junction`进行第二次建index

```sh
STAR --runThreadN 20 --runMode genomeGenerate 
--genomeDir  ~/reference/index/STAR/mm10/index_2-pass/ \
--genomeFastaFiles ~/reference/genome/mm10/GRCm38.p5.genome.fa \ 
--sjdbGTFfile ~/annotation/mm10/gencode.vM13.annotation.gtf \
--sjdbFileChrStartEnd SRR3589959SJ.out.tab SRR3589960SJ.out.tab SRR3589961SJ.out.tab SRR3589962SJ.out.tab \
--sjdbOverhang 100
```

然后用第二次建立的index再一次对每个样品进行STAR比对，以SRR3589959为例

```sh
STAR --runThreadN 20 --genomeDir ~/reference/index/STAR/mm10/index_2-pass/ \
--readFilesIn SRR3589959_1.fastq SRR3589959_2.fastq \
--outSAMtype BAM SortedByCoordinate \
--outFileNamePrefix ./SRR3589959_2-pass
```

## per-sample 2-pass

`original`方法适用于多样本的处理，但是如果是per-sample(单个样本？)的2-pass mapping，可以直接用 `--twopassMode Basic`参数将第两步mapping中的make index省去，直接再mapping。

```sh
STAR --runThreadN 20 --genomeDir ~/reference/index/STAR/mm10/ \
 --twopassMode Basic \
 --readFilesIn SRR3589959_1.fastq SRR3589959_2.fastq \
 --outSAMtype BAM SortedByCoordinate \
 --outFileNamePrefix ./SRR3589959
```
