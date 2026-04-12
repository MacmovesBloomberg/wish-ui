export interface PaginationProps {
  /** Total number of pages */
  total: number;
  /** The current active page (1-indexed) */
  current: number;
  /** Callback when page changes */
  onChange: (page: number) => void;
  /** How many pages to show on each side of current page */
  siblings?: number;
  /** How many pages to show at the start and end boundaries */
  boundaries?: number;
  /** Disabled state */
  disabled?: boolean;
}