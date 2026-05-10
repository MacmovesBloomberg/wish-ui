import React from "react";

export type ModalProps = {
  /** Controls whether the modal is visible */
  open: boolean;
  /** Callback fired when the modal requests to be closed */
  onClose: () => void;
  /** The content of the modal */
  children: React.ReactNode;
  /** Close the modal when clicking the backdrop overlay */
  closeOnOverlayClick?: boolean;
  /** Close the modal when pressing the Escape key */
  closeOnEsc?: boolean;
  /** Additional class name applied to the modal content element */
  className?: string;
  /** Inline style overrides for the modal content element */
  style?: React.CSSProperties;
};
