# WPTI AI Training Workshop Dashboard

> Executive and learner dashboards for the WPTI AI Training Workshop series, featuring comprehensive data insights, Kirkpatrick evaluation, and progress tracking.

![Meet the Moment](https://img.shields.io/badge/Built%20by-Meet%20the%20Moment-4AB5C4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎯 Overview

This interactive dashboard application provides two distinct views:

1. **Executive Dashboard** - Comprehensive data analysis, visualizations, Kirkpatrick training evaluation, and actionable recommendations for organizational leaders
2. **Learner Dashboard** - Progress tracking, session materials, community insights, and resources for course participants

### Key Features

- 📊 **7 Interactive Data Visualizations** using Recharts
- 📈 **Kirkpatrick Level 1-4 Evaluation** with circular progress indicators
- 🎓 **4-Session Learning Journey** tracker with progress metrics
- 👥 **Community Insights** from workshop participants
- 🔒 **Security Risk Analysis** and recommendations
- 📚 **Comprehensive Resource Library** with downloadable materials
- 🎨 **MTM Brand Styling** with navy, turquoise, and warm yellow palette
- 📱 **Fully Responsive** design for all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/meetthemoment/wpti-ai-dashboard.git
cd wpti-ai-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

## 📦 Project Structure

```
wpti-ai-dashboard/
├── public/
│   └── logo/              # MTM logo assets
├── src/
│   ├── components/
│   │   ├── ExecutiveDashboard.jsx   # Executive insights & analysis
│   │   └── LearnerDashboard.jsx     # Learner progress & resources
│   ├── data/
│   │   └── workshopData.js          # All workshop data & metrics
│   ├── App.jsx                      # Main app with view switching
│   ├── index.css                    # Tailwind styles & custom CSS
│   └── main.jsx                     # React entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── netlify.toml                     # Netlify deployment config
└── README.md
```

## 🎨 Brand Colors

This project uses Meet the Moment's brand palette:

- **Navy Blue**: `#2B5F8E` - Primary brand color
- **Turquoise**: `#4AB5C4` - Accent color (the "O" in moment)
- **Warm Yellow**: `#F5D574` - Complementary accent
- **Light Beige**: `#F5E6D3` - Background/neutral

## 📊 Data Insights Included

### Executive Dashboard

- **AI Usage Frequency** - 67% daily users
- **Top Concerns** - Adaptation speed outweighs job loss fears
- **Security Risk Analysis** - 73% using personal accounts
- **Sentiment Analysis** - 41% positive, 31% negative
- **Platform Adoption** - Fragmentation across 6 platforms
- **Kirkpatrick Evaluation** - Overall score 3.6/5.0
- **Action Plan** - 4 phases with timelines and success metrics

### Learner Dashboard

- **Progress Tracking** - Visual indicators for 4-session series
- **Session Details** - Topics, takeaways, and action items
- **Learning Objectives** - 4 core competencies with progress bars
- **Community Insights** - Peer learning and shared experiences
- **Resource Library** - Downloadable guides, templates, and tools

## 🌐 Deployment to Netlify

### Automatic Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/wpti-ai-dashboard.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings are auto-detected from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Custom Domain** (Optional):
   - In Netlify dashboard: Site settings → Domain management
   - Add your custom domain
   - Configure DNS records as instructed

### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

## 🔧 Configuration

### Environment Variables

No environment variables required for basic deployment. For analytics or custom integrations, add them in Netlify dashboard under Site settings → Environment variables.

### Customization

#### Update Workshop Data

Edit `src/data/workshopData.js` to add Session 2-4 data as workshops are completed.

#### Modify Branding

Update `tailwind.config.js` to change colors:

```js
colors: {
  navy: '#2B5F8E',
  turquoise: '#4AB5C4',
  warmYellow: '#F5D574',
  beige: '#F5E6D3',
}
```

## 📱 Responsive Design

The dashboard is optimized for:
- Desktop (1920px+)
- Laptop (1280px - 1919px)
- Tablet (768px - 1279px)
- Mobile (320px - 767px)

## 🧪 Testing

```bash
# Run linting
npm run lint

# Preview production build locally
npm run preview
```

## 📄 License

Proprietary - © 2025 Meet the Moment. All rights reserved.

This project is developed for WPTI (Workforce Professionals Training Initiative) and is not open source.

## 🤝 Contributing

This is a private project for WPTI. For questions or contributions, contact:

**Meet the Moment**
- Website: [mtm.now](https://mtm.now)
- Focus: Resilience for Nonprofits - Advisory & Coaching, Leadership Support

## 📈 Roadmap

- [x] Session 1 data integration
- [x] Executive dashboard with visualizations
- [x] Learner dashboard with progress tracking
- [ ] Session 2-4 data integration (as workshops complete)
- [ ] Export functionality for reports
- [ ] Interactive prompt library
- [ ] Community forum integration
- [ ] Analytics tracking (Google Analytics/Posthog)

## 🐛 Known Issues

None at launch. Report issues to the development team.

## 💡 Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.2.0
- **Styling**: Tailwind CSS 3.4.3
- **Charts**: Recharts 2.12.0
- **Icons**: Lucide React 0.344.0
- **Hosting**: Netlify

## 📚 Resources

### Workshop Materials
- [Session 1 Full Report](./WPTI_AI_Training_Data_Journalism_Report.md)
- [Data Extraction Document](./AI_Training_Workshop_Extracted_Text.md)

### External Links
- [WPTI Website](https://wpti.org)
- [Meet the Moment](https://mtm.now)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Recharts Documentation](https://recharts.org)

## 🎓 About the Workshop

The WPTI AI Training Workshop is a 4-session learning series designed for workforce development professionals to:

1. **Understand AI fundamentals** and their impact on workforce development
2. **Apply AI practically** to improve efficiency and participant outcomes
3. **Navigate ethical considerations** and data privacy concerns
4. **Implement AI strategically** within their organizations

**Target Audience**: Career counselors, job developers, program managers, and workforce development leaders serving job seekers and employers.

---

**Built with ❤️ by [Meet the Moment](https://mtm.now) for WPTI**

*Empowering workforce professionals to navigate the AI revolution*
