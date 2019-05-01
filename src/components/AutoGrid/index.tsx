/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Theme } from "types/global";
import { mq } from "lib/utils";

type SpaceScale = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  columns?: number[];
  gap?: SpaceScale;
}

const AutoGrid: React.FC<Props> = ({ gap = 1, columns = [1, 5], ...props }) => (
  <div
    css={({ ...theme }: Theme) =>
      mq({
        display: "grid",
        width: "100%",
        gridGap: gap && theme.spacing[gap],
        gridTemplateColumns: [
          `repeat(${columns[0]}, 1fr)`,
          `repeat(${columns[1]}, 1fr)`,
        ],
        gridAutoRows: "min-content",
        gridAutoFlow: "row",
      })
    }
    {...props}
  />
);

export default AutoGrid;
