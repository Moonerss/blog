import{_ as l,o as e,c as a,a as s,b as i}from"./app-B6iXF0Jq.js";const n={},t=s("h2",{id:"绘制go富集的圈圈图实例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#绘制go富集的圈圈图实例"},[s("span",null,"绘制GO富集的圈圈图实例")])],-1),h=s("p",null,"载入R包",-1),k=s("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"library"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"clusterProfiler"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"library"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"org.Hs.eg.db"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"library"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"GOplot"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"library"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"stringr"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),r=s("p",null,"载入差异表达数据",-1),d=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,"## Warning in readChar(con, 5L, useBytes = TRUE): cannot open compressed file 'F:/")]),i(`
`),s("span",{class:"line"},[s("span",null,"## diff_expr.Rdata', probable reason 'No such file or directory'")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),p=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,"## Error in readChar(con, 5L, useBytes = TRUE): cannot open the connection")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),c=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,"##       logFC   AveExpr         t      P.Value    adj.P.Val        B probe_id symbol change")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 1 -5.780170  7.370282 -82.94833 3.495205e-12 1.163798e-07 16.32898  8133876   CD36   down")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 2  4.212683  9.106625  68.40113 1.437468e-11 2.393169e-07 15.71739  7965335  DUSP6     up")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 3 -5.633027  8.763220 -57.61985 5.053466e-11 4.431880e-07 15.04752  7972259    DCT   down")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 4  3.801663  9.726468  57.21112 5.324059e-11 4.431880e-07 15.01709  7972217  SPRY2     up")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 5 -3.263063 10.171635 -50.51733 1.324638e-10 8.821294e-07 14.45166  8129573  MOXD1   down")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 6  3.843247  9.667077  45.87910 2.681063e-10 1.487856e-06 13.97123  8015806   ETV4     up")]),i(`
`),s("span",{class:"line"},[s("span",null,"##   ENTREZID")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 1      948")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 2     1848")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 3     1638")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 4    10253")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 5    26002")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 6     2118")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=s("p",null,"保留差异表达基因",-1),o=s("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"diff_expr"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," diff_expr"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"diff_expr"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"$"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"change"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"!="),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"stable"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},","),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"diff_expr"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," diff_expr"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"100"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},","),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"gene_diff"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," diff_expr"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"$"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"symbol")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),u=s("p",null,"富集分析",-1),D=s("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich_BP"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," enrichGO"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"gene"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," gene_diff"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," keyType"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"SYMBOL"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," OrgDb"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," org.Hs.eg.db"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"                      ont"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"BP"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," pAdjustMethod"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"BH"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," minGSSize"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"                      pvalueCutoff"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 0.05"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," qvalueCutoff"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 0.05"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"class"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich_BP"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),y=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,'## [1] "enrichResult"')]),i(`
`),s("span",{class:"line"},[s("span",null,'## attr(,"package")')]),i(`
`),s("span",{class:"line"},[s("span",null,'## [1] "DOSE"')])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),B=s("p",null,"提取图像绘制需要的输入数据",-1),m=s("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," data.frame"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich_BP"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},") ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"colnames"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,'## [1] "ID"          "Description" "GeneRatio"   "BgRatio"     "pvalue"      "p.adjust"   ')]),i(`
`),s("span",{class:"line"},[s("span",null,'## [7] "qvalue"      "geneID"      "Count"')])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=s("p",null,"数据整理",-1),b=s("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," enrich"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"10"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},","),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"c"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},","),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"2"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},","),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"8"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},","),s("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"6"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"$"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"geneID"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," str_replace_all"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"$"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"geneID"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"/"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},","),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"names"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")="),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"c"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"ID"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},","),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"Term"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},","),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"Genes"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},","),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"adj_pval"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"$"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"Category"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"BP"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"head"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),C=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,"##                    ID                                                       Term")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0050730 GO:0050730            regulation of peptidyl-tyrosine phosphorylation")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0048732 GO:0048732                                          gland development")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0018108 GO:0018108                          peptidyl-tyrosine phosphorylation")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0018212 GO:0018212                             peptidyl-tyrosine modification")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:1901992 GO:1901992 positive regulation of mitotic cell cycle phase transition")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0042326 GO:0042326                     negative regulation of phosphorylation")]),i(`
`),s("span",{class:"line"},[s("span",null,"##                                                                                   Genes")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0050730                CD36,AREG,TGFA,CD24,SFRP1,ITGB3,MIR221,SH2B3,CNTN1,INPP5F,MVP")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0048732   ETV5,CCND1,AREG,SERPINF1,SFRP1,IGFBP5,JUN,SEMA3C,SOX2,SNAI2,PBX1,E2F7,RARB")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0018108          CD36,AREG,TGFA,CD24,SFRP1,ITGB3,MIR221,EPHA5,SH2B3,CNTN1,INPP5F,MVP")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0018212          CD36,AREG,TGFA,CD24,SFRP1,ITGB3,MIR221,EPHA5,SH2B3,CNTN1,INPP5F,MVP")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:1901992                                     DTL,CCND1,CDCA5,CDC25A,MIR221,PBX1,CDC45")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0042326 DUSP6,SPRY2,NUPR1,SPRY4,UBASH3B,SFRP1,JUN,TLR4,TIMP3,MIR221,SH2B3,INPP5F,MVP")]),i(`
`),s("span",{class:"line"},[s("span",null,"##                adj_pval Category")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0050730 0.0001172193       BP")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0048732 0.0001314734       BP")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0018108 0.0001314734       BP")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0018212 0.0001314734       BP")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:1901992 0.0001567831       BP")]),i(`
`),s("span",{class:"line"},[s("span",null,"## GO:0042326 0.0001741554       BP")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),E=s("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"genes"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," data.frame"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ID"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," diff_expr"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"$"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"symbol"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"logFC"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," diff_expr"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"$"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"logFC"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"head"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"genes"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,"##      ID     logFC")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 1  CD36 -5.780170")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 2 DUSP6  4.212683")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 3   DCT -5.633027")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 4 SPRY2  3.801663")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 5 MOXD1 -3.263063")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 6  ETV4  3.843247")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("p",null,"转化成输入数据",-1),G=s("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"circ"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," circle_dat"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enrich"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"genes"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"head"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"circ"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),P=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",null,"##   category         ID                                            term count genes     logFC")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 1       BP GO:0050730 regulation of peptidyl-tyrosine phosphorylation    11  CD36 -5.780170")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 2       BP GO:0050730 regulation of peptidyl-tyrosine phosphorylation    11  AREG  3.095910")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 3       BP GO:0050730 regulation of peptidyl-tyrosine phosphorylation    11  TGFA  2.518930")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 4       BP GO:0050730 regulation of peptidyl-tyrosine phosphorylation    11  CD24 -3.322533")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 5       BP GO:0050730 regulation of peptidyl-tyrosine phosphorylation    11 SFRP1  2.103767")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 6       BP GO:0050730 regulation of peptidyl-tyrosine phosphorylation    11 ITGB3  3.162000")]),i(`
`),s("span",{class:"line"},[s("span",null,"##       adj_pval   zscore")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 1 0.0001172193 0.904534")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 2 0.0001172193 0.904534")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 3 0.0001172193 0.904534")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 4 0.0001172193 0.904534")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 5 0.0001172193 0.904534")]),i(`
`),s("span",{class:"line"},[s("span",null,"## 6 0.0001172193 0.904534")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),x=s("p",null,"绘制图像",-1),O=s("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"GOCircle"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"circ"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),F=s("p",null,[s("img",{src:"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/goplot/unnamed-chunk-16-1.png",alt:""})],-1),R=[t,h,k,r,d,p,c,g,o,u,D,y,B,m,A,v,b,C,E,_,f,G,P,x,O,F];function T(I,S){return e(),a("div",null,R)}const M=l(n,[["render",T],["__file","index.html.vue"]]),V=JSON.parse(`{"path":"/bioinfo/goplot/","title":"GO富集圈圈图","lang":"zh-CN","frontmatter":{"title":"GO富集圈圈图","author":"Jeason","createTime":"2020/09/23 22:47:45","permalink":"/bioinfo/goplot/","tags":["biosoftware","Visualization"],"description":"绘制GO富集的圈圈图实例 载入R包 载入差异表达数据 保留差异表达基因 富集分析 提取图像绘制需要的输入数据 数据整理 转化成输入数据 绘制图像","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://jeason.netlify.app/bioinfo/goplot/"}],["meta",{"property":"og:title","content":"GO富集圈圈图"}],["meta",{"property":"og:description","content":"绘制GO富集的圈圈图实例 载入R包 载入差异表达数据 保留差异表达基因 富集分析 提取图像绘制需要的输入数据 数据整理 转化成输入数据 绘制图像"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/goplot/unnamed-chunk-16-1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T08:48:54.000Z"}],["meta",{"property":"article:author","content":"Jeason"}],["meta",{"property":"article:tag","content":"biosoftware"}],["meta",{"property":"article:tag","content":"Visualization"}],["meta",{"property":"article:modified_time","content":"2024-05-13T08:48:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GO富集圈圈图\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/goplot/unnamed-chunk-16-1.png\\"],\\"dateModified\\":\\"2024-05-13T08:48:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jeason\\"}]}"]]},"headers":[{"level":2,"title":"绘制GO富集的圈圈图实例","slug":"绘制go富集的圈圈图实例","link":"#绘制go富集的圈圈图实例","children":[]}],"isBlogPost":true,"readingTime":{"minutes":2.01,"words":604},"git":{"updatedTime":1715590134000},"autoDesc":true,"filePathRelative":"bioinfo/goplot.md","categoryList":[{"type":10001,"name":"bioinfo"}]}`);export{M as comp,V as data};