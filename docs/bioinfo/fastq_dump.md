---
title: fastq_dump使用
author: Jeason
createTime: 2023/04/15 22:47:45
permalink: /bioinfo/fastq_dump/
tags:
  - biosoftware
---

`fastq-dump`是SRAtoolkit中使用频率很高的命令，用于从SRA文件中拆解提取fastq文件。具体用法如下：

```sh
Usage:
  fastq-dump [options] <path> [<path>...]
  fastq-dump [options] <accession>

Use option --help for more information

fastq-dump : 2.9.6
```

一般使用 `fastq-dump`的方式为

```sh
fastq-dump -s /path/to/xxx.sra
```

但是默认的参数往往结果并不理想，在此它会默认把结果全部保存在一个文件里，并且得到的结果并不是压缩文件，会对储存造成一定的困扰。因此在使用 `fastq-dump`时，需要注意参数的设置。主要有以下两点：

1. read拆分

默认情况下 `fastq-dump`不对reads进行拆分, 对于很早之前的单端测序没有出现问题.但是对于双端测序而言,就会把原本的两条reads合并成一个,后续分析必然会出错。

常用的参数有三类：

+ `--split-spot`: 将双端测序分为两份,但是都放在同一个文件中
+ `--split-files`: 将双端测序分为两份,放在不同的文件,但是对于一方有而一方没有的reads直接丢弃
+ `--split-3` : 将双端测序分为两份,放在不同的文件,但是对于一方有而一方没有的reads会单独放在一个文件夹里

> 在不确定是单末端还是双末端测序时，建议一律使用 `--split-3`

2. 输出方式

`fastq-dump`默认输出的是未压缩文件，所以可以对文件进行压缩设置，减少储存空间:

+ `--gzip`, `--bzip2`: 压缩方式
+ `-Z | --stdout `: 输出到标准输出
+ `-O|--outdir`: 输出到指定文件夹

最后，通用的命令行可以写作：

```sh
fastq-dump -s /path/to/xxx.sra --split-3 --gzip -O /path/to/result
```
