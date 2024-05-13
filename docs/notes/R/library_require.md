---
title: library和require的差别
author: Jeason
createTime: 2018/02/08 20:04:19
permalink: /R/library_require/
---
<!--more-->

## 背景

在R语言中，载入R包函数有两个：`library()` 和 `require()`，但是两者之间又存在很大的不同

## 区别

1. 在初始环境下载入一个R包，如果这个包不存在，执行 `library()`会提示Error，并且停止运行；执行 `require()`会提示Warning，继续执行运算

```r
library("abc")
Error in library("abc") : there is no package called 'abc'
```

```r
require("abc")
## Loading required package: abc
## Warning in library(package, lib.loc = lib.loc, character.only = TRUE, logical.return = TRUE, :
## there is no package called 'abc'
```

2. 在载入的包不存在时，`library()`只停止运算，只会显示错误提示，没有返回值；`require()`会返回一个逻辑值

```r
test <- library("abc")
Error in library("abc") : there is no package called 'abc
test #显示错误提示
Error: object 'test' not found
```

```r
test <- require("abc")
## Loading required package: abc
## Warning in library(package, lib.loc = lib.loc, character.only = TRUE, logical.return = TRUE, :
## there is no package called 'abc'
```

```r
test
## [1] FALSE
```

## 应用

在自定义函数中，可以利用 `require()`函数来检测运行环境，确保函数可以正确运行

```r
if(require("MASS")){
    print("MASS is loaded correctly")
} else {
    print("you need install MASS package")
    install.packages("MASS")
    if(require(MASS)){
        print("MASS installed and loaded")
    } else {
        stop("could not install MASS")
    }
}
```
