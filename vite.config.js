import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/MERN-Stack-Project/", // <- your GitHub repo name with slashes
  plugins: [react()],
});
