import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Removed vite-plugin-eslint to avoid slowing down the development server

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
