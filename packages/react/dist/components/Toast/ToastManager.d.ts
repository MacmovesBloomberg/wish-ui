import { default as React } from 'react';
import { ToastOptions } from './Toast.types';
export declare const ToastProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useToast: () => (options: ToastOptions) => void;
