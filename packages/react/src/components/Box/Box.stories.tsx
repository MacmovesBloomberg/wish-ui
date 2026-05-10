import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Components/Layout/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    display: {
      control: "select",
      options: ["block", "flex", "grid", "inline", "inline-flex", "none"],
      description: "The CSS display value",
    },
    width: {
      control: "text",
      description: "Width — accepts any CSS value or a responsive object",
    },
    height: {
      control: "text",
      description: "Height — accepts any CSS value or a responsive object",
    },
    padding: {
      control: "text",
      description: "Padding — accepts any CSS value or a responsive object",
    },
    gap: {
      control: "text",
      description: "Gap — accepts any CSS value or a responsive object",
    },
    as: {
      control: "select",
      options: ["div", "section", "article", "main", "aside", "header", "footer", "nav"],
      description: "The HTML element to render as",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    padding: "var(--wish-spacing-lg)",
    children: "A basic Box with padding",
    style: {
      background: "var(--wish-colors-primary-subtle)",
      borderRadius: "var(--wish-radius-md)",
    },
  },
};

export const AsSection: Story = {
  args: {
    as: "section",
    padding: "var(--wish-spacing-xl)",
    children: "Rendered as a <section> element",
    style: {
      background: "var(--wish-colors-primary-subtle)",
      borderRadius: "var(--wish-radius-md)",
    },
  },
};

export const ResponsiveWidth: Story = {
  render: () => (
    <Box
      width={{ base: "100%", md: "50%", lg: "33%" }}
      padding="var(--wish-spacing-lg)"
      style={{
        background: "var(--wish-colors-primary-subtle)",
        borderRadius: "var(--wish-radius-md)",
      }}
    >
      Resize the window — this box is 100% on mobile, 50% on tablet, 33% on desktop.
    </Box>
  ),
};

export const FlexContainer: Story = {
  render: () => (
    <Box display="flex" gap="var(--wish-spacing-md)">
      {["One", "Two", "Three"].map((label) => (
        <Box
          key={label}
          padding="var(--wish-spacing-md)"
          style={{
            background: "var(--wish-colors-primary-subtle)",
            borderRadius: "var(--wish-radius-md)",
            flex: 1,
            textAlign: "center",
          }}
        >
          {label}
        </Box>
      ))}
    </Box>
  ),
};
