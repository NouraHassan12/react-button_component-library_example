import React, { ElementType, MouseEventHandler, ReactNode } from "react";
export type ButtonType = "default" | "danger" | "ghost" | "secondary";
export type ComponentSize = "default" | "large" | "small";
interface BaseButtonProps {
    type?: ButtonType;
    icon?: ElementType;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}
type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;
type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;
type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseButtonProps;
export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;
declare const _default: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
} & BaseButtonProps & {
    href?: string | undefined;
} & {
    as?: React.ElementType<any> | undefined;
    to?: string | undefined;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=button.d.ts.map