export declare const theme: {
    readonly colors: {
        primary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        gray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        text: {
            base: string;
            muted: string;
        };
        success: {
            DEFAULT: string;
            subtle: string;
            on: string;
        };
        warning: {
            DEFAULT: string;
            subtle: string;
            on: string;
        };
        danger: {
            DEFAULT: string;
            subtle: string;
            on: string;
        };
        info: {
            DEFAULT: string;
            subtle: string;
            on: string;
        };
        white: string;
        black: string;
    };
    readonly spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
    };
    readonly radius: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    readonly shadows: {
        sm: string;
        md: string;
        lg: string;
    };
    readonly typography: {
        fontFamily: string;
        fontSize: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "3xl": string;
        };
        fontWeight: {
            regular: number;
            medium: number;
            bold: number;
        };
    };
};
export type WishTheme = typeof theme;
