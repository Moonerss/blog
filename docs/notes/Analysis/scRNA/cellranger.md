---
title: Cell Ranger使用基础
author: Jeason
createTime: 2024/10/05 21:55:03
permalink: /scRNA/cellranger/
---

## 背景  

`Cell Ranger`是由10x Genomics公司提供的一套用于处理单细胞RNA测序数据的工具。官网对其进行了详细的介绍和使用说明。可以通过10x Genomics Cloud Analysis使用这个软件或者将其安装到本地。  

## 安装  

CellRanger必须在Linux系统下运行。首先去下载Linux版本对应的软件安装包，下载之前需要提交信息登陆10x Genomics。然后登录自己的服务器并使用mkdir 和cd等命令建立并进入到软件安装目录。使用下面的命令下载软件:  

```sh
## 使用 curl
curl -o cellranger-8.0.1.tar.gz "https://cf.10xgenomics.com/releases/cell-exp/cellranger-8.0.1.tar.gz?Expires=1728179900&Key-Pair-Id=APKAI7S6A5RYOXBWRPDA&Signature=CJ5UER4VwoTgNMsuTsI9Bvv7Y5z0mjcGSDWIxun93bB-NlBZxr8C-vLaUyNfotsFTS3coAllmkcjnhW8rb9EAmA1oLFrNzaoPNmtff3DM1qk02cpdPbiChwXRW6c4NZ1Aw6YEiMoI4-KaYCCz6vrNhZ1NeKoFrM8RthKS5Br8-izW3i3RLdJsxyXW8BjOzKWtWH7rB7J2Mhg~MKez9-XJqMsmYDpSTBam1zFq42x5JMNrcMIuzZAzxunCFFZOPTlLO9RetLNPi2TcldZn2jsl8yuhQPXHqDhyBhysbDIAYodP8EyylYt0lNkuGuigVpqo0e1yyl1aqFG~9VnkExIcQ__"
## 使用 wget 或axel 等
wget -O cellranger-8.0.1.tar.gz "https://cf.10xgenomics.com/releases/cell-exp/cellranger-8.0.1.tar.gz?Expires=1728179900&Key-Pair-Id=APKAI7S6A5RYOXBWRPDA&Signature=CJ5UER4VwoTgNMsuTsI9Bvv7Y5z0mjcGSDWIxun93bB-NlBZxr8C-vLaUyNfotsFTS3coAllmkcjnhW8rb9EAmA1oLFrNzaoPNmtff3DM1qk02cpdPbiChwXRW6c4NZ1Aw6YEiMoI4-KaYCCz6vrNhZ1NeKoFrM8RthKS5Br8-izW3i3RLdJsxyXW8BjOzKWtWH7rB7J2Mhg~MKez9-XJqMsmYDpSTBam1zFq42x5JMNrcMIuzZAzxunCFFZOPTlLO9RetLNPi2TcldZn2jsl8yuhQPXHqDhyBhysbDIAYodP8EyylYt0lNkuGuigVpqo0e1yyl1aqFG~9VnkExIcQ__"
```

下载完成后解压文件：  

```sh
tar -xzvf cellranger-x.y.z.tar.gz
```

将cellrange文件添加到环境变量中，即可正常使用cellranger  

```sh
export PATH="/path/to/cellrange:$PATH"

cellranger -V
# cellranger cellranger-7.2.0
```

## 使用命令  

cellranger提供了五个分析模块用于分析单细胞转录组数据  

### cellranger mkfastq  

调用bcl2fastq软件将illumina测序仪得到的BCL(raw base call)格式文件拆分为fastq文件。根据建库的不同可以分为如下操作：

1. 一次上机测两个不同的文库，执行一次`cellranger mkfastq`  
   ![一次上机，两个文库](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/cellranger/one_batch.png)
2. 一个文库分两次或多次上机，需要根据上机的不同分别执行`cellranger mkfastq`  
   ![多次上机，一个文库](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/cellranger/two_batch.png)  

