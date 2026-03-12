# ⚛️ Kagide — Frontend Developer Portfolio

A clean, modern React portfolio featuring four projects, React Router v6, EmailJS contact form, and professional social links.

**Stack:** React 18 · React Router v6 · React Icons · EmailJS · Vite · CSS Modules

---

## 🗂 Folder Structure

```
src/
├── components/        ← Shared UI: Navbar, Footer, ProjectCard, Layout
├── pages/             ← Route pages: Home, About, Projects, Contact, NotFound
├── routes/            ← router.jsx — createBrowserRouter config
├── data/              ← projects.js, techStack.js
├── hooks/             ← useScrollReveal.js
├── styles/            ← global.css (design tokens + reset)
└── main.jsx           ← RouterProvider entry point
```

---

## 🚀 Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## ✉️ EmailJS Contact Form Setup (Required — 10 minutes)

1. Sign up free at [emailjs.com](https://emailjs.com)
2. **Add a Service** → Connect Gmail → copy `Service ID`
3. **Create a Template** → use these variables in the template body:
   ```
   From: {{name}} ({{email}})
   Message: {{message}}
   ```
   → copy `Template ID`
4. Go to **Account → API Keys** → copy your `Public Key`
5. Open `src/pages/Contact.jsx` and replace lines 16–18:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
   ```
6. Test the form — emails arrive at `kagide6@gmail.com` ✓

---

## 🔗 Update Project Repo URLs

Open `src/data/projects.js` and update each `repoUrl` field with your real GitHub links:

```js
repoUrl: 'https://github.com/Kagide/My-Shop',       // update if different
repoUrl: 'https://github.com/Kagide/CV-Application', // update if different
repoUrl: 'https://github.com/Kagide/Weather-App',    // update if different
repoUrl: 'https://github.com/Kagide/To-Do-App',      // update if different
```

Add `liveUrl: 'https://...'` when you deploy the projects.

---

## 🌐 LinkedIn URL

Replace `https://www.linkedin.com/in/kagide` with your real LinkedIn URL in:
- `src/components/Navbar.jsx` (if added)
- `src/components/Footer.jsx`
- `src/pages/About.jsx`
- `src/pages/Contact.jsx`

---

## 🖼 Add Your Photo

In `src/pages/About.jsx`, find the `.avatar` div and add:
```css
/* In About.module.css, update .avatar */
background-image: url('/your-photo.jpg');
background-size: cover;
background-position: center;
```
Place `your-photo.jpg` in the `public/` folder.

---

## 🌐 Deployment

### Vercel (Recommended — 2 min)
```bash
npm install -g vercel
npm run build && vercel --prod
```
Or: vercel.com → Import GitHub repo → auto-deploys on push.

### Netlify
```bash
npm run build
# Drag /dist to netlify.com/drop
```

### GitHub Pages
```bash
# 1. In vite.config.js → set base: '/repo-name/'
# 2. npm run deploy
```

---

## ✅ Pre-Launch Checklist

- [ ] EmailJS credentials added and form tested
- [ ] All 4 project `repoUrl` fields updated
- [ ] LinkedIn URL updated across all files
- [ ] Photo added (or initials placeholder looks clean)
- [ ] `npm run build` completes without errors
- [ ] Deployed and tested on mobile
