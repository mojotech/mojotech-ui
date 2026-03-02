/** @jsx jsx */
// @ts-ignore - jsx import is used by JSX pragma
import { jsx } from "@emotion/react";
import { Theme } from "../types/global";

const Column = (props: any) => (
  <div
    css={({ ...theme }: Theme) => ({
      flexBasis: "calc((30rem - 100%) * 9999)",
      flexGrow: 1,
      marginLeft: theme.spaces[2],
      marginRight: theme.spaces[2],
    })}
    {...props}
  />
);

export default Column;
