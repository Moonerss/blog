import{_ as a,o as e,c as h,e as l,a as i,b as s}from"./app-B6iXF0Jq.js";const n={},t=l('<p><code>tibble</code>是升级版的 <code>data.frame</code>，它保留了 <code>data.famre</code>的优势，并且以更友好的方式展示出来</p><h3 id="构建tibble" tabindex="-1"><a class="header-anchor" href="#构建tibble"><span>构建tibble</span></a></h3><ul><li><code>readr</code>已知读入数据形成tibble</li><li><code>tibble()</code>直接构建</li><li><code>tribble()</code>直观构建</li><li><code>as_tibble()</code>转换格式</li></ul>',3),k=i("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df2"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," read_csv"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"readr_example"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"challenge.csv"),i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"),"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," guess_max"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1001"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  Parsed with column specification:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  cols(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>    x = col_double(),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},'#>    y = col_date(format = "")')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  )")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tibble"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"x"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"3"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," y"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," list"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"5"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"10"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"20"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  # A tibble: 3 x 2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>        x y     ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>    <int> <list>  ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  1     1 <int [5]> ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  2     2 <int [10]>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  3     3 <int [20]>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tribble"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"~"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"x"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," ~"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"y"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"a"),i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"3"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"b"),i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 4"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"6")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> A tibble: 2 x 2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>   x     y    ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>   <chr> <list>   ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> 1 a     <int [3]>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> 2 b     <int [3]>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"l"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," list"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"x"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"500"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"y"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," runif"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"500"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"z"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 500"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," as_tibble"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"l"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  A tibble: 500 x 3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>        x     y     z")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>    <int> <dbl> <int>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  1     1 0.311   500")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  2     2 0.512   499")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  3     3 0.440   498")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  4     4 0.501   497")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  5     5 0.131   496")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  6     6 0.566   495")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  7     7 0.647   494")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  8     8 0.200   493")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  9     9 0.121   492")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> 10    10 0.315   491")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> # ... with 490 more rows")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),d=i("h3",{id:"tibble和data-frame的区别",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#tibble和data-frame的区别"},[i("span",null,"tibble和data.frame的区别")])],-1),r=i("h4",{id:"print结果",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#print结果"},[i("span",null,"print结果")])],-1),p=i("p",null,[i("code",null,"tibble"),s("默认只展示前10行的信息")],-1),A=i("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tibble"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"x"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," -"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"5"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1000"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> # A tibble: 1,006 x 1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>        x")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>    <int>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  1    -5")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  2    -4")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  3    -3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  4    -2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  5    -1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  6     0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  7     1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  8     2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  9     3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> 10     4")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> # … with 996 more rows")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),c=l('<blockquote><p>可以使用 <code>options(tibble.print_max = n, tibble.print_min = m)</code>参数设置展示的信息</p></blockquote><h4 id="子集提取" tabindex="-1"><a class="header-anchor" href="#子集提取"><span>子集提取</span></a></h4><p><code>tibble</code>通过 <code>[</code>提取子集返回的是一个 <code>tibble</code>，如果提取某一列需要使用 <code>[[</code>或者 <code>$</code></p>',3),D=i("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df2"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," <-"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," tibble"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"x"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"3"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," y"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 3"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"class"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df2"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},'#> [1] "tbl_df"     "tbl"        "data.frame"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"class"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df2"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},'#> [1] "tbl_df"     "tbl"        "data.frame"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"class"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df2"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"[["),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]]"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},'#> [1] "integer"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"class"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df2"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"$"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"x"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},'#> [1] "integer"')])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),g=i("h4",{id:"自动填充",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#自动填充"},[i("span",null,"自动填充")])],-1),y=i("p",null,[s("在构建 "),i("code",null,"tibble"),s("时，只有长度为1的值才会被循环填充")],-1),b=i("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tibble"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"a"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"3"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," b"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> # A tibble: 3 x 2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>       a     b")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>   <int> <dbl>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> 1     1     1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> 2     2     1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> 3     3     1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tibble"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"a"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"3"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," c"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"2"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> Error: Tibble columns must have consistent lengths, only values of length one are recycled:")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> * Length 2: Column `c`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> * Length 3: Column `a`")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),o=l('<h4 id="没有行名" tabindex="-1"><a class="header-anchor" href="#没有行名"><span>没有行名</span></a></h4><p><code>tibble</code>对象中是没有行名的，因此需要一些函数进行辅助操作</p><ul><li><code>has_rownames(.data)</code>：判断数据是否有行名</li><li><code>remove_rownames(.data)</code>：去掉数据行名</li><li><code>rownames_to_column(.data, var = &quot;rowname&quot;)</code>：行名转为数据的第一列，<code>var</code>是行名所在列的名字</li><li><code>rowid_to_column(.data, var = &quot;rowid&quot;)</code>：行ID号转为数据的第一列，<code>var</code>是行名所在列的名字</li><li><code>column_to_rownames(.data, var = &quot;rowname&quot;)</code>：列转行名</li></ul><h3 id="常用操作" tabindex="-1"><a class="header-anchor" href="#常用操作"><span>常用操作</span></a></h3>',4),m=i("ul",null,[i("li",null,[i("code",null,"add_column"),s("和 "),i("code",null,"add_row"),s("添加行和列"),i("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," add_column"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," z"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," -"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," w"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 0"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," #>      # A tibble: 3 x 4")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," #>        x     y     z     w")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," #>     <int> <int> <int> <dbl>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," #> 1     1     3    -1     0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," #> 2     2     2     0     0")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," #> 3     3     1     1     0")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])])]),i("li",null,[i("code",null,"enframe"),s("和 "),i("code",null,"deframe"),s("把向量变成 "),i("code",null,"tibble"),s("和把 "),i("code",null,"tibble"),s("变成向量"),i("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"enframe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"c"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"a"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 5"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},","),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," b"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 7"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"name"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"name"),i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"value"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"value"),i("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},'"'),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>   # A tibble: 2 x 2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>     name  value")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>     <chr> <dbl>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  1  a         5")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  2  b         7")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"deframe"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tibble"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"a"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 1"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"3"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> [1] 1 2 3")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])])]),i("li",null,[i("code",null,"glimpse()"),s("相当于 "),i("code",null,"tibble"),s("的 "),i("code",null,"str()"),i("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"glimpse"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  Observations: 3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  Variables: 2")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  $ x <int> 1, 2, 3")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#>  $ y <int> 3, 2, 1")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])])]),i("li",null,[i("code",null,"tbl_sum"),s(" 提供简要数据信息"),i("div",{class:"language-r line-numbers-mode","data-ext":"r","data-title":"r"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"tbl_sum"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"df"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"#> A tibble ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},'#> "3 x 2"')])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])])])],-1),u=[t,k,d,r,p,A,c,D,g,y,b,o,m];function v(B,C){return e(),h("div",null,u)}const E=a(n,[["render",v],["__file","index.html.vue"]]),F=JSON.parse(`{"path":"/R/tidyverse/tibble/","title":"tibble","lang":"zh-CN","frontmatter":{"title":"tibble","author":"Jeason","createTime":"2019/03/14 20:15:07","permalink":"/R/tidyverse/tibble/","description":"tibble是升级版的 data.frame，它保留了 data.famre的优势，并且以更友好的方式展示出来 构建tibble readr已知读入数据形成tibble tibble()直接构建 tribble()直观构建 as_tibble()转换格式 tibble和data.frame的区别 print结果 tibble默认只展示前10行的信息 可...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://jeason.netlify.app/R/tidyverse/tibble/"}],["meta",{"property":"og:title","content":"tibble"}],["meta",{"property":"og:description","content":"tibble是升级版的 data.frame，它保留了 data.famre的优势，并且以更友好的方式展示出来 构建tibble readr已知读入数据形成tibble tibble()直接构建 tribble()直观构建 as_tibble()转换格式 tibble和data.frame的区别 print结果 tibble默认只展示前10行的信息 可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T13:59:34.000Z"}],["meta",{"property":"article:author","content":"Jeason"}],["meta",{"property":"article:modified_time","content":"2024-05-13T13:59:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tibble\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-13T13:59:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jeason\\"}]}"]]},"headers":[{"level":3,"title":"构建tibble","slug":"构建tibble","link":"#构建tibble","children":[]},{"level":3,"title":"tibble和data.frame的区别","slug":"tibble和data-frame的区别","link":"#tibble和data-frame的区别","children":[]},{"level":3,"title":"常用操作","slug":"常用操作","link":"#常用操作","children":[]}],"readingTime":{"minutes":2.25,"words":674},"git":{"updatedTime":1715608774000},"autoDesc":true,"filePathRelative":"notes/R/tidyverse/tibble.md"}`);export{E as comp,F as data};
