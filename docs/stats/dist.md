---
title: 常用的距离计算指标
author: Jeason
createTime: 2018/11/12 15:37:12
permalink: /stats/dist/
tags:
  - stats
---

## Jaccard系数  

> **Jaccard相似系数**用于比较有限样本集之间的相似性与差异性。Jaccard系数值越大，样本相似度越高。  

给定两个集合A,B，Jaccard 系数定义为A与B交集的大小与A与B并集的大小的比值，定义如下：  

​![](https://bkimg.cdn.bcebos.com/formula/8ef3fad30cdb2d41ff1fe82d54bacbf6.svg)  

与Jaccard 系数相关的指标叫做Jaccard 距离，用于描述集合之间的不相似度。Jaccard 距离越大，样本相似度越低  

​![](https://bkimg.cdn.bcebos.com/formula/bf43d7abc9dedf0a963f752a2e544ef5.svg)  

