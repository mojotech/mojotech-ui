/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";
import { Theme } from "../../types/global";

type TextTags = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type FontSizes = 1 | 2 | 3 | 4 | 5;

interface Props {
  as?: TextTags;
  size?: FontSizes;
}

const Text: React.FC<Props> = ({ as: T = "p", size = 1, ...props }) => {
  const styles = ({ ...theme }: Theme) =>
    css({
      color: "black",
      fontSize: size && theme.fontSizes[size - 1],
    });

  return (
    <T css={styles} {...props}>
      {props.children}
    </T>
  );
};

export default Text;
