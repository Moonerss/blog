---
title: readr
author: Jeason
icon: mdi:tooltip-text-outline
createTime: 2019/08/18 11:13:16
permalink: /R/tidyverse/readr/
---

`readr`包是`tidyverse`的一部分，它提供了一种快速友好的方式来读取规则的矩形文件（如：csv，tsv，fwf等）。  

## 安装  

```r
# The easiest way to get readr is to install the whole tidyverse:
install.packages("tidyverse")

# Alternatively, install just readr:
install.packages("readr")

# Or the the development version from GitHub:
# install.packages("devtools")
devtools::install_github("tidyverse/readr")
```

## 使用指南  

### 数据读入  

使用`readr`读取数据需要指定两个内容：
1. 整个文件的格式（csv、tsv、fwf）  
2. 文件中每一列的特定属性（double、integer、numeric）    

一般来说`readr`会自动猜测每一列的属性，并且自动赋予其最合适的数据类型  

`readr`提供了七个`read_*`函数，来适应不同格式文件的读取：  

+ [`read_csv()`](https://readr.tidyverse.org/reference/read_delim.html): 逗号分隔符文件（csv）  
+ [`read_tsv()`](https://readr.tidyverse.org/reference/read_delim.html): tab分隔符文件（tsv）  
+ [`read_delim()`](https://readr.tidyverse.org/reference/read_delim.html): 自定义分隔符文件  
+ [`read_fwf()`](https://readr.tidyverse.org/reference/read_fwf.html): 固定宽度的文件  
+ [`read_table()`](https://readr.tidyverse.org/reference/read_table.html): 空格分隔符的文件,类似于`read.table()`  
+ [`read_log()`](https://readr.tidyverse.org/reference/read_log.html): 读取web log 文件  

> 这些函数运行之后返回的是一个tibble对象，是data frame的进阶版  

`readr`比较友好的是可以对 `.gz`, `.bz2`, `.xz`, `.zip`等文件自动解压，对 `http://`, `https://`, `ftp://`, `ftps://`等链接自动进行下载  

### 数据类型转换  

`readr`是将数据按照字符读入，然后自行判定数据的属性。因此`readr`提供了`parse_*`和`guess_parser()`来判断和指定元素的属性：  

#### 判断属性  

```r
guess_parser(c("a", "b", "c"))
#> [1] "character"
guess_parser(c("1", "2", "3"))
#> [1] "double"
guess_parser(c("1,000", "2,000", "3,000"))
#> [1] "number"
guess_parser(c("2001/10/10"))
#> [1] "date"
```

#### 指定属性  

> `parse_*`函数类似于`as.numeric()`等函数

```r
parse_integer(c("1", "2", "3"))
#> [1] 1 2 3
parse_double(c("1.56", "2.34", "3.56"))
#> [1] 1.56 2.34 3.56
parse_logical(c("true", "false"))
#> [1]  TRUE FALSE
```

一般来说`parse_integer`和`parse_double`的判定方式比较严格，要求字符中不能包含除数字外的其他字符；`readr`提供了`parse_number`来更为灵活的读取数字，它会忽略掉字符串中的非数字字符。  

```r
parse_number(c("0%", "10%", "150%"))
#> [1]   0  10 150
parse_number(c("$1,234.5", "$12.45"))
#> [1] 1234.50   12.45
```

读取向量作为因子时，需要设定`levels`顺序  

```r
parse_factor(c("a", "b", "a"), levels = c("a", "b", "c"))
#> [1] a b a
#> Levels: a b c
```

### 数据属性查看  

可以使用`spec_*`等函数查看数据整体的列的属性  

```r
x <- spec_csv(readr_example("challenge.csv"))
#> Parsed with column specification:
#> cols(
#>   x = col_double(),
#>   y = col_logical()
#> )
```

> 注意：`readr`默认只查看数据的前1000行，当后续数据的属性发生变化时，是不能检测到的，因此如果查看全局属性，需要添加参数`guess_max`  

对于特定的`tibble`对象，则使用`spec()`查看  

```r
spec(df1)
#> cols(
#>   x = col_double(),
#>   y = col_logical()
#> )
spec(df2)
#> cols(
#>   x = col_double(),
#>   y = col_date(format = "")
#> )
```

### 更改默认属性  

在读取数据时，可以使用`col_type`参数手动设置每列数据的属性  

```r
df3 <- read_csv(
  readr_example("challenge.csv"), 
  col_types = cols(
    x = col_double(),
    y = col_date(format = "")
  )
)
```

常用的属性设置和缩写如下：  

|             属性              |    简写    |                       备注                       |
| :---------------------------: | :--------: | :----------------------------------------------: |
|        `col_logical()`        |    `l`     |       containing only T, F, TRUE or FALSE        |
|        `col_integer()`        |    `i`     |                     integers                     |
|        `col_double()`         |    `d`     |                     doubles                      |
|       `col_character()`       |    `c`     |                 everything else                  |
| `col_factor(levels, ordered)` |    `f`     |              a fixed set of values               |
|    `col_date(format = "")`    |    `D`     |          with the locale’s date_format          |
|    `col_time(format = "")`    |    `t`     |          with the locale’s time_format          |
|  `col_datetime(format = "")`  |    `T`     |                ISO8601 date times                |
|        `col_number()`         |    `n`     |                     numbers                      |
|         `col_skip()`          | `_` or `-` |            don’t import this column             |
|         `col_guess()`         |    `?`     | parse using the “best” type based on the input |
