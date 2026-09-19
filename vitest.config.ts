import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["{__tests__,src}/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
  },
  resolve: {
    alias: {
      "@": "./src",
    },
  },
});
