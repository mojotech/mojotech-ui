/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { FontSizes, SpaceScale, TextTags, Theme } from "types/global";

interface Props {
  as?: TextTags;
  size?: FontSizes;
  leading?: SpaceScale;
  display?: boolean;
  label?: boolean;
}

const Text: React.FC<Props> = ({
  as: T = "p",
  size = 1,
  label = false,
  leading,
  display,
  ...props
}) => (
  <T
    css={({ ...theme }: Theme) => ({
      cursor: T === "a" ? "pointer" : "inherit",
      fontFamily: display ? theme.fonts.display : theme.fonts.main,
      fontSize: size && theme.fontSizes[size - 1],
      lineHeight:
        size === 5
          ? theme.lineHeights[2]
          : size === 1
          ? theme.lineHeights[0]
          : theme.lineHeights[1],
      marginBottom: leading ? theme.spacing[leading] : theme.spacing[size - 1],
      opacity: label || T === "a" ? 0.5 : 1,
      transition: "opacity .3s ease",
      "&:hover": {
        opacity: 1,
      },
    })}
    {...props}
  />
);

export default Text;
