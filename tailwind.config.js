/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the Africa Stablecoin Network brand artwork.
        ink: "#1A0E67",
        indigo: {
          50: "#F2F1FB",
          100: "#E4E1F6",
          200: "#C7C1ED",
          300: "#A79EE1",
          400: "#8479D0",
          500: "#5D4FB7",
          600: "#4634AE",
          700: "#311EA3",
          800: "#241572",
          900: "#1A0E67",
          950: "#12083F",
        },
        green: {
          400: "#3ECE9B",
          500: "#0AAE78",
          600: "#089465",
        },
        mint: "#70CCBA",
        lilac: "#9389D1",
        gold: "#F3CA0A",
        paper: "#F6FAFC",
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Outfit Variable", "Outfit", "Inter Variable", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,14,103,0.04), 0 12px 32px -12px rgba(26,14,103,0.16)",
        lift: "0 2px 4px rgba(26,14,103,0.06), 0 24px 48px -18px rgba(26,14,103,0.28)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(-3%, 4%, 0) scale(1.08)" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.05)" },
          "50%": { transform: "translate3d(4%, -3%, 0) scale(1)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "driftSlow 30s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};
