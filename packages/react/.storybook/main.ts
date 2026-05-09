// This file has been automatically migrated to valid ESM format by Storybook.
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import type { InlineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  framework: getAbsolutePath("@storybook/react-vite"),
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

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}