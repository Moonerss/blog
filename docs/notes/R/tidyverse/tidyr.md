---
title: tidyr
createTime: 2019/04/04 11:13:16
permalink: /R/tidyverse/tidyr/
author: Jeason
---
tidyr是reshape2的进阶版本，它提供了更加定制化的数据整洁功能，用于数据的合并、拆分以及长宽格式的转化

主要涉及的操作：

1. 缺失值的补充
2. 长形表变宽形表，宽形表变长形表
   + gather-把宽度较大的数据转换成一个更长的形式，它类比于从reshape2包中melt函数的功能
   + spread-把长的数据转换成一个更宽的形式，它类比于从reshape2包中cast函数的功能
3. 列分割与列合并
   + separate－将一列按分隔符分割为多列
   + unite－将多列按指定分隔符合并为一列

```r
> library(tidyr)
> library(tibble)
> mtcars <- rownames_to_column(mtcars, var ='car')
> head(mtcars)
                car  mpg cyl disp  hp drat    wt  qsec vs am gear carb
1         Mazda RX4 21.0   6  160 110 3.90 2.620 16.46  0  1    4    4
2     Mazda RX4 Wag 21.0   6  160 110 3.90 2.875 17.02  0  1    4    4
3        Datsun 710 22.8   4  108  93 3.85 2.320 18.61  1  1    4    1
4    Hornet 4 Drive 21.4   6  258 110 3.08 3.215 19.44  1  0    3    1
5 Hornet Sportabout 18.7   8  360 175 3.15 3.440 17.02  0  0    3    2
6           Valiant 18.1   6  225 105 2.76 3.460 20.22  1  0    3    1
```

## 数据重构

### gather

> gather(data, key, value, …, na.rm = FALSE, convert = FALSE)
> data：需要被转换的宽形表
> key：将原数据框中的所有列赋给一个新变量key
> value：将原数据框中的所有值赋给一个新变量value
> …：可以指定哪些列聚到同一列中
> na.rm：是否删除缺失值

```r
> mtcarsNew <- gather(mtcars, attribute, value, -car) # 除了car列外，其余列聚合成两列，分别命名为attribute和value
> head(mtcarsNew)
                car attribute value
1         Mazda RX4       mpg  21.0
2     Mazda RX4 Wag       mpg  21.0
3        Datsun 710       mpg  22.8
4    Hornet 4 Drive       mpg  21.4
5 Hornet Sportabout       mpg  18.7
6           Valiant       mpg  18.1
```

tidyr很好的一点是可以只gather若干列而其他列保持不变,这点要比melt更加灵活

```r
> mtcarsNew <- mtcars %>% gather(attribute, value, mpg:gear)
> head(mtcarsNew)
                car carb attribute value
1         Mazda RX4    4       mpg  21.0
2     Mazda RX4 Wag    4       mpg  21.0
3        Datsun 710    1       mpg  22.8
4    Hornet 4 Drive    1       mpg  21.4
5 Hornet Sportabout    2       mpg  18.7
6           Valiant    1       mpg  18.1
```

### spread

> spread(data, key, value, fill = NA, convert = FALSE, drop = TRUE)
> data：为需要转换的长形表
> key：需要将变量值拓展为字段的变量
> value：需要分散的值
> fill：对于缺失值，可将fill的值赋值给被转型后的缺失值

```r
> mtcarsSpread <- mtcarsNew %>% spread(attribute, value) # 返回原来的数据格式
> head(mtcarsSpread)
                 car carb am cyl disp drat gear  hp  mpg  qsec vs    wt
1        AMC Javelin    2  0   8  304 3.15    3 150 15.2 17.30  0 3.435
2 Cadillac Fleetwood    4  0   8  472 2.93    3 205 10.4 17.98  0 5.250
3         Camaro Z28    4  0   8  350 3.73    3 245 13.3 15.41  0 3.840
4  Chrysler Imperial    4  0   8  440 3.23    3 230 14.7 17.42  0 5.345
5         Datsun 710    1  1   4  108 3.85    4  93 22.8 18.61  1 2.320
6   Dodge Challenger    2  0   8  318 2.76    3 150 15.5 16.87  0 3.520
```

