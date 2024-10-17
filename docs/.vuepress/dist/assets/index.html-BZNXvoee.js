import{_ as n,o as i,c as l,a as s,e as t,b as a}from"./app-B6iXF0Jq.js";const e={},p=t('<p>为了保证聚类结果的稳定或者说是一致性，分型算法通常会运行多次，用于评估聚类的稳定性（例如<strong>nmf</strong>函数的nrun参数，<strong>ConsensusClusterPlus</strong>函数的reps参数均可控制运行次数）</p><p>比较好理解的如<strong>ConsensusClusterPlus</strong>函数默认每次随机选取80%的样本进行分型（即重采样）；而NMF则基于不同的随机种子，产生不同的分型结果；</p><h2 id="一致性矩阵" tabindex="-1"><a class="header-anchor" href="#一致性矩阵"><span>一致性矩阵</span></a></h2><p><strong>假设有D1，D2...Dn这N个样本，那么<strong><strong>consensus matrix</strong></strong>是NxN 的方阵，如下：</strong></p><table><thead><tr><th></th><th>D1</th><th>D2</th><th>D3</th><th>...</th><th>Dn</th></tr></thead><tbody><tr><td><strong>D1</strong></td><td>C11</td><td>C12</td><td>C13</td><td>...</td><td>C1n</td></tr><tr><td><strong>D2</strong></td><td>C21</td><td>C22</td><td>C23</td><td>...</td><td>C2n</td></tr><tr><td><strong>...</strong></td><td>...</td><td>...</td><td>...</td><td>Cij</td><td>...</td></tr><tr><td><strong>Dn</strong></td><td>Cn1</td><td>Cn2</td><td>Cn3</td><td>...</td><td>Cnn</td></tr></tbody></table><blockquote><p><strong>Cij</strong> 代表的是在多次的聚类结果中，样本Di 和样本Dj 被划分到同一类的概率（该值在0-1之间，该值越大表示样本ij被划分为同一类的概率越大）。</p></blockquote><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>对consensus matrix再做一次聚类，即可方便地对其可视化</p></div><p>下图中，不同的k值表示不同亚型数量下对应的聚类一致性热图。</p><p>热图行和列均为样本，热图上侧color bar为样本对应的亚型注释，热图颜色深浅表示聚类一致性高低（即多次随机过程中，样本被聚类在一起的概率），热图中相同亚型内颜色越深，不同亚型间颜色越浅表示聚类一致性越高；</p><p><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/matrix.png" alt=""></p><h2 id="评价指标-一致性聚类算法" tabindex="-1"><a class="header-anchor" href="#评价指标-一致性聚类算法"><span>评价指标-一致性聚类算法</span></a></h2><p>聚类一致性热图直观地可视化了不同K值下的聚类一致性，但例如上文K=3 &amp; k=5的热图就难以区分优劣，因此可借助特定算法将consensus matrix量化为分型评价指标。</p><p>Consensus Cumulative Distribution Function（一致性累计分布图）是Consensus Cluster算法最经典的分型评价指标之一，分别将不同K值下的consensus matrix转化为向量，绘制累积分布图即可得到如下图像：</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>从绘制原理即可看出，为什么通常选取下降坡度相对小的CDF曲线最优最优的分型数量K。因为，坡度越平缓说明consensus matrix中，0 &amp; 1之外的值就越少。当consensus matrix只有0 &amp; 1时，坡度与x轴平行，聚类一致性达到最优。</p></div><p><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/CDF.png" alt=""></p>',15),m=s("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#results为ConsensusClusterPlus结果对象，基于以下代码可实现手动绘制一致性累计分布图")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"bb"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," do.call"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"rbind"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"lapply"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"2"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"8"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"function"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"x"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"){")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    aa"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," as.numeric"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"results"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[["),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"x"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]]"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"$"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"consensusMatrix"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    df_2"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," data.frame"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"Consensus_index"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," aa"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},",  "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"K"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," rep"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"as.character"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"x"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"), "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"length"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"aa"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")) )")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"    return"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df_2"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"))")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ggplot"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"bb"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," aes"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"Consensus_index"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," colour"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," K"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"))"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    stat_ecdf"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"geom"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"step"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," ylab"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"CDF"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    theme_bw"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    theme"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"panel.grid.major"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"element_blank"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(),"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"panel.grid.minor"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"element_blank"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"())"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"    theme"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"axis.text"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," element_text"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"size"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 16"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"),"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"axis.title"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"element_text"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"size"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 16"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"))"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," +"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," labs"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"title"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'""'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),r=t('<p><strong>Delta Area Plot(CDF 曲线下面积的相对变化折线图)</strong> 展示了 k 和 k-1 相比CDF曲线下面积的相对变化。当k = 2时，因为没有k=1，所以第一个点表示的是k=2时CDF曲线下总面积。</p><p>通常选取折线拐点作为最佳K值，也有研究者选择曲线下面积变化小的点作为最佳K值。（事实上，它们的原理大同小异）</p><p><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/DCDF.png" alt=""></p><p>综上所述，Consensus CDF &amp; Delta Area Plot 都是对consensus matrix进一步处理得到的比热图更直观的评价指标。</p><h2 id="评价指标-nmf算法" tabindex="-1"><a class="header-anchor" href="#评价指标-nmf算法"><span>评价指标-NMF算法</span></a></h2><p>首先，如下图，NMF算法会计算每个样本的<strong>轮廓系数(Silhouette coefficient)</strong>，并在聚类一致性热图上作为color bar注释呈现；</p><p><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/NMF.png" alt=""></p><p>轮廓系数基于距离矩阵计算；用来量化一个目标对于目标所在簇与其他簇之间的相似性（-1~1）；值越大表明目标与自己所在簇的匹配度越高，与其他簇的匹配度越低，聚类结果越好；</p><p><strong>计算公式如下：</strong></p><p>假设样本分成K个簇，a(i)是样本i与同簇其它样本的平均距离；a(i)越小聚类结果越好；</p>',10),h=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mfrac",null,[s("mn",null,"1"),s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("msub",null,[s("mi",null,"C"),s("mi",null,"i")]),s("mo",null,"−"),s("mn",null,"1"),s("mi",{mathvariant:"normal"},"∣")])]),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"j"),s("mo",null,"∈"),s("msub",null,[s("mi",null,"C"),s("mi",null,"i")]),s("mo",{separator:"true"},","),s("mi",null,"i"),s("mo",{mathvariant:"normal"},"≠"),s("mi",null,"j")]),s("mrow")]),s("mi",null,"d"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," a(i) = \\frac{1}{|C_{i} - 1|} \\sum_{j \\in C_{i},i \\ne j}^{}d(ij) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.7882em","vertical-align":"-1.4382em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"∣"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1∣")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.35em"}},[s("span",{style:{top:"-1.8479em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3281em"}},[s("span",{style:{top:"-2.357em","margin-left":"-0.0715em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.143em"}},[s("span")])])])])]),s("span",{class:"mpunct mtight"},","),s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},[s("span",{class:"mrel mtight"},[s("span",{class:"mord vbox mtight"},[s("span",{class:"thinbox mtight"},[s("span",{class:"rlap mtight"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"inner"},[s("span",{class:"mord mtight"},[s("span",{class:"mrel mtight"},"")])]),s("span",{class:"fix"})])])])]),s("span",{class:"mrel mtight"},"=")]),s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"})])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4382em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"ij"),s("span",{class:"mclose"},")")])])])])],-1),c=s("p",null,"b(i)是样本i与其它簇其它样本的平均距离；b(i)越大聚类结果越好；",-1),o=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"b"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("munder",null,[s("mrow",null,[s("mi",null,"min"),s("mo",null,"⁡")]),s("mrow",null,[s("mi",null,"k"),s("mo",{mathvariant:"normal"},"≠"),s("mi",null,"i")])]),s("mfrac",null,[s("mn",null,"1"),s("mrow",null,[s("mi",{mathvariant:"normal"},"∣"),s("msub",null,[s("mi",null,"C"),s("mi",null,"k")]),s("mi",{mathvariant:"normal"},"∣")])]),s("munder",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"j"),s("mo",null,"∈"),s("msub",null,[s("mi",null,"c"),s("mi",null,"k")])])]),s("mi",null,"d"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{separator:"true"},","),s("mi",null,"j"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"}," b(i) = \\min_{k \\ne i} \\frac{1}{|C_{k}|} \\sum_{j \\in c_{k}}d(i,j) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.7352em","vertical-align":"-1.4138em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6679em"}},[s("span",{style:{top:"-2.3479em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mrel mtight"},[s("span",{class:"mrel mtight"},[s("span",{class:"mord vbox mtight"},[s("span",{class:"thinbox mtight"},[s("span",{class:"rlap mtight"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"inner"},[s("span",{class:"mord mtight"},[s("span",{class:"mrel mtight"},"")])]),s("span",{class:"fix"})])])])]),s("span",{class:"mrel mtight"},"=")]),s("span",{class:"mord mathnormal mtight"},"i")])])]),s("span",{style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",null,[s("span",{class:"mop"},"min")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8882em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"∣"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mord"},"∣")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.936em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.05em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mrel mtight"},"∈"),s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"c"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.3488em","margin-left":"0em","margin-right":"0.0714em"}},[s("span",{class:"pstrut",style:{height:"2.5em"}}),s("span",{class:"sizing reset-size3 size1 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1512em"}},[s("span")])])])])])])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.4138em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"d"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},")")])])])])],-1),d=s("p",null,"s(i)是轮廓系数，越大越好；",-1),g={class:"katex-block"},k={class:"katex-display"},y={class:"katex"},u=s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",{stretchy:"false"},"("),s("mi",null,"i"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mtable",{rowspacing:"0.16em",columnalign:"center left",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mn",null,"1"),s("mo",null,"−"),s("mi",{mathvariant:"normal"},"a"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"/"),s("mi",{mathvariant:"normal"},"b"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")"),s("mo",{separator:"true"},",")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mtext",null," ifa "),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")"),s("mo",null,"<"),s("mi",{mathvariant:"normal"},"b"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mn",null,"0"),s("mo",{separator:"true"},",")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mtext",null," ifa "),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",{mathvariant:"normal"},"b"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mi",{mathvariant:"normal"},"b"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")"),s("mi",{mathvariant:"normal"},"/"),s("mi",{mathvariant:"normal"},"a"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")"),s("mo",null,"−"),s("mn",null,"1"),s("mo",{separator:"true"},",")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mtext",null," ifa "),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")"),s("mo",null,">"),s("mi",{mathvariant:"normal"},"b"),s("mo",{stretchy:"false"},"("),s("mi",{mathvariant:"normal"},"i"),s("mo",{stretchy:"false"},")")])])])])])])]),s("annotation",{encoding:"application/x-tex"}," s(i)=\\left\\{\\begin{array}{cl} 1-\\mathrm{a}(\\mathrm{i}) / \\mathrm{b}(\\mathrm{i}), & \\text { ifa }(\\mathrm{i})<\\mathrm{b}(\\mathrm{i}) \\\\ 0, & \\text { ifa }(\\mathrm{i})=\\mathrm{b}(\\mathrm{i}) \\\\ \\mathrm{b}(\\mathrm{i}) / \\mathrm{a}(\\mathrm{i})-1, & \\text { ifa }(\\mathrm{i})>\\mathrm{b}(\\mathrm{i}) \\end{array}\\right. ")])])],-1),v={class:"katex-html","aria-hidden":"true"},D=t('<span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">s</span><span class="mopen">(</span><span class="mord mathnormal">i</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span>',1),_={class:"base"},B=s("span",{class:"strut",style:{height:"3.6em","vertical-align":"-1.55em"}},null,-1),f={class:"minner"},b={class:"mopen"},x={class:"delimsizing mult"},C={class:"vlist-t vlist-t2"},A={class:"vlist-r"},w={class:"vlist",style:{height:"2.05em"}},M=s("span",{style:{top:"-2.5em"}},[s("span",{class:"pstrut",style:{height:"3.15em"}}),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎩")])],-1),z={style:{top:"-2.492em"}},j=s("span",{class:"pstrut",style:{height:"3.15em"}},null,-1),N={style:{height:"0.016em",width:"0.8889em"}},E={xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.016em",style:{width:"0.8889em"},viewBox:"0 0 888.89 16",preserveAspectRatio:"xMinYMin"},F=s("path",{d:"M384 0 H504 V16 H384z M384 0 H504 V16 H384z"},null,-1),P=[F],K=s("span",{style:{top:"-3.15em"}},[s("span",{class:"pstrut",style:{height:"3.15em"}}),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎨")])],-1),H={style:{top:"-4.292em"}},S=s("span",{class:"pstrut",style:{height:"3.15em"}},null,-1),V={style:{height:"0.016em",width:"0.8889em"}},q={xmlns:"http://www.w3.org/2000/svg",width:"0.8889em",height:"0.016em",style:{width:"0.8889em"},viewBox:"0 0 888.89 16",preserveAspectRatio:"xMinYMin"},L=s("path",{d:"M384 0 H504 V16 H384z M384 0 H504 V16 H384z"},null,-1),T=[L],J=s("span",{style:{top:"-4.3em"}},[s("span",{class:"pstrut",style:{height:"3.15em"}}),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎧")])],-1),R=s("span",{class:"vlist-s"},"​",-1),W=s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.55em"}},[s("span")])],-1),Y=t('<span class="mord"><span class="mtable"><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.05em;"><span style="top:-4.21em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathrm">a</span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span><span class="mord">/</span><span class="mord mathrm">b</span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span><span class="mpunct">,</span></span></span><span style="top:-3.01em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">0</span><span class="mpunct">,</span></span></span><span style="top:-1.81em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathrm">b</span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span><span class="mord">/</span><span class="mord mathrm">a</span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mpunct">,</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.55em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:2.05em;"><span style="top:-4.21em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord text"><span class="mord"> ifa </span></span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathrm">b</span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span></span></span><span style="top:-3.01em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord text"><span class="mord"> ifa </span></span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathrm">b</span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span></span></span><span style="top:-1.81em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord text"><span class="mord"> ifa </span></span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathrm">b</span><span class="mopen">(</span><span class="mord mathrm">i</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.55em;"><span></span></span></span></span></span><span class="arraycolsep" style="width:0.5em;"></span></span></span><span class="mclose nulldelimiter"></span>',2),I=t('<p><strong>每个K的轮廓系数怎么算？</strong></p><p>每个K下所有样本的轮廓系数均值；</p><p><strong>如下图，为什么NMF输出三条轮廓系数折线？分别是什么？</strong></p><p><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/sihouette.png" alt=""></p><p>未查到官方说明，以下解释为个人基于经验做出的猜测：</p><p>1.由于轮廓系数基于距离矩阵计算，那么三条轮廓系数对应三种不同的距离矩阵；</p><p>2.紫色的Consensus最好理解，对应consensus matrix；</p><p>3.如下图，由于NMF的算法原理是将V矩阵分解为W &amp; H矩阵（即_Basis matrix &amp;_ <em>coefficient</em> <em>matrix</em>），基于两个矩阵根据上述公式计算即可；</p><h3 id="membership-score" tabindex="-1"><a class="header-anchor" href="#membership-score"><span><strong>Membership Score</strong></span></a></h3><p>Membership Score是NMF算法特有的每个样本的评价指标，同样用于评估每个样本划分为当前亚型的准确性。它由上文的H矩阵计算得来，原理比轮廓系数更简单：</p><blockquote><p>&quot;Calculated a cluster membership score as the maximal fractional score of the corresponding column in matrix H&quot;</p></blockquote><p>有文献会基于membership score过滤样本，得到亚型核心样本集合：<code>We defined a cluster core as the set of samples with cluster membership score &gt; 0.5</code></p><h3 id="共表象系数-cophenetic-coefficient" tabindex="-1"><a class="header-anchor" href="#共表象系数-cophenetic-coefficient"><span><strong>共表象系数-cophenetic coefficient</strong></span></a></h3><p>共表象系数全称共表象相关系数（Cophenetic Correlation Coefficient），用于评估样本聚类稳定性的指标，也是NMF算法最常用的确定最优聚类数量的指标。</p><p>在NMF算法中，首先基于consensus matrix得到距离矩阵(Distance matrix) &amp; 共表象矩阵(Cophenetic Matrix)，然后做相关得到共表象相关系数；</p><p><strong>距离矩阵</strong>--可以是简单的欧式距离矩阵；</p><p><strong>共表象矩阵</strong>--是聚类树状图上，任意两样本合并为一类的纵向距离（the dendrogrammatic distance between the model points. This distance is the height of the node at which these two points are first joined together.）</p><p>将上述两个矩阵转化为向量，计算相关性，即可得到共表象相关系数，如下图：</p><p>研究者Brunet建议选取曲线下降最大的前点K值作为最优聚类数；_(_<em>PNAS. 2004, 101(12):4164-9. doi: 10.1073/pnas.0308531101.)</em></p><p><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/cophenetic.png" alt=""></p>',20);function O($,G){return i(),l("div",null,[p,m,r,h,c,o,d,s("p",g,[s("span",k,[s("span",y,[u,s("span",v,[D,s("span",_,[B,s("span",f,[s("span",b,[s("span",x,[s("span",C,[s("span",A,[s("span",w,[M,s("span",z,[j,s("span",N,[(i(),l("svg",E,P))])]),K,s("span",H,[S,s("span",V,[(i(),l("svg",q,T))])]),J]),R]),W])])]),Y])])])])])]),I])}const U=n(e,[["render",O],["__file","index.html.vue"]]),X=JSON.parse(`{"path":"/stats/consensus_matrix/","title":"聚类一致性","lang":"zh-CN","frontmatter":{"title":"聚类一致性","author":"Jeason","createTime":"2024/10/17 22:47:45","permalink":"/stats/consensus_matrix/","tags":["clustering","stats"],"description":"为了保证聚类结果的稳定或者说是一致性，分型算法通常会运行多次，用于评估聚类的稳定性（例如nmf函数的nrun参数，ConsensusClusterPlus函数的reps参数均可控制运行次数） 比较好理解的如ConsensusClusterPlus函数默认每次随机选取80%的样本进行分型（即重采样）；而NMF则基于不同的随机种子，产生不同的分型结果； 一...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://jeason.netlify.app/stats/consensus_matrix/"}],["meta",{"property":"og:title","content":"聚类一致性"}],["meta",{"property":"og:description","content":"为了保证聚类结果的稳定或者说是一致性，分型算法通常会运行多次，用于评估聚类的稳定性（例如nmf函数的nrun参数，ConsensusClusterPlus函数的reps参数均可控制运行次数） 比较好理解的如ConsensusClusterPlus函数默认每次随机选取80%的样本进行分型（即重采样）；而NMF则基于不同的随机种子，产生不同的分型结果； 一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/matrix.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Jeason"}],["meta",{"property":"article:tag","content":"clustering"}],["meta",{"property":"article:tag","content":"stats"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"聚类一致性\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/matrix.png\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/CDF.png\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/DCDF.png\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/NMF.png\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/sihouette.png\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/consensus_matrix/cophenetic.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jeason\\"}]}"]]},"headers":[{"level":2,"title":"一致性矩阵","slug":"一致性矩阵","link":"#一致性矩阵","children":[]},{"level":2,"title":"评价指标-一致性聚类算法","slug":"评价指标-一致性聚类算法","link":"#评价指标-一致性聚类算法","children":[]},{"level":2,"title":"评价指标-NMF算法","slug":"评价指标-nmf算法","link":"#评价指标-nmf算法","children":[{"level":3,"title":"Membership Score","slug":"membership-score","link":"#membership-score","children":[]},{"level":3,"title":"共表象系数-cophenetic coefficient","slug":"共表象系数-cophenetic-coefficient","link":"#共表象系数-cophenetic-coefficient","children":[]}]}],"isBlogPost":true,"readingTime":{"minutes":5.5,"words":1650},"git":{"updatedTime":null},"autoDesc":true,"filePathRelative":"stats/consensus_matrix.md","categoryList":[{"type":10000,"name":"stats"}]}`);export{U as comp,X as data};