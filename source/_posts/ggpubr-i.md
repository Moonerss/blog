---
title: ggpubr使用指南(一)
date: 2020-05-28
slug: ggpubr使用指南i
categories:
  - R
tags:
  - ggplot2
---

`ggpubr` 是由 **Alboukadel Kassambara** 开发的一款非常优秀的基于`ggplot2`作图的可视化R包，一行命令即可简单方便的绘制出符合出版物要求的图形。<!--more-->  

> ggplot2 by Hadley Wickham is an excellent and flexible package for elegant data visualization in R. However the default generated plots requires some formatting before we can send them for publication. Furthermore, to customize a ggplot, the syntax is opaque and this raises the level of difficulty for researchers with no advanced R programming skills. The 'ggpubr' package provides some easy-to-use functions for creating and customizing 'ggplot2'- based publication ready plots.  



### R包安装  

```{r echo=TRUE, message=FALSE, warning=FALSE, eval=FALSE}
install.packages("ggpubr")
library(ggpubr)

# github安装
if(!require(devtools)) install.packages("devtools")
devtools::install_github("kassambara/ggpubr")
library(ggpubr)
```

### 常用图形绘制  

#### 分布图绘制(Distribution)   

1. **带有均值线和地毯线的密度图**  


```r
#构建数据集set.seed(1234)
df <- data.frame( sex=factor(rep(c("f", "M"), each=200)),
                 weight=c(rnorm(200, 55), rnorm(200, 58)))
# 预览数据格式
head(df)
```

```
##   sex   weight
## 1   f 58.29504
## 2   f 53.92389
## 3   f 55.38073
## 4   f 53.90834
## 5   f 54.95872
## 6   f 55.28395
```

```r
# 绘制密度图
# rug参数添加地毯线，add参数可以添加均值mean和中位数median，按性别”sex“分组标记边框线颜色和填充色，使用palette参数自定义颜色
p1 <- ggdensity(df, x="weight", add = "mean", rug = TRUE, color = "sex", 
                fill = "sex",palette = c("#00AFBB", "#E7B800")) 
p1
```

![plot of chunk unnamed-chunk-3](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-3-1.png)

2. **带有均值线和边际地毯线的直方图**  

```r
p2 <- gghistogram(df, x="weight", add = "mean", rug = TRUE, color = "sex", 
                  fill = "sex",palette = c("#00AFBB", "#E7B800"))
p2
```

![plot of chunk unnamed-chunk-4](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-4-1.png)

#### 箱线/小提琴图绘制(barplot/violinplot)   

1. **箱线图+分组形状+统计**  

```{r}
data("mtcars")
#jitter参数添加扰动点，点的形状shape由dose变量映射
p3 <- ggboxplot(mtcars, x="cyl", y="drat", color = "cyl",
                palette = c("#00AFBB", "#E7B800", "#FC4E07"),
                add = "jitter", shape="cyl") 
p3
```


![plot of chunk unnamed-chunk-5](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-5-1.png)


```r
# stat_compare_means参数比较不同组之间的均值，并增加不同组间比较的p-value值，可以自定义需要标注的组间比较
my_comparisons <- list(c("4", "6"), c("6", "8"), c("4", "8"))
p4 <- p3 + stat_compare_means(comparisons = my_comparisons)+
  stat_compare_means(label.y = 6)
p4
```

![plot of chunk unnamed-chunk-6](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-6-1.png)

2. **内有箱线图的小提琴图+星标记**  

```r
# add = “boxplot”添加箱线图，stat_compare_means中设置lable=”p.signif”，即可添加星添加组间比较连线和统计P值按星分类add添加箱线图，label标注选择显著性标记（星号）
p5 <- ggviolin(mtcars, x="cyl", y="drat", fill = "cyl",
               palette = c("#00AFBB", "#E7B800", "#FC4E07"),
               add = "boxplot", add.params = list(fill="white"))+        
  stat_compare_means(comparisons = my_comparisons, label = "p.signif") +         
  stat_compare_means(label.y = 6)
p5
```

![plot of chunk unnamed-chunk-7](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-7-1.png)

#### 条形/柱状图绘制(barplot)  

```r
df2 <- mtcars
# 设置因子变量
df2$cyl <- factor(df2$cyl)
df2$name <- rownames(df2) #添加一新列name
head(df2[, c("name", "wt", "mpg", "cyl")])
```

