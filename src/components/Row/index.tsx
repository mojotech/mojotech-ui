/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Theme } from "types/global";

const Row: React.FC = props => (
  <div
    css={({ ...theme }: Theme) => ({
      display: "flex",
      flexWrap: "wrap",
      marginLeft: `calc(${theme.spacing[2]} * -1)`,
      marginRight: `calc(${theme.spacing[2]} * -1)`,
      width: "100%",
    })}
    {...props}
  />
);

export default Row;
