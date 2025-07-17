import { definePlumeNotesConfig } from 'vuepress-theme-plume'

export const zhNotes = definePlumeNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    {
      dir: 'NGS',
      link: '/NGS/',
      sidebar: [
        {
          text: '基础内容',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['filetype', 'concept', 'genome', 'gene_id', 'tpm_fpkm_rpkm', 'vcf', 'epigenetics'],
        }
      ]
    },
    {
      dir: 'R',
      link: '/R/',
      sidebar: [
        {
          text: '零星概念',
          collapsed: true,
          icon: 'carbon:idea',
          items: ['typeof', 'r_object', 'file_r', 'apply'],
        },
        {
          text: '使用案例',
          collapsed: true,
          icon: 'carbon:idea',
          items: ['r_stats', 'trycatch', 'library_require', 'cut'],
        },
        {
          text: 'tidyverse',
          collapsed: true,
          icon: 'carbon:idea',
          dir: '/tidyverse/',
          items: ['readr', 'tibble', 'tidyr', 'dplyr', 'purrr', 'stringr']
        },
        {
          text: 'ggplot2',
          collapsed: true,
          icon: 'carbon:idea',
          dir: '/ggplot2/',
          items: ['ggplot_tips', 'ggplot_gallery', 'combine_ggplot2']
        },
        {
          text: 'R包开发',
          collapsed: true,
          icon: 'carbon:idea',
          dir: '/pkgs/',
          items: ['question', 'S3']
        },
        {
          text: '其他',
          collapsed: true,
          icon: 'carbon:idea',
          items: ['r_format', 'r_parallel'],
        }
      ]
    },
    {
      dir: 'py',
      link: '/py/',
      sidebar: [
        {
          text: 'Python',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['dataformat_py', 'chara_py'],
        }
      ]
    },
    {
      dir: 'Analysis/scRNA',
      link: '/scRNA/',
      sidebar: [
        '',
        {
          text: '数据预处理',
          link: '/scRNA/',
          items: ['cellranger', 'base', 'quality_control']
        }
      ]
    },
    {
      dir: 'Analysis/ATACseq',
      link: '/ATACseq/',
      sidebar: [
        {
          icon: 'grommet-icons:install',
          items: ['ATAC_seq']
        }
      ]
    },
    {
      dir: 'biology',
      link: '/biology/',
      sidebar: [
        {
          text: 'basic',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['program_death'],
        }
      ]
    },
    {
      dir: 'resource',
      link: '/resource/'
    }
  ]
})

export const enNotes = definePlumeNotesConfig({
  dir: 'en/notes',
  link: '/',
  notes: [],
})