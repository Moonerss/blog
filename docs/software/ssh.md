---
title: SSH连接自动断开问题
author: Jeason
createTime: 2020/11/16 19:48:23
permalink: /software/ssh/
tags:
  - ssh
---

## 背景  

平时在命令行下ssh连接了远程服务器，经常才几分钟没操作就被自动断线了，不能进行任何操作，其实这是因为ssh没有设置心跳检测，可以通过以下两种方法解决。  



## 本地机最常用的方法  

  依赖ssh客户端定时发送心跳检测，配置/etc/ssh/ssh_config文件，在末尾添加上：  

  ```sh
  ServerAliveInterval 20
  ServerAliveCountMax 999
  ```

  > 每隔20秒向服务器发出一次心跳检测，若超过999次请求都没有成功，就主动断开与服务器端的连接。  

## 适用于服务器端  

  依赖ssh服务器端定时发送心跳检测，配置/etc/ssh/sshd_config文件(注意：这里是sshd_config，不是ssh_config)，在末尾添加上:  

  ```sh
  ClientAliveInterval 30
  ClientAliveCountMax 6
  ```

  > 每隔30秒向客户端发出一次心跳检测，若超过6次请求都没有成功，就会主动断开与客户端的连接。 

  设置了ssh的心跳检测后，重启ssh服务才能生效，执行命令

  ```sh
  service ssh restart
  ```

  