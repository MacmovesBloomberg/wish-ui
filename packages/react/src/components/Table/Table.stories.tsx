import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table, Thead, Tbody, Tr, Th, Td } from "./Table";
import { Badge } from "../Badge";

const meta: Meta<typeof Table> = {
  title: "Components/Data Display/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["simple", "striped"],
      description: "The visual style of the table",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "The size of the table cells",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Policy ID</Th>
          <Th>Holder</Th>
          <Th>Status</Th>
          <Th>Amount</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>#POL-8821</Td>
          <Td>Jane Cooper</Td>
          <Td><Badge color="success">Active</Badge></Td>
          <Td>$1,200.00</Td>
        </Tr>
        <Tr>
          <Td>#POL-4412</Td>
          <Td>Robert Fox</Td>
          <Td><Badge color="warning">Pending</Badge></Td>
          <Td>$850.00</Td>
        </Tr>
      </Tbody>
    </Table>
  ),
};
