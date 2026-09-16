/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F0F7F3",
          100: "#E2EEE8",
          200: "#C2DCCD",
          300: "#8CC0A1",
          400: "#4B9B6D",
          500: "#217C4C",
          600: "#17633C",
          700: "#104D2D",
          800: "#0B3B23",
          900: "#072B1A",
          950: "#041F12",
        },
        gold: {
          50: "#FBF5E7",
          100: "#F6E9CB",
          200: "#EFD6A0",
          300: "#E7C06E",
          400: "#DFAC4C",
          500: "#D9A441",
          DEFAULT: "#D9A441",
          600: "#BE882A",
          700: "#9A6C22",
          800: "#7C571F",
          900: "#65471E",
        },
        cream: {
          DEFAULT: "#FAF7F0",
          100: "#F5F0E4",
          200: "#ECE3CD",
          300: "#DED0B2",
        },
        ink: {
          DEFAULT: "#14251C",
          600: "#2C3D33",
          500: "#3E5145",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(7,43,26,0.06), 0 8px 24px -12px rgba(7,43,26,0.18)",
        lift: "0 2px 4px rgba(7,43,26,0.08), 0 20px 40px -16px rgba(7,43,26,0.28)",
        card: "0 4px 14px -6px rgba(7,43,26,0.10), 0 18px 36px -20px rgba(7,43,26,0.18)",
      },
      maxWidth: {
        text: "70ch",
        prose: "72ch",
      },
    },
  },
  plugins: [],
};