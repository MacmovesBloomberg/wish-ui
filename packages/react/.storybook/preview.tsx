import React from "react";
import { WishProvider } from "../src/theme";

export const decorators = [
  (Story:any) => (
    <WishProvider>
      <Story />
    </WishProvider>
  )
];