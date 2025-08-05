# Crimson Legacy - Frontend

A modern, responsive web application for the Crimson Legacy gaming alliance, built with Vue 3, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, responsive interface with glassmorphism effects
- **Multi-language Support**: Available in 7 languages (English, Spanish, French, Indonesian, Turkish, Vietnamese, Russian)
- **Performance Optimized**: Lazy loading, image optimization, and efficient bundling
- **PWA Ready**: Progressive Web App capabilities with offline support
- **SEO Optimized**: Meta tags, structured data, and search engine optimization
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **UI Library**: PrimeVue components
- **Build Tool**: Vite
- **Package Manager**: npm
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/crimsonlegacy/frontend.git
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── public/                 # Static assets
│   ├── logo/              # Logo images
│   ├── manifest.json      # PWA manifest
│   └── sw.js             # Service worker
├── src/
│   ├── components/        # Vue components
│   │   ├── layout/       # Layout components
│   │   ├── pages/        # Page components
│   │   ├── sections/     # Section components
│   │   └── ui/           # UI components
│   ├── composables/      # Vue composables
│   ├── locales/          # Translation files
│   ├── plugins/          # Vue plugins
│   ├── router/           # Vue Router configuration
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Key Components

### Layout Components
- `Header.vue` - Navigation header with language switcher
- `Footer.vue` - Site footer with links and information
- `Layout.vue` - Main layout wrapper

### Page Components
- `HomePage.vue` - Landing page with hero section and stats
- `AboutPage.vue` - About page with leadership information
- `JoinPage.vue` - Join page with requirements and application process
- `FAQPage.vue` - Frequently asked questions

### Section Components
- `HeroSection.vue` - Hero section with main headline and stats cards
- `AboutSection.vue` - About section with alliance information
- `JoinSection.vue` - Join section with requirements and benefits
- `FAQSection.vue` - FAQ section with common questions

## Internationalization

The application supports 7 languages:

- English (en)
- Spanish (es)
- French (fr)
- Indonesian (id)
- Turkish (tr)
- Vietnamese (vi)
- Russian (ru)

Translation files are located in `src/locales/` and use JSON format.

## Styling

The application uses Tailwind CSS for styling with custom components and utilities. The design features:

- Glassmorphism effects for cards and overlays
- Responsive design for all screen sizes
- Dark theme with red and yellow accents
- Smooth animations and transitions
- Custom typography and spacing

## Performance Features

- **Lazy Loading**: Images and components load on demand
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Automatic code splitting by routes
- **Caching**: Service worker for offline support
- **Minification**: Production builds are minified and optimized

## Deployment

The application is configured for deployment on Vercel with:

- Automatic builds on git push
- Preview deployments for pull requests
- Custom domain support
- CDN optimization

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please contact the Crimson Legacy development team.

---

Built with ❤️ for the Crimson Legacy gaming community.
