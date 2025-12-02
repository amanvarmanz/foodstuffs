// vite.config.ts or vitest.config.ts

import { defineConfig } from "vitest/config"; // 👈 change is here
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
