import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "./Table";
import { Badge } from "../Badge";

export default { title: "Components/Data Display/Table" };

export const Default = () => (
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
);