---
title: 面向对象编程
author: Jeason
createTime: 2023/03/27 11:13:16
permalink: /R/r_object/
---
# 基础概念

每一个单独的**对象**都可以被称为对应类的一个**实例**（instance）。操作指定类的函数称为**方法**（method）。
把程序接口从具体的实现细节中分离开来的过程称为**封装**。
在OOP（面向对象编程）中，我们可以通过一个类创建出另外一个类，只需要指定新类的不同信息即可，这种方法称为**继承**。由此衍生出，被继承的类称为**父类**或**超类**（superclass），新创建的类称为**子类**（subclass）。
在OOP中，允许同一个方法名操纵不同对象并得到不同的结果，称为**多态**（polymorphism）。
通过一系列的其他类来创建新类的过程称为**组合**（composition）。在一些语言中，一个类可以从多个类中继承方法，称为**多重继承**（multiple inheritance）。

# 实例

大部分其他语言（比如java）的OOP概念都已经包含在R中，但R中具体的语法和结构却有所不同。我们需要通过调用函数 `setClass`来定义一个类，并且需要调用 `setMethod`函数来定义方法。
我们先看一个简单的例子：
我们要实现一个类用来表示时间序列，想定义一个对象包含如下信息：

+ 一个数据集合，取自固定周期的时间段
+ 一个开始时间
+ 一个结束时间
+ 时间序列的周期
  对于可以通过某些属性计算出来的属性信息是多余的。我们从定义一个名为“TimeSeries”的新类开始。

**我们将通过一个包含数据、开始时间、结束时间的数值型向量来描述一个时间序列。然后可以通过它们来计算出时间单位、频率和周期。**
作为类的使用者，如何展现这些信息并不重要。但是对于类的实现者来说，则非常重要。
R语言中对象存储信息的位置称为**槽**（slot）。我们将该对象需要包含的槽命名为 `data`、`start`、`end`。使用 `setClass`函数来创建新类：

```r
> setClass("TimeSeries",
+   representation(
+     data="numeric",
+     start="POSIXct",
+     end="POSIXct"
+     )
+ )
```

