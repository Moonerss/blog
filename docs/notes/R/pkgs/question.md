---
title: R包构建问题汇总
author: Jeason
createTime: 2023/04/03 11:13:16
permalink: /R/pkgs/question/
---
## global variable

在开发R包的过程中，使用R CMD check进行检测时，出现许多的NOTE:

```r
❯ checking R code for possible problems ... NOTE
  my_fn: no visible binding for global variable ‘mpg’
```

这些NOTE一般是由于某一个变量并没有在全局环境中声明所导致的，解决的方法有多种，具体思路如下：

### resolution 1

使用 `globalVariables()`函数包裹所有的变量进行全局声明，如：

```r
globalVariables(c("mpg", "hp", "mpg_div_hp"))
```

对于一些特殊的语法糖符号也可以使用该方法进行声明，如：

```r
globalVariables(c(":=", "!!"))
```

### resolution 2

在函数的开始部分对非全局变量进行声明，定义为 `NULL`值

```r
my_fn <- function() {
  mpg <- hp <- mpg_div_hp <- NULL
  mtcars <- data.table::data.table(mtcars)
  mtcars[, mpg_div_hp := mpg / hp]
  mtcars[]
}
```

### resolution 3

该方法主要适用于 `tidyverse`编程的函数，在函数中引入 `.data`进行声明：

```r
# 原函数
my_fn <- function() {
  mtcars %>% 
    mutate(mpg_div_hp = mpg / hp)
}

## 声明后
#' @importFrom rlang .data
my_fn <- function() {
  mtcars %>% 
    mutate(mpg_div_hp = .data$mpg / .data$hp)
}
```

## 多个函数使用同一个文档

可以使用`@rdname`+ 统一别名 (`@aliases`)的方式

```r
#' 数据清洗函数组
#'
#' 这些函数用于数据清洗的不同阶段。
#' 
#' @param x 输入数据
#' @param na.rm 是否移除NA值
#' @return 清洗后的数据
#' @rdname data_cleaning
#' @aliases clean_data remove_outliers standardize_values
#' @export
clean_data <- function(x, na.rm = TRUE) {
  # 函数实现
}

#' @rdname data_cleaning
#' @export
remove_outliers <- function(x, na.rm = TRUE) {
  # 函数实现
}

#' @rdname data_cleaning
#' @export
standardize_values <- function(x, na.rm = TRUE) {
  # 函数实现
}
```


# Reference：

+ [No visible binding for global variable](https://www.r-bloggers.com/2019/08/no-visible-binding-for-global-variable/)
