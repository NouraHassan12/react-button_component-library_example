import styled from "styled-components";
import { ButtonType } from "./button";

export type ComponentSize = "default" | "large" | "small";

export const heights: { [key in ComponentSize]: number } = {
  large: 55,
  default: 45,
  small: 35,
};

export const sidePaddings: { [key in ComponentSize]: number } = {
  large: 30,
  default: 25,
  small: 20,
};
type StateColors = {
  regular: string;
  hover: string;
};

const typeColors: { [key in ButtonType]: StateColors } = {
  default: {
    regular: "#0018cf",
    hover: "#2e27cc",
  },
  danger: {
    regular: "#d93848",
    hover: "#eb4d5d",
  },
  ghost: {
    regular: "transparent",
    hover: "#dbdbdb",
  },
  secondary: {
    regular: "#000",
    hover: "#3d3d3d",
  },
};

interface StyledButtonProps {
  innerType: ButtonType;
  size: ComponentSize;
  withText: boolean;
}

/* Real tag is assigned dynamically */
export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  border: none;
  cursor: pointer;
  background-color: ${(pr) => typeColors[pr.innerType].regular};
  padding: 0 ${(pr) => sidePaddings[pr.size]}px;
  height: ${(pr) => heights[pr.size]}px;
  color: ${(pr) =>
    pr.innerType === "ghost" ? typeColors["default"].regular : "#fff"};

  border-radius: 0;
  outline: none;
`;
