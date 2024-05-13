---
title: 同一电脑配置多个Github账户
author: Jeason
createTime: 2018/09/25 10:59:50
permalink: /blog/more_github/
tags:
  - Git
---

<!--more-->

## 场景

最近在使用github时发现自己日常的代码和博客是放在同一个账户上的，作为一个强迫症患者的我，自然是要再申请一个github账号托管博客:)

But！！！当我设置完毕后，发现并不能连接到远端进行克隆。。。简直是坑爹啊~有木有！经过一番研究终于找到解决办法，故记录如下：

## SSH协议

Secure Shell（缩写为 SSH），是创建在应用层和传输层基础上的安全协议。目前主要用于远程登录会话和其他网络服务。连接github时，我们需要生成配对的SSH公钥和密钥来连接远程仓库。而一对公钥密钥只能识别一个账户。也就是说，当你设置连接两个远端github仓库时，你需要生成两对公钥密钥来进行身份识别。

## 配置流程

以Github来举例说明（**服务器的地址都是github.com，也可以是不同的地址**），如何配置多用户，多地址提交项目。假设当前有两个账号：一个Github的账号是A，另一个Github的账号是B

### 1. 配置多个Git账户

这里分两种情况：

> 1. 一个账户已经进行了配置，添加另外一个账户
> 2. 同时配置两个git账户

假如之前你已经有账户进行了git的全局设置，那么首先需要解除git全局 `用户名/邮箱`的设置

```bash
git config --global --unset "user.name"
git config --global --unset "user.email"
```   
如果之前并未进行全局设置，则直接开始设置每个仓库独立的用户和邮箱  
```shell
#设置第一个用户/邮箱
git config user.email "A@gmail.com"
git config user.name "A"

#设置第二个用户/邮箱
git config user.email "B@163.com"
git config user.name "B"
```

### 2. 创建 `密钥/公钥`

在进行单用户操作时我们只需要通过：

```bash
ssh-keygen -t rsa -f -C "yourmail@xxx.com"
```

命令直接产生相应的 `密钥/公钥`，但是在多用户的情况下,直接产生两次 `密钥/公钥`会将第一次产生的 `密钥/公钥`覆盖掉。因此，进行多用户操作时，需要指定产生的密钥名称，避免覆盖。

```bash
#创建A账户的密钥、公钥
ssh-keygen -t rsa -f ~/.ssh/id_rsa_A -C "A@gmail.com"
ssh-keygen -t rsa -f ~/.ssh/id_rsa_B -C "B@163.com"
```  
此时会在用户的`.ssh`文件夹下产生`id_rsa_A`、`id_rsa_A.pub`和`id_rsa_B`、`id_rsa_B.pub`两对`密钥/公钥`。  
##### 3. 设置config文件  
在.ssh文件夹下创建config文件,配置不同的仓库指向不同的密钥文件。
```shell
# A账号
Host A #host别名
HostName github.com #服务器域名
User git #A账号用户名
IdentityFile ~/.ssh/id_rsa
# B账号
Host B  #host别名
HostName github.com #服务器域名
User git #B账号用户名
IdentityFile ~/.ssh/id_rsa_x
```

> **原理解析**
> 1.ssh 客户端是通过类似 [git@github.com](mailto:git@github.com):githubUserName/repoName.git ** 的地址来识别使用本地的哪个私钥的，地址中的 User 是@前面的git， Host 是@后面的github.com。
> 2.如果所有账号的 User 和 Host 都为 git 和 github.com，那么就只能使用一个私钥。所以要对User 和 Host 进行配置，让每个账号使用自己的 Host，即使用上面的别名来代替域名。
> 3.配置了别名之后，新的地址就是git@A:githubUserName/repName.git**（在添加远程仓库时使用）。这样 ssh 在连接时就可以区别不同的账号了。

### 4. 添加SSH公钥

把相应的公钥添加到账户的SSH设置当中，这样git就可以识别不同的账户了。

---

## Reference

https://www.jianshu.com/p/04e9a885c5c8
