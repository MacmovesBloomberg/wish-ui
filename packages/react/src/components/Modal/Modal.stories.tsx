import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls whether the modal is visible",
    },
    closeOnOverlayClick: {
      control: "boolean",
      description: "Close the modal when clicking the backdrop",
    },
    closeOnEsc: {
      control: "boolean",
      description: "Close the modal when pressing Escape",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Compound: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>

        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header>Delete Item</Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this item?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
