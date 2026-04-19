# Commercial Remodeling Builders of Houston

Modern, professional website for **CRB Houston** built with Next.js 16. Ready for GitHub + Vercel.

## Deploy in 5 Minutes

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/crb-houston.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to vercel.com → **Add New Project**
2. Import your `crb-houston` GitHub repo
3. Framework auto-detects as **Next.js**
4. Click **Deploy** — live in ~60 seconds

Every `git push` to main auto-redeploys.

## Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Customizing Content

- **Phone/Email**: Search for `(713) 555-0100` and `info@crbhouston.com` and replace
- **Project photos**: Add images to `/public/` and update `app/projects/page.tsx`
- **Contact form**: Connect to Formspree, Resend, or any email API in `app/contact/page.tsx`
- **Stats**: Update numbers in `app/page.tsx` and `app/about/page.tsx`

## Design Tokens (app/globals.css)
- `--navy` #0a1628 — primary dark
- `--gold` #c8973a — accent / CTAs  
- `--cream` #f8f5f0 — light section bg
- `--font-heading` — Barlow Condensed
- `--font-body` — Barlow

## Stack
Next.js 16 · TypeScript · Tailwind CSS v4 · Lucide React · Google Fonts
