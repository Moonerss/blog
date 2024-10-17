import{_ as r,r as a,o as l,c as s,a as e,b as t,d as n}from"./app-B6iXF0Jq.js";const c={},d=e("p",null,"接触和分析过TCGA数据的朋友肯定会经常处理TCGA barcode的7个编码信息，每个编码信息用横杠-隔开，如下所示：",-1),i=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/tcga-barcode/barcode.jpg",alt:""})],-1),p=e("p",null,"接触和分析过TCGA数据的朋友肯定会经常处理TCGA barcode的前15位（有时12位），实际从上图可以看出TCGA的barcode设计总共有28位之多。",-1),u=e("p",null,"每一个短横杠衔接的都是含不同意义的序列，如下图",-1),h=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/tcga-barcode/flow.jpg",alt:""})],-1),_=e("p",null,"图中总结了TCGA中从样品到数据处理流程：",-1),m=e("p",null,"BCR从TSS收到参与者的样本和他们相关的元数据。然后BCRs分配人可读的IDs（barcode），也就是TCGA barcode给参与者的元数据和样本。TCGA barcode用来把扩展到整个TCGA网络中的数据联系在一起，因为IDs可以唯一识别一个特定样本的一组结果。",-1),g=e("p",null,"具体的解释如下表：",-1),b=e("thead",null,[e("tr",null,[e("th",null,"Label"),e("th",null,"Identifier for"),e("th",null,"解释")])],-1),C=e("tr",null,[e("td",null,"Project"),e("td",null,"Project name"),e("td",null,"来自哪个项目: 如TCGA、TARGET等等")],-1),T=e("td",null,"TSS",-1),f=e("td",null,"Tissue source site",-1),A={href:"https://www.omicsclass.com/article/1079",target:"_blank",rel:"noopener noreferrer"},G=e("tr",null,[e("td",null,"Participant"),e("td",null,"Study participant"),e("td",null,"样品唯一编号(可以理解为一个病人唯一编号）")],-1),y=e("td",null,"Sample",-1),j=e("td",null,"Sample type",-1),w={href:"https://www.omicsclass.com/article/1080",target:"_blank",rel:"noopener noreferrer"},v=e("tr",null,[e("td",null,"Vial"),e("td",null,"Order of sample in a sequence of samples"),e("td",null,"一份样品被分割成好几份，表示第几份，通常是A-Z编号")],-1),N=e("tr",null,[e("td",null,"Portion"),e("td",null,"Order of portion in a sequence of 100-120 mg sample portions"),e("td",null,"每份样品再分割成不同的小样品：01-99等等编号，代表第几份")],-1),k=e("td",null,"Analyte",-1),D=e("td",null,"Molecular type of analyte for analysis",-1),M={href:"https://gdc.cancer.gov/resources-tcga-users/tcga-code-tables/portion-analyte-codes",target:"_blank",rel:"noopener noreferrer"},S=e("tr",null,[e("td",null,"Plate"),e("td",null,"Order of plate in a sequence of 96-well plates"),e("td",null,"96孔序列中板的顺序，4个数字组成")],-1),P=e("td",null,"Center",-1),x=e("td",null,"Sequencing or characterization center that will receive the aliquot for analysis",-1),I={href:"https://www.omicsclass.com/article/1081",target:"_blank",rel:"noopener noreferrer"},B=e("p",null,"其中比较重要的，用于区分样本类型的是 sample。",-1),E=e("p",null,"此外除了上述的barcode还有表示其他信息的barcode，整体的组织形式如下：",-1),L=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/tcga-barcode/barcode1.jpg",alt:""})],-1),R=e("p",null,"下表显示了不同barcode，所代表的不同意义：层次结构级别：",-1),q=e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/tcga-barcode/table.jpg",alt:""})],-1);function J(O,V){const o=a("ExternalLinkIcon");return l(),s("div",null,[d,i,p,u,h,_,m,g,e("table",null,[b,e("tbody",null,[C,e("tr",null,[T,f,e("td",null,[t("样品来自哪个组织机构：01 代表International Genomics Consortium, 更多见："),e("a",A,[t("TSS"),n(o)])])]),G,e("tr",null,[y,j,e("td",null,[t("样品来自人体组织类型，01-09表示肿瘤样本，10-19表示normal type，20-29表示control samples,如：01代表Primary Solid Tumor， 更多见："),e("a",w,[t("SampleType"),n(o)])])]),v,N,e("tr",null,[k,D,e("td",null,[t("实验数据来源分子类型，如R代表 RNA，D代表DNA等等，更多见："),e("a",M,[t("Portion / Analyte Codes"),n(o)])])]),S,e("tr",null,[P,x,e("td",null,[t("数据由哪个机构分析：如 01代表The Broad Institute GCC,更多见："),e("a",I,[t("Center"),n(o)])])])])]),B,E,L,R,q])}const z=r(c,[["render",J],["__file","index.html.vue"]]),F=JSON.parse(`{"path":"/blog/barcode/","title":"TCGA barcode 解析","lang":"zh-CN","frontmatter":{"title":"TCGA barcode 解析","author":"Jeason","createTime":"2019/09/19 10:59:50","permalink":"/blog/barcode/","tags":["TCGA"],"description":"接触和分析过TCGA数据的朋友肯定会经常处理TCGA barcode的7个编码信息，每个编码信息用横杠-隔开，如下所示： 接触和分析过TCGA数据的朋友肯定会经常处理TCGA barcode的前15位（有时12位），实际从上图可以看出TCGA的barcode设计总共有28位之多。 每一个短横杠衔接的都是含不同意义的序列，如下图 图中总结了TCGA中从样...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://jeason.netlify.app/blog/barcode/"}],["meta",{"property":"og:title","content":"TCGA barcode 解析"}],["meta",{"property":"og:description","content":"接触和分析过TCGA数据的朋友肯定会经常处理TCGA barcode的7个编码信息，每个编码信息用横杠-隔开，如下所示： 接触和分析过TCGA数据的朋友肯定会经常处理TCGA barcode的前15位（有时12位），实际从上图可以看出TCGA的barcode设计总共有28位之多。 每一个短横杠衔接的都是含不同意义的序列，如下图 图中总结了TCGA中从样..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/tcga-barcode/barcode.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T08:48:54.000Z"}],["meta",{"property":"article:author","content":"Jeason"}],["meta",{"property":"article:tag","content":"TCGA"}],["meta",{"property":"article:modified_time","content":"2024-05-13T08:48:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TCGA barcode 解析\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/tcga-barcode/barcode.jpg\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/tcga-barcode/flow.jpg\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/tcga-barcode/barcode1.jpg\\",\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/tcga-barcode/table.jpg\\"],\\"dateModified\\":\\"2024-05-13T08:48:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jeason\\"}]}"]]},"headers":[],"isBlogPost":true,"readingTime":{"minutes":2.04,"words":611},"git":{"updatedTime":1715590134000},"autoDesc":true,"filePathRelative":"other/tcga_barcode.md","categoryList":[{"type":10004,"name":"other"}]}`);export{z as comp,F as data};
