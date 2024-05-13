---
title: cut函数使用
author: Jeason
icon: mdi:tooltip-text-outline
createTime: 2024/05/11 22:49:45
permalink: /R/cut/
---

<!--more-->

## 函数名

`cut()`

## 功能

将一个数值向量根据间隔划分出不同的组，返回一个因子向量

## 函数用法

`cut(x, breaks, labels = NULL, include.lowest = FALSE, right = TRUE, dig.lab = 3, ordered_result = FALSE, ...)`

## 参数介绍

`x` ： 将要被分割的数值型向量

`breaks` ：长度大于1的数值型向量，指定切割数据的分割点

`labels` ：结果分组中每组的标签

`right` ：逻辑值，指定分割区间是左闭右开“[)”还是左开右闭“(]”

`ordered_result` : 逻辑值，结果因子是否是有序的？

## 案例说明

```r
test <- c(1:10)
test
##  [1]  1  2  3  4  5  6  7  8  9 10
```

```r
cut(test, breaks = c(0,3,6,10)) #以3,6作为分割点进行分割 
##  [1] (0,3]  (0,3]  (0,3]  (3,6]  (3,6]  (3,6]  (6,10] (6,10] (6,10] (6,10]
## Levels: (0,3] (3,6] (6,10]
```

```r
cut(test, breaks = c(0,3,6,10), include.lowest = T) #参数include.lowest可以设置是否包括最小的那个值
##  [1] [0,3]  [0,3]  [0,3]  (3,6]  (3,6]  (3,6]  (6,10] (6,10] (6,10] (6,10]
## Levels: [0,3] (3,6] (6,10]
```

```r
cut(test, breaks = c(0,3,6,10),labels = c("0-3", "4-6","7-10")) #参数lables设置每个类的标签
##  [1] 0-3  0-3  0-3  4-6  4-6  4-6  7-10 7-10 7-10 7-10
## Levels: 0-3 4-6 7-10
```

```r
cut(test, breaks = c(0,3,6,10), right = F) #参数right可以设置区间是左开右闭还是左闭右开
##  [1] [0,3)  [0,3)  [3,6)  [3,6)  [3,6)  [6,10) [6,10) [6,10) [6,10) <NA>  
## Levels: [0,3) [3,6) [6,10)
```

```r
cut(test, breaks = c(0,3,6,10), ordered_result = T) #参数ordered_result设置是否返回有序因子向量
##  [1] (0,3]  (0,3]  (0,3]  (3,6]  (3,6]  (3,6]  (6,10] (6,10] (6,10] (6,10]
## Levels: (0,3] < (3,6] < (6,10]
```