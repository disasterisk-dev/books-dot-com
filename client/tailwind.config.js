/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                zilla: "Zilla Slab, serif",
                poppins: "Poppins, sans-serif",
            },
            gridTemplateColumns: {
                12: "repeat(12, minmax(0, 1fr))",
            },
        },
    },
    plugins: [],
};
