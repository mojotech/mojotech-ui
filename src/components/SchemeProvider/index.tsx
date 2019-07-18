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
      background: theme.schemes[scheme].bg,
      color: theme.schemes[scheme].fg,
    })}
    {...props}
  />
);

export default SchemeProvider;
