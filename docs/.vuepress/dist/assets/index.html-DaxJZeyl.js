import{_ as a,o as n,c as t,a as i,b as s,e}from"./app-B6iXF0Jq.js";const l={},h=i("h2",{id:"简介",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#简介"},[i("span",null,"简介")])],-1),d=i("ul",null,[i("li",null,"STAR （Spliced Transcripts Alignment to a Reference），用于将测序的 Read 对齐到参考基因组的比对软件，常用于 RNAseq。"),i("li",null,"因其具有较高的准确率，映射速度较其他比对软件高 50 多倍，因此作为 ENCODE 项目的御用 pipeline 工具。"),i("li",null,"它需要占用大量内存，对计算资源有较高的要求。"),i("li",null,"STAR 的默认参数针对哺乳动物基因组进行了优化")],-1),r=i("h2",{id:"安装",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#安装"},[i("span",null,"安装")])],-1),k=i("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"conda"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," install"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -c"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," bioconda"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," star")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"})])],-1),o=i("h2",{id:"使用",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#使用"},[i("span",null,"使用")])],-1),p=i("p",null,"生成索引",-1),c=i("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"STAR"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --runThreadN"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 6"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --runMode"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," genomeGenerate"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --genomeDir"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ~/reference/index/STAR/mm10/"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --genomeFastaFiles"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ~/reference/genome/mm10/GRCm38.p5.genome.fa"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\ ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," --sjdbGTFfile"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ~/annotation/mm10/gencode.vM13.annotation.gtf"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --sjdbOverhang"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 100")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# annotation: 来源要和参考基因组匹配,比如注释和基因组都是来源ENSEMBL的,或者都是来自UCSC的;千万不要混用。这是因为它们对染色体的命名不一样。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 如果你手动更改成一样的也可以使用。")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --sjdbGTFfile	<anno.gtf>		选项默认只处理GTF中exon的行;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --sddbGTFfeatureExon exon 	默认值为exon,使只处理exon的行.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --sjdbGTFtagExonParent 		如果使用的是GTF3格式文件,需要指定本选项。")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --sjdbGTFtagExonParentTranscript <transcript_id> 	如果指定,将只会处理能比对到指定transcript(transcript_id)的exon")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --sjdbFileChrStartEnd <sjdbFile.txt> 指定可变剪接的注释文件")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# sjdbOverhang: 对于2x100b的Illumina双端测序来说, 是100-1=99.如果length是变化的，就用max(length)-1")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --genomeSAindexNbases <int> 	对于较小的基因组,需要用此选项指定N的值.计算方式: min(14, log2(genomeLength)/2-1). 1Mb的基因组一般为7.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --genomeChrBinNbits <int>		对于较大的基因组,需要用此选项指定N的值,计算方式: min(18, log2(genomeLength/NumberofReference)).对于3GB含100000个染色体/scaffolds的基因组来说,取15.")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),A=e("<ul><li><code>--runThreadN</code> ：设置线程数</li><li><code>--genomeDir</code> ：index输出的路径</li><li><code>--genomeFastaFiles</code> ：参考基因组序列</li><li><code>--sjdbGTFfile</code> ：参考基因组注释文件</li><li><code>--sjdbOverhang</code> ：这个是reads长度的最大值减1，默认是100</li></ul><p>进行比对</p>",2),g=i("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," STAR"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --runThreadN"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 20"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --genomeDir"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ~/reference/index/STAR/mm10/"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --readFilesIn"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SRR3589959_1.fastq"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SRR3589959_2.fastq"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --outSAMtype"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," BAM"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SortedByCoordinate"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --outFileNamePrefix"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ./SRR3589959")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --readFilesCommand <command>		如果是压缩文件,可以提供解压缩命令.zcat, gzip -c, bzip2 -c.依据压缩文件的压缩形式而不同.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --outSAMstrandField introMotif 	指定值为introMotif将会为unstranded RNA-seq数据生成可用于cufflinks和cuffdiff的文件(含XS strand attribute)")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --outFilterIntroMotifs RemoveNoncanonical 	后续进行cufflinks的话,推荐设定此选项.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --outSAMtype BAM Unsorted 		输出未排序的aligned.out.bam,可以直接用于HTSeq,不用进行name sorting")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --outSAMtype BAM SortedByCoordinate 输出根据坐标排序的aligned.sortedByCoord.out.bam,与samtools sort命令的输出一致")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --outSAMtype BAM Unsorted SortedByCoordinate	两种情况均输出.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# --quantMode TranscriptomeSAM		将会输出翻译成转录本坐标的bam文件,aligned.toTranscriptome.out.bam.")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),m=e('<h2 id="结果文件" tabindex="-1"><a class="header-anchor" href="#结果文件"><span>结果文件</span></a></h2><blockquote><p>SRR3589959Aligned.sortedByCoord.out.bam SRR3589959Log.final.out SRR3589959Log.out SRR3589959Log.progress.out SRR3589959SJ.out.tab</p></blockquote><h3 id="star-2-pass-mode" tabindex="-1"><a class="header-anchor" href="#star-2-pass-mode"><span>STAR 2-pass mode</span></a></h3><p>为了发现更加灵敏的new junction，STAR建议使用2-pass mode，其能增加检测到的new junction数目，使得更多的splices reads能mapping到new junction。因此STAR先用一般参数做一遍mapping，收集检测到的junction信息，然后利用这已经annotated junction来做第二次mapping。</p><h4 id="original-2-pass" tabindex="-1"><a class="header-anchor" href="#original-2-pass"><span>original 2-pass</span></a></h4><p>首先做一遍常规的比对，结果中会生成一个 <code>SJ.out.tab</code>文件，如上面所提到的 <code>SRR3589959SJ.out.tab</code>。然后用 <code>--sjdbFileChrStartEnd</code>参数将所有样品的 <code>SJ.out.tab</code>文件作为输入的 <code>annotated junction</code>进行第二次建index</p>',6),u=i("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"STAR"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --runThreadN"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 20"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --runMode"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," genomeGenerate"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"--genomeDir"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"  ~/reference/index/STAR/mm10/index_2-pass/"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"--genomeFastaFiles "),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"~/reference/genome/mm10/GRCm38.p5.genome.fa"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\ ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"--sjdbGTFfile"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ~/annotation/mm10/gencode.vM13.annotation.gtf"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"--sjdbFileChrStartEnd "),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"SRR3589959SJ.out.tab"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SRR3589960SJ.out.tab"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SRR3589961SJ.out.tab"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SRR3589962SJ.out.tab"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"--sjdbOverhang "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"100")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),y=i("p",null,"然后用第二次建立的index再一次对每个样品进行STAR比对，以SRR3589959为例",-1),b=i("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"STAR"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --runThreadN"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 20"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --genomeDir"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ~/reference/index/STAR/mm10/index_2-pass/"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"--readFilesIn "),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"SRR3589959_1.fastq"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SRR3589959_2.fastq"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"--outSAMtype "),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"BAM"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SortedByCoordinate"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"--outFileNamePrefix "),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"./SRR3589959_2-pass")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),D=i("h4",{id:"per-sample-2-pass",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#per-sample-2-pass"},[i("span",null,"per-sample 2-pass")])],-1),C=i("p",null,[i("code",null,"original"),s("方法适用于多样本的处理，但是如果是per-sample(单个样本？)的2-pass mapping，可以直接用 "),i("code",null,"--twopassMode Basic"),s("参数将第两步mapping中的make index省去，直接再mapping。")],-1),B=i("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"STAR"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --runThreadN"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 20"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --genomeDir"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ~/reference/index/STAR/mm10/"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --twopassMode"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," Basic"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --readFilesIn"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SRR3589959_1.fastq"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SRR3589959_2.fastq"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --outSAMtype"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," BAM"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," SortedByCoordinate"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," \\")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --outFileNamePrefix"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," ./SRR3589959")])])]),i("div",{class:"line-numbers","aria-hidden":"true"},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),v=[h,d,r,k,o,p,c,A,g,m,u,y,b,D,C,B];function R(S,f){return n(),t("div",null,v)}const _=a(l,[["render",R],["__file","index.html.vue"]]),T=JSON.parse(`{"path":"/bioinfo/star/","title":"STAR比对","lang":"zh-CN","frontmatter":{"title":"STAR比对","author":"Jeason","createTime":"2023/04/05 22:47:45","permalink":"/bioinfo/star/","tags":["biosoftware"],"description":"简介 STAR （Spliced Transcripts Alignment to a Reference），用于将测序的 Read 对齐到参考基因组的比对软件，常用于 RNAseq。 因其具有较高的准确率，映射速度较其他比对软件高 50 多倍，因此作为 ENCODE 项目的御用 pipeline 工具。 它需要占用大量内存，对计算资源有较高的要求。 ...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://jeason.netlify.app/bioinfo/star/"}],["meta",{"property":"og:title","content":"STAR比对"}],["meta",{"property":"og:description","content":"简介 STAR （Spliced Transcripts Alignment to a Reference），用于将测序的 Read 对齐到参考基因组的比对软件，常用于 RNAseq。 因其具有较高的准确率，映射速度较其他比对软件高 50 多倍，因此作为 ENCODE 项目的御用 pipeline 工具。 它需要占用大量内存，对计算资源有较高的要求。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-13T11:10:56.000Z"}],["meta",{"property":"article:author","content":"Jeason"}],["meta",{"property":"article:tag","content":"biosoftware"}],["meta",{"property":"article:modified_time","content":"2024-05-13T11:10:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"STAR比对\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-13T11:10:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jeason\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"结果文件","slug":"结果文件","link":"#结果文件","children":[{"level":3,"title":"STAR 2-pass mode","slug":"star-2-pass-mode","link":"#star-2-pass-mode","children":[]}]}],"isBlogPost":true,"readingTime":{"minutes":3.14,"words":942},"git":{"updatedTime":1715598656000},"autoDesc":true,"filePathRelative":"bioinfo/star.md","categoryList":[{"type":10001,"name":"bioinfo"}]}`);export{_ as comp,T as data};
