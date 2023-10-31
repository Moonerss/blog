---
title: Ubuntu 系统下Rstudio不能输入中文的解决办法
date: 2019-09-05 20:49:18
categories: 
  - Linux
tags: 
  - software
---

## 背景  

Rstudio作为一个R编程的神器竟然在Ubuntu中不能输入中文，经过搜索发现RStudio软件不能使用系统自带的QT5，因此需要我们自己编译安装qt5相关的库，但是由于Rstudio版本的不断更新，每个版本的解决方案都并不能完全兼容，下边记录集中看到的解决方案：  

### 方案一：  

在shell中输入如下命令，将相关插件软连接到RStudio的插件中。  

```sh
sudo ln -s /usr/lib/$(dpkg-architecture -qDEB_BUILD_MULTIARCH)/qt5/plugins/platforminputcontexts/libfcitxplatforminputcontextplugin.so /usr/lib/rstudio/bin/plugins/platforminputcontexts/
```

### 方案二：  

同样在shell中输入如下命令，下载相关插件并安装。  

```sh
wget [url=http://ikuya.info/tmp/fcitx-qt5-rstudio-qt542+2.tar.gz]http://ikuya.info/tmp/fcitx-qt5-rstudio-qt542+2.tar.gz[/url]
tar xf fcitx-qt5-rstudio-qt542+2.tar.gz
sudo apt install ./fcitx-frontend-qt5-rstudio_1.0.5-1ubuntu1~qt542+2_amd64.deb ./libfcitx-qt5-1-rstudio_1.0.5-1ubuntu1~qt542+2_amd64.deb
```

### 方案三：  

方法来自Github上，https://github.com/JackieMium/my_blog/issues/12 。作者将编译好的`libfcitxplatforminputcontextplugin.so` 复制到`usr/lib/rstudio/plugins/platforminputcontexts`路径下。然后删除`libQt5*`，`qt.conf`文件。  

### 方案四：  

> 该方案适用于Rstudio（Version 1.2.1335）  

执行方案一的命令，将相关插件连接到`/usr/lib/rstudio/plugins/platforminputcontexts/`文件夹内，这里需要注意文件的权限  

```sh
sudo ln -s /usr/lib/$(dpkg-architecture -qDEB_BUILD_MULTIARCH)/qt5/plugins/platforminputcontexts/libfcitxplatforminputcontextplugin.so  /usr/lib/rstudio/plugins/platforminputcontexts
```

在/usr/lib/rstudio/bin的路径下找到qt.conf文件（注意：不同版本路径可能会有所差别），修改qt.conf的内容，添加刚才链接使用的路径：  

```sh
[Paths]
Prefix = /usr/lib/rstudio/
Prefix = ../
```

随着版本的更新，可能之前版本的解决方案会不适用，因此。。。  
持续更新ing  

--- ---

### 参考  

https://support.rstudio.com/hc/en-us/articles/205605748-Using-RStudio-0-99-with-Fctix-on-Linux  

https://blog.csdn.net/wukong1981/article/details/89484408  

https://github.com/JackieMium/my_blog/issues/12  


