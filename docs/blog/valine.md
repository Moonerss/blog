---
title: Jekyll-theme-next添加Valine评论系统
author: Jeason
createTime: 2019-03-18 19:42:02
permalink: /blog/valine/
tags: 
  - blog
  - valine
---

给Jekyll添加Valine评论系统

<!--more-->



一直想给博客配置一款简洁的评论系统，但是没有发现合适的，最近倒腾一下Valine之后，发现效果还不错☺️  

详情请访问官网：[https://valine.js.org](https://valine.js.org/)  

这个评论系统是基于LeanCloud的，对Jekyll的博客是支持的，官网网址：[https://leancloud.cn](https://leancloud.cn/)  

## 获取 APP ID 和 APP KEY  

需要注册登录LeanCloud然后创建应用获取  

1. [点击这里登录或注册Leancloud](https://leancloud.cn/dashboard/login.html#/signup)

2. 然后[创建应用](https://leancloud.cn/dashboard/applist.html#/newapp)  

   ![blog](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/valine/blog1.png)    

3. 选择刚刚创建的`应用`>`设置`>`应用 Key`，然后你就能看到你的`APP ID`和`APP KEY`  

   ![blog2](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/valine/blog2.png)  

4. 然后填写`应用`>`设置`>`安全设置`中的`Web 安全域名`  

   ![blog3](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/valine/blog3.png)  

## 在blog中添加valine评论系统  

> 由于我使用的是[jekyll-theme-next](https://github.com/Simpleyyt/jekyll-theme-next), 所以可能在其他模板中不适用  

### 创建valine.html  

在 `/_includes/_third-party/comments`文件夹中添加一个文件`valine.html`
在文件里添加代码：  

![blog4](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/valine/blog6.png)  

中间几行需要配置在_config.yml文件当中  

### 添加_config.yml配置  

将`app_id`，`app_key`， `placeholde`等信息添加到_config.yml配置当中
具体使用代码：  

```yaml
valine_comment:
  enable: true
# app_id
  leancloud_appid: XXX
# app_key
  leancloud_appkey: XXX
# placeholde
  placeholder: “Just go go”
```

### 更改调用valine.html  

由于前面创建了valine.html，要jekyll博客能够运行这个页面的代码，使评论框显示在每篇文章的页面，需要在`/_includes/_third-party/comments/index.html`里面适当位置添加以下代码：  

![blog5](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/valine/blog7.png)  

此外，在`/_includes/_partials/comments.html`里面插入下列代码：  

![blog6](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/valine/blog4.png)  

最后生成的评论框如下：  

![blog7](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/valine/blog5.png)

感觉还不错！！  

