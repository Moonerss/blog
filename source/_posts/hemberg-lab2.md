---
title: Hemberg-lab单细胞转录组数据分析（二）
date: 2020-09-23 16:04:50
categories:
  - NGS 
  - SingleCell
tags: 
  - Hemberg-lab
  - SingleCell
---

## scRNA-seq原始数据处理  

### FastQC  

得到单细胞RNA-seq测序数据后，首先检查测序reads的质量。为了完成这个任务，我们使用的工具是FastQC。FastQC是一款质控工具，能对bulk RNA-seq和单细胞RNA-seq的原始数据进行质量控制 (*其他类型的高通量测序结果也适用*)。FastQC以原始测序reads为输入(fastq格式)，输出序列质量报告。复制粘贴下面的链接到你的浏览器进入FastQC官网：  

https://www.bioinformatics.babraham.ac.uk/projects/fastqc/  

这个网址包含下载和安装FastQC及示例报告文件的链接。向下滚动页面到`Example Reports`并点击`Good Illumina Data`，会看到高质量Illumina测序Reads的理想质控结果。  

现在让我们自己来做一个FastQC报告。  

我们可以从 https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-2600/  下载`ERR522959_1.fastq`和`ERR522959_2.fastq` 原始测序文件。  

使用`less`命令查看数据  

```sh
less Share/ERR522959_1.fastq
less Share/ERR522959_2.fastq
```

使用FastQC生成报告  

```sh
mkdir fastqc_results
fastqc -o fastqc_results Share/ERR522959_1.fastq Share/ERR522959_2.fastq
```

命令执行完成后，可以得到四个文件—每端reads对应一个`zip`文件和一个`html`文件。  

大概浏览一下文件，记住要看双端`reads`的报告！  

### 移除接头和低质量碱基  

`TrimGalore!`工具是对`cutadapt`软件的封装，用于移除测序接头序列或测序序列末端低质量碱基。  

鉴于上一步FastQC报告中有一些接头污染，因此需要去除接头部分。  

现在让我们尝试用`Trim Galore!`去除那些麻烦的接头序列，去除接头后，最好再运行FastQC查看接头是否去除干净。  

可以用下面的命令来去除`Nextera`序列接头：  

```sh
mkdir -p fastqc_trimmed_results
trim_galore --nextera -o fastqc_trimmed_results Share/ERR522959_1.fastq Share/ERR522959_2.fastq
```

记住为`trimmed reads`文件生成新的FastQC报告！在报告里应该可以看到你的reads的`Adaptor Content`结果为`PASS`了  

现在已经生成了reads质量报告并实行了接头去除，下一步，我们会用`STAR` (STAR有soft-clip机制，理论上只要文库质量不太差，不进行质控也可以)和`Kallisto`把质控后的reads比对到参考转录组。  

### 文件格式  

#### FastQ  

FastQ是`scRNASeq`数据中最原始数据的格式。所有的`scRNA-seq`方案都会进行双端测序，根据文库构建方法不同，条形码序列 (barcodes)可能出现在测序的左端或右端序列。但是使用唯一分子标签 (UMIs)的测序方案会产生包含细胞和`UMI barcode`再加接头序列但没有转录本序列的`reads`。因此reads虽然是双端测序，但比对时按单端reads对待。  

FastQ文件格式如下  

```sh
>ReadID
READ SEQUENCE
+
SEQUENCING QUALITY SCORES
```

#### BAM  

BAM文件是存储比对结果的标准有效的高度压缩的二进制格式，其文本格式`SAM`是直接可读的。BAM/SAM文件包含一个头部，记录样本准备、测序和比对的信息；后面是每个reads的比对结果，`tab`作为列分隔符。  

比对行有下列标准格式：  

1. QNAME：read编号（如果是UMI文库，通常包含UMI条形码）
2. FLAG：数字标记指示reads比对的”类型”，如reads是否比对上，是否为`properly paired`等，Picard网站可以在”类型”和对应的数字之间进行转换，有更详细阐述。
3. RNAME：参考序列编号（比如比对到的染色体名字）。
4. POS：最左边的比对位置。
5. MAPQ：比对质量
6. CIGAR：表示reads的匹配/不匹配部分 (可能包括soft-clipping)
7. RNEXT：mate/next reads比对到的参考序列编号
8. PNEXT：mate/next reads比对到的第一个碱基位置
9. TLEN：模板长度（read比对到的参考区域的长度）
10. SEQ：read序列信息
11. QUAL：read质量信息  

