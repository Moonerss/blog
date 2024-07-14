// set the top bar
import { NavItem } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = [
  { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
  {
    text: 'NGS',
    icon: 'material-symbols:genetics',
    // link: '/guide/intro/',
    link: '/notes/NGS/filetype.md',
    activeMatch: '^/NGS/',
  },
  /***
  {
    text: 'workflow',
    icon: 'carbon:workflow-automation',
    link: '/notes/workflow/RNA.md',
    activeMatch: '^/workflow/'
  },
  ***/
  {
    text: 'R',
    icon: 'mdi:language-r',
    link: '/notes/R/',
    activeMatch: '^/R/'
  },
  {
    text: 'Python',
    icon: 'gravity-ui:logo-python',
    link: '/notes/py/chara_py.md',
    activeMatch: '^/py/'
  },
  {
    text: 'Analysis',
    icon: 'material-symbols:book-5-outline',
    items: [
      {
        text: 'scRNA',
        link: '/scRNA/',
        icon: 'carbon:watson-machine-learning'
      }
    ]
  },
  {
    text: '资源',
    icon: 'material-symbols:book-5-outline',
    activeMatch: '^/resource/',
    items: [
      {
        text: '学习',
        link: '/bioinfo/',
        icon: 'carbon:watson-machine-learning'
      },
    ]
  },
  {
    text: 'Awesome',
    icon: 'material-symbols:book-5-outline',
    activeMatch: '^/awesome/',
    items: [
      {
        text: 'Command',
        link: '/awesome/command/',
        icon: 'carbon:watson-machine-learning'
      },
      {
        text: 'Tools',
        link: '/awesome/biotools/',
        icon: 'carbon:watson-machine-learning'
      },
      {
        text: 'R package',
        link: '/awesome/Rpkgs/',
        icon: 'carbon:watson-machine-learning'
      },
      {
        text: 'Plot',
        link: '/awesome/Plots/',
        icon: 'carbon:watson-machine-learning'
      }
    ]
  },
  {
    text: '博客',
    link: '/blog/',
    icon: 'material-symbols:article-outline',
    activeMatch: '^/(blog|article)/',
  },
] as NavItem[]

export const enNavbar = [
] as NavItem[]