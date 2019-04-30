/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Theme } from "../../types/global";

type TextTags = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type FontSizes = 1 | 2 | 3 | 4 | 5;
type SpaceScale = 1 | 2 | 3 | 4 | 5 | 6;

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
      fontFamily: display ? theme.fonts.display : theme.fonts.main,
      fontSize: size && theme.fontSizes[size - 1],
      lineHeight:
        size === 5
          ? theme.lineHeights[2]
          : size === 1
          ? theme.lineHeights[0]
          : theme.lineHeights[1],
      marginBottom: leading ? theme.spacing[leading] : theme.spacing[size - 1],
      opacity: label ? 0.5 : 1,
    })}
    {...props}
  />
);

export default Text;
