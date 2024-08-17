import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "172.27.98.207",
    // host: "localhost",
    port: 5173,
  },
});
