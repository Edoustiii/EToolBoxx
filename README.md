# EmadT3ch Tools 🚀

مجموعه کامل ابزارها، وبسایت‌ها و منابع کاربردی برای توسعه‌دهندگان و کاربران حرفه‌ای

## ✨ ویژگی‌ها

- 🎨 طراحی مدرن با افکت‌های نئونی Glassmorphism
- 📱 کاملاً واکنش‌گرا (Responsive) برای موبایل و دسکتاپ
- 🔍 قابلیت جستجوی سریع
- 🌐 دسته‌بندی منظم ابزارها
- ⚡ بهینه‌سازی شده با VitePress
- 🚀 انتشار خودکار با GitHub Actions

## 🛠️ فناوری‌های استفاده شده

- **VitePress** - فریم‌ورک استاتیک سایت
- **Vazirmatn** - فونت فارسی
- **GitHub Actions** - CI/CD برای انتشار خودکار
- **GitHub Pages** - هاست رایگان

## 📦 نصب و راه‌اندازی

### پیش‌نیازها

- Node.js 18 یا بالاتر
- npm یا yarn

### دستورات

```bash
# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه
npm run dev

# ساخت نسخه نهایی
npm run build

# پیش‌نمایش نسخه نهایی
npm run preview
```

## 📁 ساختار پروژه

```
.
├── docs/
│   ├── .vitepress/
│   │   ├── config.js          # تنظیمات VitePress
│   │   └── theme/
│   │       ├── index.js        # تم سفارشی
│   │       └── custom.css      # استایل‌های سفارشی
│   ├── public/
│   │   └── Assets/             # تصاویر و فایل‌ها
│   └── index.md                # صفحه اصلی
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions
└── package.json
```

## 🚀 انتشار روی GitHub Pages

1. ریپو را روی GitHub بسازید
2. در تنظیمات ریپو، به بخش **Settings > Pages** بروید
3. در قسمت **Source** گزینه **GitHub Actions** را انتخاب کنید
4. فایل `deploy.yml` به‌صورت خودکار سایت را بیلد و منتشر می‌کند

**نکته:** قبل از Push کردن، نام ریپو رو در `config.js` (در قسمت `base`) تنظیم کنید:

```js
base: '/نام-ریپوی-شما/',
```

## 🎨 سفارشی‌سازی

### تغییر رنگ‌های برند

رنگ‌ها را در `docs/.vitepress/theme/custom.css` تغییر دهید:

```css
:root {
  --vp-c-brand: #58a6ff;      /* آبی اصلی */
  --vp-c-accent: #a371f7;     /* بنفش */
}
```

### افزودن محتوا

محتوا را در `docs/index.md` ویرایش کنید. از Markdown و جداول استفاده کنید.

## 🤝 مشارکت

1. پروژه را Fork کنید
2. برنچ جدید بسازید: `git checkout -b feature/amazing-feature`
3. تغییرات را Commit کنید: `git commit -m 'Add amazing feature'`
4. برنچ را Push کنید: `git push origin feature/amazing-feature`
5. Pull Request باز کنید

## 📝 مجوز

این پروژه تحت مجوز MIT منتشر شده است - فایل [LICENSE](LICENSE) را ببینید.

## 📮 ارتباط

- 📢 کانال تلگرام: [@EmadT3ch](https://t.me/EmadT3ch)
- 💻 گیت‌هاب: [@EmadT3ch](https://github.com/EmadT3ch)

---

<div align="center">
  
**ساخته شده با ❤️ توسط Emad Dousti**

[⭐ این پروژه رو استار کنید](https://github.com/EmadT3ch/emadt3ch-tools)

</div>
