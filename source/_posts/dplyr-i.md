---
title: dplyr学习笔记(一)
date: 2020-05-27
categories:
  - R
tags:
  - tidyverse
---
<!--more-->

# dplyr  

`dplyr`是`tidyverse`数据科学包中的重要成员，提供了许多数据操控(data manipulation)的语法，用于快速处理数据。  

## Verbs 语法  

在`dplyr`包中，提供了一致的动词语法，帮助解决最常见的数据操作:  

+ `filter()`: 根据值筛选数据  
+ `arrange()`: 数据排序  
+ `select()` 和 `rename()`: 根据名字选择变量  
+ `mutate()` 和 `transmute()`: 修改数据  
+ `summarise()`: 数据摘要  
+ `sample_n()`和`sample_frac()`: 随机选择样本  

### filter()  





```r
library(nycflights13)
dim(flights)
```

```
## [1] 336776     19
```

```r
flights
```

```
## # A tibble: 336,776 x 19
##     year month   day dep_time sched_dep_time dep_delay
##    <int> <int> <int>    <int>          <int>     <dbl>
##  1  2013     1     1      517            515         2
##  2  2013     1     1      533            529         4
##  3  2013     1     1      542            540         2
##  4  2013     1     1      544            545        -1
##  5  2013     1     1      554            600        -6
##  6  2013     1     1      554            558        -4
##  7  2013     1     1      555            600        -5
##  8  2013     1     1      557            600        -3
##  9  2013     1     1      557            600        -3
## 10  2013     1     1      558            600        -2
## # ... with 336,766 more rows, and 13 more variables:
## #   arr_time <int>, sched_arr_time <int>, arr_delay <dbl>,
## #   carrier <chr>, flight <int>, tailnum <chr>,
## #   origin <chr>, dest <chr>, air_time <dbl>,
## #   distance <dbl>, hour <dbl>, minute <dbl>,
## #   time_hour <dttm>
```

根据条件筛选行：  


```r
filter(flights, month == 1, day == 1)
```

```
## # A tibble: 842 x 19
##     year month   day dep_time sched_dep_time dep_delay
##    <int> <int> <int>    <int>          <int>     <dbl>
##  1  2013     1     1      517            515         2
##  2  2013     1     1      533            529         4
##  3  2013     1     1      542            540         2
##  4  2013     1     1      544            545        -1
##  5  2013     1     1      554            600        -6
##  6  2013     1     1      554            558        -4
##  7  2013     1     1      555            600        -5
##  8  2013     1     1      557            600        -3
##  9  2013     1     1      557            600        -3
## 10  2013     1     1      558            600        -2
## # ... with 832 more rows, and 13 more variables:
## #   arr_time <int>, sched_arr_time <int>, arr_delay <dbl>,
## #   carrier <chr>, flight <int>, tailnum <chr>,
## #   origin <chr>, dest <chr>, air_time <dbl>,
## #   distance <dbl>, hour <dbl>, minute <dbl>,
## #   time_hour <dttm>
```

这等价于`flights[flights$month == 1 & flights$day == 1, ]`  


### arrange()  

数据排序  


```r
arrange(flights, year, month, day)
```

```
## # A tibble: 336,776 x 19
##     year month   day dep_time sched_dep_time dep_delay
##    <int> <int> <int>    <int>          <int>     <dbl>
##  1  2013     1     1      517            515         2
##  2  2013     1     1      533            529         4
##  3  2013     1     1      542            540         2
##  4  2013     1     1      544            545        -1
##  5  2013     1     1      554            600        -6
##  6  2013     1     1      554            558        -4
##  7  2013     1     1      555            600        -5
##  8  2013     1     1      557            600        -3
##  9  2013     1     1      557            600        -3
## 10  2013     1     1      558            600        -2
## # ... with 336,766 more rows, and 13 more variables:
## #   arr_time <int>, sched_arr_time <int>, arr_delay <dbl>,
## #   carrier <chr>, flight <int>, tailnum <chr>,
## #   origin <chr>, dest <chr>, air_time <dbl>,
## #   distance <dbl>, hour <dbl>, minute <dbl>,
## #   time_hour <dttm>
```

降序排列  


```r
arrange(flights, desc(arr_delay))
```

