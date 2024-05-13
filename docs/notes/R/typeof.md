---
title: 数据类型
author: Jeason
createTime: 2019/05/31 20:36:47
permalink: /R/typeof/
---
在R语言中，查看对象的类型可以使用 `typeof`, `class`, `mode`, `storage.mode`。但是他们之间又有相互的区分，具体如下:

## `class`

根据 `class` 函数的帮助文档可知：

> R possesses a simple generic function mechanism which can be used for an object-oriented style of programming. Method dispatch takes place based on the class of the first argument to the generic function.

`class` 给出的是一个对象的抽象类型（也可以理解为对象的特定属性），主要针对的是R中的泛型函数，用于泛型函数的参数识别

> 可以这样理解：R是一种基于对象(object)的语言，R中的所有内容都是对象，每个对象都有不同的属性（attribute），而对象最重要的属性是他们的类型（class），决定了对象在R中可以进行什么样的操作

正常情况下，对于一般的R对象，如果没有类属性（class），那么它肯定有一个隐式的类属性（class），而隐式属性是类似于 `mode` 的结果

```r
a <- 1 # numeric
class(a) # 显示隐式类属性
[1] "numeric"
attributes(a) # attributes查看属性，不能看到隐式类属性
NULL
a <- structure(a, class = "a") # 赋予显式类属性  
class(a)
[1] "a"
attributes(a) # attributes查看属性，可以看到显式类属性
$class
[1] "a"
```

**注意**：`NULL` 对象是没有属性的，并且也不能对它赋予任何属性

> `inherits` 函数用来判断对象是否具有某一类属性（class）

### 基本类型情况

+ 对于单个值或者向量，`class` 返回隐式属性（与 `mode` 结果一致）；如：numeric，character
+ 对于矩阵，数组，日期，因子，`class` 返回matrix，array，Date，factor
+ 对于数据框，`class` 返回data.frame
+ 对于列表，`class` 返回list

## `mode` `storage.mode` `typeof`

`mode`、 `storage.mode`、 `typeof` 是同一类别的函数，它们识别的是**对象在内存中的存储类型**，即返回的是R中的**基本数据类型**

> R中的基本数据类型："logical", "integer", "double", "complex", "raw","character", "list", "expression", "name", "symbol" 和 "function"

对于 `mode`、 `storage.mode`、 `typeof` 三个函数来说，mode 是比较旧的版本，typeof 是更新的、也是更细的一种形式；三个函数检测的精细程度为：`mode` > `storage.mode` > `typeof`

```r
mode(1:5) # numeric
storage.mode(1:5) # integer
typeof(1:5) # integer

mode(`+`) # function
storage.mode(`+`) # function
typeof(`+`) # builtin
```
