# WPTI Testimonial Collection System

## Overview

The WPTI Testimonial Collection System enables frictionless collection of written and video testimonials from WPTI AI Training participants. This feature integrates seamlessly with the existing WPTI AI Dashboard to encourage and reward participant testimonials.

## Features

### For Participants

- **4-Section Form** with progress indicator:
  1. **Contact Info**: Name, title, organization, email, phone (optional)
  2. **Your Story**: Challenge before, aha moment, skill gained, recommendation
  3. **Media Upload**: Video (50% discount) or photo upload
  4. **Permission & Attribution**: Attribution level selection and permission checkbox

- **User Experience Enhancements**:
  - Auto-save to localStorage (prevents data loss)
  - Mobile-responsive design
  - Large touch targets for mobile uploads
  - Progress indicator showing completion status
  - AI assistance prompt for drafting testimonials
  - Immediate visual feedback on file uploads

- **Rewards System**:
  - **Video testimonial**: 50% off MTM AI Community Membership
  - **Written testimonial**: 10% off MTM AI Community Membership
  - Discount code displayed immediately on confirmation page

### For Administrators

- **Admin Dashboard** at `/admin/testimonials`:
  - Password-protected access
  - View all testimonials in sortable table
  - Stats cards (total, video, published, new)
  - Search by name, organization, or email
  - Filter by status (new, reviewed, published)
  - Preview full testimonial content
  - Download video and photo files
  - Update status (new → reviewed → published)
  - Export all data to CSV

- **Email Notifications** (Optional - Phase 2):
  - Confirmation email to participant with discount code
  - Alert email to admin on new submission

## Routes

- `/` - Main Dashboard (existing)
- `/testimonial` - Testimonial submission form
- `/testimonial/confirmation` - Success page with discount code
- `/admin/testimonials` - Admin dashboard (password-protected)

## Technology Stack

- **Frontend**: React 18.3.1 + Vite
- **Routing**: React Router DOM 6.x
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Styling**: Tailwind CSS (existing MTM theme)
- **Icons**: Lucide React

## Installation

### 1. Dependencies

Already installed:
```bash
npm install @supabase/supabase-js react-router-dom
```

### 2. Supabase Setup

Follow the comprehensive guide in `SUPABASE_SETUP.md`:
- Create Supabase project
- Set up testimonials table
- Create storage bucket
- Configure RLS policies
- Get API keys

### 3. Environment Variables

Create `.env` file:
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_ADMIN_PASSWORD=your-admin-password
```

For Netlify, add these in **Site settings → Environment variables**.

### 4. Development

```bash
npm run dev
```

Visit:
- Form: `http://localhost:5173/testimonial`
- Admin: `http://localhost:5173/admin/testimonials`

## File Structure

```
src/
├── components/
│   ├── TestimonialForm.jsx          # Main 4-section form
│   ├── TestimonialConfirmation.jsx  # Success page with discount code
│   ├── AdminTestimonials.jsx        # Admin dashboard
│   └── ProtectedRoute.jsx           # Password protection wrapper
├── lib/
│   └── supabaseClient.js            # Supabase config and helpers
└── App.jsx                           # Updated with routing

SUPABASE_SETUP.md                     # Complete Supabase setup guide
TESTIMONIAL_FEATURE_README.md         # This file
.env.example                          # Environment variables template
```

## Usage

### Sharing the Form

Share this link with WPTI cohort participants:
```
https://wpti-ai-dashboard.netlify.app/testimonial
```

Or use the **"Share Your Story"** button on the main dashboard (Learner View).

### Accessing Admin Dashboard

1. Navigate to: `https://wpti-ai-dashboard.netlify.app/admin/testimonials`
2. Enter admin password (set in environment variables)
3. View, filter, and manage testimonials

### Discount Codes

**Hardcoded for MVP** (automatic based on submission type):
- Video: `WPTI-VIDEO-50` (50% off)
- Written: `WPTI-WRITTEN-10` (10% off)

These codes must be manually configured in your payment system (COMPASS) when it launches.

## Data Schema

### Testimonials Table

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| created_at | Timestamp | Submission date/time |
| name | Text | Participant name |
| title | Text | Job title/role |
| organization | Text | Organization name |
| email | Text | Email address |
| phone | Text | Phone number (optional) |
| challenge_before | Text | Challenge/hesitation before training |
| aha_moment | Text | Biggest breakthrough |
| skill_gained | Text | Most valuable AI skill |
| colleague_recommendation | Text | What they'd tell a colleague |
| additional_thoughts | Text | Additional feedback (optional) |
| video_url | Text | Supabase storage path for video |
| photo_url | Text | Supabase storage path for photo |
| has_video | Boolean | Whether video was submitted |
| attribution_level | Text | How to credit them (full, first_title, first_initial, anonymous) |
| photo_permission | Text | Photo permission (upload, linkedin, none) |
| permission_granted | Boolean | Marketing usage permission |
| status | Text | Status (new, reviewed, published) |
| discount_code_sent | Text | Assigned discount code |
| notes | Text | Admin notes (optional) |

### Storage Structure

Bucket: `testimonial-media` (public)
```
testimonial-media/
├── {timestamp}_video-filename.mp4
└── {timestamp}_photo-filename.jpg
```

## Form Validation

### Required Fields

**Section 1 (Contact Info)**:
- Name ✅
- Title ✅
- Organization ✅
- Email ✅ (must be valid format)

**Section 2 (Story)**:
- Challenge before ✅
- Aha moment ✅
- Skill gained ✅
- Colleague recommendation ✅

**Section 3 (Media)**:
- All optional (but video gets better discount)

