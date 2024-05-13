---
title: 非模式基因GO富集分析：使用OrgDb
author: Jeason
createTime: 2023/04/04 22:47:45
permalink: /bioinfo/orgdb/
tags:
  - Bioconductor
  - biosoftware
---

模式生物做什么都简单，非模式生物则很多缺少注释，没有注释你就没法做，只能是借助于各种软件比如blastgo，自己跑电子注释。但今天要讲的不是这种情况，很多物种还是有注释的，只是你有时候不知道该去那里下载，或者你有数据，却不知道该怎么用！很多的软件都是针对模式生物的，或者针对某一些类型的非模式生物，能够支持多种非模式生物，能够支持用户自己的注释文件的软件相对来讲，就非常少有了，然而clusterProfiler就是这类少有的软件之一。

# 获得OrgDb

我们可以通过`AnnotationHub`在线检索并抓取`OrgDb`，比如这里以玉米为例：

```r
require(AnnotationHub)
hub <- AnnotationHub()
query(hub, "zea")
AnnotationHub with 2 records
# snapshotDate(): 2017-04-25 
# $dataprovider: Inparanoid8, ftp://ftp.ncbi.nlm.nih.gov/gene/DATA/
# $species: Gibberella zeae, Zea mays
# $rdataclass: Inparanoid8Db, OrgDb
# additional mcols(): taxonomyid, genome, description,
#   coordinate_1_based, maintainer, rdatadateadded, preparerclass, tags,
#   rdatapath, sourceurl, sourcetype 
# retrieve records with, e.g., 'object[["AH10514"]]' 

            title                          
  AH10514 | hom.Gibberella_zeae.inp8.sqlite
  AH55736 | org.Zea_mays.eg.sqlite   
```

通过检索，`org.Zea_mays.eg.sqlite`就是我们所要的`OrgDb`，可以通过相应的`accession number`, `AH55736`抓取文件，并存入了maize对象中，它包含了51097个基因的注释：

```r
> maize <- hub[['AH55736']]
> length(keys(maize))
[1] 51097
```

这个OrgDb，包含有以下一些注释信息：

```r
> columns(maize)
 [1] "ACCNUM"      "ALIAS"       "CHR"         "ENTREZID"    "EVIDENCE"   
 [6] "EVIDENCEALL" "GENENAME"    "GID"         "GO"          "GOALL"      
[11] "ONTOLOGY"    "ONTOLOGYALL" "PMID"        "REFSEQ"      "SYMBOL"     
[16] "UNIGENE"
```
