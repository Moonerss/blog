---
title: dplyr
author: Jeason
createTime: 2020/05/07 11:13:16
permalink: /R/tidyverse/dplyr/
---
# dplyr

`dplyr`是 `tidyverse`数据科学包中的重要成员，提供了许多数据操控(data manipulation)的语法，用于快速处理数据。

## Verbs 语法

在 `dplyr`包中，提供了一致的动词语法，帮助解决最常见的数据操作:

+ `filter()`: 根据值筛选数据
+ `arrange()`: 数据排序
+ `select()` 和 `rename()`: 根据名字选择变量
+ `mutate()` 和 `transmute()`: 修改数据
+ `summarise()`: 数据摘要
+ `sample_n()`和 `sample_frac()`: 随机选择样本

### filter()

```r
library(nycflights13)
dim(flights)
## [1] 336776     19
```

```r
flights
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

这等价于 `flights[flights$month == 1 & flights$day == 1, ]`

### arrange()

数据排序

```r
arrange(flights, year, month, day)
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

### select()

变量筛选

```r
# Select columns by name
select(flights, year, month, day)
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

利用 `select`和其他辅助函数进行组合，进行更多类型的操作

```r
# 提取变量并重命名
select(flights, tail_num = tailnum)
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

若只想保留新列，可以使用 `transmute()`

```r
transmute(flights,
  gain = arr_delay - dep_delay,
  gain_per_hour = gain / (air_time / 60)
)
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

## group

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

> 在 `summarise()`函数中可以与基础的R函数(如：`min()`)进行联合操作，同时 `dplyr`同样提供了一系列的快捷操作：
>
> + `n()`: 观测值的个数
> + `n_distinct(x)`: unique的观测值数目
> + `first(x)`,`last(x)`, `nth(x, n)`: 第一个、最后一个、第n个观测值

```r
destinations <- group_by(flights, dest)
summarise(destinations,
  planes = n_distinct(tailnum),
  flights = n()
)
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

当依据多个变量进行分组时，可以根据 `summarise()`层层递进，得出结果

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

## join

```r
library("nycflights13")
# Drop unimportant variables so it's easier to understand the join results.
flights2 <- flights %>% select(year:day, hour, origin, dest, tailnum, carrier)

## 向前边的数据添加变量
flights2 %>% 
  left_join(airlines)
## Joining, by = "carrier"
## # A tibble: 336,776 x 9
##     year month   day  hour origin dest  tailnum carrier name 
##    <int> <int> <int> <dbl> <chr>  <chr> <chr>   <chr>   <chr>
##  1  2013     1     1     5 EWR    IAH   N14228  UA      Unit~
##  2  2013     1     1     5 LGA    IAH   N24211  UA      Unit~
##  3  2013     1     1     5 JFK    MIA   N619AA  AA      Amer~
##  4  2013     1     1     5 JFK    BQN   N804JB  B6      JetB~
##  5  2013     1     1     6 LGA    ATL   N668DN  DL      Delt~
##  6  2013     1     1     5 EWR    ORD   N39463  UA      Unit~
##  7  2013     1     1     6 EWR    FLL   N516JB  B6      JetB~
##  8  2013     1     1     6 LGA    IAD   N829AS  EV      Expr~
##  9  2013     1     1     6 JFK    MCO   N593JB  B6      JetB~
## 10  2013     1     1     6 LGA    ORD   N3ALAA  AA      Amer~
## # ... with 336,766 more rows
```

### join变量参照

在进行join操作时，选取变量作为参照，对数据进行合并，在默认情况下时 `NULL`，意思为根据所有变量进行合并

```r
flights2 %>% left_join(weather)
```

```
## Joining, by = c("year", "month", "day", "hour", "origin")
## # A tibble: 336,776 x 18
##     year month   day  hour origin dest  tailnum carrier  temp
##    <int> <int> <int> <dbl> <chr>  <chr> <chr>   <chr>   <dbl>
##  1  2013     1     1     5 EWR    IAH   N14228  UA       39.0
##  2  2013     1     1     5 LGA    IAH   N24211  UA       39.9
##  3  2013     1     1     5 JFK    MIA   N619AA  AA       39.0
##  4  2013     1     1     5 JFK    BQN   N804JB  B6       39.0
##  5  2013     1     1     6 LGA    ATL   N668DN  DL       39.9
##  6  2013     1     1     5 EWR    ORD   N39463  UA       39.0
##  7  2013     1     1     6 EWR    FLL   N516JB  B6       37.9
##  8  2013     1     1     6 LGA    IAD   N829AS  EV       39.9
##  9  2013     1     1     6 JFK    MCO   N593JB  B6       37.9
## 10  2013     1     1     6 LGA    ORD   N3ALAA  AA       39.9
## # ... with 336,766 more rows, and 9 more variables:
## #   dewp <dbl>, humid <dbl>, wind_dir <dbl>,
## #   wind_speed <dbl>, wind_gust <dbl>, precip <dbl>,
## #   pressure <dbl>, visib <dbl>, time_hour <dttm>
```

同样，也可以设定特殊的列作为参考进行数据合并

