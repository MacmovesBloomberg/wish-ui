import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
      exclude: ["**/*.test.tsx", "**/*.stories.tsx", "src/test"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "WishUI",
      fileName: (format) => `index.${format === "es" ? "js" : "umd.cjs"}`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
