import{_ as e,o as t,c as i,e as s}from"./app-B6iXF0Jq.js";const n={},o=s('<h2 id="表观遗传学" tabindex="-1"><a class="header-anchor" href="#表观遗传学"><span>表观遗传学</span></a></h2><p>表观遗传学(epigenetics) 属于生物学和遗传学的分支学科，其研究范畴为：在“非DNA序列变化”情况下，遗传信息通过某些机制或途径传递给子代。</p><p>表观遗传现象的机制或途径，包括DNA甲基化、RNA甲基化、RNA干扰、核小体定位、染色质构象改变、染色质重塑、组蛋白修饰，长非编码RNA序列等。与经典遗传学以研究基因序列影响生物学功能为核心相比，表观遗传学主要研究这些“表观遗传现象”建立和维持的机制。其研究内容主要包括两类，一类为基因选择性转录表达的调控，有DNA甲基化、基因印记、组蛋白共价修饰和染色质重塑；另一类为基因转录后的调控，包括基因组中非编码RNA、微小RNA、反义RNA、内含子及核糖开关等。</p><h2 id="表观遗传学的三个方向与检测方法" tabindex="-1"><a class="header-anchor" href="#表观遗传学的三个方向与检测方法"><span>表观遗传学的三个方向与检测方法</span></a></h2><ol><li><strong>染色质开放性</strong>(chromatin accessibility)<br><strong>ATAC-seq</strong>: Assay of Transposase Accessible Chromatin sequencing<br><strong>DNase-seq</strong>: DNase I hypersensitive sites sequencing<br><strong>FAIRE-seq</strong>: Formaldehyde-Assisted Isolation of Regulatory Elements sequencing</li><li><strong>转录因子的绑定与组蛋白修饰</strong>(TF binding and histone modifications)<br><strong>ChIP-seq</strong>: Chromatin Immuno-Precipitation sequencing</li><li><strong>核小体占位</strong>(nucleosome positioning and occupancy)<br><strong>MNase-seq</strong>: Micrococcal Nuclease sequencing</li></ol><div style="text-align:center;"><p><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/Epigentics/seq.png" alt=""><img src="https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/Epigentics/flow.png" alt=""></p></div><h2 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释"><span>名词解释</span></a></h2><ul><li>peaks: 峰。常用来表示染色质的开放程度，因为是测序的reads落在了染色质的开放区，堆叠后被可视化的一种丰度的体现。</li><li>THSs: 转座酶超敏感位点（transposase hypersensitive sites）。</li><li>CREs: 顺式调控元件（cis-regulatory elements）。即DNA分子中具有转录调节功能的特异DNA序列。按功能特性，真核基因顺式作用元件分为启动子、增强子及沉默子。</li><li>ACRs: 染色质开放区域（accessible chromatin regions）。即正常或核小体被酶切裸露出来的DNA片段所在的区域。这篇【NP | 2019】根据ACRs距离最近基因的距离将ACRs分为三种类型：genic (gACRs; overlapping a gene), proximal (pACRs; within 2kb of a gene) or distal (dACRs; &gt;2 kb from a gene)，分别是跨越基因的，近端的，远端的染色质开放区。</li><li>transposon: 转座子。一段可以从原位上单独复制或断裂下来，环化后插入另一位点，并对其后的基因起调控作用的DNA序列。</li><li>promoter: 启动子。启动子是位于结构基因5&#39;端上游的DNA序列，能活化RNA聚合酶，使之与模板DNA准确的结合并具有转录起始的特异性。每个启动子包括至少一个转录起始点以及一个以上的功能组件（典型的如TATA box）</li><li>proximal promoters: 近端启动子。是DNA上位于基因开始之前的一个区域，在那里蛋白质和其他分子结合在一起准备读取该基因。</li><li>enhancer: 增强子。增强子是远离转录起始点、决定基因的时间、空间特异性表达、增强启动子转录活性的DNA序列，其发挥作用的方式通常与方向、距离无关，可位于转录起始点的上游或下游。从功能上讲，没有增强子存在，启动子通常不能表现活性；没有启动子时，增强子也无法发挥作用。根据南京大学陈迪俊老师的研究表明增强子比启动子能结合更多的转录因子(Nature Communications)</li><li>TFs: 转录因子（transcription factors）是保证目的基因以特定的强度在特定的时间与空间表达的蛋白质分子。与RNA聚合酶Ⅱ形成转录起始复合体，共同参与转录起始的过程。</li><li>TSS: 转录起始位点（transcription start site）。在一个典型的基因内部，排列顺序为转录起始位点(TSS，一个碱基)-起始密码子编码序列 (ATG)-终止密码子编码序列(TGA)-转录终止位点 (TTS)，即TSS-ATG-TGA-TTS</li><li>histone：组蛋白。通常含有H1，H2A，H2B，H3，H4等5种成分，其中H1与H3极度富含赖氨酸（lysine），H1不保守，其他组蛋白的基因非常保守。除H1外，其他4种组蛋白均分别以二聚体(共八聚体）相结合，形成核小体核心。DNA便缠绕在核小体的核心上。而H1则与核小体间的DNA结合</li><li>nucleosome: 核小体。是由DNA和组蛋白形成的染色质基本结构单位。每个核小体由146bp的DNA缠绕组蛋白八聚体1.75圈形成。核小体核心颗粒之间通过50bp左右的连接DNA相连，暴露在核小体表面的DNA能被特定的核酸酶接近并切割</li><li>组蛋白甲基化：甲基化可发生在组蛋白的赖氨酸和精氨酸残基上，而且赖氨酸残基能够发生单、双、三甲基化，而精氨酸残基能够单、双甲基化，这些不同程度的甲基化极大地增加了组蛋白修饰和调节基因表达的复杂性</li><li>组蛋白乙酰化：四种类型的组蛋白相互作用，将细胞核里的DNA紧紧地包装起来。这样的紧密包装能够有效阻止酶读取DNA上的遗传信息。然而，乙酰基连到组蛋白上能削弱它们对DNA的占据。因此局部乙酰化能暴露出相应的基因，让它们更容易激活</li></ul>',8),a=[o];function r(c,l){return t(),i("div",null,a)}const d=e(n,[["render",r],["__file","index.html.vue"]]),g=JSON.parse(`{"path":"/NGS/epigenetics/","title":"表观遗传学的三个方向与测序方法","lang":"zh-CN","frontmatter":{"title":"表观遗传学的三个方向与测序方法","author":"Jeason","createTime":"2024/07/05 20:54:24","permalink":"/NGS/epigenetics/","description":"表观遗传学 表观遗传学(epigenetics) 属于生物学和遗传学的分支学科，其研究范畴为：在“非DNA序列变化”情况下，遗传信息通过某些机制或途径传递给子代。 表观遗传现象的机制或途径，包括DNA甲基化、RNA甲基化、RNA干扰、核小体定位、染色质构象改变、染色质重塑、组蛋白修饰，长非编码RNA序列等。与经典遗传学以研究基因序列影响生物学功能为核心...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://jeason.netlify.app/NGS/epigenetics/"}],["meta",{"property":"og:title","content":"表观遗传学的三个方向与测序方法"}],["meta",{"property":"og:description","content":"表观遗传学 表观遗传学(epigenetics) 属于生物学和遗传学的分支学科，其研究范畴为：在“非DNA序列变化”情况下，遗传信息通过某些机制或途径传递给子代。 表观遗传现象的机制或途径，包括DNA甲基化、RNA甲基化、RNA干扰、核小体定位、染色质构象改变、染色质重塑、组蛋白修饰，长非编码RNA序列等。与经典遗传学以研究基因序列影响生物学功能为核心..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/Epigentics/seq.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-05T07:25:54.000Z"}],["meta",{"property":"article:author","content":"Jeason"}],["meta",{"property":"article:modified_time","content":"2024-07-05T07:25:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"表观遗传学的三个方向与测序方法\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/Epigentics/seq.png\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/Epigentics/flow.png\\"],\\"dateModified\\":\\"2024-07-05T07:25:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jeason\\"}]}"]]},"headers":[{"level":2,"title":"表观遗传学","slug":"表观遗传学","link":"#表观遗传学","children":[]},{"level":2,"title":"表观遗传学的三个方向与检测方法","slug":"表观遗传学的三个方向与检测方法","link":"#表观遗传学的三个方向与检测方法","children":[]},{"level":2,"title":"名词解释","slug":"名词解释","link":"#名词解释","children":[]}],"readingTime":{"minutes":4.72,"words":1415},"git":{"updatedTime":1720164354000},"autoDesc":true,"filePathRelative":"notes/NGS/epigenetics.md"}`);export{d as comp,g as data};
