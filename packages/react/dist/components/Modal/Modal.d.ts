import { default as React } from 'react';
import { ModalProps } from './Modal.types';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
declare const ModalBase: ({ open, onClose, children, closeOnOverlayClick, closeOnEsc, }: ModalProps) => React.ReactPortal | null;
type ModalComponent = typeof ModalBase & {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
export declare const Modal: ModalComponent;
export {};
