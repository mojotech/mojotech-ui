/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import { Theme } from "../../types/global";

type MaxWidths = 1 | 2 | 3;

interface Props {
  as?: string;
  size?: MaxWidths;
}

const Wrap: React.FC<Props> = ({ as: W = "div", size = 1, ...props }) => {
  const styles = ({ ...theme }: Theme) =>
    css({
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: size && theme.maxWidths[size - 1],
      width: "100%",
    });

  return <W css={styles} {...props} />;
};

export default Wrap;
