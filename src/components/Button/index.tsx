/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";
import t from "lib/theme";

interface Props {
  text?: string;
}

const styles = css({
  background: t.colors.mojogreen,
  color: "white",
});

const Button: React.SFC<Props> = ({ text, children }) => (
  <button css={styles}>{text || children}</button>
);

export default Button;
