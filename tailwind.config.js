module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      principal: '64px'
    },
    extend: {
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}
