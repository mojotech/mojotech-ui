/** @jsx jsx */
// @ts-ignore - jsx import is used by JSX pragma
import { jsx } from "@emotion/react";
import { Theme } from "../types/global";

const Row = (props: any) => (
  <div
    css={({ ...theme }: Theme) => ({
      display: "flex",
      flexWrap: "wrap",
      marginLeft: `calc(${theme.spaces[2]} * -1)`,
      marginRight: `calc(${theme.spaces[2]} * -1)`,
      width: "100%",
    })}
    {...props}
  />
);

export default Row;
