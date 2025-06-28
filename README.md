# Crimson Order - Rise of Kingdoms Family Website

A modern, responsive website for the Crimson Order family and its alliances (Crimson Paladins & Crimson Eagles) in Rise of Kingdoms.

## 🚀 Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 3** - Utility-first CSS framework
- **PrimeVue 3** - UI component library
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components
│   │   ├── Header.vue    # Navigation header
│   │   └── Layout.vue    # Main layout wrapper
│   ├── sections/         # Page sections
│   │   └── HeroSection.vue
│   └── ui/              # Reusable UI components
├── assets/
│   ├── images/          # Image assets
│   └── icons/           # Icon assets
├── types/               # TypeScript type definitions
├── composables/         # Vue composables
├── utils/               # Utility functions
├── App.vue              # Main app component
├── main.ts              # App entry point
└── style.css            # Global styles
```

## 🎨 Features

### Header Component
- **Modern gaming design** with crimson/red theme
- **Glassmorphism effect** with backdrop blur
- **Responsive navigation** with hamburger menu
- **Smooth scroll** to sections
- **Sticky positioning** with scroll effects
- **Mobile-first** design

### Hero Section
- **Full-screen hero** with gradient backgrounds
- **Animated elements** and hover effects
- **Call-to-action buttons** with PrimeVue components
- **Scroll indicator** with bounce animation

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎯 Sections

1. **Home** - Hero section with family introduction
2. **About** - Information about Crimson Order
3. **Alliances** - Details about Crimson Paladins & Crimson Eagles
4. **Join Us** - Recruitment information
5. **Contact** - Contact information and social links

## 🎨 Design System

### Colors
- **Primary**: Crimson/Red (#dc2626)
- **Background**: Dark gradients (black to gray-900)
- **Text**: White and gray variations
- **Accents**: Red-300, Red-500, Red-800

### Typography
- **Headings**: Bold, large, tracking-wider
- **Body**: Medium weight, good readability
- **Accents**: Red-300 for highlights

### Components
- **Buttons**: PrimeVue with custom styling
- **Cards**: Glassmorphism with shadows
- **Navigation**: Smooth hover effects

## 📱 Responsive Design

- **Mobile**: Hamburger menu, stacked layouts
- **Tablet**: Adaptive navigation, responsive grids
- **Desktop**: Full navigation, multi-column layouts

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to navigation in `Header.vue`
3. Import and use in `App.vue`

### Styling
- Use Tailwind CSS classes for styling
- Custom CSS in component `<style>` blocks
- Global styles in `src/style.css`

### PrimeVue Components
- Import from 'primevue/[component-name]'
- Use PrimeVue classes for theming
- Customize with Tailwind classes

## 🚀 Deployment

The project is ready for deployment to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- etc.

Build the project with `npm run build` and deploy the `dist/` folder.
# crimsonorder