BAM/SAM文件可以用`samtools`互相转换。  

```
# 新版本samtools中-S选项忽略，不需要再加，会自己判断输入的是bam还是sam格式
samtools view -S -b file.sam > file.bam
# -h:包含header
samtools view -h file.bam > file.sam
```

一些测序服务机构会自动把测序reads比对到标准基因组并提供`BAM`或`CRAM`格式文件，通常这些基因组不会包含`ERCC`序列，继而不会有`ERCC reads`比对到`BAM/CRAM`文件中。为了量化`ERCCs`（或序列有任何其他遗传变异或外源表达需要考虑时），或者如果想使用不同于标准流程中的比对算法，那你需要把`BAM/CRAM`文件转回`FastQ`:  

`bedtools`可以把`BAM`文件转成`FastQ`，为了避免把比对到多个基因组位置的同一个reads转换为FASTQ中的多条reads，需要先把BAM文件按read名称排序，并使用Samtools删除次级比对 (`secondary alignments`)。此外Picard里也有把`BAM`转成`FastQ`文件的方法。  

```sh
# sort reads by name
samtools sort -n original.bam -o sorted_by_name.bam
# remove secondary alignments
samtools view -b -F 256 sorted_by_name.bam -o primary_alignment_only.bam
# convert to fastq
bedtools bamtofastq -i primary_alignment_only.bam -fq read1.fq -fq2 read2.fq
```

#### CRAM  

CRAM文件与BAM文件类似，只是header中包含比对用到的参考基因组的信息。这使得每个read中与参考基因组相同的碱基可以被进一步压缩。CRAM也支持一些有损数据压缩方式来进一步优化储存，CRAMs格式主要是Sanger/EBI测序机构在使用。

CRAM和BAM文件可以用最新一版的`samtools(>=v1.0)`相互转换。然而这个转换需要预先下载并缓存参考基因组。可以从CRAM文件的头部元数据中获得参考基因组信息自行下载，具体按下面的操作进行转换：  

```sh
export REF_CACHE=/path_to/cache_directory_for_reference_genome
samtools view -b -h -T reference_genome.fasta file.cram -o file.bam
samtools view -C -h -T reference_genome.fasta file.bam -o file.cram
```

#### 手动查看文件  

一些时候，需要自己查看文件，比如查看下文件的`header`信息是否正确。`less`和`more`可以用来在命令行查看任意大小文本文件 (*个人更常用`less`*)。管道符`|`可以在多个命令之间传输数据，省却把中间数据存储多个拷贝的过程，既简洁又快速。  

```sh
less file.txt
more file.txt
# counts the number of lines in file.txt
wc -l file.txt
samtools view -h file.[cram/bam] | more
# counts the number of lines in the samtools output
samtools view -h file.[cram/bam] | wc -l
```

**练习**

假如你已经有了一个小的`cram`格式文件：`EXAMPLE.cram`

- *任务1*：这个文件是怎么获得的？用了什么比对软件?基因组的版本是什么？（提示：检查头部文件）
- *任务2*: 有多少reads比对或没比对上？文件共有多少短序列？`secondary alignments`有多少？（提示：用FLAG）
- *任务3*：将CRAM格式转成Fastq文件。转换后的每条read都是只有一个拷贝吗？（转换后的文件命名为 `10cells_read1.fastq` `10cells_read2.fastq`）

小技巧：如果运行某个软件的帮助命令卡住时，直接输入命令，看看有无提示信息？  

**答案**  

```sh
samtools view -T 2000_reference.transcripts.fa -H EXAMPLE.cram | less
samtools view -T 2000_reference.transcripts.fa -f 4 EXAMPLE.cram | wc -l # unmapped
samtools view -T 2000_reference.transcripts.fa -F 260 EXAMPLE.cram | wc -l # mapped
samtools view -T 2000_reference.transcripts.fa -F 256 EXAMPLE.cram | wc -l # total
samtools view -T 2000_reference.transcripts.fa -f 256 EXAMPLE.cram | wc -l # secondary alignments

samtools view -b -h -T 2000_reference.transcripts.fa EXAMPLE.cram -o EXAMPLE.bam
samtools sort -n EXAMPLE.bam -o sorted_EXAMPLE.bam
samtools view -b -F 256 sorted_EXAMPLE.bam -o primary_EXAMPLE.bam 
# convert to fastq
bedtools bamtofastq -i primary_EXAMPLE.bam -fq 10cells_read1.fq -fq2 10cells_read2.fq
```

