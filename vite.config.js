// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MERN-Stack-Project/", // 👈 your GitHub repo name here
});
