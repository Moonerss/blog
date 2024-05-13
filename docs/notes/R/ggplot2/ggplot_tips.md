---
title: 小部件参考
author: Jeason
createTime: 2020/09/22 11:13:16
permalink: /R/ggplot2/ggplot_tips/
---
::: center
![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggplottheme/20200627183728.png)
![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggplottheme/20200627183936.png)
:::

## 添加原件

+ 添加竖线或者横线

  ```r
  geom_abline(mapping = NULL, data = NULL, ..., slope, intercept, na.rm = FALSE, show.legend = NA)
  geom_hline(mapping = NULL, data = NULL, ..., yintercept, na.rm = FALSE, show.legend = NA)
  geom_vline(mapping = NULL, data = NULL, ..., xintercept, na.rm = FALSE, show.legend = NA)
  ```

  三个函数的作用分别是，geom_abline添加斜线， geom_hline添加水平线，geom_vline添加垂直线

  参数slope 表示斜率  intercept表示截距

  参数yintercept  表示y轴截距或直线所在位置

  参数xintercept  表示x轴截距或直线所在位置
+ 添加线段

  ```r
  geom_segment(aes(x = x1, y = y1, xend = x2, yend = y2)
  ```

  x, y控制线段起始位置，xend，yend控制线段终止位置

## 背景布局

+ 去掉网格

  ```r
  theme(panel.grid = element_blank())
  ```
+ 使用与plot相似的背景

  ```r
  theme_classic()
  ```
+ x，y轴转换

  ```r
  coord_flip()
  ```
+ 去掉图形和坐标轴间隙

  ```r
  scale_y_continuous(expand = c(0,0))//这个可以去掉与X轴间隙
  scale_x_continuous(expand = c(0,0))//这个可以去掉与Y轴间隙
  ```

## 添加阴影

```r
geom_ribbon(mapping = NULL, data = NULL, stat = "identity", position = "identity", ..., na.rm = FALSE, orientation = NA,
show.legend = NA, inherit.aes = TRUE,outline.type = "both")

geom_area(mapping = NULL, data = NULL, stat = "identity", position = "stack", na.rm = FALSE, orientation = NA, show.legend = NA, inherit.aes = TRUE, ..., outline.type = "upper")
```

## 添加箭头和线段

添加箭头或线段需要使用 `annotate('segment')`

```r
annotate('segment', x=#, xend=#, y=#, yend=#, arrow=arrow())
```

- 没有添加 `arrow`参数时是绘制线段
- 如果添加了 `arrow`参数，需要提前加载 `library(grid)`包才能调用 `arrow()`函数

## 画图理解

+ 使用ggplot绘图，图层是最重要的，要弄清参数是否写进了图层里。只有在图层中的对象才能进行后续的修改和操作。

## 标题居中

```r
theme(plot.title = element_text(hjust = 0.5))
```
