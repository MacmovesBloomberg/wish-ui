import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardHeader, CardContent, CardFooter } from "./";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>Card Title</CardHeader>
      <CardContent>
        This is some example content inside the card.
      </CardContent>
      <CardFooter>
        <Button size="sm">Cancel</Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  )
};

export const Outline: Story = {
  render: () => (
    <Card variant="outline">
      <CardHeader>Outline Card</CardHeader>
      <CardContent>
        This is an outline variant.
      </CardContent>
    </Card>
  )
};