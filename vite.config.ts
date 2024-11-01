import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: { port: 6969, strictPort: true },
  build: {
    outDir: "dist-react",
  },
});
