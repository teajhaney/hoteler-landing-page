import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        times: ["Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
