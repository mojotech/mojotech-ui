/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/core";

type TextTags = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
  as?: TextTags;
  size: number;
}

const Text: React.FC<Props> = ({ as: T = "p", size, ...props }) => {
  const styles = css({
    fontFamily: "sans-serif"
  });

  return <T css={styles}>{props.children}</T>;
};

export default Text;
