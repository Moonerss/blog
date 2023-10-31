---
title: dplyr学习笔记(二)
date: 2020-05-27
categories:
  - R
tags:
  - tidyverse
---

<!--more-->  



在`dplyr`中提供的动词语法与其他操作进行连接，可以实现更加复杂的数据操作  


## group操作  




```r
# group操作
by_tailnum <- group_by(flights, tailnum)

# group操作
delay <- summarise(by_tailnum,
  count = n(),
  dist = mean(distance, na.rm = TRUE),
  delay = mean(arr_delay, na.rm = TRUE))
```

```r
delay
```

```
## # A tibble: 4,044 x 4
##    tailnum count  dist  delay
##    <chr>   <int> <dbl>  <dbl>
##  1 D942DN      4  854. 31.5  
##  2 N0EGMQ    371  676.  9.98 
##  3 N10156    153  758. 12.7  
##  4 N102UW     48  536.  2.94 
##  5 N103US     46  535. -6.93 
##  6 N104UW     47  535.  1.80 
##  7 N10575    289  520. 20.7  
##  8 N105UW     45  525. -0.267
##  9 N107US     41  529. -5.73 
## 10 N108UW     60  534. -1.25 
## # ... with 4,034 more rows
```

> 在`summarise()`函数中可以与基础的R函数(如：`min()`)进行联合操作，同时`dplyr`同样提供了一系列的快捷操作：  
> + `n()`: 观测值的个数  
> + `n_distinct(x)`: unique的观测值数目  
> + `first(x)`,`last(x)`, `nth(x, n)`: 第一个、最后一个、第n个观测值  


```r
destinations <- group_by(flights, dest)
summarise(destinations,
  planes = n_distinct(tailnum),
  flights = n()
)
```

```
## # A tibble: 105 x 3
##    dest  planes flights
##    <chr>  <int>   <int>
##  1 ABQ      108     254
##  2 ACK       58     265
##  3 ALB      172     439
##  4 ANC        6       8
##  5 ATL     1180   17215
##  6 AUS      993    2439
##  7 AVL      159     275
##  8 BDL      186     443
##  9 BGR       46     375
## 10 BHM       45     297
## # ... with 95 more rows
```

当依据多个变量进行分组时，可以根据`summarise()`层层递进，得出结果  


```r
daily <- group_by(flights, year, month, day)

per_day   <- summarise(daily, flights = n())
```

```r
per_month <- summarise(per_day, flights = sum(flights))
```

```r
per_year  <- summarise(per_month, flights = sum(flights))
```

## select 操作  

`select`函数可以接受数字和具体的列名，但需要注意的是，当有与列名相同的其他赋值时，不能进行操作  


```r
select(flights, year)
```

```
## # A tibble: 336,776 x 1
##     year
##    <int>
##  1  2013
##  2  2013
##  3  2013
##  4  2013
##  5  2013
##  6  2013
##  7  2013
##  8  2013
##  9  2013
## 10  2013
## # ... with 336,766 more rows
```

```r
select(flights, 1)
```

```
## # A tibble: 336,776 x 1
##     year
##    <int>
##  1  2013
##  2  2013
##  3  2013
##  4  2013
##  5  2013
##  6  2013
##  7  2013
##  8  2013
##  9  2013
## 10  2013
## # ... with 336,766 more rows
```

```r
year <- 5
select(flights, year)
```

```
## # A tibble: 336,776 x 1
##     year
##    <int>
##  1  2013
##  2  2013
##  3  2013
##  4  2013
##  5  2013
##  6  2013
##  7  2013
##  8  2013
##  9  2013
## 10  2013
## # ... with 336,766 more rows
```

## Mutating 操作  


```r
df <- select(flights, year:dep_time)

mutate(df, "year", 2)
```

```
## # A tibble: 336,776 x 6
##     year month   day dep_time `"year"`   `2`
##    <int> <int> <int>    <int> <chr>    <dbl>
##  1  2013     1     1      517 year         2
##  2  2013     1     1      533 year         2
##  3  2013     1     1      542 year         2
##  4  2013     1     1      544 year         2
##  5  2013     1     1      554 year         2
##  6  2013     1     1      554 year         2
##  7  2013     1     1      555 year         2
##  8  2013     1     1      557 year         2
##  9  2013     1     1      557 year         2
## 10  2013     1     1      558 year         2
## # ... with 336,766 more rows
```

```r
mutate(df, year + 10)
```

```
## # A tibble: 336,776 x 5
##     year month   day dep_time `year + 10`
##    <int> <int> <int>    <int>       <dbl>
##  1  2013     1     1      517        2023
##  2  2013     1     1      533        2023
##  3  2013     1     1      542        2023
##  4  2013     1     1      544        2023
##  5  2013     1     1      554        2023
##  6  2013     1     1      554        2023
##  7  2013     1     1      555        2023
##  8  2013     1     1      557        2023
##  9  2013     1     1      557        2023
## 10  2013     1     1      558        2023
## # ... with 336,766 more rows
```


```r
var <- seq(1, nrow(df))
mutate(df, new = var)
```

```
## # A tibble: 336,776 x 5
##     year month   day dep_time   new
##    <int> <int> <int>    <int> <int>
##  1  2013     1     1      517     1
##  2  2013     1     1      533     2
##  3  2013     1     1      542     3
##  4  2013     1     1      544     4
##  5  2013     1     1      554     5
##  6  2013     1     1      554     6
##  7  2013     1     1      555     7
##  8  2013     1     1      557     8
##  9  2013     1     1      557     9
## 10  2013     1     1      558    10
## # ... with 336,766 more rows
```

`group_by()`的操作同样可以修改和创建变量，不同的时该变量是group之后的  


```r
group_by(df, month)
```

