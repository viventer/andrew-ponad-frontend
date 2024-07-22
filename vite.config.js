import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "172.18.215.12",
    // host: "localhost",
    port: 5173,
  },
});
