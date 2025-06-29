/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gaming: ['Orbitron', 'Arial Black', 'sans-serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Rajdhani', 'Arial', 'sans-serif'],
      },
      fontSize: {
        hero: ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        display: ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        title: ['2.5rem', { lineHeight: '1.3', letterSpacing: '0.01em' }],
      },
      colors: {
        crimson: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px #dc2626, 0 0 10px #dc2626, 0 0 15px #dc2626',
          },
          '100%': {
            boxShadow: '0 0 10px #dc2626, 0 0 20px #dc2626, 0 0 30px #dc2626',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'crimson-gradient':
          'linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #dc2626 50%, #fbbf24 75%, #f59e0b 100%)',
        'dark-gradient':
          'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      },
    },
  },
  plugins: [],
}
