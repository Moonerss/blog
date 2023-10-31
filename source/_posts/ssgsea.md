---
title: 基于表达数据评估免疫浸润ssGSEA
date: 2020-11-26 15:42:29
categories: 
	- R
tags:
	- immune
---

## 背景

单样本基因集富集分析（single sample gene set enrichment analysis, ssGSEA）, 是GSEA方法的扩展，主要是针对单个样本无法做GSEA而设计。文章2009年发表于nature，题目为Systematic RNA interference reveals that oncogenic KRAS-driven cancers require TBK1。

## 计算原理

对给定样本的基因表达值进行秩次标准化，然后利用经验累积分布函数计算富集分数（ES）。【具体内容未详细了解】

## 实现方法

R语言GSVA包可实现ssGSEA分析。

```R
gsva (as.matrix(expr), as.list(geneset), method=‘ssgsea’)
```

其中，`expr` 为表达数据，行名为基因名，列名为样本名。`geneset`为选定的特异基因集合

## 示例

处理表达谱和需要的基因集信息

```R
library('data.table')
# geneset preparation -----------------------------------------------------
geneset <- fread('genesets.txt',data.table = F)
head(geneset)
## Metagene        Cell.type
##   ADAM28 Activated B cell
##    CD180 Activated B cell
##    CD79B Activated B cell
##      BLK Activated B cell
##     CD19 Activated B cell
##    MS4A1 Activated B cell
gset <- split(geneset$Metagene,geneset$Cell.type) ### 包含15种Adaptive immune cells
# expression data preparation ---------------------------------------------
load('expr.Rdata')
expr <- as.matrix(expr2)
head(expr[,1:5])
##         TCGA-DD-A4NG-01A TCGA-G3-AAV4-01A TCGA-2Y-A9H1-01A TCGA-BC-A10Y-01A TCGA-K7-AAU7-01A
## 5S_rRNA         0.3946148        0.4807128        0.0000000        0.1846650        0.5207065
## 7SK             0.0000000        0.0000000        0.0000000        0.4765529        0.1123388
## A1BG            3.2083543        3.5269448        3.8342478        3.9594580        2.2112248
## A1BG-AS1        0.2973393        0.1475302        0.6171802        0.5700832        0.4188354
## A1CF            4.4021079        4.8573240        3.3298628        4.5667646        3.9353168
## A2M             8.0797139        5.4155509        9.7644020        5.7818523        7.7965674
```

ssGSEA分析

```R
# ssGSEA ------------------------------------------------------------------
library(GSVA)
ssGSEA <- GSVA::gsva(expr,gset,method='ssgsea',ssgsea.norm=T) ###ssgsea.norm参数用最大值与最小值间的绝对差对ssGSEA分数进行标准化
save(ssGSEA,file = 'ssGSEA_result.RData')
```

至此得到每一类免疫细胞基因的富集得分。

对结果进行展示如下

```R
library('tidyverse')
library('ggpubr')
mydata <- t(as.data.frame(ssGSEA)) %>% as.data.frame()
# normal and tumor samples
mydata$group <- ifelse(substr(rownames(mydata),14,15) != '11','Tumor','Normal')
ggdata <- pivot_longer(data = mydata, cols = !group, names_to = "Cell", values_to = "Value")
# plot
ggplot(ggdata,aes(x=Cell,y=Value,fill=group))+
  geom_boxplot(width=0.7,size=0.3,outlier.color = NA)+
  theme_bw()+
  theme(panel.grid = element_blank())+
  stat_compare_means(symnum.args = list(cutpoints = c(0,0.001, 0.01, 0.05, 1), 
                                        symbols = c("***", "**", "*", "ns")),
                     label = "p.signif")+
  theme(axis.text.x = element_text(angle = 60,hjust = 1))+
  theme(legend.position = 'top')+
  xlab('')+ylab('Infiltration Abundance')+
  labs(fill='Group')
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ssgsea/ssgsea.png)