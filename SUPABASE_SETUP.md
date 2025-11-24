# Supabase Setup Guide for WPTI Testimonial System

This guide will walk you through setting up Supabase for the testimonial collection feature.

## Prerequisites

- A Supabase account (free tier works fine): https://supabase.com
- Your WPTI AI Dashboard repository cloned locally

## Step 1: Create a New Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Choose your organization (or create one)
4. Fill in project details:
   - **Name**: `wpti-testimonials` (or your preferred name)
   - **Database Password**: Generate a strong password and save it securely
   - **Region**: Choose closest to your users (US East for NYC)
5. Click "Create new project" (this takes 1-2 minutes)

## Step 2: Create the Testimonials Table

1. In your Supabase project, go to **Table Editor** (left sidebar)
2. Click **"New table"**
3. Use these settings:

**Table name**: `testimonials`

**Enable RLS**: ✅ (We'll configure this in Step 4)

**Columns** (Click "+ Add column" for each):

| Name | Type | Default | Primary | Nullable | Unique |
|------|------|---------|---------|----------|---------|
| id | uuid | gen_random_uuid() | ✅ | ❌ | ✅ |
| created_at | timestamptz | now() | ❌ | ❌ | ❌ |
| name | text | - | ❌ | ❌ | ❌ |
| title | text | - | ❌ | ❌ | ❌ |
| organization | text | - | ❌ | ❌ | ❌ |
| email | text | - | ❌ | ❌ | ❌ |
| phone | text | - | ❌ | ✅ | ❌ |
| challenge_before | text | - | ❌ | ❌ | ❌ |
| aha_moment | text | - | ❌ | ❌ | ❌ |
| skill_gained | text | - | ❌ | ❌ | ❌ |
| colleague_recommendation | text | - | ❌ | ❌ | ❌ |
| additional_thoughts | text | - | ❌ | ✅ | ❌ |
| video_url | text | - | ❌ | ✅ | ❌ |
| photo_url | text | - | ❌ | ✅ | ❌ |
| has_video | boolean | false | ❌ | ❌ | ❌ |
| attribution_level | text | 'full' | ❌ | ❌ | ❌ |
| photo_permission | text | 'none' | ❌ | ❌ | ❌ |
| permission_granted | boolean | false | ❌ | ❌ | ❌ |
| status | text | 'new' | ❌ | ❌ | ❌ |
| discount_code_sent | text | - | ❌ | ✅ | ❌ |
| notes | text | - | ❌ | ✅ | ❌ |

4. Click "Save" to create the table

### Alternative: SQL Method

You can also create the table using SQL. Go to **SQL Editor** → **New query** and paste:

```sql
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Contact Info
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,

  -- Story Content
  challenge_before TEXT NOT NULL,
  aha_moment TEXT NOT NULL,
  skill_gained TEXT NOT NULL,
  colleague_recommendation TEXT NOT NULL,
  additional_thoughts TEXT,

  -- Media
  video_url TEXT,
  photo_url TEXT,
  has_video BOOLEAN DEFAULT FALSE NOT NULL,

  -- Attribution
  attribution_level TEXT DEFAULT 'full' NOT NULL,
  photo_permission TEXT DEFAULT 'none' NOT NULL,
  permission_granted BOOLEAN DEFAULT FALSE NOT NULL,

  -- Admin
  status TEXT DEFAULT 'new' NOT NULL,
  discount_code_sent TEXT,
  notes TEXT
);

-- Create indexes for better query performance
CREATE INDEX idx_testimonials_status ON testimonials(status);
CREATE INDEX idx_testimonials_created_at ON testimonials(created_at DESC);
CREATE INDEX idx_testimonials_email ON testimonials(email);
```

Click "Run" to execute.

## Step 3: Create Storage Bucket

1. Go to **Storage** in the left sidebar
2. Click **"New bucket"**
3. Settings:
   - **Name**: `testimonial-media`
   - **Public bucket**: ✅ (Enable - we need public URLs for downloads)
   - **Allowed MIME types**: Leave empty (allows all)
   - **File size limit**: `104857600` (100MB in bytes)
4. Click "Create bucket"

## Step 4: Configure Row Level Security (RLS)

### For the Testimonials Table:

1. Go to **Authentication** → **Policies**
2. Find your `testimonials` table
3. Click **"New Policy"**

**Policy 1: Allow Public Inserts**
```sql
CREATE POLICY "Allow public testimonial submissions"
ON testimonials FOR INSERT
TO public
WITH CHECK (true);
```

**Policy 2: Allow Public Select** (so users can see confirmation)
```sql
CREATE POLICY "Allow public to read own testimonial"
ON testimonials FOR SELECT
TO public
USING (true);
```

**Policy 3: Allow Admin Updates** (for status changes)
```sql
CREATE POLICY "Allow public to update testimonials"
ON testimonials FOR UPDATE
TO public
USING (true);
```

> **Note**: Since we're using session-based admin password protection on the frontend, we're allowing public access to these operations. In production, you may want to implement proper Supabase Auth for admin users.

### For the Storage Bucket:

1. Go to **Storage** → `testimonial-media` bucket
2. Click **Policies** tab
3. Add these policies:

**Policy 1: Allow Public Uploads**
```sql
CREATE POLICY "Allow public uploads"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'testimonial-media');
```

**Policy 2: Allow Public Downloads**
```sql
CREATE POLICY "Allow public downloads"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'testimonial-media');
```

## Step 5: Get Your API Keys

1. Go to **Project Settings** → **API** (left sidebar)
2. Find these values:
   - **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## Step 6: Configure Environment Variables

1. In your project root, create a `.env` file:

```bash
cp .env.example .env
```

2. Edit `.env` with your values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_ADMIN_PASSWORD=your-secure-admin-password
```

3. For **Netlify deployment**, add these as environment variables:
   - Go to your Netlify dashboard
   - Select your site
   - Go to **Site settings** → **Environment variables**
   - Add all three variables above

## Step 7: Test the Connection

1. Start your development server:
```bash
npm run dev
```

2. Navigate to `http://localhost:5173/testimonial`
3. Try filling out and submitting a test testimonial
4. Check your Supabase Table Editor to see if the record appears
5. Check Storage to see if media files uploaded

## Step 8: Test the Admin Dashboard

1. Navigate to `http://localhost:5173/admin/testimonials`
2. Enter your admin password (from `.env`)
3. Verify you can see the test testimonial
4. Try changing the status
5. Try downloading media files

## Troubleshooting

### "Failed to submit testimonial"
- Check that your Supabase URL and anon key are correct in `.env`
- Verify RLS policies are enabled
- Check browser console for specific error messages

### "Failed to upload file"
- Verify storage bucket exists and is public
- Check file size is under 100MB for video, 5MB for photo
- Verify storage RLS policies allow public inserts

### "Can't see testimonials in admin"
- Check that records exist in the database
- Verify SELECT policy allows public reads
- Check browser console for errors

### "Can't download media files"
- Verify storage bucket is public
- Check that file paths in database match actual storage paths
- Verify storage SELECT policy allows public reads

## Optional: Email Notifications

To enable email notifications (confirmation emails + admin alerts), you can:

1. **Option A: EmailJS** (Free tier available)
   - Sign up at https://emailjs.com
   - Create email templates
   - Add credentials to `.env`

2. **Option B: Supabase Edge Functions** (More advanced)
   - Create an Edge Function to send emails
   - Trigger on testimonial insert
   - Requires additional setup

This is planned for Phase 2 but not required for MVP.

## Data Export

The admin dashboard includes a **"Export to CSV"** button that downloads all testimonials with their complete data for use in presentations and marketing materials.

## Security Notes

- Never commit `.env` to version control
- Use strong admin passwords
- Consider implementing proper Supabase Auth for production admin access
- Regularly review and audit testimonial submissions
- Monitor storage usage to stay within free tier limits

## Support

For issues with Supabase setup:
- Supabase Docs: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
- Contact Joshua: joshua@meetthemoment.org

---

**Setup Complete!** 🎉

Your testimonial collection system is now ready to use. Share the `/testimonial` link with your WPTI cohort!
