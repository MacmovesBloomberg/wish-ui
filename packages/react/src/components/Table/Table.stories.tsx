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
  args: {
    variant: "simple",
    size: "md",
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const SampleRows = () => (
  <>
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
    <Tr>
      <Td>#POL-3301</Td>
      <Td>Emily Chen</Td>
      <Td><Badge color="danger">Expired</Badge></Td>
      <Td>$2,400.00</Td>
    </Tr>
  </>
);

export const Default: Story = {
  args: {
    variant: "simple",
    size: "md",
  },
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Policy ID</Th>
          <Th>Holder</Th>
          <Th>Status</Th>
          <Th>Amount</Th>
        </Tr>
      </Thead>
      <Tbody><SampleRows /></Tbody>
    </Table>
  ),
};

export const Striped: Story = {
  args: {
    variant: "striped",
    size: "md",
  },
  render: (args) => (
    <Table {...args}>
      <Thead>
        <Tr>
          <Th>Policy ID</Th>
          <Th>Holder</Th>
          <Th>Status</Th>
          <Th>Amount</Th>
        </Tr>
      </Thead>
      <Tbody><SampleRows /></Tbody>
    </Table>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size}>
          <p style={{ marginBottom: "8px", fontWeight: 500 }}>Size: {size}</p>
          <Table variant="simple" size={size}>
            <Thead>
              <Tr><Th>Name</Th><Th>Status</Th><Th>Amount</Th></Tr>
            </Thead>
            <Tbody>
              <Tr><Td>Jane Cooper</Td><Td>Active</Td><Td>$1,200</Td></Tr>
            </Tbody>
          </Table>
        </div>
      ))}
    </div>
  ),
};