> 使用spread函数后，数据的排列顺序有一定的调整

## 拆分合并

### unite

> unite(data, col, …, sep = “_”, remove = TRUE)
> data：为数据框
> col：被组合的新列名称
> …：指定哪些列需要被组合
> sep：组合列之间的连接符，默认为下划线
> remove：是否删除被组合的列

```r
> date <- as.Date('2019-04-01') + 0:14
> hour <- sample(1:24, 15)
> min <- sample(1:60, 15)
> second <- sample(1:60, 15)
> event <- sample(letters, 15)
> data <- data.frame(date, hour, min, second, event)
> data
         date hour min second event
1  2019-04-01    7  30     29     u
2  2019-04-02    9  43     36     a
3  2019-04-03   13  58     60     l
4  2019-04-04   20  22     11     q
5  2019-04-05    5  44     47     p
6  2019-04-06   18  52     37     k
7  2019-04-07   19  12     43     r
8  2019-04-08   12  35      6     i
9  2019-04-09   11   7     38     e
10 2019-04-10    1  14     21     b
11 2019-04-11    3  20     42     w
12 2019-04-12   14   1     32     t
13 2019-04-13   23  19     52     h
14 2019-04-14   21  41     26     s
15 2019-04-15    8  16     25     o
> dataNew <- unite(data, datehour, date, hour, sep = ' ') # 联合date 和 hour两列，以空格分割，合成datehour列
> dataNew
        datehour min second event
1   2019-04-01 7  30     29     u
2   2019-04-02 9  43     36     a
3  2019-04-03 13  58     60     l
4  2019-04-04 20  22     11     q
5   2019-04-05 5  44     47     p
6  2019-04-06 18  52     37     k
7  2019-04-07 19  12     43     r
8  2019-04-08 12  35      6     i
9  2019-04-09 11   7     38     e
10  2019-04-10 1  14     21     b
11  2019-04-11 3  20     42     w
12 2019-04-12 14   1     32     t
13 2019-04-13 23  19     52     h
14 2019-04-14 21  41     26     s
15  2019-04-15 8  16     25     o
```

### separate

> separate(data, col, into, sep = “[^[:alnum:]]+”, remove = TRUE,
> convert = FALSE, extra = “warn”, fill = “warn”, …)
> data：为数据框
> col：需要被拆分的列
> into：新建的列名，为字符串向量
> sep：被拆分列的分隔符
> remove：是否删除被分割的列

```r
> data1 <- separate(dataNew, datehour, c('date', 'hour'), sep = ' ') # 江上编数据重新拆分成原样
> data1
         date hour min second event
1  2019-04-01    7  30     29     u
2  2019-04-02    9  43     36     a
3  2019-04-03   13  58     60     l
4  2019-04-04   20  22     11     q
5  2019-04-05    5  44     47     p
6  2019-04-06   18  52     37     k
7  2019-04-07   19  12     43     r
8  2019-04-08   12  35      6     i
9  2019-04-09   11   7     38     e
10 2019-04-10    1  14     21     b
11 2019-04-11    3  20     42     w
12 2019-04-12   14   1     32     t
13 2019-04-13   23  19     52     h
14 2019-04-14   21  41     26     s
15 2019-04-15    8  16     25     o
```

`separate_rows`可以间该数据分割后储存在同一列

