import React, { useState } from "react";
import { Pagination } from "./Pagination";

export default { title: "Components/Navigation/Pagination" };

export const Default = () => {
  const [page, setPage] = useState(1);
  return (
    <div style={{ padding: "20px" }}>
      <p>Current Page: {page}</p>
      <Pagination total={10} current={page} onChange={setPage} />
    </div>
  );
};

export const Complex = () => {
  const [page, setPage] = useState(5);
  return <Pagination total={50} current={page} onChange={setPage} siblings={1} boundaries={2} />;
};