```
## # A tibble: 336,776 x 19
##     year month   day dep_time sched_dep_time dep_delay
##    <int> <int> <int>    <int>          <int>     <dbl>
##  1  2013     1     9      641            900      1301
##  2  2013     6    15     1432           1935      1137
##  3  2013     1    10     1121           1635      1126
##  4  2013     9    20     1139           1845      1014
##  5  2013     7    22      845           1600      1005
##  6  2013     4    10     1100           1900       960
##  7  2013     3    17     2321            810       911
##  8  2013     7    22     2257            759       898
##  9  2013    12     5      756           1700       896
## 10  2013     5     3     1133           2055       878
## # ... with 336,766 more rows, and 13 more variables:
## #   arr_time <int>, sched_arr_time <int>, arr_delay <dbl>,
## #   carrier <chr>, flight <int>, tailnum <chr>,
## #   origin <chr>, dest <chr>, air_time <dbl>,
## #   distance <dbl>, hour <dbl>, minute <dbl>,
## #   time_hour <dttm>
```

#### select()  

变量筛选  


```r
# Select columns by name
select(flights, year, month, day)
```

```
## # A tibble: 336,776 x 3
##     year month   day
##    <int> <int> <int>
##  1  2013     1     1
##  2  2013     1     1
##  3  2013     1     1
##  4  2013     1     1
##  5  2013     1     1
##  6  2013     1     1
##  7  2013     1     1
##  8  2013     1     1
##  9  2013     1     1
## 10  2013     1     1
## # ... with 336,766 more rows
```

```r
# Select all columns between year and day (inclusive)
select(flights, year:day)
```

```
## # A tibble: 336,776 x 3
##     year month   day
##    <int> <int> <int>
##  1  2013     1     1
##  2  2013     1     1
##  3  2013     1     1
##  4  2013     1     1
##  5  2013     1     1
##  6  2013     1     1
##  7  2013     1     1
##  8  2013     1     1
##  9  2013     1     1
## 10  2013     1     1
## # ... with 336,766 more rows
```

```r
# Select all columns except those from year to day (inclusive)
select(flights, -(year:day))
```

```
## # A tibble: 336,776 x 16
##    dep_time sched_dep_time dep_delay arr_time sched_arr_time
##       <int>          <int>     <dbl>    <int>          <int>
##  1      517            515         2      830            819
##  2      533            529         4      850            830
##  3      542            540         2      923            850
##  4      544            545        -1     1004           1022
##  5      554            600        -6      812            837
##  6      554            558        -4      740            728
##  7      555            600        -5      913            854
##  8      557            600        -3      709            723
##  9      557            600        -3      838            846
## 10      558            600        -2      753            745
## # ... with 336,766 more rows, and 11 more variables:
## #   arr_delay <dbl>, carrier <chr>, flight <int>,
## #   tailnum <chr>, origin <chr>, dest <chr>, air_time <dbl>,
## #   distance <dbl>, hour <dbl>, minute <dbl>,
## #   time_hour <dttm>
```

利用`select`和其他辅助函数进行组合，进行更多类型的操作  


```r
# 提取变量并重命名
select(flights, tail_num = tailnum)
```

```
## # A tibble: 336,776 x 1
##    tail_num
##    <chr>   
##  1 N14228  
##  2 N24211  
##  3 N619AA  
##  4 N804JB  
##  5 N668DN  
##  6 N39463  
##  7 N516JB  
##  8 N829AS  
##  9 N593JB  
## 10 N3ALAA  
## # ... with 336,766 more rows
```

### mutate()  

基于已有变量，添加新变量  


```r
mutate(flights,
  gain = arr_delay - dep_delay,
  speed = distance / air_time * 60
)
```

```
## # A tibble: 336,776 x 21
##     year month   day dep_time sched_dep_time dep_delay
##    <int> <int> <int>    <int>          <int>     <dbl>
##  1  2013     1     1      517            515         2
##  2  2013     1     1      533            529         4
##  3  2013     1     1      542            540         2
##  4  2013     1     1      544            545        -1
##  5  2013     1     1      554            600        -6
##  6  2013     1     1      554            558        -4
##  7  2013     1     1      555            600        -5
##  8  2013     1     1      557            600        -3
##  9  2013     1     1      557            600        -3
## 10  2013     1     1      558            600        -2
## # ... with 336,766 more rows, and 15 more variables:
## #   arr_time <int>, sched_arr_time <int>, arr_delay <dbl>,
## #   carrier <chr>, flight <int>, tailnum <chr>,
## #   origin <chr>, dest <chr>, air_time <dbl>,
## #   distance <dbl>, hour <dbl>, minute <dbl>,
## #   time_hour <dttm>, gain <dbl>, speed <dbl>
```

