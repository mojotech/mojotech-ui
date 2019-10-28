import * as React from "react";
import styled from "../lib/styled";
import Text, { TextProps } from "./Text";

export type TextLinkProps = TextProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends TextLinkProps {
  scheme?: "dark" | "light";
  underline?: boolean;
}

const TextLink: React.FC<Props> = styled(Text)<Props>(props =>
  props.underline
    ? {
        boxShadow:
          props.scheme === "dark"
            ? `0px 1px 0 ${props.theme.colors.white}30`
            : `0px 1px 0 ${props.theme.colors.dark}30`,
        position: "relative",
        "&:after": {
          background:
            props.scheme === "dark"
              ? props.theme.colors.white
              : props.theme.colors.dark,
          bottom: -1,
          content: "''",
          position: "absolute",
          height: 1,
          left: 0,
          transition: `transform .3s ${props.theme.easings.easeOut}`,
          transform: "scaleX(0)",
          transformOrigin: "100% 50%",
          width: "100%",
        },
        "&:hover": {
          "&:after": {
            transform: "scaleX(1)",
            transformOrigin: "0 50%",
          },
        },
      }
    : {
        opacity: props.theme.opacities[0],
        transition: `opacity .3s ${props.theme.easings.easeInOut}`,
        "&:hover": {
          opacity: props.theme.opacities[1],
        },
      },
);

TextLink.defaultProps = {
  as: "a",
  cursor: "pointer",
  scheme: "light",
  underline: false,
  ...Text.defaultProps,
};

TextLink.displayName = "TextLink";

export default TextLink;
