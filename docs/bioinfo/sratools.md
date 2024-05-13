---
title: SRAtoolkit 安装与使用
author: Jeason
createTime: 2019/10/13 20:08:00
permalink: /bioinfo/sratools/
tags:
  - biosoftware
---

SRAtoolkit是NCBI开发的一个用于SRA文件处理的软件包，包含许多有用的工具。

### **下载SRAtoolkit软件包**

软件包下载地址在NCBI网站：https://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=software

目前最新版是2.10.8；有多个操作系统版本，我们选Ubuntu 64bit版；

```sh
wget -P ~/download https://ftp-trace.ncbi.nlm.nih.gov/sra/sdk/2.10.8/sratoolkit.2.10.8-ubuntu64.tar.gz
```

### **解压压缩包**

```sh
tar zvxf ~/download/sratoolkit.2.10.8-ubuntu64.tar.gz -C ~/software
mv ~/software/sratoolkit.2.10.8-ubuntu64 ~/software/sratoolkit
```

### **将sratoolkit安装文件路径加入环境变量**

```sh
echo "export PATH=$PATH:/home/ubuntu/software/sratoolkit/bin" >> ~/.zshrc
source ~/.zshrc
```

使用 `fastq-dump`和 `prefetch`进行测试

更详细步骤和说明，参见官网Documentation：
https://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=toolkit_doc&f=std

### 下载SRA文件

```sh
prefetch SRR10107270
2020-10-03T06:03:13 prefetch.2.9.6: 1) Downloading 'SRR10107270'...
2020-10-03T06:03:13 prefetch.2.9.6:  Downloading via https...
2020-10-03T06:09:01 prefetch.2.9.6:  https download succeed
2020-10-03T06:09:01 prefetch.2.9.6: 1) 'SRR10107270' was downloaded successfully
2020-10-03T06:09:01 prefetch.2.9.6: 'SRR10107270' has 0 unresolved dependencies
```

### 解压SRA文件

```sh
for i in *sra
do
echo $i
fastq-dump --split-3 $i
done
```

### 查看文件

```sh
ls
SRR10107270_1.fastq  SRR10107270_2.fastq  SRR10107270.sra
```

```sh
head SRR10107270_1.fastq
@SRR10107270.1 1 length=72
TCGGGNAGTGCTAGCTCGCGATTCCAGGATGTAGTTAACCTTGAGCACAATTTCATTGACGNNAGCAGCNNN
+SRR10107270.1 1 length=72
AAAAA#EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE##EEEEEE###
@SRR10107270.2 2 length=76
CATGTNATTGTTGTAGGAATCAAAGTCAAACACATTTCGAACTACACTGGAGAGACCTTCANNCGGAAANTNNNGT
+SRR10107270.2 2 length=76
AAAAA#EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEAEEEEEEEEEEEEE/EEEEEE##EEEEEA#E###EE
@SRR10107270.3 3 length=76
AGACGNTGGAGGATGAAGGGCTGGCTGTTGGGTCTGTTCTTGCTCTAAGGCCACATCCTAGNAAAGCAGGGNNNGT   
```

可以看到测序read的读长是七十多bp
