/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import dts from 'vite-plugin-dts'; // 🆕 You'll need to install this: npm install -D vite-plugin-dts

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // 🟢 Added dts plugin to generate TypeScript definitions
  plugins: [
    react(), 
    dts({ 
      insertTypesEntry: true,
      include: ['src'],
      exclude: ['**/*.test.tsx', '**/*.stories.tsx', 'src/test'] 
    })
  ],
  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "WishUI",
      fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.cjs'}`,
      formats: ['es', 'umd'] // 🟢 Exporting both modern and compatible formats
    },
    rollupOptions: {
      // 🟢 Keep react external so it's not bundled twice
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime"
        }
      }
    },
    sourcemap: true, // 🟢 Helpful for debugging for your users
    emptyOutDir: true // 🟢 Clears the 'dist' folder before every build
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});