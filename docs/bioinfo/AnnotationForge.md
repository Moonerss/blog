---
title: AnnotationForge包构建非模式物种Orgdb包
author: Jeason
createTime: 2023/04/04 22:47:45
permalink: /bioinfo/AnnotationForge/
tags:
  - Bioconductor
  - biosoftware
---
## 背景

通常在对物种做GO富集分析时，我们会遇到2种情况模式物种 & 非模式物种；针对模式物种专门的Orgdb包，但是目前针对模式物种的包只有20种,针对非模式职位另一种解决方案是通过AnnotationForge包来创建Orgdb包，本节来介绍如何构建非模式物种的Orgdb来做GO富集分析

## 1.准备注释文件

首先需要获取物种对应的注释文件（无论蛋白组还是基因组）

> 注释文件可以通过[eggnog](https://links.jianshu.com/go?to=http%3A%2F%2Feggnog5.embl.de%2F%23%2Fapp%2Fhome)网站上传参考序列文件注释得到(eggnog-mapper也可注释)

注释之后会生成以下文件：

+ `[project_name].emapper.hmm_hits`: 记录每个用于搜索序列对应的所有的显著性的 `eggNOG Orthologous Groups(OG)`. 所有标记为"-"则表明该序列未找到可能的OG
+ `[project_name].emapper.seed_orthologs`: 记录每个用于搜索序列对的的最佳的 `OG`，也就是 `[project_name].emapper.hmm_hits`里选择得分最高的结果。之后会从eggNOG中提取更精细的直系同源关系(orthology relationships)
+ `[project_name].emapper.annotations`: 该文件提供了最终的注释结果。大部分需要的内容都可以通过写脚本从从提取。

`[project_name].emapper.annotations`中主要列对应的记录如下：

+ `query_name`: 检索的基因名或者其他ID
+ `sedd_ortholog`: eggNOG中最佳的蛋白匹配
+ `evalue`: 最佳匹配的e-value
+ `score`: 最佳匹配的bit-score
+ `Preferred_name`: 预测的基因名，特别指的是类似AP2有一定含义的基因名，而不是AT2G17950这类编号
+ `GOs`: 推测的GO的词条， 未必最新
+ `KEGG_KO`: 推测的KEGG KO词条， 未必最新
+ `BiGG_Reactions`: BiGG代谢反应的预测结果

## 2.安装AnnotationForge包

```r
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")

BiocManager::install("AnnotationForge")
```

## 3.导入数据

从准备的注释文件导入注释信息，并提取必要的列用于构建库

```r
emapper <- read.delim("emapper.annotations.xls") %>%
  dplyr::select(GID=query_name,Gene_Symbol=Preferred_name, 
                GO=GOs,KO=KEGG_ko,Pathway =KEGG_Pathway, 
                OG =X.3,Gene_Name =X.4)
gene_info <- dplyr::select(emapper,GID,Gene_Name) %>%
  dplyr::filter(!is.na(Gene_Name))

gene2go <- dplyr::select(emapper,GID,GO) %>%
  separate_rows(GO, sep = ',', convert = F) %>%
  dplyr::filter(GO!="",!is.na(GO)) %>% 
  mutate(EVIDENCE = 'A')
```

## 4.构建0rgdb包

```r
AnnotationForge::makeOrgPackage(gene_info=gene_info,
                                go=gene2go,
                                maintainer='test<youremail@gmail.com>',
                                author='name',
                                version="0.1" ,
                                outputDir=".", 
                                tax_id="59729",
                                genus="M",
                                species="A",
                                goTable = "go")
```

## 5.安装R包

可以直接从文件夹进行安装，也可以构造之后安装

```r
install.packages('path/to/dir', repos = NULL, type = 'source)
```