#### 基因组和基因注释（FASTA,GTF）  

为了进行序列比对，需要参考基因组和/或基因组注释文件（`GTF`格式或`GFF`格式）。模式生物的基因组可以从任何主要的数据库下载：Ensembl, NCBI,或者UCSC Genome Browser。  

GTF文件有基因、转录本和外显子的注释,他们必定包含：  

1. seq_id：序列的编号，一般为chr或scafold编号；
2. source: 注释的来源，一般为数据库或者注释的机构，如果未知，则用点`.`代替；
3. type: 注释信息的类型，比如Gene、cDNA、mRNA、CDS等;
4. start: 该基因或转录本在参考序列上的起始位置 (从1开始，包含);
5. end: 该基因或转录本在参考序列上的终止位置 (从1开始，包含);
6. score: 得分，数字，是注释信息可能性的说明，可以是序列相似性比对时的E-values值或者基因预测是的P-values值，`.`表示为空;
7. strand: 该基因或转录本位于参考序列的正链(+)或负链(-)上;
8. phase: 仅对注释类型为`CDS`有效，表示起始编码的位置，有效值为`0,1,2`。(对于编码蛋白质的CDS来说，本列指定下一个密码子开始的位置。每3个核苷酸翻译一个氨基酸，从0开始，CDS的起始位置，除以3，余数就是这个值，表示到达下一个密码子需要跳过的碱基个数。`0`表示该编码框的第一个密码子第一个碱基位于其5’末端；`1`表示该编码框的第一个密码子的第一个碱基位于该编码区外；`2`表示该编码框的第一个密码子的第一、二个碱基位于该编码区外；)；
9. attributes: 一个包含众多属性的列表，格式为`标签 值`(`tag value`)，以多个键值对组成的注释信息描述，键与值之间用`` (空格分割)，不同的键值用`;`隔开，如`gene_id “gene”; transcript_id “geneA.1”; database_id “0012”; modified_by “Damian”; duplicate 0`。  

根据我们的经验，Ensembl是最容易使用的，并且具有最大的注释集。NCBI往往更严格，仅包含高可信度的基因注释。而UCSC包含多个使用不同标准的基因注释。  

如果你的实验系统含有非标准序列 (比如`ERCC spike-ins`)，那么这些序列必须加到基因组`fasta`和`gtf`上来定量它们的表达。另外，对CRISPR相关序列或其他过表达/报告载体也必须进行相同的操作。  

为了获得最大的可用性和灵活性，我们建议为任何添加的非标准序列创建完整详细的`fasta`序列文件和`gtf`文件。  

目前还没有标准化的方法来做到这一点。下面是我们写的一个`perl`脚本，可以把`ERCC`序列转成对应的`gtf`和`fasta`文件，以便附加到标准基因组中。如果要量化内含子reads时，您可能还需要更改`gtf`文件以处理内含子中的重复元件。任何脚本语言甚至是`awk`或一些文本编辑器都可以相对有效地完成这项任务，但它们超出了本次课程的范围。 

```perl
# Converts the Annotation file from 
# https://www.thermofisher.com/order/catalog/product/4456740 to 
# gtf and fasta files that can be added to existing genome fasta & gtf files.

my @FASTAlines = ();
my @GTFlines = ();
open (my $ifh, "ERCC_Controls_Annotation.txt") or die $!;
<$ifh>; #header
while (<$ifh>) {
    # Do all the important stuff
    chomp;
    my @record = split(/\t/);
    my $sequence = $record[4];
    $sequence =~ s/\s+//g; # get rid of any preceeding/tailing white space
    $sequence = $sequence."NNNN";
    my $name = $record[0];
    my $genbank = $record[1];
    push(@FASTAlines, ">$name\n$sequence\n");
# is GTF 1 indexed or 0 indexed? -> it is 1 indexed
# + or - strand?
    push(@GTFlines, "$name\tERCC\tgene\t1\t".(length($sequence)-2)."\t.\t+\t.\tgene_id \"$name-$genbank\"; transcript_id \"$name-$genbank\"; exon_number \"1\"; gene_name \"ERCC $name-$genbank\"\n");
    push(@GTFlines, "$name\tERCC\ttranscript\t1\t".(length($sequence)-2)."\t.\t+\t.\tgene_id \"$name-$genbank\"; transcript_id \"$name-$genbank\"; exon_number \"1\"; gene_name \"ERCC $name-$genbank\"\n");
    push(@GTFlines, "$name\tERCC\texon\t1\t".(length($sequence)-2)."\t.\t+\t.\tgene_id \"$name-$genbank\"; transcript_id \"$name-$genbank\"; exon_number \"1\"; gene_name \"ERCC $name-$genbank\"\n");
} close($ifh);

# Write output
open(my $ofh, ">", "ERCC_Controls.fa") or die $!;
foreach my $line (@FASTAlines) {
    print $ofh $line;
} close ($ofh);

open($ofh, ">", "ERCC_Controls.gtf") or die $!;
foreach my $line (@GTFlines) {
    print $ofh $line;
} close ($ofh);
```

