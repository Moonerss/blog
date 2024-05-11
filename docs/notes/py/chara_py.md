---
title: 字符标准化方法
author: Jeason
icon: mdi:tooltip-text-outline
createTime: 2019/06/09 20:39:34
permalink: /py/chara_py/
---

&ensp;&ensp; 字符串格式化用于解决字符串和变量同时输出时的格式安排。Python中有str.format()，format()和%三种格式控制的方法，但主要采用str.format()方法进行字符串的格式化。  

## `str.format()`方法  

`str.format()`方法的基本使用格式：  

```python
<模板字符串>.format(<由逗号分隔的参数>)
```

其中模板字符串是由一系列的槽({})组成，用来控制修改字符串中嵌入值出现的位置，基本思路：将`str.format()`方法中逗号分隔的参数按照序号关系替换到模板字符串的槽中，槽用大括号({})来表示，如果大括号中没有序号，则按照出现顺序替换。  

```python
'{1} {0}'.format('abc', 123)  # 可以不按顺序进行位置映射，输出'123 abc'

'{} {}'.format('abc', 123)  # 可以不指定参数名称，输出'abc 123'
```

> **注意**：序号是从0开始，而不是1。  

槽的内部格式为：  

```python
{<参数序号>：<格式控制标记>}
```

在复杂格式控制方面，format函数也提供了强大的控制方式，它的格式为：  

```
{ : [[填充字符]对齐方式][符号标志][#][宽度][,][.精度][类型] }
```

|   类型   |                                    说明                                     |
| :------: | :-------------------------------------------------------------------------: |
|    :     |                    引导符号，分割参数序号和格式控制标记                     |
| 填充字符 |                    用于填充的单个字符，不填时默认为空格                     |
| 对齐方式 |           `<`左对齐，`>`右对齐，`^`居中，不足部分会用填充字符填充           |
| 符号标志 | `+`表示有符号（正数前显示+，负数前显示-），空格表示正数前加空格来和负数对齐 |
|    #     |              表示是否在二、八、十六进制前显示0b、0o、0x等符号               |
|   宽度   |                输出字符串的宽度，不足部分自动用填充字符补齐                 |
|    ,     |          英文状态下的逗号，数字的千分位分隔符，适用于整数和浮点数           |
|   精度   |                            浮点数小数部分的精度                             |
|   类型   |               整数类型b，c，d，o，x，X，浮点数类型e，E，f，%                |

举例如下：  

```python
'{:S^+#016,.2f}'.format(1234)  # 输出'SSS+1,234.00SSSS'
```

整数类型输出格式有6种：

+ b：输出整数的二进制形式。
+ c：输出整数对应的Unicode字符。
+ d：输出整数的十进制形式。
+ o：输出整数的八进制形式。
+ x：输出整数的小写十六进制形式。
+ X：输出整数的大写十六进制形式。  

浮点数类型输出格式有4种：

+ e：输出浮点数对应的小写字母e的指数形式。
+ E：输出浮点数对应的小写字母e的指数形式。
+ f：输出浮点数的标准浮点形式。
+ %：输出浮点数的百分形式。  

## `format`方法  

`format()`方法和`str.format()`方法用法差不多，只不过，`format()`方法中槽的内部只有格式控制标记，没有参数序号和引导符号。  

```python
>>> format('aksfhakefhk','<20')
'aksfhakefhk  
>>> format('lfajlajl', '*>30')    # 右对齐，填充*
'**********************lfajlajl'
```

## `f-string`方法  

f-string就是以f''开头的字符串，字符串内容和format方法中的格式一样，但是可以直接将变量带入到字符串中，可读性进一步增加，例如：  

```python
amount = 1234
f'请转账给我{amount:,.2f}元'  # '请转账给我1,234.00元'
```

## `%`方法  

%方法类似于C和Fortran语言中的格式化输入输出，%s表示格式化为字符串，%d表示格式化为数字。  

例如：  

```python
print("I'm %s. I'm %d year old" % ('jeason', 23))
```
格式化字符串时，Python使用一个字符串作为**模板**。模板中有**格式符**，这些格式符为真实值预留位置，并说明真实数值应该呈现的格式。Python用一个tuple将多个值传递给模板，每个值对应一个格式符。在模板和tuple之间，有一个%号分隔，它代表了**格式化操作**  

格式符为真实值预留位置，并控制显示的格式。格式符可以包含有一个类型码，用以控制显示的类型，如下:  

| 格式符 |              意义              |
| :----: | :----------------------------: |
|   %s   |    字符串 (采用str()的显示)    |
|   %r   |   字符串 (采用repr()的显示)    |
|   %c   |            单个字符            |
|   %b   |           二进制整数           |
|   %d   |           十进制整数           |
|   %i   |           十进制整数           |
|   %o   |           八进制整数           |
|   %x   |          十六进制整数          |
|   %e   |        指数 (基底写为e)        |
|   %E   |        指数 (基底写为E)        |
|   %f   |             浮点数             |
|   %F   |        浮点数，与上相同        |
|   %g   | 指数(e)或浮点数 (根据显示长度) |
|   %G   | 指数(E)或浮点数 (根据显示长度) |
|   %%   |            字符"%"             |

除了对数据类型的指定，%操作符也支持更复杂的格式控制：  

```python
%[数据名称][对齐标志][宽度].[精度]类型
```

|   类型   |                                                           说明                                                            |
| :------: | :-----------------------------------------------------------------------------------------------------------------------: |
| 数据名称 |                                          数据名称用于字典赋值，如果不是就不用写                                           |
| 对齐标志 | 可以有+,-,' '或0。+表示右对齐。-表示左对齐。' '为一个空格，表示在正数的左侧填充一个空格，从而与负数对齐。0表示使用0填充。 |
|   宽度   |                                        格式化后的字符长度，如果不够用0或者空格补齐                                        |
|   精度   |                                                      小数点后的位数                                                       |
|   类型   |                                                         数据类型                                                          |

---------------------
## Reference  

[Python补充05 字符串格式化 (%操作符)](https://www.cnblogs.com/vamei/archive/2013/03/12/2954938.html)  

[python中的字符串的格式化](https://www.zhouzying.cn/84.html)  