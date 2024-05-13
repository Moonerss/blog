---
title: tibble
author: Jeason
createTime: 2019/03/14 20:15:07
permalink: /R/tidyverse/tibble/
---
`tibble`是升级版的 `data.frame`，它保留了 `data.famre`的优势，并且以更友好的方式展示出来

### 构建tibble

+ `readr`已知读入数据形成tibble
+ `tibble()`直接构建
+ `tribble()`直观构建
+ `as_tibble()`转换格式

```r
df2 <- read_csv(readr_example("challenge.csv"), guess_max = 1001)
#>  Parsed with column specification:
#>  cols(
#>    x = col_double(),
#>    y = col_date(format = "")
#>  )
tibble(x = 1:3, y = list(1:5, 1:10, 1:20))
#>  # A tibble: 3 x 2
#>        x y     
#>    <int> <list>  
#>  1     1 <int [5]> 
#>  2     2 <int [10]>
#>  3     3 <int [20]>
tribble(
~x, ~y,
"a", 1:3,
"b", 4:6
)
#> A tibble: 2 x 2
#>   x     y    
#>   <chr> <list>   
#> 1 a     <int [3]>
#> 2 b     <int [3]>
l <- list(x = 1:500, y = runif(500), z = 500:1)
df <- as_tibble(l)
#>  A tibble: 500 x 3
#>        x     y     z
#>    <int> <dbl> <int>
#>  1     1 0.311   500
#>  2     2 0.512   499
#>  3     3 0.440   498
#>  4     4 0.501   497
#>  5     5 0.131   496
#>  6     6 0.566   495
#>  7     7 0.647   494
#>  8     8 0.200   493
#>  9     9 0.121   492
#> 10    10 0.315   491
#> # ... with 490 more rows
```

### tibble和data.frame的区别

#### print结果

`tibble`默认只展示前10行的信息

```r
tibble(x = -5:1000)
#> # A tibble: 1,006 x 1
#>        x
#>    <int>
#>  1    -5
#>  2    -4
#>  3    -3
#>  4    -2
#>  5    -1
#>  6     0
#>  7     1
#>  8     2
#>  9     3
#> 10     4
#> # … with 996 more rows
```

> 可以使用 `options(tibble.print_max = n, tibble.print_min = m)`参数设置展示的信息

#### 子集提取

`tibble`通过 `[`提取子集返回的是一个 `tibble`，如果提取某一列需要使用 `[[`或者 `$`

```r
df2 <- tibble(x = 1:3, y = 3:1)
class(df2)
#> [1] "tbl_df"     "tbl"        "data.frame"
class(df2[, 1])
#> [1] "tbl_df"     "tbl"        "data.frame"
class(df2[[1]])
#> [1] "integer"
class(df2$x)
#> [1] "integer"
```

#### 自动填充

在构建 `tibble`时，只有长度为1的值才会被循环填充

```r
tibble(a = 1:3, b = 1)
#> # A tibble: 3 x 2
#>       a     b
#>   <int> <dbl>
#> 1     1     1
#> 2     2     1
#> 3     3     1
tibble(a = 1:3, c = 1:2)
#> Error: Tibble columns must have consistent lengths, only values of length one are recycled:
#> * Length 2: Column `c`
#> * Length 3: Column `a`
```

#### 没有行名

`tibble`对象中是没有行名的，因此需要一些函数进行辅助操作

+ `has_rownames(.data)`：判断数据是否有行名
+ `remove_rownames(.data)`：去掉数据行名
+ `rownames_to_column(.data, var = "rowname")`：行名转为数据的第一列，`var`是行名所在列的名字
+ `rowid_to_column(.data, var = "rowid")`：行ID号转为数据的第一列，`var`是行名所在列的名字
+ `column_to_rownames(.data, var = "rowname")`：列转行名

### 常用操作

+ `add_column`和 `add_row`添加行和列
  ```r
   add_column(df, z = -1:1, w = 0)
   #>      # A tibble: 3 x 4
   #>        x     y     z     w
   #>     <int> <int> <int> <dbl>
   #> 1     1     3    -1     0
   #> 2     2     2     0     0
   #> 3     3     1     1     0
  ```
+ `enframe`和 `deframe`把向量变成 `tibble`和把 `tibble`变成向量
  ```r
  enframe(c(a = 5, b = 7), name = "name", value = "value")
  #>   # A tibble: 2 x 2
  #>     name  value
  #>     <chr> <dbl>
  #>  1  a         5
  #>  2  b         7
  deframe(tibble(a = 1:3))
  #> [1] 1 2 3
  ```
+ `glimpse()`相当于 `tibble`的 `str()`
  ```r
  glimpse(df)
  #>  Observations: 3
  #>  Variables: 2
  #>  $ x <int> 1, 2, 3
  #>  $ y <int> 3, 2, 1
  ```
+ `tbl_sum`
  提供简要数据信息
  ```r
  tbl_sum(df)
  #> A tibble 
  #> "3 x 2" 
  ```
