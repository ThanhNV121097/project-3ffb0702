import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        success: "#10B981",
        danger: "#DC2626"
      }
    }
  },
  plugins: []
};

export default config;
