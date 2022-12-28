import { ButtonType } from "./button";
export type ComponentSize = "default" | "large" | "small";
export declare const heights: {
    [key in ComponentSize]: number;
};
export declare const sidePaddings: {
    [key in ComponentSize]: number;
};
interface StyledButtonProps {
    innerType: ButtonType;
    size: ComponentSize;
    withText: boolean;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StyledButtonProps, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
//# sourceMappingURL=styled.d.ts.map