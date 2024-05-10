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