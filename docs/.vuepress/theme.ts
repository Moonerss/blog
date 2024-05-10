import process from 'node:process'
import themePlume from 'vuepress-theme-plume'
import type { Theme } from 'vuepress'
import { enNotes, zhNotes } from './notes.ts'
import { enNavbar, zhNavbar } from './navbar.ts'

export const theme: Theme = themePlume({
  footer: { copyright: 'Copyright © 2024-present Jeason' },
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
})