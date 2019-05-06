/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Theme } from "types/global";

type ColorScheme = "dark" | "light" | "gray";

interface Props {
  scheme?: ColorScheme;
}

const SchemeProvider: React.FC<Props> = ({ scheme = "dark", ...props }) => (
  <main
    css={({ ...theme }: Theme) => ({
      background: theme.colors.scheme[scheme].bg,
      color: theme.colors.scheme[scheme].fg,
    })}
    {...props}
  />
);

export default SchemeProvider;
