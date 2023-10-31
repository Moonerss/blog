---
title: 从源码安装R3.6(Ubuntu 18.04LTS)
date: 2019-08-28 20:48:12
categories: 
  - Linux
tags: 
  - software
---

根据R官方提供的安装方法，感觉在Ubuntu18.04上毫无作用，因此尝试从源码手动编译安装R  

```sh
## 安装依赖
sudo apt-get install xorg-dev libreadline-dev
sudo apt-get install libcurl4-openssl-dev
sudo apt-get install libbz2-dev
sudo apt-get install libcairo2-dev libgtk2.0-dev
sudo apt-get install texinfo texlive
wget http://mirrors.ctan.org/fonts/inconsolata.zip
sudo cp -Rfp inconsolata/* /usr/share/texmf/
# 或者 sudo cp -r inconsolata/ /usr/share/texlive/texmf-dist/tex/latex/
sudo mktexlsr # 刷新一下

# 如果没有java解释器，安装下
sudo apt-get install default-jdk

# 下载与安装R
curl -O https://cran.r-project.org/src/base/R-3/R-3.6.1.tar.gz
tar -zxvf R-3.6.1.tar.gz
cd R-3.6.1/
./configure --prefix=$HOME/local/R --enable-R-shlib --with-cairo=yes
# 或者
# ./configure --with-cairo --with-libpng --with-libtiff --with-jpeglib --enable-R-shlib --prefix=$HOME/local/R
make
make install

# 创建符号链接
cd /usr/bin/
sudo ln -s $HOME/local/R/bin/Rscript Rscript
sudo ln -s $HOME/local/R/bin/R R
```

在编译过程中需要使用`./configure`命令检测环境及其依赖包，检测过程中可能遇到的报错：  

报错一：  

```sh
configure: error: No F77 compiler found
```

解决办法：  

```sh
sudo apt-get install gfortran build-essential
```

报错二：

```sh
configure: error: "liblzma library and headers are required"
```

解决办法：安装xz  

```sh
sudo wget http://tukaani.org/xz/xz-5.2.4.tar.gz
sudo tar xzvf xz-5.2.4.tar.gz
sudo cd xz-5.2.4
sudo ./configure
sudo make
sudo make install
```

