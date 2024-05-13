---
title: stringr
author: Jeason
createTime: 2019/08/18 11:13:16
permalink: /R/tidyverse/stringr/
---
## 字符串计算函数

> str_length:	字符串长度
> str_count:	字符串计数
> str_order:	字符串排序

### str_length,字符串长度

+ 函数定义：

```r
str_length(string)
```

+ 参数列表：string: 字符串，字符串向量。
+ 使用示例：

```r
> str_length(c("I", "am", NA))
[1]  1  2  2 NA
```

### str_count, 字符串计数

+ 函数定义：

```r
str_count(string, pattern = "")
```

+ 参数列表：string: 字符串，字符串向量。pattern: 匹配的字符。
+ 使用示例：

对字符串中匹配的字符计数

```r
> str_count('aaa444sssddd', "a")
[1] 3
```

对字符串向量中匹配的字符计数

```r
> fruit <- c("apple", "banana", "pear", "pineapple")
> str_count(fruit, "a")
[1] 1 3 1 1
```

> 对于一些特殊字符如："."，需要进行正则匹配

### str_order, 字符串索引排序

+ 函数定义：

```r
str_order(x, decreasing = FALSE, na_last = TRUE, locale = "en", numeric = FALSE, ...)  

str_sort(x, decreasing = FALSE, na_last = TRUE, locale = "en", numeric = FALSE, ...)
```

+ 参数列表：x: 字符串，字符串向量。decreasing: 排序方向。na_last:NA值的存放位置，一共3个值，TRUE放到最后，FALSE放到最前，NA过滤处理locale:按哪种语言习惯排序numeric: 是否只按照数字大小进行排序
+ 使用示例：

```r
> str_sort(letters[1:5])
[1] "a" "b" "c" "d" "e"
> str_order(letters[1:5])
[1] 1 2 3 4 5

## 按照数字进行排序
> x <- c("100a10", "100a5", "2b", "2a")
> str_sort(x)
[1] "100a10" "100a5"  "2a"     "2b"  
> str_sort(x, numeric = TRUE)
[1] "2a"     "2b"     "100a5"  "100a10"
```

## 字符串拼接函数

> str_c:	字符串拼接
> str_trim:	去掉字符串的空格和TAB(\t)
> str_pad:	补充字符串的长度
> str_dup:	复制字符串
> str_wrap:	控制字符串输出格式
> str_sub:	截取字符串

### str_c，字符串拼接

+ 函数定义：

```r
str_c(..., sep = "", collapse = NULL)
```

+ 参数列表：…: 多参数的输入sep: 把多个字符串拼接为一个大的字符串，用于字符串的分割符collapse: 把多个向量参数拼接为一个大的字符串，用于字符串的分割符
+ 使用示例：

把多个字符串拼接为一个大的字符串。

```r
> str_c('a','b')
[1] "ab"
> str_c('a','b',sep='-')
[1] "a-b"
> str_c(c('a','a1'),c('b','b1'),sep='-')
[1] "a-b"   "a1-b1"
```

把多个向量参数拼接为一个大的字符串。

```r
> str_c(head(letters), collapse = "")
[1] "abcdef"
# collapse参数，对多个字符串无效
> str_c('a','b',collapse = "-")   
[1] "ab"
> str_c(c('a','a1'),c('b','b1'),collapse='-')
[1] "ab-a1b1"
```

拼接有NA值的字符串向量时，NA还是NA

```r
> str_c(c("a", NA, "b"), "-d")
[1] "a-d" NA    "b-d"
# Use str_replace_NA to display literal NAs:
> str_c(str_replace_na(c("a", NA, "b")), "-d")
[1] "a-d"  "NA-d" "b-d" 
```

### str_flatten: 字符串快速拼接函数

+ 函数定义：

```r
str_flatten(string, collapse = "")
```

+ 参数列表：string: 字符串，字符串向量collapse: 拼接字符串之间插入的字符
+ 使用示例：