**Section 4 (Permission)**:
- Permission checkbox ✅ (must be checked)

### File Limits

- **Video**: Max 100MB (MP4, MOV, WebM)
- **Photo**: Max 5MB (JPG, PNG, WebP)

## Testing Checklist

### Form Functionality
- [ ] All 4 sections display correctly
- [ ] Progress indicator updates
- [ ] Form validation works (try submitting empty)
- [ ] LocalStorage saves progress (refresh page)
- [ ] Video upload works (try 50MB file)
- [ ] Photo upload works
- [ ] File size limits enforced
- [ ] Permission checkbox required
- [ ] Submit creates database record
- [ ] Navigate to confirmation page

### Confirmation Page
- [ ] Displays correct discount code (video vs written)
- [ ] Shows participant name
- [ ] Copy code button works
- [ ] Back to dashboard link works

### Admin Dashboard
- [ ] Password protection works
- [ ] Can't access without password
- [ ] Logout button works
- [ ] Table displays all testimonials
- [ ] Search functionality works
- [ ] Status filter works
- [ ] Can view testimonial details
- [ ] Can change status
- [ ] Can download video
- [ ] Can download photo
- [ ] CSV export works

### Mobile Testing
- [ ] Form works on iOS Safari
- [ ] Form works on Android Chrome
- [ ] File upload works on mobile
- [ ] Video recording from phone uploads
- [ ] Progress indicator visible
- [ ] All buttons tappable

## Customization

### Changing Discount Codes

Edit `TestimonialForm.jsx` line ~215:
```javascript
discount_code_sent: formData.has_video ? 'WPTI-VIDEO-50' : 'WPTI-WRITTEN-10'
```

And `TestimonialConfirmation.jsx` line ~6:
```javascript
const discountCode = hasVideo ? 'WPTI-VIDEO-50' : 'WPTI-WRITTEN-10'
```

### Changing Form Questions

Edit `TestimonialForm.jsx` section 1 (lines ~310-450):
- Modify labels, placeholders, helper text
- Add/remove fields in formData state

### Changing Colors

Uses existing MTM brand colors from `tailwind.config.js`:
- Navy: `#2B5F8E`
- Turquoise: `#4AB5C4`
- Warm Yellow: `#F5D574`
- Beige: `#F5E6D3`

### Admin Password

Set in `.env`:
```env
VITE_ADMIN_PASSWORD=your-new-password
```

For Netlify, update in environment variables and redeploy.

## Deployment

### Netlify Setup

1. **Environment Variables** (add in Netlify dashboard):
   ```
   VITE_SUPABASE_URL=your-value
   VITE_SUPABASE_ANON_KEY=your-value
   VITE_ADMIN_PASSWORD=your-value
   ```

2. **Build Settings** (already configured in `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**:
   ```bash
   git add .
   git commit -m "Add testimonial collection feature"
   git push origin main
   ```

Netlify will auto-deploy on push (if connected).

### First Deployment Checklist

- [ ] Supabase project set up
- [ ] Environment variables added to Netlify
- [ ] Code pushed to GitHub
- [ ] Netlify build succeeds
- [ ] Test submission on production URL
- [ ] Test admin access on production URL
- [ ] Share link with cohort

## Maintenance

### Regular Tasks

- **Weekly**: Check new testimonials, update status
- **Monthly**: Export CSV for marketing use
- **Quarterly**: Review storage usage (Supabase free tier: 500MB)

### Storage Management

If approaching storage limits:
1. Download important videos locally
2. Delete from Supabase Storage (keep database records)
3. Or upgrade to Supabase Pro plan (~$25/month)

## Future Enhancements (Phase 2)

- [ ] Automated email notifications (EmailJS or Edge Functions)
- [ ] Public testimonial gallery page
- [ ] Integration with COMPASS membership system
- [ ] Bulk export with formatted testimonial cards
- [ ] Video compression on upload
- [ ] Scheduled reminder emails (Day 7, 14, 21)

## Troubleshooting

### Common Issues

**"Cannot read testimonials"**
- Check Supabase RLS policies allow SELECT
- Verify API keys in environment variables

**"Upload failed"**
- Check file size limits
- Verify storage bucket is public
- Check RLS policies for storage

**"Admin password doesn't work"**
- Verify `VITE_ADMIN_PASSWORD` in `.env`
- For Netlify, check environment variables
- Clear browser cache and try again

### Getting Help

- Check browser console for errors
- Review `SUPABASE_SETUP.md` for configuration
- Contact Joshua: joshua@meetthemoment.org

## Success Metrics (3 Months)

Target goals from PRD:
- [ ] 50%+ submission rate (12+ of 24 participants)
- [ ] 25%+ video rate (6+ video testimonials)
- [ ] 100% admin usability (find/export in <60 seconds)
- [ ] 5+ testimonials published on marketing materials

## Credits

**Built by**: Meet the Moment
**For**: Workforce Professionals Training Institute (WPTI)
**Cohort**: WPTI AI Training Workshop (Oct-Nov 2025)
**Stack**: React + Vite + Supabase + Tailwind CSS
**Design**: MTM Brand Guidelines

---

## Quick Start Guide

1. **Setup Supabase**: Follow `SUPABASE_SETUP.md`
2. **Add Environment Variables**: Create `.env` with your keys
3. **Test Locally**: `npm run dev` → visit `/testimonial`
4. **Deploy**: Push to GitHub → Netlify auto-deploys
5. **Share Link**: Send `/testimonial` URL to cohort
6. **Monitor**: Check `/admin/testimonials` for submissions

🎉 **You're ready to collect testimonials!**
