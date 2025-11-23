/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'comic': ['"Comic Sans MS"', '"Chalkboard SE"', 'sans-serif'],
            },
            colors: {
                primary: '#FF6B6B', // Playful Red
                secondary: '#4ECDC4', // Teal
                accent: '#FFE66D', // Yellow
                dark: '#2C3E50',
            },
            keyframes: {
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
                    '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
                }
            },
            animation: {
                shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
            }
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.rotate-y-180': {
                    transform: 'rotateY(180deg)',
                },
                '.perspective-1000': {
                    perspective: '1000px',
                },
                '.transform-style-3d': {
                    transformStyle: 'preserve-3d',
                },
                '.backface-hidden': {
                    backfaceVisibility: 'hidden',
                },
            })
        })
    ],
}
