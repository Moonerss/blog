---
title: RNA-seq序列比对工具-HISAT2
author: Jeason
createTime: 2023/04/05 22:47:45
permalink: /bioinfo/hista2/
tags:
  - biosoftware
---

# 简介

+ Hisat是一种高效的RNA-seq实验比对工具

+ 它使用了基于BWT和Ferragina-manzini (Fm) index 两种算法的索引框架

# 安装

```sh
conda install hisat2
```

# 使用

## 建立索引

HISAT2提供了部分已经建立好的索引: http://daehwankimlab.github.io/hisat2/download/

也可以自行进行构建：

如果你用到了`–snp`, `–ss`, `–exon`等参数,对于人类基因组的大小来说,hisat2需要200G RAM。这几个参数慎用

```sh
# 输出8个以index为前缀的.n.ht2的文件,n=1-8
hisat2-build ref.fa index

hisat2-build [options]* <reference_in> <ht2_base>

# 选项
-f 				指定ref的文件格式
-c 				以逗号分隔的形式指定有多个ref 序列，而非fasta文件的列表
--large-index	指定构建大型索引即便参考序列短于 4 billion bp
-a 				禁止自动使用参数（--bmax，--dv，--packed）
-r 				不构建3.ht2,4.ht2
-3 				只构建3.ht2,4.ht2
-p 				使用多少个线程
--snp <path>	提供snps的列表
--haplotype <path>	提供haplotypes的文件
--ss 			提供间接位点(splice sites)的文件.与--exon联用
--exon <path>	提供外显子文件,与--ss联用
--cutoff <int>  只对参考序列int个base构建索引,丢弃其余部分
-q 				静默运行
```

## 比对

```sh
# single-end
hisat2 -f -x index -U reads.fa -S align.sam > align.log
# pair-end
hisat2 -f -x index -1 read_1.fa -2 read_2.fa -S align.sam > align.log

hisat2 [options]* -x <hisat2-idx> {-1 <m1> -2 <m2> | -U <r> | --sra-acc <SRA accession number>} [-S <hit>]

# 选项
-x <hisat2-idx> 			索引的前缀
-1 <ml> 					以逗号分隔的多个pair-end read1
-2 <ml>						以逗号分隔的多个pair-end read2
-U <r>						以逗号分隔的多个single-end reads
--sra-acc <number>			指定sra accession number
-S <hit>					指定输出文件

# 输入可选参数
-q 							说明输入文件格式是fastq文件
--qseq 						说明输入文件格式是QSEQ文件
-f 							说明输入文件是fasta文件
-r 							说明输入文件是每行一个序列，除此无他
-c 							reads是以序列的形式用逗号分隔输入的
-s,--skip <int>				reads的前int个跳过
-u <int>					只比对int个reads
-5,--trim5 <int>			比对前截去5‘端的int个base
-3,--trim3 <int>			比对前截去3’端的int个base
--phred33					说明fastq的碱基质量体系phred33
--phred64 					说明fastq的碱基质量体系是phred64
--solexa-quals				说明质量体系是solexa,并且转换成phred

# 比对可选参数
--n-ceil <func>				指定每条reads允许N碱基的个数的函数;超过将被丢弃
--ignore-quals				在对错配罚分时,考虑该位置的碱基质量
--nofw/--norc 				指定后,在pair-end无法比对时,不会试图去比对参考序列的forward链(nofw)和reverse链(norc)

# 打分选项
--mp MX,MN 					指定错配时的最大和最小罚分
--sp MX,MN 					指定发生soft clipped的碱基的最大和最小罚分
--no-softclip 				禁用softclip
--np <int>					指定N碱基的罚分
--rdg m1,m2					指定比对时read gap open(m1)和gap extend(m2)的罚分
--rfg m1,m2 				指定比对时reference gap open(m1)和gap extend(m2)的罚分
--score-min <func>			指定比对得分的函数, 当超过计算所得分数时才算一个成功比对
```

## 下游分析

HISTA2生成的结果是sam文件，可使用samtools进行下游分析

```sh
# 转为bam
samtools view -bS align.sam > align.bam
# 对bam进行排序
samtools sort align.bam -o align.sorted.bam
```