```r
> str_flatten(letters)
[1] "abcdefghijklmnopqrstuvwxyz"
> str_flatten(letters, "-")
[1] "a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z"
```

### str_trim:去掉字符串的空格和TAB(\t)

> str_trim() 从字符串的开头和结尾删除空格; str_squish() 同时还可以删除字符串内部的空格

+ 函数定义：

```r
str_trim(string, side = c("both", "left", "right"))
str_squish(string)
```

+ 参数列表：string: 字符串，字符串向量side: 过滤方式，both两边都过滤，left左边过滤，right右边过滤
+ 使用示例：

```r
> str_trim("\n\nString with trailing and leading white space\n\n")
[1] "String with trailing, middle, and leading white space"
> str_squish("\n\nString with excess, trailing and leading white space\n\n")
[1] "String with trailing, middle, and leading white space"
```

### str_pad:补充字符串的长度

+ 函数定义：

```r
str_pad(string, width, side = c("left", "right", "both"), pad = " ")
```

+ 参数列表：string: 字符串，字符串向量width: 字符串填充后的长度side: 填充方向，both两边都填充，left左边填充，right右边填充pad: 用于填充的字符
+ 使用示例：

```r
# 从左边补充空格，直到字符串长度为20
> str_pad("conan", 20, "left")
[1] "               conan"

# 从右边补充空格，直到字符串长度为20
> str_pad("conan", 20, "right")
[1] "conan               "

# 从左右两边各补充空格，直到字符串长度为20
> str_pad("conan", 20, "both")
[1] "       conan        "

# 从左右两边各补充x字符，直到字符串长度为20
> str_pad("conan", 20, "both",'x')
[1] "xxxxxxxconanxxxxxxxx"
```

### str_dup: 复制字符串

+ 函数定义：

```r
str_dup(string, times)
```

+ 参数列表：string: 字符串，字符串向量times: 复制数量
+ 使用示例：

```r
> fruit <- c("apple", "pear", "banana")
> str_dup(fruit, 2)
[1] "appleapple"   "pearpear"     "bananabanana"
```

### str_wrap，控制字符串输出格式

+ 函数定义：

```r
str_wrap(string, width = 80, indent = 0, exdent = 0)
```

+ 参数列表：
  string: 字符串，字符串向量
  width: 设置一行所占的宽度
  indent: 段落首行的缩进值
  exdent: 段落非首行的缩进值

### str_sub,截取字符串

+ 函数定义：

```r
str_sub(string, start = 1L, end = -1L)
str_sub(string, start = 1L, end = -1L, omit_na = FALSE) <- value
```

+ 参数列表：string: 字符串，字符串向量start : 开始位置end : 结束位置
+ 使用示例：

```r
> hw <- "Hadley Wickham"
> str_sub(hw, 1, 6)
[1] "Hadley"
> str_sub(hw, end = 6)
[1] "Hadley"
> str_sub(hw, c(1, 8), c(6, 14))
[1] "Hadley"  "Wickham"

> str_sub(hw, -1)
[1] "m"
> str_sub(hw, -7)
[1] "Wickham"
> str_sub(hw, end = -7)
[1] "Hadley W"
```

## 字符串匹配函数

> str_split:	字符串分割
> str_subset: 返回匹配的字符串
> word:	从文本中提取单词
> str_detect: 检查匹配字符串的字符
> str_match:	从字符串中提取匹配组
> str_replace: 字符串替换
> str_replace_na:把NA替换为NA字符串
> str_locate: 找到匹配的字符串的位置
> str_extract: 从字符串中提取匹配字符

### str_split,字符串分割

+ 函数定义：

```r
str_split(string, pattern, n = Inf, simplify = FALSE)
str_split_fixed(string, pattern, n)
```

+ 参数列表：string: 字符串，字符串向量pattern: 匹配的字符n: 分割个数simplify: FALSE以list返回结果，TRUE以matrix返回结果
+ 使用示例：

