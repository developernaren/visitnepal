import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Visit Nepal 2025',

  theme: defaultTheme({
    logo: 'https://www.tourguideinnepal.com/wp-content/uploads/2022/11/ac5b71754abf759a652e3fe30ec1fc61.png',

    navbar: ['/'],
  }),

  bundler: viteBundler(),
})