```
## # A tibble: 336,776 x 4
## # Groups:   month [12]
##     year month   day dep_time
##    <int> <int> <int>    <int>
##  1  2013     1     1      517
##  2  2013     1     1      533
##  3  2013     1     1      542
##  4  2013     1     1      544
##  5  2013     1     1      554
##  6  2013     1     1      554
##  7  2013     1     1      555
##  8  2013     1     1      557
##  9  2013     1     1      557
## 10  2013     1     1      558
## # ... with 336,766 more rows
```

```r
group_by(df, month = as.factor(month))
```

```
## # A tibble: 336,776 x 4
## # Groups:   month [12]
##     year month   day dep_time
##    <int> <fct> <int>    <int>
##  1  2013 1         1      517
##  2  2013 1         1      533
##  3  2013 1         1      542
##  4  2013 1         1      544
##  5  2013 1         1      554
##  6  2013 1         1      554
##  7  2013 1         1      555
##  8  2013 1         1      557
##  9  2013 1         1      557
## 10  2013 1         1      558
## # ... with 336,766 more rows
```

```r
group_by(df, day_binned = cut(day, 3))
```

```
## # A tibble: 336,776 x 5
## # Groups:   day_binned [3]
##     year month   day dep_time day_binned
##    <int> <int> <int>    <int> <fct>     
##  1  2013     1     1      517 (0.97,11] 
##  2  2013     1     1      533 (0.97,11] 
##  3  2013     1     1      542 (0.97,11] 
##  4  2013     1     1      544 (0.97,11] 
##  5  2013     1     1      554 (0.97,11] 
##  6  2013     1     1      554 (0.97,11] 
##  7  2013     1     1      555 (0.97,11] 
##  8  2013     1     1      557 (0.97,11] 
##  9  2013     1     1      557 (0.97,11] 
## 10  2013     1     1      558 (0.97,11] 
## # ... with 336,766 more rows
```

## pipe 操作  

当进行多重的动词语法操作时，可以把一系列的操作进行融合，不过因此会损害代码的可读性  


```r
# 鎸笺父鏄笺工鎴笺父鏄笺付鎸笺功鏀笺赴同鎴笺傅牟鎼笺腹鎼笺阜鏄笺阜 

# method 1
a1 <- group_by(flights, year, month, day)
a2 <- select(a1, arr_delay, dep_delay)
```

```
## Adding missing grouping variables: `year`, `month`, `day`
```

```r
a3 <- summarise(a2,
  arr = mean(arr_delay, na.rm = TRUE),
  dep = mean(dep_delay, na.rm = TRUE))
```

```
## `summarise()` regrouping output by 'year', 'month' (override with `.groups` argument)
```

```r
a4 <- filter(a3, arr > 30 | dep > 30)
a4
```

```
## # A tibble: 49 x 5
## # Groups:   year, month [11]
##     year month   day   arr   dep
##    <int> <int> <int> <dbl> <dbl>
##  1  2013     1    16  34.2  24.6
##  2  2013     1    31  32.6  28.7
##  3  2013     2    11  36.3  39.1
##  4  2013     2    27  31.3  37.8
##  5  2013     3     8  85.9  83.5
##  6  2013     3    18  41.3  30.1
##  7  2013     4    10  38.4  33.0
##  8  2013     4    12  36.0  34.8
##  9  2013     4    18  36.0  34.9
## 10  2013     4    19  47.9  46.1
## # ... with 39 more rows
```

```r
# method 2
filter(
  summarise(
    select(
      group_by(flights, year, month, day),
      arr_delay, dep_delay
    ),
    arr = mean(arr_delay, na.rm = TRUE),
    dep = mean(dep_delay, na.rm = TRUE)
  ),
  arr > 30 | dep > 30
)
```

```
## Adding missing grouping variables: `year`, `month`, `day`
```

```
## `summarise()` regrouping output by 'year', 'month' (override with `.groups` argument)
```

```
## # A tibble: 49 x 5
## # Groups:   year, month [11]
##     year month   day   arr   dep
##    <int> <int> <int> <dbl> <dbl>
##  1  2013     1    16  34.2  24.6
##  2  2013     1    31  32.6  28.7
##  3  2013     2    11  36.3  39.1
##  4  2013     2    27  31.3  37.8
##  5  2013     3     8  85.9  83.5
##  6  2013     3    18  41.3  30.1
##  7  2013     4    10  38.4  33.0
##  8  2013     4    12  36.0  34.8
##  9  2013     4    18  36.0  34.9
## 10  2013     4    19  47.9  46.1
## # ... with 39 more rows
```

```r
# method 3

flights %>%
  group_by(year, month, day) %>%
  select(arr_delay, dep_delay) %>%
  summarise(
    arr = mean(arr_delay, na.rm = TRUE),
    dep = mean(dep_delay, na.rm = TRUE)
  ) %>%
  filter(arr > 30 | dep > 30)
```

```
## Adding missing grouping variables: `year`, `month`, `day`
## `summarise()` regrouping output by 'year', 'month' (override with `.groups` argument)
```

```
## # A tibble: 49 x 5
## # Groups:   year, month [11]
##     year month   day   arr   dep
##    <int> <int> <int> <dbl> <dbl>
##  1  2013     1    16  34.2  24.6
##  2  2013     1    31  32.6  28.7
##  3  2013     2    11  36.3  39.1
##  4  2013     2    27  31.3  37.8
##  5  2013     3     8  85.9  83.5
##  6  2013     3    18  41.3  30.1
##  7  2013     4    10  38.4  33.0
##  8  2013     4    12  36.0  34.8
##  9  2013     4    18  36.0  34.9
## 10  2013     4    19  47.9  46.1
## # ... with 39 more rows
```



