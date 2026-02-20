import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {

    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',

        // VERY IMPORTANT for React + Inertia pages
        './resources/js/**/*.js',
        './resources/js/**/*.jsx',
        './resources/js/**/*.ts',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {

            /* ================================
               ENTERPRISE CONSULTANCY COLORS
               ================================ */

            colors: {

                brand: {
                    green: '#16a34a',      // primary action color
                    'green-dark': '#15803d',
                    light: '#dcfce7',

                    black: '#0b0f0c',      // premium dark background
                    dark: '#111827',       // dashboard dark section
                },

            },

            /* ================================
               PROFESSIONAL FONTS
               ================================ */

            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },

            /* ================================
               PREMIUM SaaS SHADOWS
               ================================ */

            boxShadow: {
                glow: '0 0 40px rgba(22,163,74,0.35)',
                soft: '0 10px 30px rgba(0,0,0,0.08)',
            },

            /* ================================
               SMOOTH ANIMATIONS
               ================================ */

            transitionTimingFunction: {
                smooth: 'cubic-bezier(.4,0,.2,1)',
            },

        },
    },

    plugins: [
        forms,
    ],
}
