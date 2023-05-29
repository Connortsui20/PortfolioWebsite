/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                // nightSky: "url('/images/night-sky.jpg')",
                // graphicsTermProject: "url('/images/graphics-term-project.png')",
                introImage: "url('/images/hexagons.jpg')",
            }),
            colors: {
                "primary-light": "#00A2FF",
                "secondary-light": "#00FFBF",
                "primary-dark": "#0C20EB",
                "secondary-dark": "#7700FF",
            },
        },
    },
    variants: {
        extend: {
            backgroundImage: ["hover", "focus"],
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
