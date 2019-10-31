/** @jsx jsx */
import * as React from "react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";
import { textSet, TextSetProps } from "onno-react";

type ButtonProps = BoxProps &
  TextSetProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {}

const Button: React.FC<Props> = styled(Box)(
  {
    backgroundColor: "white",
    display: "block",
    border: "none",
    cursor: "pointer",
    mixBlendMode: "normal",
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
    "&:hover": {
      "&:before": {
        transform: "translateX(0)",
      },
    },
    "&:before": {
      backgroundColor: "white",
      content: "''",
      height: "100%",
      left: 0,
      mixBlendMode: "difference",
      transform: "translateX(-100%)",
      position: "absolute",
      top: 0,
      transition: "transform .3s ease",
      width: "100%",
      willChange: "transform",
      zIndex: 3,
    },
    "&:after": {
      backgroundColor: "dark",
      content: "''",
      left: 0,
      mixBlendMode: "screen",
      position: "absolute",
      height: "100%",
      top: 0,
      width: "100%",
      zIndex: 100,
    },
  },
  textSet,
);

Button.defaultProps = {
  as: "button",
  paddingX: 5,
  paddingY: 3,
  fontSize: 2,
};

Button.displayName = "Button";

export default Button;
