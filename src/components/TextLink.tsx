import * as React from "react";
import styled from "../lib/styled";
import Text, { TextProps } from "./Text";
import { rgbaify } from "../lib/utils";

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
            ? `inset 0 -1px 0 0 ${rgbaify(props.theme.colors.white, 0.4)}`
            : `inset 0 -1px 0 0 ${rgbaify(props.theme.colors.dark, 0.4)}`,
        backgroundImage:
          props.scheme === "dark"
            ? `linear-gradient(${props.theme.colors.white}, ${props.theme.colors.white})`
            : `linear-gradient(${props.theme.colors.dark}, ${props.theme.colors.dark})`,
        backgroundPosition: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 1px",
        position: "relative",
        transition: `background-size .3s ${props.theme.easings.easeInOut}`,
        "&:hover, &:focus": {
          backgroundSize: "100% 1px",
          backgroundPosition: "0% 100%",
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
