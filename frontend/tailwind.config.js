/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel gradient colors from the image
        pastel: {
          1: '#F7D5F0', // Light pink
          2: '#FFD0E5', // Pink
          3: '#FFCDCA', // Light coral
          4: '#FFD3A5', // Light peach
          5: '#FFE382', // Light yellow
          6: '#F9F871', // Bright yellow
        },
        
        // Main color scheme using the pastel gradient
        primary: {
          DEFAULT: '#88304E', // Main color
          50: '#F9E6ED',
          100: '#F3CDDB',
          200: '#E39BB8',
          300: '#D36895',
          400: '#C43672',
          500: '#88304E', // Main color
          600: '#772A45',
          700: '#66243C',
          800: '#551F33',
          900: '#44192A',
        },
        secondary: {
          DEFAULT: '#FFCDCA', // Light coral as secondary color
          50: '#FFF7F6',
          100: '#FFEFED',
          200: '#FFCDCA', // Light coral
          300: '#FFB7B2',
          400: '#FFA19A',
          500: '#FF8B82',
          600: '#FF756A',
          700: '#FF5F52',
          800: '#FF493A',
          900: '#FF3322',
        },
        accent: {
          DEFAULT: '#FFE382', // Light yellow as accent color
          50: '#FFFDF5',
          100: '#FFFAE6',
          200: '#FFE382', // Light yellow
          300: '#FFD96F',
          400: '#FFCF5C',
          500: '#FFC549',
          600: '#FFBB36',
          700: '#FFB123',
          800: '#FFA710',
          900: '#FF9D00',
        },
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B', // dark
          900: '#0F172A',
          950: '#020617',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#88304E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 2px 5px 0 rgba(0,0,0,.1)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [
    // Add any plugins you want to use here
    // For example: require('@tailwindcss/forms'),
  ],
  safelist: [
    // Add classes that might be dynamically generated and need to be included in production
    'bg-primary-500',
    'bg-secondary-500',
    'bg-accent-500',
    'text-primary-500',
    'text-secondary-500',
    'text-accent-500',
    'border-primary-500',
    'border-secondary-500',
    'border-accent-500',
    'hover:bg-primary-600',
    'hover:bg-secondary-600',
    'hover:bg-accent-600',
  ],
}
