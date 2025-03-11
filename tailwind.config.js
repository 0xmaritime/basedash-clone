/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'bd-black': '#000000',
        'bd-dark': '#0A0A0A',
        'bd-card': '#121212',
        'bd-card-hover': '#1A1A1A',
        'bd-border': '#1E1E1E',
        
        // Text colors
        'bd-text': '#FFFFFF',
        'bd-text-secondary': '#A0A0A0',
        'bd-text-tertiary': '#6E6E6E',
        
        // Accent colors
        'bd-blue': '#0A84FF',
        'bd-purple': '#5E5CE6',
        'bd-pink': '#FF2D55',
        'bd-yellow': '#FFCC00',
        'bd-green': '#34C759',
        
        // Table/data visualization colors
        'bd-table-header': '#1A1A1A',
        'bd-table-row-hover': '#1E1E1E',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dots': 'url("/images/dots-pattern.png")',
      },
      boxShadow: {
        'bd-glow': '0 0 20px rgba(10, 132, 255, 0.15)',
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  safelist: [
    'grid-cols-20'
  ],
  plugins: [],
};