---
title: Docker 安装
date: 2023-03-23 21:23:38
categories: 
  - Linux
tags: 
  - docker
---
# Ubuntu
## 准备工作
### 系统要求
Docker 支持以下版本的 Ubuntu 操作系统：
+ Ubuntu Hirsute 21.04
+ Ubuntu Groovy 20.10
+ Ubuntu Focal 20.04 (LTS)
+ Ubuntu Bionic 18.04 (LTS)
### 卸载旧版本
```sh
sudo apt-get remove docker \
            docker-engine \
            docker.io
```

## 使用APT安装

```sh
sudo apt-get update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```
鉴于国内网络问题，强烈建议使用国内源。
为了确认所下载软件包的合法性，需要添加软件源的 GPG 密钥。

```sh
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 官方源
# curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

然后，我们需要向 sources.list 中添加 Docker 软件源

```sh
echo \
    "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


# 官方源
# echo \
#   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
#   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

> 以上命令会添加稳定版本的 Docker APT 镜像源，如果需要测试版本的 Docker 请将 stable 改为 test

### 安装 Docker
更新 apt 软件包缓存，并安装 `docker-ce`：

```sh
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## 使用脚本自动安装

```sh
# curl -fsSL test.docker.com -o get-docker.sh
curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
# sudo sh get-docker.sh --mirror AzureChinaCloud
```

## 启动 Docker

```sh
sudo systemctl enable docker
sudo systemctl start docker
```

## 建立 docker 用户组

默认情况下，docker 命令会使用 [Unix socket](https://en.wikipedia.org/wiki/Unix_domain_socket) 与 Docker 引擎通讯。而只有 root 用户和 docker 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 root 用户。因此，更好地做法是将需要使用 docker 的用户加入 docker 用户组。

建立 `docker`组:

```sh
sudo groupadd docker
```

将当前用户加入 `docker`组：

```sh
sudo usermod -aG docker $USER
```

退出当前终端并重新登录，进行测试。

## 测试 Docker 是否安装正确

```sh
$ docker run --rm hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
b8dfde127a29: Pull complete
Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

# CentOS
## 准备工作
### 系统要求
Docker 支持 64 位版本 CentOS 7/8，并且要求内核版本不低于 3.10。 CentOS 7 满足最低内核的要求，但由于内核版本比较低，部分功能（如 overlay2 存储层驱动）无法使用，并且部分功能可能不太稳定。

### 卸载旧版本
旧版本的 Docker 称为 docker 或者 docker-engine，使用以下命令卸载旧版本：

```sh
sudo yum remove docker \
                docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-selinux \
                docker-engine-selinux \
                docker-engine
```

## 使用yum安装

执行以下命令安装依赖包：

```sh
sudo yum install -y yum-utils
```

鉴于国内网络问题，强烈建议使用国内源。
执行下面的命令添加 `yum`软件源:

```sh
sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

sudo sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo

# 官方源
# sudo yum-config-manager \
#     --add-repo \
#     https://download.docker.com/linux/centos/docker-ce.repo
```

如果需要测试版本的 Docker 请执行以下命令：

```sh
sudo yum-config-manager --enable docker-ce-test
```

### 安装Docker
更新 `yum` 软件源缓存，并安装 `docker-ce`。

```sh
sudo yum install docker-ce docker-ce-cli containerd.io
```

## 使用脚本自动安装

在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，CentOS 系统上可以使用这套脚本安装，另外可以通过 `--mirror` 选项使用国内源进行安装：

```sh
# curl -fsSL test.docker.com -o get-docker.sh
curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
# sudo sh get-docker.sh --mirror AzureChinaCloud
```

## CentOS8 额外设置

由于 `CentOS8` 防火墙使用了 `nftables`，但 `Docker`尚未支持 `nftables`， 我们可以使用如下设置使用 `iptables`：
更改 `/etc/firewalld/firewalld.conf`

```sh
# FirewallBackend=nftables
FirewallBackend=iptables
```

或者执行如下命令：
```sh
firewall-cmd --permanent --zone=trusted --add-interface=docker0

firewall-cmd --reload
```

## 启动 Docker

```sh
sudo systemctl enable docker
sudo systemctl start docker
```

## 建立 docker 用户组

```sh
sudo groupadd docker
sudo usermod -aG docker $USER
```

## 测试 Docker 是否安装正确
```sh
docker run --rm hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
b8dfde127a29: Pull complete
Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```