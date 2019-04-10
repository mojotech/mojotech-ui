/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Theme } from "../../types/global";

const Column: React.FC = props => (
  <div
    css={({ ...theme }: Theme) => ({
      flexBasis: "calc((60rem - 100%) * 9999)",
      flexGrow: 1,
      marginLeft: theme.spacing[2],
      marginRight: theme.spacing[2],
    })}
    {...props}
  />
);

export default Column;
