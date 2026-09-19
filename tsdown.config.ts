import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    utils: "src/utils/index.ts",
  },
  dts: true,
  platform: "node",
  format: ["esm"],
  exports: true,
  fixedExtension: false,
  target: ["es2015", "node18"],
});
