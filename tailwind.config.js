/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                "grayish-cyan": "hsl(185, 58%, 96%)",
                "filter-grayish-cyan": "hsl(176, 34%, 60%)",
                "dark-grayish-cyan": "hsl(180, 8%, 52%)",
                "dark-grayish-cyan-shadow": "hsl(176, 34%, 20%)",
                "very-dark-grayish-cyan": "hsl(180, 14%, 20%)",
                "cyan-bg": "hsl(180deg 28.06% 50.39%)",
            },
            fontFamily: {
                "spartan": "'League Spartan', sans-serif"
            },
            backgroundImage: {
                "header-bg-desktop": "url(/assets/images/bg-header-desktop.svg)",
                "header-bg-mobile": "url(/assets/images/bg-header-mobile.svg)"
            }
        },
    },
    plugins: [],
};
