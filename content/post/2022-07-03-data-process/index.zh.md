---
title: 数据预处理之归一化
author: Jeason
date: '2021-10-12'
slug: data_process
math: true
categories:
  - statistics
tags:
  - statistics
---

## 定义

归一化（`normalization`）特指将**数据进行缩放到一个固定的区间内**。通常来讲，这个区间是[0，1]，但是在实际的情况中，这个区间可以是[-1,1]。总之符合使用的需求。

通过归⼀化，我们可以**消除不同量纲下的数据对最终结果的影响**。例如，我们通过⾝⾼（单位：⽶）和体重（单位：公 ⽄）来衡量两个⼈之间的差异，两个⼈的的体重相差 20 公⽄，⾝⾼相差 0.1 ⽶，因此在这样的量纲下衡量这两个⼈的差 异时，体重的差异会把⾝⾼的差异遮盖掉，但这往往不是我们想要的结果。但通例如我们假设体重的最小值和最⼤值分 别为 0 和 200 公⽄，⾝⾼的最小值和最⼤值分别为 0 和 2 ⽶，因此归⼀化后体重和⾝⾼的差距变为 0.1 和 0.05，因此通过归⼀下则可以避免这样的问题的出现。

## 归一化目的

1. 把数据缩放到特定区间内

   主要是为了数据处理方便提出来的，把数据映射到0～1范围之内处理，更加便捷快速，应该归到数字信号处理范畴之内。

2. 数据无量纲化

   归一化是一种简化计算的方式，即将有量纲的表达式，经过变换，化为无量纲的表达式，成为纯量，降低了数据的复杂度。

## 归一化计算

针对一般的情况，归一化的结果可以表示为：
$$
x'=\frac{x-x_{min}}{x_{max}-x_{min}}
$$
其中$x_{min}$表示$x$的最小值，$x_{max}$表示$x$中的最大值

这种归一化方法一般叫做**min-max归一化**，归一化之后数据的区间为[0,1]

另外，使用均值进行归一化操作的方式叫做**均值归一化**，归一化之后数据的区间为[-1,1]

公式表示为：
$$
x'=\frac{x-x_{mean}}{x_{max}-x_{min}}
$$


## 归一化的应用 

归一化应用于在对数据范围有严格要求的情况下。在不涉及距离度量和数据整体协方差分布的情况下可以使用归一化。如果数据有异常值，一定不要用归一化。



-------------------------------------

## Reference

+ [标准化和归一化，请勿混为一谈，透彻理解数据变换](https://blog.csdn.net/weixin_36604953/article/details/102652160)
+ [标准化和归一化什么区别？--知乎](https://www.zhihu.com/question/20467170) 
+ [R 语言数据科学导论](https://ds-r.leovan.tech/feature-engineering/feature-engineering.pdf)
+ [机器学习中常见的几种归一化方法以及原因](https://blog.csdn.net/UESTC_C2_403/article/details/75804617) 
+ [Normalization vs Standardization — Quantitative analysis](https://towardsdatascience.com/normalization-vs-standardization-quantitative-analysis-a91e8a79cebf)
+ [Feature Scaling for Machine Learning: Understanding the Difference Between Normalization vs. Standardization](https://www.analyticsvidhya.com/blog/2020/04/feature-scaling-machine-learning-normalization-standardization/)

