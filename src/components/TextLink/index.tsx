import * as React from "react";
import styled from "lib/styled";
import Text, { TextProps } from "components/Text";

const TextLink: React.FC<TextProps> = styled(Text)<TextProps>(props => ({
  boxShadow: `0px 1px 0 ${props.theme.colors.dark}30`,
  color: "inherit",
  cursor: "pointer",
  textDecoration: "none",
  position: "relative",
  "&:after": {
    background: props.theme.colors.dark,
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
  ...Text.defaultProps,
};

TextLink.displayName = "TextLink";

export default TextLink;
