---
title: fold change, or log fold change?
author: Jeason
createTime: 2021/10/03 08:08:28
permalink: /stats/foldchange/
tags:
  - stats
---
**fold change**是一个ratio比值，用来比较在两种不同条件下同一事物的差异，当fold change > 1时表示一种上升的趋势，反之< 1 表示一种下降的趋势，这一概念在医学研究中是非常重要的。

然而，在真是的科学研究中一般使用的是log-fold change，即log转化之后的fold change值，为什么会这样呢？原因可能有以下：

1. fold change的值不是均匀的分布在1的左右，因此很难根据一个fold change值去判断上升或者下降趋势的程度，如：`15`和 `1/15`表示的变化程度是一样的，只不过是变化的趋势相反，但是从数值上很难区分变化的程度的大小。当log转化之后，上升和下降的程度在数值上表示的变化是相等的，因此更容易区分，如下图所示：

    ![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/fold_change/fold.png)

2. 在fold change进行log转化之后，> 1的数值变成了> 0的数，而< 1的数值变成了< 0的数，这样更能方便的区分出上下调的特征
