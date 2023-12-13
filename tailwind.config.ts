import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      s: "320px",
      xs: "375px",
      m: "425px",
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      theme: {
        container: {
          center: true,
          padding: "16px",
        },
      },
      colors: {
        hover: "#EEF1F9",
        primary: "#5976C6",
        pink: "#D86D94",
        card: "#F3F8FA",
        "orange-muda": "#FCF4EB",
      },
    },
  },
  plugins: [],
};
export default config;