```sh
# 下面两个awk命令可以实现perl脚本的功能
# 如果是windows的文件，替换下末尾的换行符
sed -i 's/^M//' ERCC_Controls_Annotation.txt
# 转成FASTA序列
awk 'BEGIN{OFS=FS="\t"}{if(FNR>1) print ">"$1"\n"$NF"NNNN"}' ERCC_Controls_Annotation.txt >ERCC.fa
# 转成GTF
awk 'BEGIN{OFS=FS="\t"}{if(FNR>1) {seq_len=length($NF)+2; attr="gene_id \""$1"-"$2"\"; transcript_id \""$1"-"$2"\"; exon_number \"1\"; gene_name \""$1"-"$2"\""; print $1,"ERCC","gene",1,seq_len,".","+",".",attr; print $1,"ERCC","transcript",1,seq_len,".","+",".",attr; print $1,"ERCC","exon",1,seq_len,".","+",".",attr;}}' ERCC_Controls_Annotation.txt >ERCC.gtf
```

### 测序文库拆分 (Demultiplexing)  

文库拆分因使用的前期Protocol不同或构建的流程不同需要有对应的处理方式。我们认为最灵活可用的文库拆分工具是[zUMIs](https://github.com/sdparekh/zUMIs/wiki/Usage)，可以用来拆分和比对大部分基于UMI的建库方式。对于`Smartseq2`或其他双端全长转录本方案，数据通常已经拆分好了。例如GEO或ArrayExpress之类的公共数据存储库会要求小规模或`plate-based scRNASeq`数据拆分好再上传，并且很多测序服务商提供的数据都是自动拆分好的。如果使用的分析流程依赖于拆分好的数据但测序服务商提供的数据没有拆分时就需要自己拆分。因为不同的建库方案引入的`barcode`序列的长度和位置不同，通常都需要自己写脚本解决。  

对于所有数据类型，”文库拆分”涉及从一端或双端短序列中识别和移除细胞条形码序列 (`cell barcode`)。如果提前知道加入的细胞条形码，比如数据来自基于PCR板的方案，只需要找到条形码并与条形码库作比对，归类于与之最相似的那个就可以 (根据条形码的设计，一般允许最多1-2个错配)。这些数据通常在比对之前先做拆分，从而可以并行比对，提高效率。  

我们有公开可用 (<>)的 perl脚本，可以拆分任何`plate-based`的建库方案生成的数据，不管有没有`UMI`。操作如下：  

```sh
# https://github.com/tallulandrews/scRNASeqPipeline
# perl 1_Flexible_UMI_Demultiplexing.pl read1.fq read2.fq b_structure index mismatch prefix\n";
#    print STDERR "
#    read1.fq : barcode/umi containing read
#    read2.fq : non-barcode containing read
#    b_structure : a single string of the format C##U# or U#C## 
#        where C## is the cell-barcode and U# is the UMI.
#        e.g. C10U4 = a 10bp cell barcode followed by a 4bp UMI
#    index : file containg a single column of expected cell-barcodes.
#        if equal to \"UNKNOWN\" script will output read counts for each unique barcode.
#    mismatch : maximum number of permitted mismatches (recommend 2)
#    prefix : prefix for output fastq files.
perl 1_Flexible_UMI_Demultiplexing.pl 10cells_read1.fq 10cells_read2.fq "C12U8" 10cells_barcodes.txt 2 Ex
```

运行过程输出如下：  

```
## 
##  Doesn't match any cell: 0
##  Ambiguous: 0
##  Exact Matches: 400
##  Contain mismatches: 0
##  Input Reads: 400
##  Output Reads: 400
## Barcode Structure: 12 bp CellID followed by 8 bp UMI
```

```sh
perl utils/1_Flexible_FullTranscript_Demultiplexing.pl data/10cells_read1.fq data/10cells_read2.fq "start" 12 data/10cells_barcodes.txt 2 Ex
```

```
## 
## Doesn't match any cell: 0
## Ambiguous: 0
## Exact Matches: 400
## Contain Mismatches: 0
## Input Reads: 400
## Output Reads: 400
```

对于包含`UMI`的数据，文库拆分包含把`UMI code`加到来源于基因区的序列的名字上。如果数据来源于`droplet-based protocol`或者`SeqWell`，实际加入的`barcode`序列的种类多于捕获到的细胞数时，为了避免生成特别多的文件，一般也把`cell-barcode`加到测序reads的名字后面。在这种情况下，文库拆分是在定量过程中进行的，有利于识别来源于完整细胞而不是背景噪声中的`cell-barcode`序列。  

#### 鉴定含有细胞的液滴/微孔  

液滴型scRNA-seq方法中只有一小部分的液滴包含珠状物和一个完整细胞。然而生物实验不会那么理想，有些RNA会从死细胞或破损细胞中漏出来。所以没有完整细胞的液滴有可能捕获周围环境游离出的少了RNA并且走完测序环节出现在最终测序结果中。液滴大小、扩增效率和测序环节中的波动会导致”背景”和真实细胞最终获得的文库大小变化很大，使得区分哪些文库来源于背景哪些来源于真实细胞变得复杂。  

液滴型scRNA-seq方法中只有一小部分的液滴包含珠状物和一个完整细胞。然而生物实验不会那么理想，有些RNA会从死细胞或破损细胞中漏出来。所以没有完整细胞的液滴有可能捕获周围环境游离出的少了RNA并且走完测序环节出现在最终测序结果中。液滴大小、扩增效率和测序环节中的波动会导致”背景”和真实细胞最终获得的文库大小变化很大，使得区分哪些文库来源于背景哪些来源于真实细胞变得复杂。  

大多数方法使用每个`barcode`对应的总分子数(如果是UMI)或总reads数的分布来寻找一个”break point”区分来自于真实细胞的较大的文库和来自于背景的较小的文库。下面加载一些包含大细胞和细胞的模拟数据实际操作下：  

```R
umi_per_barcode <- read.table("droplet_id_example_per_barcode.txt.gz")
truth <- read.delim("droplet_id_example_truth.gz", sep=",")
```

*练习*: 有多少唯一的条形码被检测到？数据里多少来自真细胞？为了简化计算，写代码排除掉少于10个分子的条形码。  

```R
dim(umi_per_barcode)[1]
dim(truth)[1]
umi_per_barcode <- umi_per_barcode[umi_per_barcode[,2] > 10,]
```

一个找寻每个条形码对应的分子数突然下降的拐点的方法：  

```R
barcode_rank <- rank(-umi_per_barcode[,2])
plot(barcode_rank, umi_per_barcode[,2], xlim=c(1,8000))
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab2/unnamed-chunk-11-1.png)  

可以看到文库大小分布类似一条指数曲线，为了看的更清楚，对数据进行`log`转换。  

```R
log_lib_size <- log10(umi_per_barcode[,2])
plot(barcode_rank, log_lib_size, xlim=c(1,8000))
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab2/unnamed-chunk-12-1.png)   

