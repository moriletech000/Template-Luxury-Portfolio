# Template Luxury Portfolio

A world-class luxury photographer portfolio website built with React 18, TypeScript, Vite, Tailwind CSS v3, and Framer Motion. Designed with the aesthetic quality of Awwwards-winning sites.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2.5-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178c6.svg)
![Vite](https://img.shields.io/badge/Vite-8.0.10-646cff.svg)

##  Features

-  **Luxury Design** - Editorial-style asymmetric grid layouts
-  **Custom Cursor** - Spring-animated cursor with hover effects
-  **Resilient Images** - Multi-source strategy (Unsplash + Picsum fallback)
-  **Smooth Animations** - 60fps Framer Motion animations
-  **Fully Responsive** - Mobile-first design with touch optimization
-  **Page Transitions** - Seamless route transitions with AnimatePresence
-  **Lazy Loading** - Code splitting and progressive image loading
-  **Zero Broken Images** - Automatic fallback system
-  **Smooth Scroll** - Buttery smooth scrolling with Lenis
-  **Fast Performance** - 81KB gzipped bundle, optimized for speed

##  Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

##  Design Philosophy

- **Color Palette**: Near-black (#0A0A0A), off-white (#F5F0EB), warm gold (#C8A96E)
- **Typography**: Cormorant Garamond (display) + DM Sans (body)
- **Grid**: Asymmetric editorial layouts, not equal columns
- **Whitespace**: Extreme use of whitespace to let images breathe
- **Animations**: Smooth spring physics, no jarring transitions

##  Project Structure

```
src/
 components/     # Reusable UI components
 pages/          # Route pages (Home, ProjectDetail, About)
 hooks/          # Custom React hooks
 data/           # Project data and image catalog
 utils/          # Utility functions (image handling)
 styles/         # Global styles and CSS
 variants.ts     # Framer Motion animation variants
```

##  Resilient Image Strategy

Every image uses a multi-source approach:

1. **Primary**: Unsplash with specific photo IDs
2. **Fallback**: Picsum Photos with unique seeds
3. **Blur-up**: Tiny placeholder that fades to full resolution
4. **Zero Broken Images**: Automatic fallback prevents broken image icons

##  Key Components

- **Custom Cursor** - 12px circle that expands to 80px on hover
- **Loading Screen** - Session-based, plays once per visit
- **Text Reveal** - Character-by-character and word-by-word animations
- **Image Reveal** - Clip-path wipe animations on scroll
- **Parallax** - Hero images move at 0.3× scroll speed
- **Marquee** - Infinite scrolling text

##  Technologies

- **React 19.2.5** - UI library
- **TypeScript 6.0.2** - Type safety
- **Vite 8.0.10** - Build tool
- **Tailwind CSS 3.x** - Utility-first CSS
- **Framer Motion 12.38.0** - Animation library
- **React Router 7.15.0** - Client-side routing
- **Lenis 1.0.42** - Smooth scroll

##  Responsive Design

- **Mobile**: < 768px - Single column, hamburger menu
- **Tablet**: 768px - 1024px - Adapted grid layouts
- **Desktop**: > 1024px - Full asymmetric grid, custom cursor

##  Performance

- **Bundle Size**: 81.28 KB (gzipped)
- **Build Time**: ~3s
- **Lighthouse Score**: 85+ (Performance)
- **Animation FPS**: 60fps target

##  Customization

### Change Colors

Edit `src/styles/index.css`:

```css
:root {
  --color-bg: #0A0A0A;
  --color-text: #F5F0EB;
  --color-accent: #C8A96E;
  --color-text-muted: #8A8A8A;
}
```

### Add Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 'project-slug',
  title: 'Project Title',
  year: 2024,
  category: 'Category',
  coverImageId: 'unsplash-photo-id',
  coverImageSeed: 'unique-seed',
  images: [...],
  description: '...',
  location: '...',
}
```

### Replace Images

Use your own Unsplash photo IDs or any image URLs in `src/data/projects.ts` and `src/data/images.ts`.

##  Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

### GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json:
# "homepage": "https://yourusername.github.io/repo-name"
# "scripts": { "deploy": "gh-pages -d dist" }
npm run deploy
```

##  License

MIT License - feel free to use this template for your own projects!

##  Credits

- Design inspiration: Awwwards, Behance
- Images: Unsplash (primary), Picsum (fallback)
- Fonts: Google Fonts (Cormorant Garamond, DM Sans)

##  Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with intention. Crafted for excellence.** 
