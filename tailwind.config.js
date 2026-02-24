/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#F5A623',
      },
      animation: {
        bounce: 'bounce 1s infinite',
        shake: 'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%': { transform: 'translateX(-1px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(1px)' },
        },
      },
    },
  },
  plugins: [],
};