转换后，拐点更明显了，我们可以手动估计拐点的位置来区分背景噪音和真实细胞，但是用算法来识别要更精确，可重用性更强。  

```R
# inflection point
o <- order(barcode_rank)
log_lib_size <- log_lib_size[o]
barcode_rank <- barcode_rank[o]

rawdiff <- diff(log_lib_size)/diff(barcode_rank)
inflection <- which(rawdiff == min(rawdiff[100:length(rawdiff)], na.rm=TRUE))

plot(barcode_rank, log_lib_size, xlim=c(1,8000))
abline(v=inflection, col="red", lwd=2)
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab2/unnamed-chunk-13-1.png)  

另一种方法是构建混合模型，找出较高和较低分布相交的位置。但是数据可能不会像假定的分布那么好：  

```R
set.seed(-92497)
# mixture model
require("mixtools")

mix <- normalmixEM(log_lib_size)
## number of iterations= 43
plot(mix, which=2, xlab2="log(mol per cell)")

p1 <- dnorm(log_lib_size, mean=mix$mu[1], sd=mix$sigma[1])
p2 <- dnorm(log_lib_size, mean=mix$mu[2], sd=mix$sigma[2])
if (mix$mu[1] < mix$mu[2]) {
    split <- min(log_lib_size[p2 > p1])
} else {
    split <- min(log_lib_size[p1 > p2])
}
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab2/unnamed-chunk-14-1.png)   

