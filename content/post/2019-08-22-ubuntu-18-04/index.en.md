---
title: Ubuntu 18.04 安装有道词典
author: Jeason
date: '2019-08-22'
slug: ubuntu-18-04
categories:
  - linux
  - software
tags:
  - linux
  - software
---

## 下载编译过的安装包  

```sh
wget https://github.com/yomun/youdaodict_5.5/raw/master/youdao-dict_1.1.1-0~ubuntu_amd64.deb
```

## 查询并卸载QT5  

```sh
# 如有显示 PyQt5 (5.10.1), 卸载
pip3 list | grep PyQt5
pip3 uninstall pyqt5

# root 用户
sudo sudo pip3 list | grep PyQt5
sudo sudo pip3 uninstall pyqt5
```

## 安装依赖包  

```sh
sudo apt install python3

sudo apt install python3-dbus python3-lxml python3-pil python3-requests python3-xdg python3-xlib
sudo apt install python3-pyqt5 python3-pyqt5.qtmultimedia python3-pyqt5.qtquick python3-pyqt5.qtwebkit

sudo apt install gir1.2-appindicator3-0.1 qml-module-qtgraphicaleffects qml-module-qtquick-controls
sudo apt install libqt5multimedia5-plugins ttf-wqy-microhei
sudo apt install tesseract-ocr tesseract-ocr-eng tesseract-ocr-chi-sim tesseract-ocr-chi-tra

sudo apt install ubuntu-restricted-extras

# Ubuntu 18.04 用 fonts-wqy-microhei 取代了 ttf-wqy-microhei
```

## 安装有道词典  

```sh
su

如果是 dpkg 安装的话 (基于 Ubuntu / Debian / Linux Mint / Zorin OS)
dpkg -i youdao-dict_1.1.1-0?ubuntu_amd64.deb
apt install -f  (如果上面的 dpkg 命令运行显示缺依赖软件包)

如果是 tar 安装的话 (其实就是将 deb 解压, 把文件放到系统各处)
ar vx youdao-dict_1.1.1-0?ubuntu_amd64.deb
tar -Jxvf data.tar.xz -C /
rm -rf control.tar.gz && rm -rf data.tar.xz && rm -rf debian-binary
```

安装之后可以直接运行有道词典  

## 卸载  

```sh
rm -rf ~/.config/youdao-dict
rm -rf ~/.cache/youdao-dict

su

如果是 dpkg 安装的话
dpkg -r youdao-dict

如果是 tar 安装的话
wget https://raw.githubusercontent.com/yomun/youdaodict_5.5/master/youdaodict-uninstall.sh
bash youdaodict-uninstall.sh
```


