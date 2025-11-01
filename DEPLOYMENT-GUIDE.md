# WPTI AI Dashboard - Deployment Guide

## 🎉 Repository Created!

**GitHub Repository**: https://github.com/joshuamtm/wpti-ai-dashboard

This repository is **private** and ready for Netlify deployment.

---

## 🚀 Deploy to Netlify (3 Easy Steps)

### Step 1: Connect to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** as your provider
4. Select the repository: `joshuamtm/wpti-ai-dashboard`

### Step 2: Configure Build Settings

Netlify will auto-detect settings from `netlify.toml`, but verify:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

Click **"Deploy site"**

### Step 3: Wait for Build

Initial deploy takes 2-3 minutes. Netlify will:
- ✓ Install dependencies
- ✓ Build the React app
- ✓ Deploy to CDN
- ✓ Provide you with a URL (e.g., `https://wpti-ai-dashboard.netlify.app`)

---

## 🌐 Custom Domain Setup (Optional)

### Option 1: Netlify Subdomain

1. In Netlify dashboard → **Site settings** → **Domain management**
2. Click **"Edit site name"**
3. Choose a custom subdomain: `wpti-ai-training.netlify.app`

### Option 2: Custom Domain

1. In Netlify dashboard → **Domain management** → **Add custom domain**
2. Enter your domain (e.g., `dashboard.wpti.org`)
3. Follow DNS configuration instructions
4. Netlify provides automatic HTTPS via Let's Encrypt

---

## 🔄 Automatic Deployments

Every time you push to the `main` branch:
- ✓ Netlify automatically detects the change
- ✓ Runs the build process
- ✓ Deploys the new version
- ✓ No manual intervention needed

### To Update the Dashboard:

```bash
# Make your changes
git add .
git commit -m "Update Session 2 data"
git push origin main

# Netlify automatically deploys within 2-3 minutes
```

---

## 📊 Updating Dashboard Data

### Adding Session 2-4 Data

1. Open `src/data/workshopData.js`
2. Update the sessions array in `LearnerDashboard.jsx`
3. Add new metrics to `workshopData.js`
4. Commit and push changes

Example:
```javascript
// In workshopData.js
export const session2Data = {
  title: 'Prompting 101',
  date: 'November 8, 2025',
  topics: [...],
  keyTakeaways: [...],
  // Add your data
}
```

---

## 🔧 Environment Variables (If Needed)

Currently, the dashboard runs without environment variables. If you add analytics or integrations:

1. In Netlify dashboard → **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Example:
   ```
   VITE_ANALYTICS_ID=your_analytics_id
   ```
4. Redeploy to apply changes

---

## 📱 Testing Your Deployment

### After Deployment:

1. **Visit your Netlify URL**
2. **Test both dashboards**:
   - Click "Executive View" - should show all charts and data
   - Click "Learner View" - should show 4-session progress
3. **Test on mobile** - dashboard is fully responsive
4. **Verify data** - all Session 1 metrics should display correctly

### Common Issues:

**Issue**: Site shows blank page
- **Solution**: Check browser console for errors, may need to clear cache

**Issue**: Charts not rendering
- **Solution**: Recharts may need time to load, refresh page

**Issue**: Images not showing
- **Solution**: Verify logo files in `public/logo/` directory

---

## 🎨 Customization Quick Reference

### Colors (tailwind.config.js)
```javascript
colors: {
  navy: '#2B5F8E',        // Primary
  turquoise: '#4AB5C4',   // Accent
  warmYellow: '#F5D574',  // Accent 2
  beige: '#F5E6D3',       // Background
}
```

### Fonts (index.html)
Currently using **Inter** from Google Fonts. To change:
1. Update link in `index.html`
2. Update `fontFamily` in `tailwind.config.js`

---

## 📈 Performance Optimization

The build includes warnings about chunk size. To optimize:

### Option 1: Code Splitting
```javascript
// In vite.config.js
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'recharts': ['recharts'],
        'lucide': ['lucide-react'],
      }
    }
  }
}
```

### Option 2: Lazy Loading
```javascript
// In App.jsx
const ExecutiveDashboard = lazy(() => import('./components/ExecutiveDashboard'))
const LearnerDashboard = lazy(() => import('./components/LearnerDashboard'))
```

**Note**: Current bundle size (578 KB) is acceptable for most use cases. Optimize only if loading times become an issue.

---

## 🔒 Security Considerations

### Current Security Headers (netlify.toml)
```toml
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### To Add Authentication:

If you need to restrict access:

1. **Netlify Identity** (Free for small teams):
   - Enable in Netlify dashboard → **Identity**
   - Invite users via email
   - Users must log in to access dashboard

2. **Password Protection** (Simple):
   - Netlify dashboard → **Access control**
   - Set a password for the entire site

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Check build logs** in Netlify dashboard:

Common issues:
- **Missing dependencies**: Ensure `package.json` is committed
- **Node version**: Netlify uses Node 18 (specified in `netlify.toml`)
- **Build command**: Should be `npm run build`

### Local Development Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run dev
```

### Git Issues

```bash
# If you need to reset
git fetch origin
git reset --hard origin/main
```

---

## 📞 Support

### Project Contacts
- **Developer**: Meet the Moment (mtm.now)
- **Client**: WPTI (Workforce Professionals Training Initiative)

### Useful Links
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Recharts Documentation](https://recharts.org)

---

## ✅ Deployment Checklist

Before going live:

- [ ] Verify all Session 1 data is accurate
- [ ] Test Executive Dashboard (all 7 visualizations)
- [ ] Test Learner Dashboard (all 4 sessions)
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify MTM branding and colors
- [ ] Ensure all links work
- [ ] Check for console errors
- [ ] Test navigation between Executive/Learner views
- [ ] Verify footer links and attribution

---

## 🎯 Next Steps

1. **Deploy to Netlify** (follow Step 1-3 above)
2. **Share URL** with WPTI stakeholders
3. **Gather feedback** from workshop participants
4. **Add Session 2 data** after November 8 workshop
5. **Iterate** based on user feedback

---

**Ready to deploy?** Follow the 3 steps at the top of this guide! 🚀

---

*Built with ❤️ by Meet the Moment for WPTI*