```r
flights2 %>% left_join(planes, by = "tailnum")
## # A tibble: 336,776 x 16
##    year.x month   day  hour origin dest  tailnum carrier
##     <int> <int> <int> <dbl> <chr>  <chr> <chr>   <chr>  
##  1   2013     1     1     5 EWR    IAH   N14228  UA   
##  2   2013     1     1     5 LGA    IAH   N24211  UA   
##  3   2013     1     1     5 JFK    MIA   N619AA  AA   
##  4   2013     1     1     5 JFK    BQN   N804JB  B6   
##  5   2013     1     1     6 LGA    ATL   N668DN  DL   
##  6   2013     1     1     5 EWR    ORD   N39463  UA   
##  7   2013     1     1     6 EWR    FLL   N516JB  B6   
##  8   2013     1     1     6 LGA    IAD   N829AS  EV   
##  9   2013     1     1     6 JFK    MCO   N593JB  B6   
## 10   2013     1     1     6 LGA    ORD   N3ALAA  AA   
## # ... with 336,766 more rows, and 8 more variables:
## #   year.y <int>, type <chr>, manufacturer <chr>,
## #   model <chr>, engines <int>, seats <int>, speed <int>,
## #   engine <chr>
```

当在两个数据中，需要参考的变量的名称不一样怎么办？使用 `by = c("x" = "a")`进行操作

```r
flights2 %>% left_join(airports, c("dest" = "faa"))
## # A tibble: 336,776 x 15
##     year month   day  hour origin dest  tailnum carrier name 
##    <int> <int> <int> <dbl> <chr>  <chr> <chr>   <chr>   <chr>
##  1  2013     1     1     5 EWR    IAH   N14228  UA      Geor~
##  2  2013     1     1     5 LGA    IAH   N24211  UA      Geor~
##  3  2013     1     1     5 JFK    MIA   N619AA  AA      Miam~
##  4  2013     1     1     5 JFK    BQN   N804JB  B6      <NA> 
##  5  2013     1     1     6 LGA    ATL   N668DN  DL      Hart~
##  6  2013     1     1     5 EWR    ORD   N39463  UA      Chic~
##  7  2013     1     1     6 EWR    FLL   N516JB  B6      Fort~
##  8  2013     1     1     6 LGA    IAD   N829AS  EV      Wash~
##  9  2013     1     1     6 JFK    MCO   N593JB  B6      Orla~
## 10  2013     1     1     6 LGA    ORD   N3ALAA  AA      Chic~
## # ... with 336,766 more rows, and 6 more variables:
## #   lat <dbl>, lon <dbl>, alt <dbl>, tz <dbl>, dst <chr>,
## #   tzone <chr>
```

### inner_join

合并后保留两个数据公有的观测值，保留所有unique的变量

```r
df1 <- tibble(x = c(1, 2), y = 2:1)
df2 <- tibble(x = c(1, 3), a = 10, b = "a")
df1 %>% inner_join(df2)
## Joining, by = "x"
## # A tibble: 1 x 4
##       x     y     a b  
##   <dbl> <int> <dbl> <chr>
## 1     1     2    10 a
```

### left_join

合并后包含第一个数据所有的观测值，第二个数据中没有的值用 `NA`表示

```r
df1 %>% left_join(df2)
## Joining, by = "x"
## # A tibble: 2 x 4
##       x     y     a b  
##   <dbl> <int> <dbl> <chr>
## 1     1     2    10 a  
## 2     2     1    NA <NA>
```

### right_join

合并后保留第二个数据所有的观测值，等同于 `left_join(y,x)`，不过变量顺序发生了改变

```r
df1 %>% right_join(df2)
## Joining, by = "x"
## # A tibble: 2 x 4
##       x     y     a b  
##   <dbl> <int> <dbl> <chr>
## 1     1     2    10 a  
## 2     3    NA    10 a
```

```r
df2 %>% left_join(df1)
## Joining, by = "x"
## # A tibble: 2 x 4
##       x     a b         y
##   <dbl> <dbl> <chr> <int>
## 1     1    10 a         2
## 2     3    10 a        NA
```

### full_join

合并后包含两个数据所有的观测值，没有的值用 `NA`补足

```r
df1 %>% full_join(df2)
## Joining, by = "x"
## # A tibble: 3 x 4
##       x     y     a b  
##   <dbl> <int> <dbl> <chr>
## 1     1     2    10 a  
## 2     2     1    NA <NA> 
## 3     3    NA    10 a
```

### semi_join

合并后保留第一个数据中所有在第二个数据中匹配到的观测值

```r
df1 <- tibble(x = c(1, 1, 3, 4), y = 1:4)
df2 <- tibble(x = c(1, 1, 2), z = c("a", "b", "a"))
df1 %>% semi_join(df2, by = "x")
## # A tibble: 2 x 2
##       x     y
##   <dbl> <int>
## 1     1     1
## 2     1     2
```

### anti_join

合并后保留第一个数据中所有在第二个数据中未匹配到的观测值

```r
df1 %>% anti_join(df2, by = "x")
## # A tibble: 2 x 2
##       x     y
##   <dbl> <int>
## 1     3     3
## 2     4     4
```
