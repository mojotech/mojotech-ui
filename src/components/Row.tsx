/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Theme } from "../types/global";

const Row: React.FC = props => (
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

Row.displayName = "Row";

export default Row;
