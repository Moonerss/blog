---
title: 归一化与标准化的联系与差别
author: Jeason
date: '2021-10-13'
slug: data_process_3
math: true
categories:
  - statistics
tags:
  - statistics
---

## 差异

### 概念差异

**归一化**：１）把数据变成(０，１)或者（1,1）之间的小数。主要是为了数据处理方便提出来的，把数据映射到0～1范围之内处理，更加便捷快速。２）把有量纲表达式变成无量纲表达式，便于不同单位或量级的指标能够进行比较和加权。归一化是一种简化计算的方式，即将有量纲的表达式，经过变换，化为无量纲的表达式，成为纯量。

**标准化**：在机器学习中，我们可能要处理不同种类的资料，例如，音讯和图片上的像素值，这些资料可能是高维度的，资料标准化后会使每个特征中的数值平均变为0(将每个特征的值都减掉原始资料中该特征的平均)、标准差变为1，这个方法被广泛的使用在许多机器学习算法中(例如：支持向量机、逻辑回归和类神经网络)

### 结果差异

1. Normalization会严格的限定变换后数据的范围，如[0,1],[-1,1]。Standardization变换后无严格的区间限制，只要求其均值为0，标准差为1。
2. Normalization对数据的缩放比例仅仅和极值有关，Standardization受到极值影响比较大。

## 关联

Normalization和Standardization在本质上都是对数据的线性变换，两者都不会改变原始的数据排布顺序

## 标准化和归一化的原因及用途

1. 统计建模中，如回归模型，自变量X XX的量纲不一致导致了回归系数无法直接解读或者错误解读；需要将X XX都处理到统一量纲下，这样才有可比性；
2. 机器学习和统计学中有很多地方要用到“距离”的计算，比如PCA，KNN，kmeans等等，不同维度量纲不同可能会导致距离的计算依赖于量纲较大的那些特征而得到不合理的结果；
3. 参数估计时使用梯度下降，在使用梯度下降的方法求解最优化问题时， 归一化/标准化后可以加快梯度下降的求解速度，即提升模型的收敛速度。

## 标准化和归一化的使用场景

1. 如果你对处理后的数据范围有严格要求，需要使用归一化；
2. 如果数据不稳定，存在过大或过小的值（也可以说是异常值），不能使用归一化操作；
3. 标准化是机器学习中最常用的方式，如果无法判断可以直接使用标准化；
4. 对于分类、聚类算法，需要使用距离来度量相似性的时候、或者使用PCA技术进行降维的时候，标准化表现更好；
5. 在不涉及距离度量、协方差计算的时候，可以使用归一化方法。

## 不需要使用标准化和归一化的场景

1. 数据不同特征之间存在较大的差异，数据量纲不一致时需要预处理，反之则不需要；
2. 当要使用的模型不涉及到距离和标准差异的衡量时，可以不使用标准化和归一化操作；
3. 使用概率模型时可以不进行操作，因为它不关注数据本身，关注的是出现概率。

--------

## Reference

+ [标准化和归一化，请勿混为一谈，透彻理解数据变换](https://blog.csdn.net/weixin_36604953/article/details/102652160)
+ [标准化和归一化什么区别？--知乎](https://www.zhihu.com/question/20467170) 
+ [R 语言数据科学导论](https://ds-r.leovan.tech/feature-engineering/feature-engineering.pdf)
+ [机器学习中常见的几种归一化方法以及原因](https://blog.csdn.net/UESTC_C2_403/article/details/75804617) 
+ [Normalization vs Standardization — Quantitative analysis](https://towardsdatascience.com/normalization-vs-standardization-quantitative-analysis-a91e8a79cebf)
+ [Feature Scaling for Machine Learning: Understanding the Difference Between Normalization vs. Standardization](https://www.analyticsvidhya.com/blog/2020/04/feature-scaling-machine-learning-normalization-standardization/)