```r
> fruits <- c("apples and oranges and pears and bananas", "pineapples and mangos and guavas")
> str_split(fruits, " and ")
[[1]]
[1] "apples"  "oranges" "pears"   "bananas"

[[2]]
[1] "pineapples" "mangos"     "guavas"  

> str_split(fruits, " and ", simplify = TRUE)
     [,1]         [,2]      [,3]     [,4]   
[1,] "apples"     "oranges" "pears"  "bananas"
[2,] "pineapples" "mangos"  "guavas" "" 

> str_split(fruits, " and ", n = 3)
[[1]]
[1] "apples"            "oranges"           "pears and bananas"

[[2]]
[1] "pineapples" "mangos"     "guavas" 

> str_split_fixed(fruits, " and ", 3)
     [,1]         [,2]      [,3]             
[1,] "apples"     "oranges" "pears and bananas"
[2,] "pineapples" "mangos"  "guavas"         
> str_split_fixed(fruits, " and ", 4)
     [,1]         [,2]      [,3]     [,4]   
[1,] "apples"     "oranges" "pears"  "bananas"
[2,] "pineapples" "mangos"  "guavas" "" 
```

### str_subset:返回的匹配字符串

+ 函数定义：

```r
str_subset(string, pattern, negate = FALSE)
str_which(string, pattern, negate = FALSE)
```

+ 参数列表:string: 字符串，字符串向量pattern: 匹配的字符negate: 如果为TRUE，返回未匹配的元素
+ 使用示例：

```r
> fruit <- c("apple", "banana", "pear", "pinapple")
> str_subset(fruit, "a")
[1] "apple"    "banana"   "pear"     "pinapple"
> str_which(fruit, "a")
[1] 1 2 3 4
# 支持正则表达式
> str_subset(fruit, "^a")
[1] "apple"
> str_subset(fruit, "a$")
[1] "banana"
```

### word, 从文本中提取单词

+ 函数定义

```r
word(string, start = 1L, end = start, sep = fixed(" "))
```

+ 参数列表：string: 字符串，字符串向量start: 开始位置end: 结束位置sep: 匹配字符
+ 使用示例：

```r
> sentences <- c("Jane saw a cat", "Jane sat down")
> word(sentences, 1)
[1] "Jane" "Jane"
> word(sentences, 2)
[1] "saw" "sat"
> word(sentences, -1)
[1] "cat"  "down"
> word(sentences, 2, -1)
[1] "saw a cat" "sat down" 
# 匹配以..分割开的word
> str <- 'abc.def..123.4568.999'
> word(str, 1, sep = fixed('..'))
[1] "abc.def"
```

### str_detect，检查字符串是否出现

+ 函数定义：

```r
str_detect(string, pattern, negate = FALSE)
```

+ 参数列表：string: 字符串，字符串向量pattern: 匹配字符negate: 如果为TRUE，返回未匹配的元素
+ 使用示例：

```r
> fruit <- c("apple", "banana", "pear", "pinapple")
> str_detect(fruit, "a")
[1] TRUE TRUE TRUE TRUE
> str_detect(fruit, "^a")
[1]  TRUE FALSE FALSE FALSE
> str_detect(fruit, "^p", negate = TRUE)
[1]  TRUE  TRUE FALSE FALSE
```

### str_match,从字符串中提取匹配组

+ 函数定义：

```r
str_match(string, pattern)
str_match_all(string, pattern)
```

+ 参数列表：string: 字符串，字符串向量pattern: 匹配字符
+ 使用示例：

```r
> val <- c("abc", 123, "cba")
> str_match(val, "a")
     [,1]
[1,] "a" 
[2,] NA  
[3,] "a" 
> str_match(val, "[0-9]")
     [,1]
[1,] NA  
[2,] "1" 
[3,] NA  
> str_match_all(val, "a")
[[1]]
     [,1]
[1,] "a" 

[[2]]
     [,1]

[[3]]
     [,1]
[1,] "a" 
```

### str_replace，字符串替换

+ 函数定义：

