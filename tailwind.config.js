/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--sl-color-primary-600)',
        'on-accent': 'var(--sl-color-neutral-700)',
        'neutral-400': 'var(--sl-color-neutral-400)',
        'neutral-600': 'var(--sl-color-neutral-600)',
        'primary-700': 'var(--sl-color-primary-700)'
      }
    }
  },
  plugins: []
}