`representation`部分说明了每个槽所包含的R对象的类型。我们使用new函数（针对S4对象的一个泛型[构造方法](https://baike.baidu.com/item/%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95/10455265?fr=aladdin)）来新建一个TimeSeries对象。第一个参数名指定类名，其他参数指定槽的值：

```r
> my.TimeSeries <- new("TimeSeries",
+   data = c(1,2,3,4,5,6),
+   start=as.POSIXct("07/01/2009 0:00:00", tz="GMT",
+                   format="%m/%d/%Y %H:%M:%S"),
+   end=as.POSIXct("07/01/2009 0:05:00", tz="GMT",
+                   format="%m/%d/%Y %H:%M:%S")
+ )

> my.TimeSeries
An object of class "TimeSeries"
Slot "data":
[1] 1 2 3 4 5 6

Slot "start":
[1] "2009-07-01 GMT"

Slot "end":
[1] "2009-07-01 00:05:00 GMT"
```

**对于一个槽来说，并不是所有的可能值都是有效的**。比如，我们想要确保end发生在start之后，并且两者的长度是1。我们需要编写函数来验证该对象的有效性。R允许自定义函数用来验证特定的类。我们可以通过 `setValidity`函数来设定。

```r
> setValidity("TimeSeries",
+   function(object){
+     object@start <= object@end &&
+     length(object@start) == 1 &&
+     length(object@end) == 1
+   }
+ )
Class "TimeSeries" [in ".GlobalEnv"]

Slots:
                          
Name:     data   start     end
Class: numeric POSIXct POSIXct
```

现在我们可以检查对象在 `validObject`函数下是否有效。

```r
> validObject(my.TimeSeries)
[1] TRUE
```

之后我们新建 `TimeSeries`对象时，R将会自动检查新对象的有效性，并通过抛出错误来拒绝错误的对象。
（也可以在创建类的时候设定验证有效性的方法，详见setClass的完整定义）

定义了类之后，我们来创建新的方法。时间序列有一个属性是周期。我们可以创建一个方法用来提取时间序列中的周期信息。

```r
> period.TimeSeries <- function(object) {
+   if (length(object@data) > 1) {
+     (object@end - object@start) / (length(object@data) - 1)
+   } else {
+     Inf
+   }
+ }
```

**假如我们想创建一组函数用来从不同的对象中提取数据序列，而不用考虑对象的类型（即多态）。R提供了一种叫作泛型函数的机制可以实现**。当我们对某个对象调用泛型函数时，R会基于该对象的类找到正确的方法去执行。我们创建一个函数来从泛型对象中提取数据序列：

```r
> series <- function(object) { object@data }
> setGeneric("series")
[1] "series"
> series(my.TimeSeries)
[1] 1 2 3 4 5 6
```

调用 `setGeneric`可以将series重定义为泛型函数，其默认的方法是旧的series函数的函数体：

```r
> series
standardGeneric for "series" defined from package ".GlobalEnv"

function (object) 
standardGeneric("series")
<environment: 0x205e930>
Methods may be defined for arguments: object
Use  showMethods("series")  for currently available ones.
> showMethods("series")
Function: series (package .GlobalEnv)
object="ANY"
object="TimeSeries"
    (inherited from: object="ANY")
```

更进一步地，我们创建一个泛型函数来从对象中提取周期信息，并且特别指定它用来处理我们之前的创建的类。

```r
> period <- function(object) { object@period }
> setGeneric("period")
[1] "period"
> setMethod(period, signature=c("TimeSeries"), definition=period.TimeSeries)
[1] "period"
attr(,"package")
[1] ".GlobalEnv"
> showMethods("period")
Function: period (package .GlobalEnv)
object="ANY"
object="TimeSeries"
```

调用泛型函数 `period`可以计算TimeSeries对象：

```r
> period(my.TimeSeries)
Time difference of 1 mins
```

也可以对已存在的泛型函数定义自己的方法，比如为我们创建的类定义一个summary方法：

```r
> setMethod("summary",
+    signature="TimeSeries",
+    definition=function(object) {
+      print(paste(object@start,
+                     " to ",
+                 object@end,
+                 sep="", collapse=""))
+      print(paste(object@data, sep="", collapse=","))
+    }
+  )
[1] "summary"
> summary(my.TimeSeries)
[1] "2009-07-01 to 2009-07-01 00:05:00"
[1] "1,2,3,4,5,6"
```

甚至可以为一个已经存在的操作符定义新的方法：

```r
> setMethod("[",
+   signature=c("TimeSeries"),
+   definition=function(x, i, j, ..., drop) {
+     x@data[i]
+   }
+ )
[1] "["
> my.TimeSeries[3]
[1] 3


> my.TimeSeries # 查看my.TimeSeries对象
An object of class "TimeSeries"
Slot "data":
[1] 1 2 3 4 5 6

Slot "start":
[1] "2009-07-01 GMT"

Slot "end":
[1] "2009-07-01 00:05:00 GMT"
```

下面演示如何基于TimeSeries类实现一个WeightHistory类以记录个人的历史体重信息。

```r
> setClass("TimeSeries",
+   representation(
+     data="numeric",
+     start="POSIXct",
+     end="POSIXct"
+ 
+     )
+ )
> setValidity("TimeSeries",
+   function(object) {
+     object@start <= object@end &&
+     length(object@start)==1 &&
+     length(object@end)==1
+   }
+ )
Class "TimeSeries" [in ".GlobalEnv"]

Slots:
                          
Name:     data   start     end
Class: numeric POSIXct POSIXct
```

创建子类：

```r
> setClass(
+   "WeightHistory",
+   representation(
+     height = "numeric",
+     name = "character"
+  ),
+   contains = "TimeSeries"
+ )
```

添加实例对象：

```r
> john.doe <- new("WeightHistory", 
+   data=c(170,169,171,168,170,169),
+   start=as.POSIXct("02/14/2019 0:00:00", tz="GMT",
+     format="%m/%d/%Y %H:%M:%S"),
+   end=as.POSIXct("03/28/2019 0:00:00", tz="GMT",
+     format="%m/%d/%Y %H:%M:%S"),
+   height=72,
+   name="John Doe")
> john.doe
An object of class "WeightHistory"
Slot "height":
[1] 72

Slot "name":
[1] "John Doe"

Slot "data":
[1] 170 169 171 168 170 169

Slot "start":
[1] "2019-02-14 GMT"

Slot "end":
[1] "2019-03-28 GMT"
```

我们还可以通过另外一种方式构建一个体重记录。假设我们已经创建好了一个包含人名和体重的Person类。

```r
> setClass("Person",
+   representation(
+     height = "numeric",
+     name = "character")
+ )
```

我们可以创建一个基于TimeSeries类和Person类的体重记录类。

```r
> setClass(
+   "AltWeightHistory",
+   contains = c("TimeSeries", "Person")
+ )
```

可以发现，如果我们已经有了先期的开发经验或者相关类的代码，对新任务进行重构是非常方便的。短短几行代码就搞定了，充分利用了代码的可重复性。这也是OOP在高级语言中如此普遍的一个原因吧。

# S4类

## 类的定义

R中使用setClass函数来创建一个新类，格式如下：

```r
setClass(Class, representation, prototype, contains=character(), validity, access, where, version, sealed, package, S3methods=FALSE)
```

+ Class - 字符串，用来指定新类的名字（这是唯一必需的参数）
+ representation - 列表，列表的每一个元素代表不同的槽的类型，元素名为槽名（可以用”ANY”来指定类型为任意）
+ prototype - 包含各个槽的默认值的对象
+ contains - 字符向量，包含该类继承的父类名
+ validity - 验证该类的对象有效性的函数（默认没有检查），可以后续使用setValidity函数来设置
+ access - 无作用，为了和S-PLUS兼容
+ where - 存储该对象定义的环境
+ version - 无作用，为了和S-PLUS兼容
+ sealed - 逻辑值，表示该类是否还能被setClass按照原来的类名重新定义
+ package - 字符串，指定该类所在的R包名
+ S3methods - 逻辑值，表示是否使用了S3类写这个类

> 有些名字是属性的保留字因而不能作为槽名使用，包括”class”,”comment”,”dim”,”dimnames”,”names”,”rownames”和”tsp”。
> 可以使用 `setIs`函数来显式地定义继承关系。

```r
setIs(class1, class2, test=NULL, coerce=NULL, replace=NULL,
     by=character(), where=topenv(parent.frame()), classDef=, extensionObject=NULL, doComplete=TRUE)
```

可以使用 `setValidity`函数来显式地设置类的验证函数：

```r
setValidity(Class, method, where=topenv(parent.frame()))
```

## 对象的新建

我们可以通过调用类的new方法新建一个对象。专业术语中称为构造函数。

```r
new(c, ...)
```

在调用 `new`的时候，我们可以通过指定参数将数据填充到槽中。如果c中存在名为 `initialize`的方法，那么当新的对象被创建后，会立刻调用initialize函数进行初始化。

## 槽的存取

我们可以使用 `slot`函数或者简化符号 `@`来访问存储对象某个槽中的值，当然也可以用它来赋值。

```r
> john.doe@name
[1] "John Doe"
> slot(john.doe, "name")
[1] "John Doe"
```

## 对象的操作

使用 `is(o, c)`函数测试对象 `o`是否是类 `c`的成员。使用函数 `extend(c1, c2)`测试类 `c1`是否继承于类 `c2`。
如果要得到对象 `o`包含的所有槽的名称，使用 `slotNames(o)`，如果要得到槽的类型，使用 `getSlots(o)`。这两个函数也可以对类使用。

```r
> getSlots("WeightHistory")
     height        name        data       start         end 
  "numeric" "character"   "numeric"   "POSIXct"   "POSIXct" 

> slotNames("WeightHistory")
[1] "height" "name"   "data"   "start"  "end"   
> slotNames("john.doe")
character(0)
> slotNames(john.doe)
[1] "height" "name"   "data"   "start"  "end"  
```

注意一些差别，有引号和没引号结果是不同的。

## 方法

泛型函数允许使用同一个函数名来代表很多不同的函数，针对不同的类，调用不同的参数。
设定方法的第一步是创建一个合适的泛型函数，如果该函数还不存在，可以使用setGeneric函数来创建这个泛型方法：

```r
setGeneric(name, def=, group=list(), valueClass=character(),
          where=, package=, signature=, useAsDefault=,
          genericFUnction=, simpleInheritanceOnly=)
```

要把一个方法关联到某个类（具体而言就是指定泛型函数的signature参数），可以使用 `setMethod`函数：

```r
setMethod(f, signature=character(), definition,
         where = topenv(parent.frame()),
         valueClass=NULL, sealed=FALSE)
```

### 方法的管理

`methods`包包含了很多管理泛型方法的函数。

|     函数     |                            描述                            |
| :-----------: | :--------------------------------------------------------: |
|   isGeneric   |                 检查指定的泛型函数是否存在                 |
|    isGroup    |               检查指定的分组泛型函数是否存在               |
| removeGeneric |      删除某个泛型函数关联的所有方法以及该泛型函数本身      |
|  dumpMethod  |                    转存储某个方法到文件                    |
| findFunction | 根据函数名查找函数对象，返回搜寻列表中的位置或当前顶层环境 |
|  dumpMethods  |              转存储一个泛型函数关联的所有方法              |
|   signature   |       返回在某个指定路径下定义了方法的泛型函数的名称       |
| removeMethods |               删除某个泛型函数关联的所有方法               |
|  setGeneric  |              根据指定的函数名创建新的泛型函数              |

`methods`包同样包含了很多管理方法的函数。

|          函数          |                        描述                        |
| :---------------------: | :------------------------------------------------: |
| getMethod, selectMethod |        返回某个特定泛型函数和类型标记的方法        |
| existsMethod, hasMethod | 检查某个方法（指定了泛型函数名和类型标记）是否存在 |
|       findMethod       |               返回包含了某个方法的包               |
|       showMethods       |           显示关联了某个S4泛型的所有方法           |

更多的帮助通过 `library(help="methods")`命令获取。

# S3类

## S3的类

S3对象只是原始的R对象加上一些额外的属性（包括一个类名）而已。它没有正式的定义，我们可以手工修改属性甚至类。
之前我们使用了时间序列作为S4的例子，其实在R中已经存在了表示它的S3类，称为ts对象。我们这里创建简单的时间序列对象，查看它的属性以及一些底层对象。

```r
> my.ts <- ts(data=c(1,2,3,4,5), start=c(2009,2), frequency=12)
> my.ts
     Feb Mar Apr May Jun
2009   1   2   3   4   5
> attributes(my.ts)
$tsp
[1] 2009.083 2009.417   12.000

$class
[1] "ts"

> typeof(my.ts)
[1] "double"
> unclass(my.ts)
[1] 1 2 3 4 5
attr(,"tsp")
[1] 2009.083 2009.417   12.000
> attributes(my.ts)
$tsp
[1] 2009.083 2009.417   12.000

$class
[1] "ts"
```

可以发现ts对象只不过是一个数值向量加上 `class`和 `tsp`这两个属性。`class`属性起始只是 `ts`对象的类名。我们无法像S4对象中操作槽来提取S3对象的属性。

## S3方法

S3的泛型函数是通过命名约定来实现的。以下是步骤：

1. 为泛型函数挑选一个名字，这里我们命名为gname。
2. 新建一个名为gname的函数，在gname的函数体中，调用UseMethod("gname")
3. 为每一个想要使用gname的类创建一个名为gname.classname的函数，该函数的第一个参数必须是该对象的类名classname。
   一个现成的例子是plot函数：

```r
> plot
function (x, y, ...) 
UseMethod("plot")
<bytecode: 0x1851c30>
<environment: namespace:graphics>
```

在调用plot的时候，plot将会调用UseMethod("plot")。UseMethod会查看x对象的类，然后查找名为plot.class的函数，然后调用该函数。
比如给我们之前定义的TimeSeries类添加一个plot方法。

```r
> plot.TimeSeries <- function(object, ...) {
+   plot(object@data, ...)
+ }
```