```r
str_replace(string, pattern, replacement)
str_replace_all(string, pattern, replacement)
```

+ 参数列表：string: 字符串，字符串向量pattern: 匹配字符replacement: 用于替换的字符
+ 使用示例：

```r
> fruits <- c("one apple", "two pears", "three bananas")
> str_replace(fruits, "[aeiou]", "-")
[1] "-ne apple"     "tw- pears"     "thr-e bananas"
> str_replace_all(fruits, "[aeiou]", "-")
[1] "-n- -ppl-"     "tw- p--rs"     "thr-- b-n-n-s"
```

### str_replace_na把NA替换为NA字符串

+ 函数定义：

```r
str_replace_na(string, replacement = "NA")
```

+ 参数列表：string: 字符串，字符串向量replacement : 用于替换的字符
+ 使用示例：

```r
> str_replace_na(c(NA, "abc", "def"))
[1] "NA"  "abc" "def"
```

### str_locate，找到的模式在字符串中的位置

+ 函数定义：

```r
str_locate(string, pattern)
str_locate_all(string, pattern)
```

+ 参数列表：string: 字符串，字符串向量pattern: 匹配字符
+ 使用示例：

```r
> fruit <- c("apple", "banana", "pear", "pineapple")
> str_locate(fruit, "a") # 在每个字符串中a的位置
     start end
[1,]     1   1
[2,]     2   2
[3,]     3   3
[4,]     5   5
> str_locate_all(fruit, "a") # 在每个字符串中所有a的位置
[[1]]
     start end
[1,]     1   1

[[2]]
     start end
[1,]     2   2
[2,]     4   4
[3,]     6   6

[[3]]
     start end
[1,]     3   3

[[4]]
     start end
[1,]     5   5
```

### str_extract从字符串中提取匹配模式

+ 函数定义：

```r
str_extract(string, pattern)
str_extract_all(string, pattern, simplify = FALSE)
```

+ 参数列表：string: 字符串，字符串向量pattern: 匹配字符simplify: 返回值，TRUE返回matrix，FALSE返回字符串向量
+ 使用示例：

```r
> shopping_list <- c("apples x4", "bag of flour", "bag of sugar", "milk x2")
> str_extract(shopping_list, "\\d")
[1] "4" NA  NA  "2"
> str_extract_all(shopping_list, "\\d")
[[1]]
[1] "4"

[[2]]
character(0)

[[3]]
character(0)

[[4]]
[1] "2"

> str_extract_all(shopping_list, "\\d", simplify = TRUE)
     [,1]
[1,] "4" 
[2,] ""  
[3,] ""  
[4,] "2" 
```

## 字符串变换函数

> str_conv:	字符编码转换
> str_to_upper: 字符串转成大写
> str_to_lower: 字符串转成小写,规则同str_to_upper
> str_to_title: 字符串转成首字母大写,规则同str_to_upper

### str_conv:字符编码转换

+ 函数定义：

```r
str_conv(string, encoding)
```

+ 参数列表：string: 字符串，字符串向量encoding: 编码名
+ 使用示例：

```r
> x <- charToRaw('你好')
> x
[1] e4 bd a0 e5 a5 bd
> str_conv(x, "GBK")
[1] "你好"
> str_conv(x, "GB2312")
[1] "你好"
```

### str_to_upper,字符串大写转换

+ 函数定义：

```r
str_to_upper(string, locale = "en")
str_to_lower(string, locale = "en")
str_to_title(string, locale = "en")
str_to_sentence(string, locale = "en")
```

+ 参数列表：string: 字符串locale:按哪种语言习惯排序
+ 使用示例：

```r
> dog <- "The quick brown dog"
> str_to_upper(dog)
[1] "THE QUICK BROWN DOG"
> str_to_lower(dog)
[1] "the quick brown dog"
> str_to_title(dog)
[1] "The Quick Brown Dog"
> str_to_sentence("the quick brown dog")
[1] "The quick brown dog"
```
