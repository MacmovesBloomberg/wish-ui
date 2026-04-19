export type Placement = "bottom" | "bottom-start" | "bottom-end" | "top" | "top-start" | "top-end" | "left" | "right";
type Options = {
    placement?: Placement;
    offset?: number;
};
export declare const usePosition: ({ placement, offset, }?: Options) => {
    x: number;
    y: number;
    strategy: "fixed";
    refs: {
        reference: import('react').RefObject<HTMLElement | null>;
        floating: import('react').RefObject<HTMLElement | null>;
    };
    update: () => void;
};
export {};
