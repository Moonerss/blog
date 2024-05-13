import process from 'node:process'
import themePlume from 'vuepress-theme-plume'
import type { Theme } from 'vuepress'
import { zhNotes } from './notes.ts'
import { zhNavbar } from './navbar.ts'

export const theme: Theme = themePlume({

  logo: '/avatar.jpeg',
  hostname: 'https://jeason.netlify.app/',
  repo: 'https://github.com/Moonerss/blog',
  docsDir: 'docs',
  contributors: false,
  /***
  blog 页面的内容
  avatar: {
    name: 'Jeason',
    url: '/images/blogger-fav.png',
    description: '世间的美好总是不期而遇',
  },
  ***/
  social: [
    { icon: 'github', link: 'https://github.com/Moonerss' },
  ],

  editLinkText: '在 GitHub 上编辑此页',
  footer: { copyright: 'Copyright © 2024-present Jeason' },

  notes: zhNotes,
  navbar: zhNavbar,
  /***
  locales: {
    '/': {
      notes: zhNotes,
      navbar: zhNavbar,
    },
    '/en/': {
      notes: enNotes,
      navbar: enNavbar,
    },
  },
  ***/
})