#### 使用方法  

```sh
cellranger mkfastq --id=tiny-bcl \
--run=/path/to/tiny_bcl \
--csv=cellranger-tiny-bcl-simple-1.2.0.csv
```

#### 参数说明  

`--run` 必选；BCL文件所在目录  
`--id` 可选；mkfastq将会生成相应目录，不接受绝对路径  
`--samplesheet` 可选. 样本名字、index等信息；  
`--output-dir` 指定FASTQ输出目录  
`--localcores` 运行的最大CPU数  
`--localmem` 运行的最大内存数  

### cellranger count  

分析`cellranger mkfastq`或者其他方式得到fastq格式的文件。这个模块包括比对、过滤、barcoding计数以及UMI计数。可以生成barcode-UMI信息，进行聚类及基因表达分析。不过我们通常用到表达信息，使用其他方式进行聚类及其他单细胞相关分析。  

在分析count之前需要先下载参考基因组  

可以直接从10x Genmoics官网下载已经构建好的参考数据  

```sh
curl -O "https://cf.10xgenomics.com/supp/cell-exp/refdata-gex-GRCh38-2024-A.tar.gz" # 人
curl -O "https://cf.10xgenomics.com/supp/cell-exp/refdata-gex-GRCm39-2024-A.tar.gz" # 小鼠
```

或使用`cellranger mkref`自己构建参考基因组  

```sh
cellranger count --id=sample345 \
--transcriptome=/path/to/refdata-gex-GRCh38-2020-A \
--fastqs=/path/to/fastq \
--sample=mysample \
--localcores=8 \
--localmem=64
```

输出结果包括以下信息：

```sh
Outputs:
- Run summary HTML:                 /outdir/outs/web_summary.html
- Run summary CSV:                  /opt/sample345/outs/metrics_summary.csv
- BAM:                              /opt/sample345/outs/possorted_genome_bam.bam
- BAM index:                        /opt/sample345/outs/possorted_genome_bam.bam.bai
- Filtered feature-barcode matrices MEX: /opt/sample345/outs/filtered_feature_bc_matrix
- Filtered feature-barcode matrices HDF5: /opt/sample345/outs/filtered_feature_bc_matrix.h5
......
```
`count`分析完成之后可以打开`web_summary.html`文件查看报告，重点关注Summary，来判断文库构建及测序是否合格。  

### cellranger multi  

`cellranger multi`用于分析Cell Multiplexing和Fixed RNA Profiling数据。它从`cellranger mkfastq`中获取FASTQ文件，并执行对齐、过滤、条形码计数和UMI计数。它使用Chromium细胞条形码生成特征条形码矩阵，确定簇，并执行基因表达分析。`cellranger multi`还支持特征条码数据的分析。  

### cellranger aggr

`Cellranger aggr`聚合了多个`Cellranger count`或`Cellranger multi`运行的输出，将这些运行归一化到相同的测序深度，然后重新计算特征条形码矩阵并对组合数据进行分析。aggr管道可用于将来自多个样本的数据组合成一个实验范围内的特征条形码矩阵和分析。  

### cellranger reanalyze

`cellranger reanalyze`采用由`cellranger count`、`cellranger multi`或`cellrange aggr`产生的特征条形码矩阵，并使用可调参数设置重新运行降维、聚类和基因表达算法。  


## 使用说明  

根据不同的情景，cellranger流程需要进行不同的调整，具体的分析操作可以分为以下几种：  

1. 单个样本，单次建库，单次上机  
   ![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/cellranger/flow1.png)
2. 单个样本，单次建库，多次上机  
   ![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/cellranger/flow2.png)
3. 单个样本，多次建库，单次上机  
   ![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/cellranger/flow3.png)
4. 多个样本，多次建库，单次上机  
   ![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/cellranger/flow4.png)
5. 多个样本，单次建库，单次上机  
   ![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/cellranger/flow5.png)
   ![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/cellranger/flow6.png)
