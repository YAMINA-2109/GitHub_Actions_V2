import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // simulate un navigateur
    globals: true, // permet d’utiliser describe(), it(), expect()
    setupFiles: "./src/setupTests.ts", // fichier pour jest-dom
  },
});
