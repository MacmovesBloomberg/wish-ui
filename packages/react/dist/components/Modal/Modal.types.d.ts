import { default as React } from 'react';
export type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    closeOnOverlayClick?: boolean;
    closeOnEsc?: boolean;
};
