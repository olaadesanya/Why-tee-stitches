# Deployment Guide - Whytee Stitches

## 🚀 Deploy to Vercel (Recommended)

### Quick Deploy (5 minutes)

1. **Install Node.js** (if not done):
   - https://nodejs.org/
   - Download LTS version
   - Install and restart terminal

2. **Install dependencies**:
   ```bash
   cd C:\Users\Ola-Adesanya\CascadeProjects\whytee-stitches
   npm install
   ```

3. **Sign up for Vercel**:
   - Visit https://vercel.com/signup
   - Sign up with GitHub (recommended)

4. **Deploy via Dashboard**:
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Or drag and drop your project folder
   - Vercel auto-detects Next.js settings
   - Add environment variables (Firebase config)
   - Click "Deploy"

5. **Your site will be live** at:
   - `https://whytee-stitches.vercel.app`
   - Or custom domain of your choice

---

## 📝 Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```

Get these values from your Firebase Console → Project Settings.

---

## 🔄 Continuous Deployment

Once deployed via GitHub:
- Every push to `main` branch = automatic deployment
- Pull requests get preview URLs
- Rollback to previous versions anytime

---

## 🌐 Custom Domain

### Add Your Own Domain:

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain (e.g., `whyteestitches.com`)

2. **Update DNS Settings**:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.21.21`

3. **SSL Certificate**:
   - Vercel automatically provisions SSL
   - HTTPS enabled within minutes

---

## 📊 Alternative Hosting Options

### Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize:
   ```bash
   firebase init hosting
   ```

3. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### AWS Amplify

1. Install Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. Configure and deploy:
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

---

## ✅ Pre-Deployment Checklist

- [ ] Node.js installed
- [ ] All dependencies installed (`npm install`)
- [ ] Firebase project created and configured
- [ ] Environment variables ready
- [ ] Project builds successfully (`npm run build`)
- [ ] Test locally (`npm run dev`)
- [ ] Git repository created (for GitHub deployment)
- [ ] `.env.local` added to `.gitignore` (already done)

---

## 🔧 Build Configuration

Your `vercel.json` is already configured:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

---

## 🐛 Troubleshooting

### Build fails:
- Check Node.js version: `node --version` (should be 18+)
- Clear cache: Delete `.next` folder and rebuild
- Check environment variables are set correctly

### Firebase errors:
- Verify all Firebase env vars are set in Vercel
- Check Firebase project settings match

### 404 errors:
- Ensure `next.config.js` is properly configured
- Check routes match file structure in `/app` directory

---

## 📈 Performance Optimization

Already included in your project:
- ✅ Image optimization (Next.js Image component)
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Static page generation where possible
- ✅ Responsive images
- ✅ Minified CSS/JS

---

## 🔒 Security

Before going live:
- ✅ Environment variables not in code (done)
- ✅ Firebase security rules configured
- ✅ HTTPS enabled (automatic on Vercel)
- ✅ `.gitignore` properly configured (done)

---

## 💰 Pricing

### Vercel (Recommended):
- **Free tier**: 
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic HTTPS
  - Perfect for this project

- **Pro tier** ($20/month):
  - More bandwidth
  - Team collaboration
  - Advanced analytics

### Firebase:
- **Spark (Free)**:
  - 10GB storage
  - 50K reads/day
  - 20K writes/day

- **Blaze (Pay as you go)**:
  - Only pay for what you use
  - Free tier included

---

## 📞 Support

After deployment:
- Vercel Support: https://vercel.com/support
- Firebase Support: https://firebase.google.com/support
- Documentation: Check README.md and SETUP_GUIDE.md

---

## 🎉 Post-Deployment

Once live:
1. Test all pages and features
2. Check mobile responsiveness
3. Test forms (newsletter, contact)
4. Verify analytics are tracking
5. Set up monitoring (Vercel Analytics)
6. Share your live URL!

Your site will be live at:
**https://whytee-stitches.vercel.app**

---

Good luck with your deployment! 🚀
