---
title: 单尾还是双尾检验
author: Jeason
createTime: 2020/08/10 15:37:12
permalink: /stats/tails/
tags:
  - stats
---

<!--more-->  

## 单尾检验与双尾检验  

+ **假设有一个新的肿瘤治疗方案，我们希望新治疗方案的疗效较传统治疗更好**  
+ **为了探究新的抗肿瘤治疗方案是否疗效更优，故进行含6个患者的小临床试验，其中3个患者接受传统治疗方案，另外3个患者接受新的治疗方案。**将治疗疗效结果表示在坐标轴上，从左至右表示疗效从好至差。该数据提示新治疗方案的疗效似乎更好，但是有部分数据并未得出此结论（如下），故两种方案的疗效优劣并不明确。  

:::center
![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/one-tail/onetail1.jpg)  

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/one-tail/onetail2.jpg)  
:::

进行统计学检验：  

+ **在单尾检验时，得出p值=0.03，p值小于常见显著性水平的阈值0.05。**  
+ **在双尾检验时，得出p值=0.06，p值大于常见显著性水平阈值0.05。**  

那么在这种情况下应该选择哪个计算的阈值？  

单尾检验得出的p值检验的假设是： **主观认为新治疗方案的疗效更好**，故假设是否新的治疗方案优于传统治疗方案；该检验假设并没有区分新治疗方案疗效劣于和等于传统治疗方案的情况。  

双尾检验得出的p值检验的假设是： **对两种方案的疗效无主观判定**，故假设是否新的治疗方案优于或劣于或等于传统治疗方案。  

**因为在实际试验中，大多数情况下我们并不能知道两种方案疗效的优劣，我们需要探究的是新治疗方案是否优于或劣于或等于传统治疗方案，故我们应该选用双尾检验**。尽管在此次小样本临床试验中，新治疗方案似乎比传统方案更优，但是我们也必须考虑新方案劣于传统方案的情况。好的统计检验意味着，我们必须在试验实施前确定检验方案和显著性水平。否则就会发生p-hacking，它会增加我们报告虚假结果的机会（bogus results）。  

**故，在以上这种情况下，我们应该考虑采用双尾t检验，得出新方案与传统方案疗效无显著差异的结论**（p值=0.06）。  



## 总结  

在大多数情况下，我们并不知道目标数据差异的方向和好坏， 因此**我们既需要考虑一组数据高于另一组数据的情况，也需要考虑一组数据低于另一组数据的情况，故我们往往需要选取双尾检验以减少假阳性率。**  

---------------------------------------------------

**Reference**  

https://www.youtube.com/watch?v=bsZGt-caXO4&list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9&index=30  


