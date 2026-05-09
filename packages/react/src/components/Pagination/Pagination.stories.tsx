import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    total: {
      control: "number",
      description: "Total number of pages",
    },
    siblings: {
      control: "number",
      description: "How many pages to show on each side of the current page",
    },
    boundaries: {
      control: "number",
      description: "How many pages to show at the start and end boundaries",
    },
    disabled: {
      control: "boolean",
      description: "Disables all pagination controls",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div style={{ padding: "20px" }}>
        <p>Current Page: {page}</p>
        <Pagination total={10} current={page} onChange={setPage} />
      </div>
    );
  },
};

export const Complex: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return (
      <Pagination
        total={50}
        current={page}
        onChange={setPage}
        siblings={1}
        boundaries={2}
      />
    );
  },
};
