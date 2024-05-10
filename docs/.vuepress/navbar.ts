// set the top bar
import { NavItem } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = [
  {
    text: 'NGS',
    icon: 'icon-park-outline:guide-board',
    // link: '/guide/intro/',
    link: '/notes/NGS/filetype.md',
    activeMatch: '^/NGS/',
  }
] as NavItem[]

export const enNavbar = [
] as NavItem[]