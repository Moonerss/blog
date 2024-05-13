---
title: SCENT包Debug
author: Jeason
createTime: 2020/10/11 19:59:08
permalink: /bioinfo/scent/
tags:
  - biosoftware
---

## 背景

使用 `SCENT`包进行分析时出现如下错误：

```sh
OpenBLAS blas_thread_init: pthread_create: Resource temporarily unavailable
OpenBLAS blas_thread_init: RLIMIT_NPROC 1024 current, 2583728 max
OpenBLAS blas_thread_init: pthread_create: Resource temporarily unavailable
OpenBLAS blas_thread_init: RLIMIT_NPROC 1024 current, 2583728 max
```

## 解决过程

+ BLAS

  BLAS（Basic Linear Algebra Subprograms，基础线性代数程序集）是一个应用程序接口，里面拥有大量已经编写好的关于线性代数运算的程序。OpenBLAS是一个开源的BLAS，可以用于相关的运算。
+ 相关问题

  搜索到别人在运用其他程序时出现类似的问题：

  + https://github.com/davidemms/OrthoFinder/issues/68
  + https://www.jianshu.com/p/981f67e5fb82

## 解决方法

在运行程序或者进入R环境之前设置环境变量：

```sh
export OPENBLAS_NUM_THREADS=1
```

> 原理：在其他程序调用BLAS进行线性运算时，可能创建了过多的BLAS线程，造成环境过负荷，超过系统限制，在此设置调用线程为1即可。
>
