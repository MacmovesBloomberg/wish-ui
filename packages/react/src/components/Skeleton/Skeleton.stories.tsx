import React from "react";
import { Skeleton, SkeletonText } from "./Skeleton";
import { Flex } from "../Flex";

export default { title: "Components/Feedback/Skeleton" };

export const Shapes = () => (
  <Flex direction="column" gap="16px" align="flex-start">
    <Skeleton variant="circle" width={50} height={50} />
    <Skeleton variant="rect" width={200} height={100} />
    <Skeleton variant="text" width={300} />
  </Flex>
);

export const TableLoadingExample = () => (
  <div style={{ width: "100%", border: "1px solid #e2e8f0", padding: "16px", borderRadius: "8px" }}>
    <Flex gap="12px" align="center" style={{ marginBottom: "16px" }}>
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={120} height={20} />
    </Flex>
    <SkeletonText noOfLines={4} />
  </div>
);