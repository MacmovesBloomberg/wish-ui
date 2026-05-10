import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem } from "./Accordion";
import { AccordionTrigger } from "./AccordionTrigger";
import { AccordionContent } from "./AccordionContent";

const meta: Meta<typeof Accordion> = {
  title: "Components/Data Display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["single", "multiple"],
      description: "Whether one or multiple items can be open at a time",
    },
    variant: {
      control: "select",
      options: ["ghost", "bordered"],
      description: "The visual style of the accordion",
    },
  },
  // Default args drive the prop table and the interactive controls
  args: {
    type: "single",
    variant: "bordered",
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// The Default story uses args so Storybook controls wire up to the component
export const Default: Story = {
  args: {
    type: "single",
    variant: "bordered",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match your theme.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. Smooth transitions are applied via CSS.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
    variant: "bordered",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section One</AccordionTrigger>
        <AccordionContent>Content for section one.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section Two</AccordionTrigger>
        <AccordionContent>Content for section two.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Ghost: Story = {
  args: {
    type: "single",
    variant: "ghost",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Ghost style item one</AccordionTrigger>
        <AccordionContent>Content for item one.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Ghost style item two</AccordionTrigger>
        <AccordionContent>Content for item two.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
