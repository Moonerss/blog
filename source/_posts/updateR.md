---
title: R的更新
date: 2018-11-22
categories:
  - R
tags:
  - R
---

<!--more-->  

## 背景  

在windows中R和Rstudio的更新是非常头疼的问题，每次更新都需要把之前的版本删掉重新安装，甚是麻烦。所以一直在想是否有R包可以实现R的自动更新和配置。  

### R的更新  

目前R已经提供了`installr`包用于更新R版本及其相关的软件，目前这种方法只适合于Windows平台。  

#### `installr`安装  

目前支持镜像安装，或者从`github`安装：  

```R
# 镜像安装
install.packages('installr')  

# github安装
if (!require('devtools')) install.packages('devtools'); # make sure you have Rtools installed first! if not, then run:
#install.packages('installr')
#install.Rtools()
devtools::install_github('talgalili/installr')
```

#### 安装更新  

直接运行`installr()`，就会出现下面的选项框，选择需要更新的内容即可  

<img src = "https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/updateR/updateR.png" align = "middle">

目前使用这种方法更新的下载速度比较慢，可能是由于镜像的原因，建议切换到清华的镜像  

**注意**：使用此方法更新Rstudio时，需要在R下运行，如果在Rstudio下将不能完成安装。  