第三种方法，CellRanger假设真实细胞文库大小变化在10倍以内，用期望的细胞数目估计区间的分布。  

```R
n_cells <- length(truth[,1])
# CellRanger
totals <- umi_per_barcode[,2]
totals <- sort(totals, decreasing = TRUE)
# 99th percentile of top n_cells divided by 10
thresh = totals[round(0.01*n_cells)]/10
plot(totals, xlim=c(1,8000))
abline(h=thresh, col="red", lwd=2)
```

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab2/unnamed-chunk-16-1.png)  

### 使用STAR比对read  

现在我们已经对测序原始数据进行了质控，获得了高质量的`Clean data`，下一步就是把它们比对到参考基因组。如果我们想定量基因表达或鉴定样本之间差异表达的基因，则通常需要某种形式的比对。  

用于短序列比对的工具已经开发了很多，但今天我们主要涉及两个。第一个工具是STAR。对于测序数据中的每条reads，STAR尝试找到能与参考基因组中一个或多个位置匹配的最长可能序列。例如，在下图中，有一个短序列（蓝色），它跨越两个外显子和一个选择性剪接点（紫色）。STAR能够发现短序列的第一部分与第一外显子的序列匹配，而第二部分与第二外显子中的序列匹配。因为`STAR`能够用这种方式识别剪接事件，所以它被称为`splice aware`的比对工具

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab2/640.jpg)  

通常`STAR`把短序列比对到参考基因组时允许检测新的剪接事件或染色体重排事件。然而，STAR的一个问题是它需要大量的内存，尤其是参考基因组很大（例如老鼠和人类，大约需要30 G内存）的时候。为了加速今天的分析，我们将使用STAR把`reads`比对到只包含`2000`个转录本的参考转录组上。**请注意**，这**不**是常用或推荐的做法，只是考虑时间问题才这样做。我们通常建议比对到参考基因组 (但过程与此类似)。  

执行STAR比对需要两个步骤。在第一步中，用户向STAR提供参考基因组序列（FASTA）和注释（GTF）,来创建基因组索引。第二步，STAR将用户的短序列数据比对到基因组索引。  

```sh
# 实际应用时比对到基因组
# 命令如下
mkdir -p star_GRCh38
# --runThreadN 2: 指定使用2个线程
# --sjdbOverhang 100: 默认
STAR --runMode genomeGenerate --runThreadN 2 --genomeDir star_GRCh38 \
     --genomeFastaFiles GRCh38.fa --sjdbGTFfile GRCh38.gtf
# 输出文件如下，注意看下输出文件的大小，有无空文件，基因数是否对。
#
ls -sh star_GRCh38
#
# 总用量 2.1G
# 4.0K chrLength.txt      368K exonInfo.tab          1.5G SAindex
# 4.0K chrNameLength.txt   24K geneInfo.tab          204K sjdbInfo.txt
# 4.0K chrName.txt         64M Genome                204K sjdbList.fromGTF.out.tab
# 4.0K chrStart.txt       4.0K genomeParameters.txt  204K sjdbList.out.tab
# 732K exonGeTrInfo.tab   516M SA                    224K transcriptInfo.tab
#
# STAR解析后的基因数
wc -l star_GRCh38/geneInfo.tab
#
# 原始GTF的基因数
grep -cP '\tgene\t' GRCh38.gtf
```

现在完成了索引创建，执行比对步骤   

```sh
mkdir results
mkdir results/STAR

STAR --runThreadN 4 --genomeDir indices/STAR --readFilesIn Share/ERR522959_1.fastq Share/ERR522959_2.fastq --outFileNamePrefix results/STAR/
```

