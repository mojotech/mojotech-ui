/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core";

interface Props {
  as?: string;
}

const styles = (props: any) =>
  css({
    all: "unset",
    background: props.colors.red,
    color: "white"
  });

const Button: React.SFC<Props> = ({ as: B = "button", ...props }) => (
  <B css={styles}>{props.children}</B>
);

export default Button;
