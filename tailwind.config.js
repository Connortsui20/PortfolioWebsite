/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                nightSky: "url('/images/night-sky.jpg')",
                graphicsTermProject: "url('/images/graphics-term-project.png')",
                introImage: "url('/images/wallpaper.jpg')",
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