```
##                                name    wt  mpg cyl
## Mazda RX4                 Mazda RX4 2.620 21.0   6
## Mazda RX4 Wag         Mazda RX4 Wag 2.875 21.0   6
## Datsun 710               Datsun 710 2.320 22.8   4
## Hornet 4 Drive       Hornet 4 Drive 3.215 21.4   6
## Hornet Sportabout Hornet Sportabout 3.440 18.7   8
## Valiant                     Valiant 3.460 18.1   6
```

```r
# 颜色按nature配色方法(支持 ggsci包中的本色方案 ，如: “npg”, “aaas”, “lancet”, “jco”, “ucscgb”, “uchicago”, “simpsons” and “rickandmorty”)
p6 <- ggbarplot(df2, x="name", y="mpg", fill = "cyl", color = "white",
         palette = "npg", #杂志nature的配色         
         sort.val = "desc", #降序排序         
         sort.by.groups=FALSE, #不按组排序         
         x.text.angle=60)
p6
```

![plot of chunk unnamed-chunk-8](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-8-1.png)


```r
# 按组进行排序
p7 <- ggbarplot(df2, x="name", y="mpg", fill = "cyl", color = "white",
         palette = "aaas", #杂志Science的配色
         sort.val = "asc", #升序排序,区别于desc         
         sort.by.groups=TRUE,x.text.angle=60) #按组排序 x.text.angl设置x轴标签旋转角度
p7
```

![plot of chunk unnamed-chunk-9](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-9-1.png)


#### ƫ��ͼ����(Deviation graphs)  


```r
df2$mpg_z <- (df2$mpg-mean(df2$mpg))/sd(df2$mpg)    
# 相当于Zscore标准化，减均值，除标准差
df2$mpg_grp <- factor(ifelse(df2$mpg_z<0, "low", "high"), levels = c("low", "high"))   
#设置分组因子
head(df2[, c("name", "wt", "mpg", "mpg_grp", "cyl")])
```

```
##                                name    wt  mpg mpg_grp cyl
## Mazda RX4                 Mazda RX4 2.620 21.0    high   6
## Mazda RX4 Wag         Mazda RX4 Wag 2.875 21.0    high   6
## Datsun 710               Datsun 710 2.320 22.8    high   4
## Hornet 4 Drive       Hornet 4 Drive 3.215 21.4    high   6
## Hornet Sportabout Hornet Sportabout 3.440 18.7     low   8
## Valiant                     Valiant 3.460 18.1     low   6
```


```r
p8 <- ggbarplot(df2, x="name", y="mpg_z", fill = "mpg_grp", color = "white",
      palette = "jco", sort.val = "asc", sort.by.groups = FALSE,                   
      x.text.angle=60, ylab = "MPG z-score", xlab = FALSE)
p8
```

![plot of chunk unnamed-chunk-11](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-11-1.png)


```r
# rotate设置x/y轴对换
p9 <- ggbarplot(df2, x="name", y="mpg_z", fill = "mpg_grp", color = "white",
         palette = "jco", sort.val = "desc", sort.by.groups = FALSE,
         x.text.angle=90, ylab = "MPG z-score", xlab = FALSE,
        rotate=TRUE, ggtheme = theme_minimal())   
p9
```

![plot of chunk unnamed-chunk-12](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-12-1.png)

#### 棒棒糖图绘制(Lollipop chart)  

棒棒图代替条形图展示数据  

```r
p10 <- ggdotchart(df2, x="name", y="mpg", color = "cyl",
          palette = c("#00AFBB", "#E7B800", "#FC4E07"),          
          sorting = "ascending",          
          add = "segments", ggtheme = theme_pubr())
p10
```

![plot of chunk unnamed-chunk-13](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-13-1.png)


```r
# 设置其他参数, dot.size = 6调整糖的大小，添加label标签，设置字体样式和方向
p11 <- ggdotchart(df2, x="name", y="mpg", color = "cyl", 
         palette = c("#00AFBB", "#E7B800", "#FC4E07"),          
         sorting = "descending", add = "segments", rotate = TRUE,
         group = "cyl", dot.size = 6,          
         label = round(df2$mpg), font.label = list(color="white",
         size=9, vjust=0.5), ggtheme = theme_pubr())
p11
```

![plot of chunk unnamed-chunk-14](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-14-1.png)