```r
> head(table3)
# A tibble: 6 x 3
  country      year rate           
  <chr>       <int> <chr>          
1 Afghanistan  1999 745/19987071   
2 Afghanistan  2000 2666/20595360  
3 Brazil       1999 37737/172006362  
4 Brazil       2000 80488/174504898  
5 China        1999 212258/1272915272
6 China        2000 213766/1280428583
> separate_rows(table3, rate)
# A tibble: 12 x 3
   country      year rate    
   <chr>       <int> <chr>   
 1 Afghanistan  1999 745     
 2 Afghanistan  1999 19987071  
 3 Afghanistan  2000 2666    
 4 Afghanistan  2000 20595360  
 5 Brazil       1999 37737   
 6 Brazil       1999 172006362 
 7 Brazil       2000 80488   
 8 Brazil       2000 174504898 
 9 China        1999 212258  
10 China        1999 1272915272
11 China        2000 213766  
12 China        2000 1280428583
```

## 数据拓展

### complete

`complete`和 `expand`都会创建出一个包含所有组合的tibble，只是两者得到的结果是不一样的

```r
> complete(mtcars, cyl, gear, carb)
# A tibble: 74 x 12
     cyl  gear  carb car        mpg  disp    hp  drat    wt  qsec    vs    am
   <dbl> <dbl> <dbl> <chr>    <dbl> <dbl> <dbl> <dbl> <dbl> <dbl> <dbl> <dbl>
 1     4     3     1 Toyota ~  21.5 120.     97  3.7   2.46  20.0     1     0
 2     4     3     2 NA        NA    NA      NA NA    NA     NA      NA    NA
 3     4     3     3 NA        NA    NA      NA NA    NA     NA      NA    NA
 4     4     3     4 NA        NA    NA      NA NA    NA     NA      NA    NA
 5     4     3     6 NA        NA    NA      NA NA    NA     NA      NA    NA
 6     4     3     8 NA        NA    NA      NA NA    NA     NA      NA    NA
 7     4     4     1 Datsun ~  22.8 108      93  3.85  2.32  18.6     1     1
 8     4     4     1 Fiat 128  32.4  78.7    66  4.08  2.2   19.5     1     1
 9     4     4     1 Toyota ~  33.9  71.1    65  4.22  1.84  19.9     1     1
10     4     4     1 Fiat X1~  27.3  79      66  4.08  1.94  18.9     1     1
# ... with 64 more rows
> expand(mtcars, cyl, gear, carb)
# A tibble: 54 x 3
     cyl  gear  carb
   <dbl> <dbl> <dbl>
 1     4     3     1
 2     4     3     2
 3     4     3     3
 4     4     3     4
 5     4     3     6
 6     4     3     8
 7     4     4     1
 8     4     4     2
 9     4     4     3
10     4     4     4
# ... with 44 more rows
```

## 缺失值处理

### drop_na

去掉包含NA的某些行

```r
> library(dplyr)
> df <- tibble(x = c(1, 2, NA), y = c("a", NA, "b"))
> df
# A tibble: 3 x 2
      x y  
  <dbl> <chr>
1     1 a  
2     2 NA   
3    NA b  
> drop_na(df, x) # 去掉x列包含NA的行
# A tibble: 2 x 2
      x y  
  <dbl> <chr>
1     1 a  
2     2 NA 
```

### fill

根据就近的非NA值补充NA数据

```r
> df <- data.frame(x1 = LETTERS[1:5], x2 =c(1, NA, NA, 3, NA))
> df
  x1 x2
1  A  1
2  B NA
3  C NA
4  D  3
5  E NA
> fill(df, x2)
  x1 x2
1  A  1
2  B  1
3  C  1
4  D  3
5  E  3
> fill(df, x2, .direction = "up")
  x1 x2
1  A  1
2  B  3
3  C  3
4  D  3
5  E NA
> fill(df, x2, .direction = "down")
  x1 x2
1  A  1
2  B  1
3  C  1
4  D  3
5  E  3
```

### replace_na

取代缺失值

```r
> replace_na(df, list(x2 = 2))
  x1 x2
1  A  1
2  B  2
3  C  2
4  D  3
5  E  2
```
