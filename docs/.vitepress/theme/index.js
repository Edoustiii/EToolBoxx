import DefaultTheme from 'vitepress/theme'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // می‌تونی کامپوننت‌های سفارشی اضافه کنی
  }
}
