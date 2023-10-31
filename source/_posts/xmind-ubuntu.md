---
title: Ubuntu18.04 安装 xmind8
date: 2019-09-16 20:50:19
categories: 
  - Linux
tags: 
  - software
---

## 相关下载  

XMind 官网下载程序：https://www.xmind.cn/download/xmind8/  
XMind 破解补丁：[网盘地址](https://pan.baidu.com/s/1pijGyVHFfO1BlDx-ZhtI5g) 提取码：tnkb  

## 程序安装  

```sh
# 创建安装目录
sudo mkdir -p /usr/local/xmind-8

# 解压XMind下载文件
sudo unzip -d /usr/local/xmind-8 xmind-8-update8-linux.zip

# 拷贝破解补丁文件到XMind_amd64目录
sudo mv XMind_amd64.tar.gz /usr/local/xmind-8/XMind_amd64

# 解压破解补丁文件
cd /usr/develop/xmind-8/XMind_amd64
tar -xvf XMind_amd64.tar.gz
rm -f XMind_amd64.tar.gz

# 如果系统环境是Centos，则需要修改依赖库安装脚本，将安装依赖的命令注释掉，默认的脚本只适合Debian/Ubuntu系统
sudo vim /usr/develop/xmind-8/setup.sh
# 注释掉： apt-get install openjdk-8-jre libgtk2.0-0 libwebkitgtk-1.0-0 lame libc6 libglib2.0-0

# 执行依赖库安装脚本
cd /usr/develop/xmind-8
sudo ./setup.sh

# 修改Hosts
sudo vim /etc/hosts
# 另起一行，添加　127.0.0.1 www.xmind.net
```

## 激活ximd  

进入XMind_amd64目录，执行命令 “./XMind” 运行软件，然后在XMind主界面导航到: Help -> License，复制以下License Key即可, 邮箱可以随便填。  

```txt
XAka34A2rVRYJ4XBIU35UZMUEEF64CMMIYZCK2FZZUQNODEKUHGJLFMSLIQMQUCUBXRENLK6NZL37JXP4PZXQFILMQ2RG5R7G4QNDO3PSOEUBOCDRYSSXZGRARV6MGA33TN2AMUBHEL4FXMWYTTJDEINJXUAV4BAYKBDCZQWVF3LWYXSDCXY546U3NBGOI3ZPAP2SO3CSQFNB7VVIY123456789012345
```

## 报错解决办法  

**警告1**：  

```sh
Gtk-Message: Failed to load module "canberra-gtk-module"
```

解决办法：安装libcanberra-gtk-module  

```sh
sudo apt-get install libcanberra-gtk-module
```

**警告2**：  

```sh
Gtk-WARNING **: 20:23:58.735: Theme directory status/scalable of theme macOS11 has no size field
```

解决办法：安装jdk8，切换优先级  

```sh
# 安装 jdk
sudo apt-get install openjdk-8-jdk

# 切换优先级，选jdk8
sudo update-alternatives --config java
```

--------
参考：
[Linux破解安装XMind](https://www.techgrow.cn/posts/d32cbc24.html)  
[ubuntu18.04安装XMind8](https://blog.csdn.net/weixin_36049506/article/details/88092444)  


