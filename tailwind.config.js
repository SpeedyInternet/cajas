import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',

    ],

    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                fadeOut: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
            colors: {
                primary: {
                    main: '#0E378A',
                    second: '#C4CDE3',
                    dark: '#001f54',
                    medium: '#0063b2',
                    light: '#00a4cc',
                    pastel: '#b3cde0',
                },
                neutral: {
                    white: '#ffffff',
                    black: '#000000',
                },
            },
            fontFamily: {
                averta: ['Averta', 'sans-serif'],
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        animation: {
            fadeIn: 'fadeIn 0.5s ease-in-out',
            fadeOut: 'fadeOut 0.5s ease-in-out',
          },    
    },

    plugins: [forms],
};
