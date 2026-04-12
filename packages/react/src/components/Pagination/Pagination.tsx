import React from "react";
import { styled } from "../../system/styled";
import { paginationStyles, pageItemStyles } from "./Pagination.styles";
import { PaginationProps } from "./Pagination.types";

const Root = styled("nav", paginationStyles);
const PageItem = styled("button", pageItemStyles);

export const Pagination = ({
  total,
  current,
  onChange,
  siblings = 1,
  boundaries = 1,
  disabled
}: PaginationProps) => {
  
  const getRange = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const paginationRange = React.useMemo(() => {
    const totalNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalNumbers >= total) return getRange(1, total);

    const leftSiblingIndex = Math.max(current - siblings, boundaries + 2);
    const rightSiblingIndex = Math.min(current + siblings, total - (boundaries + 1));

    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1);

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblings;
      const leftRange = getRange(1, leftItemCount);
      return [...leftRange, "dots", ...getRange(total - boundaries + 1, total)];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblings;
      const rightRange = getRange(total - rightItemCount + 1, total);
      return [...getRange(1, boundaries), "dots", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = getRange(leftSiblingIndex, rightSiblingIndex);
      return [
        ...getRange(1, boundaries),
        "dots",
        ...middleRange,
        "dots",
        ...getRange(total - boundaries + 1, total),
      ];
    }
    return [];
  }, [total, current, siblings, boundaries]);

  return (
    <Root aria-label="pagination">
      <PageItem 
        onClick={() => onChange(current - 1)} 
        disabled={disabled || current === 1}
      >
        Prev
      </PageItem>

      {paginationRange.map((page, index) => {
        if (page === "dots") {
          return <span key={`dots-${index}`} style={{ padding: "0 8px" }}>...</span>;
        }
        return (
          <PageItem
            key={page}
            data-active={current === page}
            onClick={() => onChange(page as number)}
            disabled={disabled}
          >
            {page}
          </PageItem>
        );
      })}

      <PageItem 
        onClick={() => onChange(current + 1)} 
        disabled={disabled || current === total}
      >
        Next
      </PageItem>
    </Root>
  );
};