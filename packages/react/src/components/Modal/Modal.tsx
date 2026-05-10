import React, { useEffect, useRef, forwardRef } from "react";
import ReactDOM from "react-dom";
import { styled } from "../../system/styled";
import { overlayStyles, contentStyles } from "./Modal.styles";
import { ModalProps } from "./Modal.types";

import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

const Overlay = styled("div", overlayStyles);
const Content = styled("div", contentStyles);

const ModalBase = forwardRef<HTMLDivElement, ModalProps>(({
  open,
  onClose,
  children,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  className,
  style,
}, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Merge the forwarded ref with the internal contentRef
  const setRef = (node: HTMLDivElement | null) => {
    (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  };

  // Store & restore focus
  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement;
    } else {
      previouslyFocused.current?.focus();
    }
  }, [open]);

  // ESC key handling
  useEffect(() => {
    if (!closeOnEsc || !open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, closeOnEsc, onClose]);

  // Scroll lock
  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Focus trap
  useEffect(() => {
    if (!open) return;
    const content = contentRef.current;
    if (!content) return;

    const selectors = [
      "a[href]",
      "button:not([disabled])",
      "textarea",
      "input",
      "select",
      "[tabindex]:not([tabindex='-1'])",
    ];

    const focusable = content.querySelectorAll<HTMLElement>(selectors.join(","));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (first) {
      first.focus();
    } else {
      content.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (focusable.length === 0) {
        e.preventDefault();
        content.focus();
        return;
      }
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <Overlay
      role="dialog"
      aria-modal="true"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <Content
        ref={setRef}
        tabIndex={-1}
        className={className}
        style={style}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </Content>
    </Overlay>,
    document.body
  );
});

ModalBase.displayName = "Modal";

// Compound typing
type ModalComponent = typeof ModalBase & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
};

export const Modal = ModalBase as ModalComponent;

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
