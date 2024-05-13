---
title: 数据类型
author: Jeason
icon: mdi:tooltip-text-outline
createTime: 2019/06/09 20:39:34
permalink: /py/dataformat_py/
---

## 基本数据类型  

+ Number（数字）  
+ String（字符串）  
+ List（列表）  
+ Tuple（元组）  
+ Set（集合）  
+ Dictionary（字典）  

> 不可变数据（3 个）：Number（数字）、String（字符串）、Tuple（元组）  
> 可变数据（3 个）：List（列表）、Dictionary（字典）、Set（集合）  

### 数字类型  

Python3 支持 int、float、bool、complex（复数）。  

内置的 `type()` 函数可以用来查询变量所指的对象类型。 `isinstance()` 用来判断数据类型  

> isinstance 和 type 的区别在于:  
> + `type()` 不会认为子类是一种父类类型  
> + `isinstance()` 会认为子类是一种父类类型  

### String（字符串）  

Python中的字符串用单引号 `'` 或双引号 `"` 括起来，同时使用反斜杠 `\` 转义特殊字符。  

Python 使用反斜杠(`\`)转义特殊字符，如果你不想让反斜杠发生转义，可以在字符串前面添加一个 `r` ，表示原始字符串   

另外，反斜杠(`\`)可以作为续行符，表示下一行是上一行的延续。也可以使用 `"""..."""` 或者 `'''...'''` 跨越多行。  

**注意**，Python 没有单独的字符类型，一个字符就是长度为1的字符串。  

> 1. 反斜杠可以用来转义，使用r可以让反斜杠不发生转义。  
> 2. 字符串可以用+运算符连接在一起，用*运算符重复。  
> 3. Python中的字符串有两种索引方式，从左往右以0开始，从右往左以-1开始。  
> 4. Python中的字符串不能改变。  

### List（列表）  

列表可以完成大多数集合类的数据结构实现。列表中元素的类型可以不相同，它支持数字，字符串甚至可以包含列表（所谓嵌套）。  

列表是写在方括号 [] 之间、用逗号分隔开的元素列表。  

列表索引：  
![list_slicing1](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/dataformat/list_slicing1.png)

与Python字符串不一样的是，列表中的元素是可以改变的。  

> 1. List写在方括号之间，元素用逗号隔开。  
> 2. 和字符串一样，list可以被索引和切片。  
> 3. List可以使用+操作符进行拼接。  
> 4. List中的元素是可以改变的。  

### Tuple（元组）  

元组（tuple）与列表类似，不同之处在于元组的元素不能修改。元组写在小括号 `()` 里，元素之间用逗号隔开。元组中的元素类型也可以不相同。  

虽然tuple的元素不可改变，但它可以包含可变的对象，比如list列表。  

string、list 和 tuple 都属于 sequence（序列）。

**注意**：

1. 与字符串一样，元组的元素不能修改。  
2. 元组也可以被索引和切片，方法一样。  
3. 注意构造包含 0 或 1 个元素的元组的特殊语法规则。  
4. 元组也可以使用+操作符进行拼接。  

### Set（集合）  

集合（set）是由一个或数个形态各异的大小整体组成的，构成集合的事物或对象称作元素或是成员，是一个无序的不重复元素序列。  

基本功能是进行成员关系测试和删除重复元素。  

可以使用大括号 `{ }` 或者 `set()` 函数创建集合，注意：创建一个空集合必须用 `set()` 而不是 `{ }`，因为 `{ }` 是用来创建一个空字典。  

### Dictionary（字典）  

字典（dictionary）是Python中另一个非常有用的内置数据类型。  

列表是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。  

字典是一种映射类型，字典用 { } 标识，它是一个无序的 键(key) : 值(value) 的集合。  

键(key)必须使用不可变类型。  

在同一个字典中，键(key)必须是唯一的。  

> 1. 字典是一种映射类型，它的元素是键值对。  
> 2. 字典的关键字必须为不可变类型，且不能重复。  
> 3. 创建空字典使用 `{ }`。  

## Python数据类型转换  

有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可。  

以下几个内置的函数可以执行数据类型之间的转换。这些函数返回一个新的对象，表示转换的值。  

|          函数           |                        描述                         |
| :---------------------: | :-------------------------------------------------: |
|    `int(x [,base])`     |                  将x转换为一个整数                  |
|       `float(x)`        |                 将x转换到一个浮点数                 |
| `complex(real [,imag])` |                    创建一个复数                     |
|        `str(x)`         |                将对象 x 转换为字符串                |
|        `repr(x)`        |             将对象 x 转换为表达式字符串             |
|       `eval(str)`       | 用来计算在字符串中的有效Python表达式,并返回一个对象 |
|       `tuple(s)`        |               将序列 s 转换为一个元组               |
|        `list(s)`        |               将序列 s 转换为一个列表               |
|        `set(s)`         |                   转换为可变集合                    |
|        `dict(d)`        |  创建一个字典。d 必须是一个序列 (key,value)元组。   |
|     `frozenset(s)`      |                  转换为不可变集合                   |
|        `chr(x)`         |              将一个整数转换为一个字符               |
|        `ord(x)`         |             将一个字符转换为它的整数值              |
|        `hex(x)`         |         将一个整数转换为一个十六进制字符串          |
|        `oct(x)`         |          将一个整数转换为一个八进制字符串           |

## 运算符  

### 算术运算符  

加（`+`）、减（`-`）、乘（`*`）、除（`/`）、取余（`%`）、乘幂（`**`）、向下整除（`//`）  

