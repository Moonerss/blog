---
title: dplyr学习笔记(三)
date: 2020-05-28
categories:
  - R
tags:
  - tidyverse
---

对于数据进行操作时，往往不限于单个数据的操作，多数情况需要对数据进行整合，过滤，标准化。在`dplyr`包中，提供了一系列的快捷操作，用于两个数据之间的操作处理  




## 合并(join)操作  


```r
library("nycflights13")
# Drop unimportant variables so it's easier to understand the join results.
flights2 <- flights %>% select(year:day, hour, origin, dest, tailnum, carrier)

## 向前边的数据添加变量
flights2 %>% 
  left_join(airlines)
```

```
## Joining, by = "carrier"
```

```
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

在进行join操作时，选取变量作为参照，对数据进行合并，在默认情况下时`NULL`，意思为根据所有变量进行合并  


```r
flights2 %>% left_join(weather)
```

```
## Joining, by = c("year", "month", "day", "hour", "origin")
```

```
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
```

```
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

当在两个数据中，需要参考的变量的名称不一样怎么办？使用`by = c("x" = "a")`进行操作  


```r
flights2 %>% left_join(airports, c("dest" = "faa"))
```

```
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

### join的类型  

#### inner_join()  

合并后保留两个数据公有的观测值，保留所有unique的变量  


```r
df1 <- tibble(x = c(1, 2), y = 2:1)
df2 <- tibble(x = c(1, 3), a = 10, b = "a")
df1 %>% inner_join(df2)
```

```
## Joining, by = "x"
```

```
## # A tibble: 1 x 4
##       x     y     a b    
##   <dbl> <int> <dbl> <chr>
## 1     1     2    10 a
```

#### left_join()  

合并后包含第一个数据所有的观测值，第二个数据中没有的值用`NA`表示  


```r
df1 %>% left_join(df2)
```

```
## Joining, by = "x"
```

```
## # A tibble: 2 x 4
##       x     y     a b    
##   <dbl> <int> <dbl> <chr>
## 1     1     2    10 a    
## 2     2     1    NA <NA>
```


#### right_join()  

合并后保留第二个数据所有的观测值，等同于`left_join(y,x)`，不过变量顺序发生了改变  


```r
df1 %>% right_join(df2)
```

```
## Joining, by = "x"
```

```
## # A tibble: 2 x 4
##       x     y     a b    
##   <dbl> <int> <dbl> <chr>
## 1     1     2    10 a    
## 2     3    NA    10 a
```

```r
df2 %>% left_join(df1)
```

```
## Joining, by = "x"
```

```
## # A tibble: 2 x 4
##       x     a b         y
##   <dbl> <dbl> <chr> <int>
## 1     1    10 a         2
## 2     3    10 a        NA
```

#### full_join()  

合并后包含两个数据所有的观测值，没有的值用`NA`补足  


```r
df1 %>% full_join(df2)
```

```
## Joining, by = "x"
```

```
## # A tibble: 3 x 4
##       x     y     a b    
##   <dbl> <int> <dbl> <chr>
## 1     1     2    10 a    
## 2     2     1    NA <NA> 
## 3     3    NA    10 a
```


#### semi_join()  

合并后保留第一个数据中所有在第二个数据中匹配到的观测值  


```r
df1 <- tibble(x = c(1, 1, 3, 4), y = 1:4)
df2 <- tibble(x = c(1, 1, 2), z = c("a", "b", "a"))
df1 %>% semi_join(df2, by = "x")
```

```
## # A tibble: 2 x 2
##       x     y
##   <dbl> <int>
## 1     1     1
## 2     1     2
```

#### anti_join()  

合并后保留第一个数据中所有在第二个数据中未匹配到的观测值 


```r
df1 %>% anti_join(df2, by = "x")
```

```
## # A tibble: 2 x 2
##       x     y
##   <dbl> <int>
## 1     3     3
## 2     4     4
```

## 集合操作  

在基础R函数中的向量取集操作运用到data.frame水平  


```r
df1 <- tibble(x = 1:2, y = c(1L, 1L))
df2 <- tibble(x = 1:2, y = 1:2)
```


```r
intersect(df1, df2)
```

```
## # A tibble: 1 x 2
##       x     y
##   <int> <int>
## 1     1     1
```

```r
union(df1, df2)
```

```
## # A tibble: 3 x 2
##       x     y
##   <int> <int>
## 1     1     1
## 2     2     1
## 3     2     2
```

```r
setdiff(df1, df2)
```

```
## # A tibble: 1 x 2
##       x     y
##   <int> <int>
## 1     2     1
```

```r
setdiff(df2, df1)
```

```
## # A tibble: 1 x 2
##       x     y
##   <int> <int>
## 1     2     2
```