```r
#棒棒糖偏差图
p12 <- ggdotchart(df2, x = "name", y = "mpg_z",
                  color = "cyl", # Color by groups                    
                  palette = c("#00AFBB", "#E7B800", "#FC4E07"), # Custom color palette                    
                  sorting = "descending", # Sort value in descending order                    
                  add = "segments", # Add segments from y = 0 to dots                    
                  add.params = list(color = "lightgray", size = 2), # Change segment color and size                    
                  group = "cyl", # Order by groups                   
                  dot.size = 6, # Large dot size                    
                  label = round(df2$mpg_z,1), # Add mpg values as dot labels，设置一位小数                    
                  font.label = list(color = "white", size = 9, vjust = 0.5), # Adjust label parameters                    
                  ggtheme = theme_pubr()) + 
                  geom_hline(yintercept = 0, linetype = 2, color = "lightgray")
p12
```

![plot of chunk unnamed-chunk-15](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-15-1.png)

#### Cleveland��ͼ����  


```r
# theme_cleveland()主题可设置为Cleveland点图样式
p13 <- ggdotchart(df2, x = "name", y = "mpg",
                  color = "cyl", # Color by groups                    
                  palette = c("#00AFBB", "#E7B800", "#FC4E07"), # Custom color palette                    
                  sorting = "descending", # Sort value in descending order                    
                  rotate = TRUE, # Rotate vertically                    
                  dot.size = 2, # Large dot size                    
                  y.text.col = TRUE, # Color y text by groups                    
                  ggtheme = theme_pubr()) + 
       theme_cleveland() # Add dashed grids
p13
```

![plot of chunk unnamed-chunk-16](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/ggpubr-i/unnamed-chunk-16-1.png)

### 常用基本绘图函数及参数  

#### 基本绘图函数  


```r
gghistogram        Histogram plot #绘制直方图
ggdensity        Density plot #绘制密度图
ggdotplot        Dot plot #绘制点图
ggdotchart        Cleveland's Dot Plots #绘制Cleveland点图
ggline        Line plot #绘制线图
ggbarplot        Bar plot #绘制条形/柱状图
ggerrorplot        Visualizing Error #绘制误差棒图
ggstripchart        Stripcharts #绘制线带图
ggboxplot        Box plot #绘制箱线图
ggviolin        Violin plot #绘制小提琴图
ggpie        Pie chart #绘制饼图
ggqqplot        QQ Plots #绘制QQ图
ggscatter        Scatter plot #绘制散点图
ggmaplot        MA-plot from means and log fold changes #绘制M-A图
ggpaired        Plot Paired Data #绘制配对数据
ggecdf          Empirical cumulative density function  #绘制经验累积密度分布图
```

#### 基本参数   


```r
ggtext        Text #添加文本
border        Set ggplot Panel Border Line #设置画布边框线
grids        Add Grids to a ggplot #添加网格线
font        Change the Appearance of Titles and Axis Labels #设置字体类型
bgcolor        Change ggplot Panel Background Color #更改画布背景颜色
background_image        Add Background Image to ggplot2 #添加背景图片
facet        Facet a ggplot into Multiple Panels #设置分面
ggpar        Graphical parameters #添加画图参数
ggparagraph        Draw a Paragraph of Text #添加文本段落
ggtexttable        Draw a Textual Table #添加文本表格
ggadd        Add Summary Statistics or a Geom onto a ggplot #添加基本统计结果或其他几何图形
ggarrange        Arrange Multiple ggplots #排版多个图形
annotate_figure          Annotate Arranged Figure #添加注释信息
gradient_color        Set Gradient Color #设置连续型颜色
xscale        Change Axis Scale: log2, log10 and more #更改坐标轴的标度
add_summary        Add Summary Statistics onto a ggplot #添加基本统计结果
set_palette        Set Color Palette #设置画板颜色
rotate        Rotate a ggplot Horizontally #设置图形旋转
rotate_axis_text        Rotate Axes Text #旋转坐标轴文本
stat_stars        Add Stars to a Scatter Plot #添加散点图星标
stat_cor        Add Correlation Coefficients with P-values to a Scatter Plot #添加相关系数
stat_compare_means        Add Mean Comparison P-values to a ggplot #添加平均值比较的P值
diff_express      Differential gene expression analysis results #内置差异分析结果数据集
ggexport    Export ggplots # 导出图片
theme_transparent        Create a ggplot with Transparent Background #设置透明背景
theme_pubr        Publication ready theme #设置出版物主题
```

