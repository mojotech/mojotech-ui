import * as React from "react";
import styled from "../lib/styled";
import Text, { TextProps } from "./Text";

export type TextLinkProps = TextProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends TextLinkProps {
  scheme?: "dark" | "light";
}

const TextLink: React.FC<Props> = styled(Text)<Props>(props => ({
  boxShadow:
    props.scheme === "dark"
      ? `0px 1px 0 ${props.theme.colors.white}30`
      : `0px 1px 0 ${props.theme.colors.dark}30`,
  color: "inherit",
  cursor: "pointer",
  textDecoration: "none",
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
    transition: "transform .3s ease",
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
}));

TextLink.defaultProps = {
  as: "a",
  scheme: "light",
  ...Text.defaultProps,
};

TextLink.displayName = "TextLink";

export default TextLink;
