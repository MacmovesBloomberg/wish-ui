import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Layout/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      description: "The font size",
    },
    weight: {
      control: "radio",
      options: ["regular", "medium", "bold"],
      description: "The font weight",
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
      description: "The text alignment",
    },
    as: {
      control: "select",
      options: ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6", "label", "strong", "em"],
      description: "The HTML element to render as",
    },
    color: {
      control: "color",
      description: "The text color — accepts any CSS color value",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    size: "md",
    weight: "regular",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const).map((size) => (
        <Text key={size} size={size}>
          {size} — The quick brown fox
        </Text>
      ))}
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Text weight="regular">Regular — The quick brown fox</Text>
      <Text weight="medium">Medium — The quick brown fox</Text>
      <Text weight="bold">Bold — The quick brown fox</Text>
    </div>
  ),
};

export const AsHeading: Story = {
  args: {
    as: "h2",
    size: "2xl",
    weight: "bold",
    children: "Page Heading",
  },
};

export const Muted: Story = {
  args: {
    children: "This is muted helper text.",
    size: "sm",
    color: "var(--wish-colors-text-muted)",
  },
};
