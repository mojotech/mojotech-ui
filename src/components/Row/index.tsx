/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Theme } from "types/global";

type MarginBottom = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  marginBottom?: MarginBottom;
}

const Row: React.FC<Props> = ({ marginBottom = 4, ...props }) => (
  <div
    css={({ ...theme }: Theme) => ({
      display: "flex",
      flexWrap: "wrap",
      marginBottom: marginBottom && theme.spacing[marginBottom - 1],
      marginLeft: `calc(${theme.spacing[2]} * -1)`,
      marginRight: `calc(${theme.spacing[2]} * -1)`,
      width: "100%",
    })}
    {...props}
  />
);

export default Row;
