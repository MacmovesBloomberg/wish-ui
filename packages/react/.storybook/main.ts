// .storybook/main.ts

import path, { dirname } from "path";
import { fileURLToPath } from "url";
import type { StorybookConfig } from "@storybook/react-vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  // 🟢 Story files
  stories: ["../src/**/*.stories.@(ts|tsx)"],

  // 🟢 Framework
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // 🟢 Storybook 10 Addons
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],

  // 🟢 Docs Configuration
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },

  // 🟢 TypeScript Optimization
  typescript: {
    reactDocgen: "react-docgen",
    check: false,
  },

  // 🟢 Vite Customization
  viteFinal: async (config) => {
    return {
      ...config,

      resolve: {
        alias: {
          ...(config.resolve?.alias || {}),

          // Main src alias
          "@": path.resolve(__dirname, "../src"),

          // Theme alias
          "@theme": path.resolve(__dirname, "../src/theme"),
        },
      },
    };
  },
};

export default config;