import React, { ElementType, MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./styled";
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

type CustomNodeProps = {
  as?: ElementType;
  to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & CustomNodeProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props
) => {
  const {
    type = "default",
    size = "default",
    className,
    children,
    onClick,
  } = props;

  const styles = {
    innerType: type,
    size,
    withText: children != null,
  };

  const childrenWithIcon = <>{children}</>;

  return (
    <StyledButton
      as="button"
      type="button"
      onClick={onClick}
      className={className}
      {...styles}
    >
      {childrenWithIcon}
    </StyledButton>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
