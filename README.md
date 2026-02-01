# TheMattBin.github.io

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features dual-mode viewing (Portfolio/CV) with dynamic data loading from GitHub Gists.

## ✨ Features

- **Dual Display Modes**: Toggle between a concise Portfolio view and a detailed CV view
- **Dynamic Data Loading**: Resume data fetched from GitHub Gists for easy updates without redeployment
- **Dark/Light Theme**: Built-in theme switcher for better user experience
- **Responsive Design**: Optimized for all screen sizes
- **Modern Stack**: React 18, TypeScript, Vite for fast development and builds
- **Clean UI**: Gradient accents, smooth animations, and professional styling

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/TheMattBin/TheMattBin.github.io.git
cd TheMattBin.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ⚙️ Configuration

### Setting up Your Resume Data

1. **Create GitHub Gists** for your resume:
   - Create a **Portfolio** version (summary/highlights) - save as YAML
   - Create a **Full CV** version (complete details) - save as YAML

2. **Update Gist URLs** in `src/services/resumeService.ts`:

```typescript
const USERNAME = 'YOUR_GITHUB_USERNAME';
const GIST_IDS = {
  portfolio: 'YOUR_PORTFOLIO_GIST_ID',
  full: 'YOUR_FULL_CV_GIST_ID',
};
```

3. **YAML Format** (see your existing YAML files for reference):

```yaml
cv:
  name: "Your Name"
  headline: "Your Title"
  location: "Your Location"
  email: "your.email@example.com"
  photo: "profile-photo.jpg"  # Optional
  social_networks:
    - network: "LinkedIn"
      username: "your-linkedin-username"
    - network: "GitHub"
      username: "your-github-username"
  sections:
    summary:
      - "Your professional summary..."
    experience:
      - company: "Company Name"
        position: "Job Title"
        start_date: "2024-01"
        end_date: "present"
        location: "City, Country"
        highlights:
          - "Achievement 1"
          - "Achievement 2"
    # ... more sections
```

### Adding Your Photo

1. Place your photo in the `public/` folder (e.g., `public/profile-photo.jpg`)
2. Add the photo field to your YAML Gist:
   ```yaml
   cv:
     photo: "profile-photo.jpg"
   ```

### Custom Favicon

Add your favicon to the `public/` folder and update `index.html`:

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

## 🎨 Customization

### Theme Colors

Edit CSS variables in `src/index.css` or component-specific CSS files.

### Components

All components are in `src/components/`:
- `Header/` - Navigation and theme toggle
- `Hero/` - Profile photo and intro
- `Experience/` - Work history
- `Skills/` - Technical skills
- `Publications/` - Research papers
- `Footer/` - Contact links

## 📦 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **js-yaml** - YAML parsing for resume data
- **React Router** - Client-side routing

## 🚢 Deployment

### GitHub Pages with GitHub Actions (Recommended)

This repository includes an automated deployment workflow. Follow these steps:

#### 1. Repository Setup

If deploying to `username.github.io` (user/org site):
- Repository name must be exactly `username.github.io`
- `vite.config.ts` should have `base: '/'` ✅ (already configured)

If deploying to a project site (e.g., `username.github.io/my-portfolio`):
- Repository can be named anything (e.g., `my-portfolio`)
- Update `vite.config.ts`:
  ```typescript
  base: '/my-portfolio/',  // Replace with your repo name
  ```

#### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: GitHub Actions
4. Save the changes

#### 3. Deploy

The site will automatically deploy when you push to the `main` branch:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Or manually trigger deployment:
1. Go to **Actions** tab in GitHub
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

#### 4. Access Your Site

Once deployed, your site will be available at:
- User/org site: `https://username.github.io`
- Project site: `https://username.github.io/repo-name`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy the dist/ folder to GitHub Pages
# (You can use gh-pages package or manually push to gh-pages branch)
```

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service (Netlify, Vercel, etc.).

## 🚢 Deployment

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service (Netlify, Vercel, etc.).

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Issues and pull requests are welcome!

---

**Built with ❤️ by Matthew Liu**
