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
          items: ['filetype', 'concept', 'genome'],
        }
      ]
    },
    {
      dir: 'workflow',
      link: '/workflow/',
      sidebar: [
        {
          text: '测序原始数据处理流程',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['RNA', 'ATAC', 'CHIP'],
        }
      ]
    },
    {
      dir: 'R',
      link: '/R/',
      sidebar: [
        {
          text: '零星概念',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['typeof'],
        },
        {
          text: '使用案例',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['trycatch'],
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
          items: ['chara_py'],
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