---
title: Awesome command
author: Jeason
createTime: 2024/05/20 21:57:24
permalink: /awesome/command/
---
::: info
收集分析中经常用到的command命令
:::

## 数据下载

1. `wget`下载文件

```
wget -O filename -c http://path
```

`-O` 设置下载路径和文件名字

`-c` 断点续传

`-b`后台下载

2. `axel`下载文件

```
axel -n threads -o filename http://path
```

`-n` 设置线程数

`-o` 设置下载路径和文件名字

如果下载中断可以再执行下载命令即可恢复上次的下载进度。

3. `curl`下载文件

```
curl -o filename http://path
```

`-o` 设置下载路径和文件名字

`-C` 断点续传

## fasta文件操作

1. 从 `fasta`文件提取1-22、X、Y、MT染色体的序列

```sh
## 从 ensembl下载的序列取
seqkit grep -i -r -p '^[\dXY(MT)]+$' raw.fa > new.fa
## 从 ucsc下载的序列取需要添加chr
seqkit grep -i -r -p '^chr[\dXY(MT)]+$' raw.fa > new.fa
```

2. 过滤从ensembl下载的 `fasta`文件，保留chr1-22,X,Y,M的信息，并修改染色体名称

```sh
## 从 ensembl下载的序列取
seqkit grep -j 20 -i -r -p '^[\dXY(MT)]+$' input.fa.gz | sed 's/>/>chr/g' | sed 's/chrMT/chrM/g' > input.filter_config.fa
```

## GTF文件操作

1. 过滤从ensembl下载的 `GTF`文件，保留chr1-22,X,Y,M上的注释信息，并修改染色体名称

```sh
## 从 ensembl下载的序列取
awk -v FS='\t' -v OFS='\t' '{if ($1~/^[0-9]+/||/#!/||/^[XY]+/||/^(MT)/) print $0}' input.gtf | sed 's/^/chr/g' | sed 's/^chr#/#/g' | sed 's/^chrMT/chrM/g' > input.filter_changed.gtf
```

## 测序相关指标计算

### 测序深度

```sh
## 查看测了多少染色体
samtools view H3_3.mLb.clN.sorted.bam | cut -f 3 | uniq
## 计算reference 序列长度
samtools faidx reference.fa
## 计算每个位点的深度
samtools depth H3_3.mLb.clN.sorted.bam > depth.txt
## 比对到参考基因组的位点的平均测序深度
awk '{sum+=$3} END {print "Mean sequencing depth: ", sum/NR}' depth.txt
## 统计基因组所有位点，包括未测到的位点的平均测序深度
samtools depth -aa H3_3.mLb.clN.sorted.bam > all_depth.txt
awk -F "\t" 'BEGIN{a = 0} {if($3 > 0) {a += $3}} END {print a/NR}' all_depth.txt
```

### 测序量

```sh
## 单末端测序量：reads长度 * reads个数
## 双末端测序量：单端reads长度 * 单端reads个数 * 2
## 计算read数据可用以下命令
fq=H31.R1.fastq.gz
read_len=100
read_num=$(zcat $fq | wc -l )
## GB
cexuliang=$(echo "scale=10;${read_num}* 2/4 * ${read_len} /1000000000" | bc)
```

### 覆盖度

```sh
samtools depth -aa H3_3.mLb.clN.sorted.bam > all_depth.txt
awk -F "\t" 'BEGIN{a = 0} {if($3 > 0) {a++}} END {print a/NR}' all_depth.txt
```

## bash操作

1. 在shell脚本中获取当前脚本路径

```sh
#!/bin/bash
echo ${BASH_SOURCE[0]}
echo ${BASH_SOURCE}
```

2. shell计算程序运行时间

```sh
start=$(date +%s)
sleep 5
end=$(date +%s)
take=$(( end - start ))
echo Time taken to execute commands is ${take} seconds.
```

3. 查看文件夹大小

```sh
du -d 1 -h
```

4. 搜索并杀死特定用户的进程

```sh
ps -ef | grep 用户名 | grep 程序关键词 | awk '{print $2}' | xargs kill -9
```

5. jupyter使用

```sh
jupyter notebook --no-browser --allow-root --port=8889
```

6. 服务器穿透使用jupyter

```sh
# 服务器端口映射本地端口
ssh -L port:localhost:port username@server.ip
# 如果分登录节点和运行结点，需要在登录节点再次映射
ssh -L port:localhost:port nodexx
# jupyter 设定端口
jupyter notebook --no-browser --allow-root --port=port
```

## R操作  

### 下载基因坐标信息  

```R
mart <- biomaRt::useMart("ENSEMBL_MART_ENSEMBL", dataset = "hsapiens_gene_ensembl", host = "useast.ensembl.org", port = 80)
attributes <- c(
    "hgnc_symbol",
    "chromosome_name",
    "band",
    "strand",
    "start_position",
    "end_position",
    "ensembl_gene_id"
  )
## 根据filters筛选values，这两个参数必不可少
result <- biomaRt::getBM(attributes = attributes, filters = "chromosome_name", values <- list(c(1:22, "X", "Y")), mart = mart, uniqueRows = T)
```

### 解决ExperimentHub和AnnotationHub等的报错  

报错信息：
```R
Cannot connect to ExperimentHub server, using 'localHub=TRUE' instead
Using 'localHub=TRUE'
  If offline, please also see BiocManager vignette section on offline use
Error in .updateHubDB(hub_bfc, .class, url, proxy, localHub) : 
  Invalid Cache: sqlite file
  Hub has not been added to cache
  Run again with 'localHub=FALSE'
```

解决方案：
```R
proxy = httr::use_proxy(Sys.getenv('http_proxy'))
httr::set_config(proxy)
ExperimentHub::setExperimentHubOption('PROXY', proxy)
hub <- ExperimentHub()
Assuming valid proxy connection through ':1'
 If you experience connection issues consider using 'localHub=TRUE'
  |========================================================================| 100%

snapshotDate(): 2024-04-29
```

暂时不知道解决原理