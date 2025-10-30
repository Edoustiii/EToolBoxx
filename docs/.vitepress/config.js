import { defineConfig } from 'vitepress'

export default defineConfig({
  // Base path برای GitHub Pages (نام ریپو رو اینجا بذار)
  base: '/EToolBoxx/',
  
  // اطلاعات پایه سایت
  title: 'EmadT3ch Tools',
  description: 'مجموعه کامل ابزارها و وبسایت‌های کاربردی برای توسعه‌دهندگان',
  
  // مسیر خروجی
  outDir: '.vitepress/dist',
  
  // تنظیمات زبان و جهت
  lang: 'fa-IR',
  dir: 'rtl',
  
  // Head tags برای فونت‌ها و متا
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'theme-color', content: '#0d1117' }],
    ['meta', { property: 'og:title', content: 'EmadT3ch Tools' }],
    ['meta', { property: 'og:description', content: 'مجموعه کامل ابزارها و وبسایت‌های کاربردی' }],
    ['meta', { property: 'og:type', content: 'website' }],
    
    // فونت Vazirmatn از CDN
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://cdn.jsdelivr.net/npm/vazirmatn@33.003/Vazirmatn-font-face.css', rel: 'stylesheet' }]
  ],

  // تنظیمات تم
  themeConfig: {
    // لوگو در navbar
    logo: '/Assets/logo.png',
    siteTitle: 'EmadT3ch Tools',

    // منوی ناوبری
    nav: [
      { text: '🏠 خانه', link: '/' },
      { text: '🛠️ ابزارها', link: '/#tools' },
      { text: '📚 منابع', link: '/#resources' },
      { text: '📘 درباره', link: '/#about' }
    ],

    // لینک‌های اجتماعی در فوتر
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Edoustiii' },
      { 
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
        },
        link: 'https://t.me/EmadT3ch'
      }
    ],

    // تنظیمات سرچ
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'جستجو',
                buttonAriaLabel: 'جستجو'
              },
              modal: {
                noResultsText: 'نتیجه‌ای یافت نشد',
                resetButtonTitle: 'پاک کردن',
                footer: {
                  selectText: 'انتخاب',
                  navigateText: 'حرکت',
                  closeText: 'بستن'
                }
              }
            }
          }
        }
      }
    },

    // فوتر
    footer: {
      message: 'Designed & Built with ❤️ by Emad Dousti',
      copyright: '<a href="https://t.me/EmadT3ch" target="_blank" rel="noopener">@EmadT3ch</a>'
    },

    // دکمه بازگشت به بالا
    returnToTopLabel: 'بازگشت به بالا',

    // تنظیمات sidebar (در صورت نیاز)
    sidebar: false,

    // برداشتن برخی المان‌های پیش‌فرض
    outline: false,
    editLink: {
      pattern: 'https://github.com/EmadT3ch/EToolBoxx/edit/main/docs/:path',
      text: 'ویرایش این صفحه در GitHub'
    },

    lastUpdated: {
      text: 'آخرین بروزرسانی',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },

  // تنظیمات Markdown
  markdown: {
    lineNumbers: false,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
