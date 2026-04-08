import React from "react";
import type { Preview } from "@storybook/react";
import { WishProvider } from "../src/theme/provider/WishProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <WishProvider>
        <Story />
      </WishProvider>
    ),
  ],
};

export default preview;