并且，可以依据刚建立的新列进行操作  


```r
mutate(flights,
  gain = arr_delay - dep_delay,
  gain_per_hour = gain / (air_time / 60)
)
```

```
## # A tibble: 336,776 x 21
##     year month   day dep_time sched_dep_time dep_delay
##    <int> <int> <int>    <int>          <int>     <dbl>
##  1  2013     1     1      517            515         2
##  2  2013     1     1      533            529         4
##  3  2013     1     1      542            540         2
##  4  2013     1     1      544            545        -1
##  5  2013     1     1      554            600        -6
##  6  2013     1     1      554            558        -4
##  7  2013     1     1      555            600        -5
##  8  2013     1     1      557            600        -3
##  9  2013     1     1      557            600        -3
## 10  2013     1     1      558            600        -2
## # ... with 336,766 more rows, and 15 more variables:
## #   arr_time <int>, sched_arr_time <int>, arr_delay <dbl>,
## #   carrier <chr>, flight <int>, tailnum <chr>,
## #   origin <chr>, dest <chr>, air_time <dbl>,
## #   distance <dbl>, hour <dbl>, minute <dbl>,
## #   time_hour <dttm>, gain <dbl>, gain_per_hour <dbl>
```

若只想保留新列，可以使用`transmute()`  


```r
transmute(flights,
  gain = arr_delay - dep_delay,
  gain_per_hour = gain / (air_time / 60)
)
```

```
## # A tibble: 336,776 x 2
##     gain gain_per_hour
##    <dbl>         <dbl>
##  1     9          2.38
##  2    16          4.23
##  3    31         11.6 
##  4   -17         -5.57
##  5   -19         -9.83
##  6    16          6.4 
##  7    24          9.11
##  8   -11        -12.5 
##  9    -5         -2.14
## 10    10          4.35
## # ... with 336,766 more rows
```

### summarise()  

根据要求提供数据概要  


```r
summarise(flights,
  delay = mean(dep_delay, na.rm = TRUE)
)
```

```
## # A tibble: 1 x 1
##   delay
##   <dbl>
## 1  12.6
```

## sample_n() 和 sample_frac()  

随机选择变量  


```r
# 提取变量并重命名
sample_n(flights, 10)
```

```
## # A tibble: 10 x 19
##     year month   day dep_time sched_dep_time dep_delay
##    <int> <int> <int>    <int>          <int>     <dbl>
##  1  2013     4    19     1948           1930        18
##  2  2013     5    17     1328           1329        -1
##  3  2013     6    27      732            600        92
##  4  2013     7    17     1010           1014        -4
##  5  2013     8    17     1241           1229        12
##  6  2013     7    14      700            700         0
##  7  2013     9    24     1015           1020        -5
##  8  2013    11    14     1451           1455        -4
##  9  2013     3    17      847            850        -3
## 10  2013    11     9     1629           1630        -1
## # ... with 13 more variables: arr_time <int>,
## #   sched_arr_time <int>, arr_delay <dbl>, carrier <chr>,
## #   flight <int>, tailnum <chr>, origin <chr>, dest <chr>,
## #   air_time <dbl>, distance <dbl>, hour <dbl>,
## #   minute <dbl>, time_hour <dttm>
```

```r
# 按比例选择
sample_frac(flights, 0.01)
```

```
## # A tibble: 3,368 x 19
##     year month   day dep_time sched_dep_time dep_delay
##    <int> <int> <int>    <int>          <int>     <dbl>
##  1  2013     4     2      812            815        -3
##  2  2013     8     6      542            545        -3
##  3  2013     2     6      608            610        -2
##  4  2013    10     5     1138           1145        -7
##  5  2013     6    14     1515           1455        20
##  6  2013     7    17      608            609        -1
##  7  2013    10     2     1214           1223        -9
##  8  2013     6     9     1739           1629        70
##  9  2013     6    13      651            700        -9
## 10  2013    10     1     2026           2029        -3
## # ... with 3,358 more rows, and 13 more variables:
## #   arr_time <int>, sched_arr_time <int>, arr_delay <dbl>,
## #   carrier <chr>, flight <int>, tailnum <chr>,
## #   origin <chr>, dest <chr>, air_time <dbl>,
## #   distance <dbl>, hour <dbl>, minute <dbl>,
## #   time_hour <dttm>
```

## 总结  

`dplyr`动词语法的操作规律：  

1. 第一个参数是data.frame  
2. 第二个参数是要进行的操作  
3. 最后返回一个data.frame














