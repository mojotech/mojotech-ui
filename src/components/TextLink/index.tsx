/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import Text, { FontSizes } from "components/Text";
import { Theme } from "types/global";

interface Props {
  href?: string;
  size?: FontSizes;
}

const TextLink: React.FC<Props> = ({ ...props }) => (
  <Text
    css={({ ...theme }: Theme) => ({
      // we are using an 8 digit hex code to generate the boxShadow opacity
      boxShadow: `0px 1px 0 ${theme.colors.dark}30`,
      color: "inherit",
      cursor: "pointer",
      fontSize: props.size ? "" : "inherit",
      textDecoration: "none",
      position: "relative",
      "&:after": {
        background: theme.colors.dark,
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
          transform: "scale(1)",
          transformOrigin: "0 50%",
        },
      },
    })}
    as="a"
    {...props}
  />
);

export default TextLink;
