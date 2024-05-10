import { type UserConfig, defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
// add theme config
import { theme } from './theme.ts'

export default defineUserConfig({
  base: '/',
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  pagePatterns: ['**/*.md', '!**/*.snippet.md', '!.vuepress', '!node_modules'],
  bundler: viteBundler(),
  theme,
}) as UserConfig