```sh
mkdir -p trt_N061011
# --runThreadN 4: 使用4个线程
# --readFilesIn: 输入文件，左端和右端
# --readFilesCommand zcat：gzip压缩，指定解压方式
# --genomeDir：基因组索引目录的位置
# -S: 指定输出文件

# 动物一般写 1000000，植物一般写5000
max_intron_size=100000

# --genomeLoad LoadAndKeep : 共享内存
# 其他参数自己对着star的帮助手册看
star_p=" --outFilterType BySJout --outSAMattributes NH HI AS NM MD \
       --outFilterMultimapNmax 20 --alignSJoverhangMin 8 --alignSJDBoverhangMin 1 \
       --alignIntronMin 20 --alignIntronMax ${max_intron_size} \
                --alignMatesGapMax ${max_intron_size} \
                --outFilterMatchNminOverLread 0.66 --outFilterScoreMinOverLread 0.66 \
                --winAnchorMultimapNmax 70 --seedSearchStartLmax 45 \
                --outSAMattrIHstart 0 --outSAMstrandField intronMotif \
                --genomeLoad LoadAndKeep --outReadsUnmapped Fastx \
                --outSAMtype BAM Unsorted --quantMode TranscriptomeSAM GeneCounts"

# STAR比对单个样品                
STAR --runMode alignReads --runThreadN 4 \
        --readFilesIn trt_N061011_1.fq.gz trt_N061011_2.fq.gz \
        --readFilesCommand zcat --genomeDir genome/star_GRCh38 \
        --outFileNamePrefix trt_N061011/trt_N061011. ${star_p}

# STAR比对单个样品                
STAR --runMode alignReads --runThreadN 4 \
        --readFilesIn trt_N061011_1.fq.gz trt_N061011_2.fq.gz \
        --readFilesCommand zcat --genomeDir genome/star_GRCh38 \
        --outFileNamePrefix trt_N061011/trt_N061011. ${star_p}

# Aug 03 11:44:27 ..... started STAR run
# Aug 03 11:44:27 ..... loading genome
# Aug 03 11:44:30 ..... started mapping
# Aug 03 11:44:48 ..... finished successfully

# 输出文件

ls -sh trt_N061011/*

# trt_N061011.Aligned.out.bam: 比对到基因组的bam文件
# trt_N061011.Aligned.toTranscriptome.out.bam：比对到转录组的bam文件，供RSEM计算TPM使用 
# trt_N061011.Log.final.out: reads比对日志
# trt_N061011.Log.out: 运行参数和过程
# trt_N061011.Log.progress.out: 运行日志

# trt_N061011.ReadsPerGene.out.tab: 每个基因的reads count，链非特异性RNASeq选第2列.
# column 1: gene ID
# column 2: counts for unstranded RNA-seq
# column 3: counts for the 1st read strand aligned with RNA (htseq-count option -s yes)
# column 4: counts for the 2nd read strand aligned with RNA (htseq-count option -s reverse)
# 
# Select the output according to the strandedness of your data. Note, that if you have stranded data and choose one of the columns 3 or 4, the other column (4 or 3) will give you the count of antisense reads. 

# trt_N061011.SJ.out.tab: Junction reads
# trt_N061011.Unmapped.out.mate1：未比对上的reads
# trt_N061011.Unmapped.out.mate2：未比对上的reads
```

### Kallisto和Pseudo-Alignment  

`STAR`是序列比对工具，而`Kallisto`是伪比对工具。它们的区别是：比对工具是把reads比对回参考基因组或转录组，而伪比对工具是把`k-mers`比对到参考转录组。  

#### 什么是k-mer  

`k-mer`是来源于测序短序列中的长度为`k`的子序列。例如，假设有短序列`ATCCCGGGTTAT`，想从中获得`7-mer`。为此，我们将提取前七个碱基作为第一个`7-mer`，然后向下移动一个碱基获得第二个`7-mer`，以此类推。  

#### 为什么比对k-mers而不是reads  

1. 伪比对工具利用算法技巧使得比对`k-mers`比比对`reads`速度快很多  
2. 在某些情况下，伪对齐工具可能比传统比对工具更好的处理测序错误问题。例如，假设序列上第一个碱基中存在测序错误，本来是`T`却测序成了`A`。对伪比对工具来说，只会影响第一个`7-mer`而不会影响后续`7-mer`的比对。  

#### Kallisto的伪比对模式  