### 比较运算符  

等于（`==`）、不等于（`!=`）、大于（`>`）、小于（`<`）、大于等于（`>=`）、小于等于（`<=`）  

> 返回布尔值：**TRUE**或**FALSE**  

### 赋值运算符  

| 运算符 |       描述       |                 实例                  |
| :----: | :--------------: | :-----------------------------------: |
|   =    | 简单的赋值运算符 | c = a + b 将 a + b 的运算结果赋值为 c |
|   +=   |  加法赋值运算符  |        c += a 等效于 c = c + a        |
|   -=   |  减法赋值运算符  |        c -= a 等效于 c = c - a        |
|   *=   |  乘法赋值运算符  |        c *= a 等效于 c = c * a        |
|   /=   |  除法赋值运算符  |        c /= a 等效于 c = c / a        |
|   %=   |  取模赋值运算符  |        c %= a 等效于 c = c % a        |
|  **=   |   幂赋值运算符   |       c **= a 等效于 c = c ** a       |
|  //=   | 取整除赋值运算符 |       c //= a 等效于 c = c // a       |

### 按位运算符  


| 运算符 |                                              描述                                               |                                      实例                                      |
| :----: | :---------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------: |
|   &    |           按位与运算符：参与运算的两个值,如果两个相应位都为1,则该位的结果为1,否则为0            |                  (a & b) 输出结果 12 ，二进制解释： 0000 1100                  |
|        |                  按位或运算符：只要对应的二个二进位有一个为1时，结果位就为1。                   |                                       (a                                       | b) 输出结果 61 ，二进制解释： 0011 1101 |
|   ^    |                         按位异或运算符：当两对应的二进位相异时，结果为1                         |                  (a ^ b) 输出结果 49 ，二进制解释： 0011 0001                  |
|   ~    |        按位取反运算符：对数据的每个二进制位取反,即把1变为0,把0变为1。`~x` 类似于 `-x-1`         | (~a ) 输出结果 -61 ，二进制解释： 1100 0011， 在一个有符号二进制数的补码形式。 |
|   <<   | 左移动运算符：运算数的各二进位全部左移若干位，由"<<"右边的数指定移动的位数，高位丢弃，低位补0。 |                  a << 2 输出结果 240 ，二进制解释： 1111 0000                  |
|   >>   |      右移动运算符：把">>"左边的运算数的各二进位全部右移若干位，">>"右边的数指定移动的位数       |                  a >> 2  输出结果 15 ，二进制解释： 0000 1111                  |

### 逻辑运算符  

| 运算符 | 逻辑表达式 |                                  描述                                   |
| :----: | :--------: | :---------------------------------------------------------------------: |
|  and   |  x and y   | 布尔"与" - 如果 x 为 False，x and y 返回 False，否则它返回 y 的计算值。 |
|   or   |   x or y   |    布尔"或" - 如果 x 是 True，它返回 x 的值，否则它返回 y 的计算值。    |
|  not   |   not x    | 布尔"非" - 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。  |

### 成员运算符  

| 运算符 |                          描述                           |                       实例                        |
| :----: | :-----------------------------------------------------: | :-----------------------------------------------: |
|   in   |   如果在指定的序列中找到值返回 True，否则返回 False。   |   x 在 y 序列中 , 如果 x 在 y 序列中返回 True。   |
| not in | 如果在指定的序列中没有找到值返回 True，否则返回 False。 | x 不在 y 序列中 , 如果 x 不在 y 序列中返回 True。 |

### 身份运算符  


| 运算符 |                    描述                     |                                             实例                                             |
| :----: | :-----------------------------------------: | :------------------------------------------------------------------------------------------: |
|   is   |   is 是判断两个标识符是不是引用自一个对象   |       x is y, 类似 id(x) == id(y) , 如果引用的是同一个对象则返回 True，否则返回 False        |
| is not | is not 是判断两个标识符是不是引用自不同对象 | x is not y ， 类似 id(a) != id(b)。如果引用的不是同一个对象则返回结果 True，否则返回 False。 |

## 运算符优先级  

运算符由高到低优先级为：  


|          运算符          |                          描述                       |
| :----------------------: | :------------------------------------------------: |
|            **            |                   指数 (最高优先级)                 |
|          ~ + -           | 按位翻转, 一元加号和减号 (最后两个的方法名为 +@ 和 -@) |
|         * / % //         |                  乘，除，取模和取整除                |
|           + -            |                        加法减法                     |
|          >> <<           |                    右移，左移运算符                 |
|            &             |                        位 'AND'                    |
|          ^ `|`           |                        位运算符                     |
|        <= < > >=         |                       比较运算符                    |
|         <> == !=         |                       等于运算符                    |
| = %= /= //= -= += *= **= |                       赋值运算符                    |
|        is is not         |                       身份运算符                    |
|        in not in         |                       成员运算符                    |
|        and or not        |                       逻辑运算符                    |