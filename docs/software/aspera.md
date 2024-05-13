---
title: Aspera的安装与使用
author: Jeason
createTime: 2020/10/09 08:08:28
permalink: /blog/software/aspera/
tags:
  - software
---

当我们需要一些NGS数据时，一般会想到去NCBI或者EBI的数据库中下载。但是当我们使用wget进行下载时，真的是慢到令人发指。这时我们可以使用Aspera来下载NGS数据，来加速数据的下载。  

## 安装  

1. 根据电脑版本下载对应aspera connect server，下载地址：https://www.ibm.com/products/aspera/downloads  

   ```sh
   cd ./download
   wget http://download.asperasoft.com/download/sw/connect/3.7.4/aspera-connect-3.7.4.147727-linux-64.tar.gz
   ```

2. 下载获得的是shell脚本，解压安装  

   ```sh
   tar zxf aspera-connect-3.7.4.147727-linux-64.tar.gz
   bash aspera-connect-3.7.4.147727-linux-64.sh
   ```

3. 安装后找到home目录下的会有一个.aspera目录，里边包含密钥等信息，可以将其添加入环境变量中   

   > 在.aspera的目录，有两个文件比较重要: 一个是ascp的可执行文件`~/.aspera/connect/bin/ascp`，另一个ascp的密钥文件`~/.aspera/connect/etc/asperaweb_id_dsa.putty`,可以把密钥备份到home目录当中

   ```sh
   cd ~
   echo 'PATH=$PATH:/home/jeason/.aspera/connect/bin/' >> ~/.bashrc
   cp ~/.aspera/connect/etc/asperaweb_id_dsa.putty ~/
   source .bashrc
   ```

   重新source配置文件生效  

4. 使用`ascp --help`参看命令参数    

   常见参数：

   + `-v` verbose mode 唠叨模式，能让你实时知道程序在干啥，方便查错。  
   + `-T` 取消加密，否则有时候数据下载不了 。  
   + `-i` 提供私钥文件的地址，我也不知道干嘛的，反正不能少，地址一般是~/.aspera/connect/etc中的asperaweb_id_dsa.openssh文件  
   + `-l` 设置最大传输速度，一般200m到500m，如果不设置，反而速度会比较低，可能有个较低的默认值  
   + `-k` 断点续传，一般设置为值1  

## 下载sra数据  

```sh
ascp -T -i ~/.aspera/connect/etc/asperaweb_id_dsa.openssh  -k 1 -l 200m anonftp@ftp-private.ncbi.nlm.nih.gov:/sra/sra-instant/reads/ByRun/sra/SRR/SRR620/SRR6208854/SRR6208854.sra ./
```

> SRA数据库下载：首先记住，数据的存放地址是`ftp-private.ncbi.nlm.nih.gov`，SRA在Aspera的用户名是`anonftp`  

## Aspera批量下载SRA文件  

很多时候需要同时下载多个SRA文件，ascp命令提供参数`--file-list`，用于批量下载SRA文件。  

可以将下载列表写入sra.txt文件中，然后进行批量下载  

```
/sra/sra-instant/reads/ByRun/sra/SRR/SRR623/SRR6232298/SRR6232298.sra
/sra/sra-instant/reads/ByRun/sra/SRR/SRR623/SRR6232299/SRR6232299.sra
```

```sh
ascp -T -i ~/.aspera/connect/etc/asperaweb_id_dsa.openssh  -k 1 -l 200m --mode recv --host ftp-private.ncbi.nlm.nih.gov --user anonftp --file-list ~/sra.txt ./
```

> asprea同样可以下载ENA的数据，ENA在Aspera的用户名是`era-fasp`，数据的存放地址是`fasp.sra.ebi.ac.uk`  

## 报错  

有时会遇到以下报错：  

```sh
ascp: Failed to open TCP connection for SSH, exiting.

Session Stop (Error: Failed to open TCP connection for SSH)
```

官方回答：  

> On many Linux systems the default firewall can be configured with iptables. You will have to allow all incoming and outgoing traffic on UDP port 33001 (or whatever your Aspera UDP port is), which you can do with the following commands:  

使用如下命令进行操作：  

```sh
iptables -I INPUT -p tcp --dport 33001 -j ACCEPT
iptables -I OUTPUT -p tcp --dport 33001 -j ACCEPT
```

