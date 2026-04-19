type VariantConfig = {
    base?: Record<string, any>;
    variants?: Record<string, Record<string, Record<string, any>>>;
    compoundVariants?: Array<{
        [key: string]: any;
        style: Record<string, any>;
    }>;
    defaultVariants?: Record<string, any>;
};
export declare function createVariants(config: VariantConfig, componentId: string): (props?: Record<string, any>) => string;
export {};
