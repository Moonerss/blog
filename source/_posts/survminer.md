---
title: survminer包绘制生存曲线
date: 2018-04-23
categories:
  - R
tags: 
  - survival
---

<!--more-->   



`survminer`包是一个绘制生存曲线的R包，它的主要函数是`ggsurvplot()`函数，它可以绘制由`survival`包产生的`survfit`生存对象。  

一般用法如下：  


```r
ggsurvplot(fit, data = NULL, fun = NULL, color = NULL, palette = NULL,
  linetype = 1, conf.int = FALSE, pval = FALSE, pval.method = FALSE,
  test.for.trend = FALSE, surv.median.line = "none", risk.table = FALSE,
  cumevents = FALSE, cumcensor = FALSE, tables.height = 0.25,
  group.by = NULL, facet.by = NULL, add.all = FALSE, combine = FALSE,
  ggtheme = theme_survminer(), tables.theme = ggtheme, ...)
```

### 主要参数  

`fit` `survfit`产生的生存对象  

`data` 一个用于拟合生存曲线的数据集  

`fun` 定义生存曲线的函数类型。 经常使用的转换可以用字符参数指定：“事件”绘制累积事件（`f（y）= 1- y`），“cumhaz”绘制累积危险函数（`f（y）= -log（y）`）， “pct”为生存概率百分比。  

`color` 绘制生存曲线用的颜色，默认为`strata`  

`palette` 绘制颜色所用的色板  

`conf.int` 是否绘制置信区间，逻辑向量  

`pval` 是否给出p值逻辑值，数字或字符串。如果逻辑和TRUE，p值将被添加到图上。如果是numeric，则将使用此参数传递的值替换computet的p值。如果是字符，则自定义的字符串会出现在图上。  

`surv.median.line` 在中位生存时绘制水平/垂直线。允许的值包括c（“none”，“hv”，“h”，“v”）中的一个。  

`risk.table` 允许的值有：  
+ 是否显示风险表的TRUE或FALSE。 默认值为FALSE。  

+ “absolute” 或者”percentage” 。分别显示绝对数量和风险对象的百分比。  

+ “abs_pct”显示绝对数量和百分比。  

+ “nrisk_cumcensor” 和 “nrisk_cumevents”。分别显示风险数量和审查和事件的累计数量。  

+ tables.height 数值在[0，1]之间，指定主要存活图下所有表的一般高度。  

`ggtheme` 使用的ggplot2主题的名字。  

### 图例标题，标签和位置   

`title` 主标题  

`xlab`,` ylab` x,y轴标签  

`legend` 指定图例位置的字符。允许的值是（“top”，“bottom”，“left”，“right”，“none”）之一。也可使 用数字表示  

`legend.title` 图例的title  

`legend.labs` 图例的标签  

### 例子  




```r
require("survival")
```

```
## Loading required package: survival
```

```r
fit<- survfit(Surv(time, status) ~ sex, data = lung)
# Drawing survival curves
ggsurvplot(fit)
```

![plot of chunk unnamed-chunk-3](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/survminer/unnamed-chunk-3-1.png)

添加risk.table  


```r
# Add risk table and change risk table y text colors by strata
ggsurvplot(fit, pval = TRUE, conf.int = TRUE,
           risk.table = TRUE, risk.table.y.text.col = TRUE)
```

![plot of chunk unnamed-chunk-4](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/survminer/unnamed-chunk-4-1.png)



