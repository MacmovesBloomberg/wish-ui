import path from "path";
import { fileURLToPath } from "url";
import type { InlineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  viteFinal: async (config: InlineConfig) => {
    return {
      ...config,
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src")
        }
      }
    };
  }
};