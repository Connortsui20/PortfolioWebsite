/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                hero: "url('/images/hero-background.jpg')"
            }),
            colors: {
                'blog-primary': '#0080ff'
            }
        }
    },
    variants: {
        extend: {
            backgroundImage: ['hover', 'focus']
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
