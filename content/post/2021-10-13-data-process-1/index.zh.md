---
title: 数据预处理之标准化
author: Jeason
date: '2021-10-13'
slug: data_process_1
math: true
categories:
  - statistics
tags:
  - statistics
---

## 定义

标准化(`Standardization`)特指将数据进行变化，使其符合均值为0，标准差为1的分布。**注意：这里的分布并非一定是正态分布**

> 标准化会改变数据的均值、标准差，也就是说改变了原来的分布，但是分布的类型依然是不变的，原来是什么类型，标准化之后依然是什么类型。标准化后的分布并不一定就是标准正态，完全取决于原始数据的分布类型

## 标准化目的 

1. 消除量纲影响，利于不同级别数据的比较，得到合理的结果
2. 加速建模的建立与求解，提高运算速度

## 标准化的计算  

最常见的标准化方法是标准差标准化：
$$
x'=\frac{x-{\mu}}{\sigma}
$$
标准化过后的数据符合取值范围无固定区间



## 标准化的应用

数据的标准化广泛的运用于数据建模和机器学习当中。在分类、聚类算法中，需要使用距离来度量相似性的时候、或者使用PCA技术进行降维的时候，标准化表现更好

-----------------------------------

## Reference

+ [标准化和归一化，请勿混为一谈，透彻理解数据变换](https://blog.csdn.net/weixin_36604953/article/details/102652160)
+ [标准化和归一化什么区别？--知乎](https://www.zhihu.com/question/20467170) 
+ [R 语言数据科学导论](https://ds-r.leovan.tech/feature-engineering/feature-engineering.pdf)
+ [机器学习中常见的几种归一化方法以及原因](https://blog.csdn.net/UESTC_C2_403/article/details/75804617) 
+ [Normalization vs Standardization — Quantitative analysis](https://towardsdatascience.com/normalization-vs-standardization-quantitative-analysis-a91e8a79cebf)
+ [Feature Scaling for Machine Learning: Understanding the Difference Between Normalization vs. Standardization](https://www.analyticsvidhya.com/blog/2020/04/feature-scaling-machine-learning-normalization-standardization/)

