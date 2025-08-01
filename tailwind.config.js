/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Custom keyframes for animations
      keyframes: {
        blob: {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },

      // Animation classes based on the above keyframes
      animation: {
        blob: "blob 10s infinite",
        marquee: "marquee 25s linear infinite",
        marqueeReverse: "marqueeReverse 25s linear infinite",
      },

      // Custom background for the skills section
      backgroundImage: {
        "skills-gradient":
          "linear-gradient(38.73deg, rgba(204, 47, 38, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
      },
    },
  },
  plugins: [],
};
