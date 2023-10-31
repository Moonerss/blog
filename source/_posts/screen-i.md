---
title: Screen命令的使用
date: 2019-04-04
categories:
  - Linux
tags:
  - software
---
screen常用命令

<!--more-->

使用telnet或SSH远程登录linux时，如果连接非正常中断，重新连接时，系统将开一个新的session，无法恢复原来的 session.screen命令可以解决这个问题。Screen工具是一个终端多路转接器，在本质上，这意味着你能够使用一个单一的终端窗口运行多终端的应用。  

screen命令介绍   
1. screen -S  创建一个screen（可以用screen -S ID，打开一个指定的ID session）
2. screen -ls 显示所有的screen会话  
3. screen -d  脱离当前screen ,返回正常shell  
4. screen -r  进入指定screen  
5. screen -S SEEION_NAME -X quit 删除镜像  

Screen 操作快捷键  
+ ctrl-a c：创建一个新的 Shell  
+ ctrl-a ctrl-a：在 Shell 间切换  
+ ctrl-a n：切换到下一个 Shell  
+ ctrl-a p：切换到上一个 Shell  
+ ctrl-a 0…9：同样是切换各个 Shell  
+ ctrl-a d：退出 Screen 会话  





