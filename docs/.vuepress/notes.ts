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
          text: '文件格式',
          collapsed: false,
          icon: 'carbon:idea',
          items: ['filetype'],
        }
      ]
    }
  ]
})

export const enNotes = definePlumeNotesConfig({
  dir: 'en/notes',
  link: '/',
  notes: [],
})