Kallisto有一个为单细胞转录组特别设计的伪比对模式。和`STAR`不同，Kallisto比对到的是参考转录组而不是参考基因组，意味着`Kallisto`是将序列比对到剪接异构体而不是基因上，对单细胞来讲，这是有挑战性的：  

- 单细胞RNA-seq的覆盖率低于`bulk RNA-seq`，这意味着可以从序列中获得的信息总量减少了。
- 许多单细胞RNA-seq方案具有`3'`覆盖偏好性，如果两种剪接异构体只在5’末端不同，则很难确定序列来源于哪个剪接异构体。
- 一些单细胞RNA-seq方案测序读长短，也难以区分来源于哪个剪接异构体。  

Kallisto的伪模式采用了略微不同的伪比对方法。它不与剪接异构体比对，而是与等价类 (`equivalence classes`)比对。所以如果read比对到多个异构体，Kallisto会记录read比对到包含有所有异构体的等价类，因此可以使用等价类计数而非基因或转录本计数用于下游的聚类等分析。具体见下图：  

![](https://cdn.jsdelivr.net/gh/Moonerss/CDN/paper/lab2/642.webp)  

今天我们只用一个细胞来展示伪比对，但是Kallisto其实可以同时对大量细胞进行伪比对，并且可以使用`UMIs`的信息。  

类似于`STAR`，伪比对前也需要为`Kallisto`生成一个索引。  

```sh
mkdir results/Kallisto
kallisto pseudo -i indices/Kallisto/transcripts.idx -o results/Kallisto -b batch.txt
```

  参考 https://pachterlab.github.io/kallisto/manual  构建`batch.txt`。

`batch.txt`文件格式如下：第一列是细胞的名字`ID`, 后面两列是对应的`PE reads`。所有`#`开头的行都忽略。如果是单端测序，命令行参数指定为`--single -l -s`，`batch.txt`只需提供一个`fastq`文件。  

```sh
#id file1 file 2
cell1 cell1_1.fastq.gz cell1_2.fastq.gz
cell2 cell2_1.fastq.gz cell2_2.fastq.gz
cell3 cell3_1.fastq.gz cell3_2.fastq.gz
...
```

如果使用了`--umi`参数，`batch.txt`文件格式如下：  

```sh
#id umi-file file-1
cell1 cell_1.umi cell_1.fastq.gz
cell2 cell_2.umi cell_2.fastq.gz
cell3 cell_3.umi cell_3.fastq.gz
...
```

`umi-file`是文本文件，每行是一个read的`UMI`序列，必须与`fastq`中`reads`的顺序一致。即便`UMI`数据是单端，也不会用到测序片段的长度信息。  

```sh
TTACACTGAC
CCACTCTATG
CAGGAAATCG
...
```

`kallisto`在`UMI`模式下，不是计算每个`equivalence class`的`reads count`，而是使用测序reads做`pseudoalign`获得`equivalence class`, 计算每个`equivalence class`上的UMIs个数。  

#### 理解Kallisto的输出结果  

上面命令会生成4个文件-`matrix.cells`, `matrix.ec`, `matrix.tsv` 和 `run_info.json`.  

- `matrix.cell` 为细胞ID列表，测试数据只用了一个细胞，这个文件应该只包含“ERR522959”
- `matrix.ec` 含有所有用到的等价类信息。每一行的第一个数字是等价类`ID`，第二个数字对应等价类的转录文本`ID`。举个例子，`10 1,2,3`表示等价类`10`包含转录文本ID `1`, `2`和`3`。ID号对应于转录本在`reference.transcripts.fa`中出现的顺序。第一个出现的转录本ID为`0`，转录本ID `1`, `2`和`3`对应于`reference.transcripts.fa`中的第二，第三和第四条转录本。
- `matrix.tsv` 表示每个等价类在不同细胞中的`reads count`信息。第一个数字是等价类ID，和`matrix.ec`中的定义一样。第二个数字是`细胞ID`，和`matrix.cell`文件中的细胞名字顺序一一对应。第三个数字是等价类在该细胞中的`reads count`。举个例子，`5 1 3`指细胞`1`中有`3`个reads比对到等价类`5`。细胞ID同样是**零**起始的索引，所以细胞`1`指`matrix.cells`中的第二个细胞。
- `run_info.json` 含有关于`Kallisto`执行的信息，一般可忽略。   

