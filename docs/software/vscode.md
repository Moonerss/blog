---
title: vscode个性化配置
author: Jeason
createTime: 2024/10/18 19:48:23
permalink: /software/vscode/
tags:
  - software
  - vscode
---

## 修改默认字体(侧栏，顶栏，目录)  

1. 【帮助】--> 【切换开发者工具】  
2. 打开【开发者界面】，在【源代码】中找到`out/vs/workbench/workbench.desktop.main.css`
3. 定位到控制字体的类中，mac的搜索`.mac`,windows的搜索`.window`  

:::center
![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/vscode/font.png)
:::

4. 在相应字段中添加自己的字体名称，保存并重启vscode  

