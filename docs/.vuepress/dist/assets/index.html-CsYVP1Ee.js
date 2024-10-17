import{_ as t,r as e,o as n,c as m,a as s,b as i,d as p,e as a}from"./app-B6iXF0Jq.js";const c={},r=a('<h2 id="卡方检验" tabindex="-1"><a class="header-anchor" href="#卡方检验"><span>卡方检验</span></a></h2><p>卡方检验(Chi-square test/Chi-Square Goodness-of-Fit Test)</p><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h3><p>卡方检验是一种非参数假设检验，主要用于比较两个分类变量的关联性分析，其根本思想就是在于比较理论频数和实际频数的吻合程度或拟合优度问题。</p><p>它在分类资料统计推断中的应用，包括：两个率或两个构成比比较的卡方检验；多个率或多个构成比比较的卡方检验以及分类资料的相关分析等。</p><h3 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理"><span>基本原理</span></a></h3><h4 id="基本思想" tabindex="-1"><a class="header-anchor" href="#基本思想"><span>基本思想</span></a></h4><p>卡方检验是以χ2分布为基础的一种假设检验方法，它的原假设H0是：观察频数与期望频数没有差别。</p><p>首先假设H0成立，基于此前提下计算出χ2值，它表示观察值与理论值之间的偏离程度。根据χ2分布及自由度可以确定在H0假设成立的情况下获得当前统计量及更极端情况的概率P。如果P值很小，说明观察值与理论值偏离程度太大，应当拒绝无效假设，表示比较资料之间有显著差异；否则就不能拒绝无效假设，尚不能认为样本所代表的实际情况和理论假设有差别。</p><h4 id="卡方值的计算与意义" tabindex="-1"><a class="header-anchor" href="#卡方值的计算与意义"><span>卡方值的计算与意义</span></a></h4><p>对于χ2统计量的计算，最初是由英国统计学家Karl Pearson在1900年首次提出的，因此也称之为Pearson χ2，其计算公式为</p>',11),h=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"χ"),s("mn",null,"2")]),s("mo",null,"="),s("mo",null,"∑"),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"A"),s("mo",null,"−"),s("mi",null,"E"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("mi",null,"E")]),s("mo",null,"="),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"k")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"A"),s("mi",null,"i")]),s("mo",null,"−"),s("msub",null,[s("mi",null,"E"),s("mi",null,"i")]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("msub",null,[s("mi",null,"E"),s("mi",null,"i")])]),s("mo",null,"="),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"k")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"A"),s("mi",null,"i")]),s("mo",null,"−"),s("mi",null,"n"),s("msub",null,[s("mi",null,"p"),s("mi",null,"i")]),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")])]),s("mrow",null,[s("mi",null,"n"),s("msub",null,[s("mi",null,"p"),s("mi",null,"i")])])]),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mn",null,"3"),s("mo",{separator:"true"},","),s("mo",null,"…"),s("mo",{separator:"true"},","),s("mi",null,"k"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," \\chi^2=\\sum \\frac{(A-E)^2}{E}=\\sum_{i=1}^k \\frac{(A_i-E_i)^2}{E_i}=\\sum_{i=1}^k \\frac{(A_i-np_i)^2}{np_i} (i=1, 2, 3, …, k) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0585em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"χ"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.1771em","vertical-align":"-0.686em"}}),s("span",{class:"mop op-symbol large-op",style:{position:"relative",top:"0em"}},"∑"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.1138em","vertical-align":"-1.2777em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8361em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0576em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"E"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0576em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.836em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.1138em","vertical-align":"-1.2777em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.8361em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4911em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"p"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8804em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"…"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mclose"},")")])])])])],-1),o=a('<blockquote><p>其中，Ai为i水平的观察频数，Ei为i水平的期望频数，n为总频数，pi为i水平的期望频率。i水平的期望频数Ei等于总频数n×i水平的期望概率pi，k为单元格数。当n比较大时，χ2统计量近似服从k-1(计算Ei时用到的参数个数)个自由度的卡方分布。</p></blockquote><p>由卡方的计算公式可知，当观察频数与期望频数完全一致时，χ2值为0；观察频数与期望频数越接近，两者之间的差异越小，χ2值越小；反之，观察频数与期望频数差别越大，两者之间的差异越大，χ2值越大。换言之，大的χ2值表明观察频数远离期望频数，即表明远离假设。小的χ2值表明观察频数接近期望频数，接近假设。因此，χ2是观察频数与期望频数之间距离的一种度量指标，也是假设成立与否的度量指标。如果χ2值“小”，研究者就倾向于不拒绝H0；如果χ2值大，就倾向于拒绝H0。至于χ2在每个具体研究中究竟要大到什么程度才能拒绝H0，则要借助于卡方分布求出所对应的P值来确定。</p><h4 id="样本量要求" tabindex="-1"><a class="header-anchor" href="#样本量要求"><span>样本量要求</span></a></h4><p>卡方分布本身是连续型分布，但是在分类资料的统计分析中，显然频数只能以整数形式出现，因此计算出的统计量是非连续的。只有当样本量比较充足时，才可以忽略两者问的差异，否则将可能导致较大的偏差具体而言，一般认为对于卡方检验中的每一个单元格，要求其最小期望频数均大于1，且至少有4／5的单元格期望频数大于5，此时使用卡方分布计算出的概率值才是准确的。如果数据不符合要求，可以采用Fisher精确检验计算。</p><h3 id="卡方检验类型" tabindex="-1"><a class="header-anchor" href="#卡方检验类型"><span>卡方检验类型</span></a></h3><h4 id="四格表资料的卡方检验" tabindex="-1"><a class="header-anchor" href="#四格表资料的卡方检验"><span>四格表资料的卡方检验</span></a></h4><p>四格表资料的卡方检验用于进行两个率或两个构成比的比较。</p><p>(1) 公式</p><p>若四格表资料四个格子的频数分别为a，b，c，d，则四格表资料卡方检验的卡方值=</p>',9),g=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mi",null,"a"),s("mi",null,"d"),s("mo",null,"−"),s("mi",null,"b"),s("mi",null,"c"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")]),s("mo",null,"×"),s("mi",null,"n"),s("mi",{mathvariant:"normal"},"/"),s("mo",{stretchy:"false"},"("),s("mi",null,"a"),s("mo",null,"+"),s("mi",null,"b"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"c"),s("mo",null,"+"),s("mi",null,"d"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"a"),s("mo",null,"+"),s("mi",null,"c"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"b"),s("mo",null,"+"),s("mi",null,"d"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," (ad-bc)^2 \\times n/(a+b)(c+d)(a+c)(b+d) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.1141em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mord mathnormal"},"c"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8641em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord"},"/"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"c"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"c"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mclose"},")")])])])])],-1),u=s("p",null,"自由度v=(行数-1)(列数-1)",-1),d=s("p",null,"(2) 应用条件",-1),y=s("p",null,"要求样本含量应大于40且每个格子中的理论频数不应小于5。当样本含量大于40但理论频数有小于5的情况时卡方值需要校正，当样本含量小于40时只能用Fisher精确检验计算概率。",-1),v=s("h4",{id:"行×列表资料的卡方检验",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#行×列表资料的卡方检验"},[s("span",null,"行×列表资料的卡方检验")])],-1),b=s("p",null,"行×列表资料的卡方检验用于多个率或多个构成比的比较。",-1),f=s("p",null,"(1) 公式",-1),z=s("p",null,"r行c列表资料卡方检验的卡方值:",-1),_=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n"),s("mo",{stretchy:"false"},"["),s("mo",{stretchy:"false"},"("),s("msub",null,[s("mi",null,"A"),s("mn",null,"11")]),s("mi",{mathvariant:"normal"},"/"),s("msub",null,[s("mi",null,"n"),s("mn",null,"1")]),s("msub",null,[s("mi",null,"n"),s("mn",null,"1")]),s("mo",null,"+"),s("msub",null,[s("mi",null,"A"),s("mn",null,"12")]),s("mi",{mathvariant:"normal"},"/"),s("msub",null,[s("mi",null,"n"),s("mn",null,"1")]),s("msub",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",null,"+"),s("mo",null,"⋯"),s("mo",null,"+"),s("msub",null,[s("mi",null,"A"),s("mrow",null,[s("mi",null,"r"),s("mi",null,"c")])]),s("mi",{mathvariant:"normal"},"/"),s("msub",null,[s("mi",null,"n"),s("mi",null,"r")]),s("msub",null,[s("mi",null,"n"),s("mi",null,"c")]),s("mo",{stretchy:"false"},")"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"}," n[(A_{11}/n_1n_1+A_{12}/n_1n_2+\\cdots+A_{rc}/n_rn_c)-1] ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mopen"},"[("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"11")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"/"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"12")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"/"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"minner"},"⋯"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"rc")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"/"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"c")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},"]")])])])])],-1),k=a('<p>(2) 应用条件</p><p>要求每个格子中的理论频数T均大于5或1&lt;T&lt;5的格子数不超过总格子数的1/5。当有T&lt;1或1&lt;T&lt;5的格子较多时，可采用并行并列、删行删列、增大样本含量的办法使其符合行×列表资料卡方检验的应用条件。</p><h4 id="列联表资料的卡方检验" tabindex="-1"><a class="header-anchor" href="#列联表资料的卡方检验"><span>列联表资料的卡方检验</span></a></h4><p>同一组对象，观察每一个个体对两种分类方法的表现，结果构成双向交叉排列的统计表就是列联表。</p><h3 id="用途" tabindex="-1"><a class="header-anchor" href="#用途"><span>用途</span></a></h3><ul><li>检验某个连续变量的分布是否与某种理论分布相一致。</li><li>检验某个分类变量各类的出现概率是否等于指定概率。</li><li>检验某两个分类变量是否相互独立。(最常见到的)</li><li>检验某两种方法的结果是否一致。</li></ul><h3 id="应用条件" tabindex="-1"><a class="header-anchor" href="#应用条件"><span>应用条件</span></a></h3><ol><li>所有的理论数T≥5并且总样本量n≥40，用Pearson卡方进行检验。</li><li>如果理论数T＜5但T≥1，并且1≥40，用连续性校正的卡方进行检验。</li><li>如果有理论数T＜1或n＜40，则用Fisher’s检验。</li></ol><hr><h3 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h3>',10),x={href:"https://wiki.mbalib.com/wiki/%E5%8D%A1%E6%96%B9%E6%A3%80%E9%AA%8C",target:"_blank",rel:"noopener noreferrer"};function w(A,E){const l=e("ExternalLinkIcon");return n(),m("div",null,[r,h,o,g,u,d,y,v,b,f,z,_,k,s("p",null,[s("a",x,[i("卡方检验-MBA智库百科"),p(l)])])])}const M=t(c,[["render",w],["__file","index.html.vue"]]),q=JSON.parse(`{"path":"/stats/chisq/","title":"卡方检验","lang":"zh-CN","frontmatter":{"title":"卡方检验","author":"Jeason","createTime":"2018/11/12 15:37:12","permalink":"/stats/chisq/","tags":["stats"],"description":"卡方检验 卡方检验(Chi-square test/Chi-Square Goodness-of-Fit Test) 基本概念 卡方检验是一种非参数假设检验，主要用于比较两个分类变量的关联性分析，其根本思想就是在于比较理论频数和实际频数的吻合程度或拟合优度问题。 它在分类资料统计推断中的应用，包括：两个率或两个构成比比较的卡方检验；多个率或多个构成比比...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://jeason.netlify.app/stats/chisq/"}],["meta",{"property":"og:title","content":"卡方检验"}],["meta",{"property":"og:description","content":"卡方检验 卡方检验(Chi-square test/Chi-Square Goodness-of-Fit Test) 基本概念 卡方检验是一种非参数假设检验，主要用于比较两个分类变量的关联性分析，其根本思想就是在于比较理论频数和实际频数的吻合程度或拟合优度问题。 它在分类资料统计推断中的应用，包括：两个率或两个构成比比较的卡方检验；多个率或多个构成比比..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T08:48:54.000Z"}],["meta",{"property":"article:author","content":"Jeason"}],["meta",{"property":"article:tag","content":"stats"}],["meta",{"property":"article:modified_time","content":"2024-05-13T08:48:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"卡方检验\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-13T08:48:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jeason\\"}]}"]]},"headers":[{"level":2,"title":"卡方检验","slug":"卡方检验","link":"#卡方检验","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"基本原理","slug":"基本原理","link":"#基本原理","children":[]},{"level":3,"title":"卡方检验类型","slug":"卡方检验类型","link":"#卡方检验类型","children":[]},{"level":3,"title":"用途","slug":"用途","link":"#用途","children":[]},{"level":3,"title":"应用条件","slug":"应用条件","link":"#应用条件","children":[]},{"level":3,"title":"Reference","slug":"reference","link":"#reference","children":[]}]}],"isBlogPost":true,"readingTime":{"minutes":5.1,"words":1531},"git":{"updatedTime":1715590134000},"autoDesc":true,"filePathRelative":"stats/chiseq.md","categoryList":[{"type":10000,"name":"stats"}]}`);export{M as comp,q as data};