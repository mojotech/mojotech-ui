import * as React from "react";
import styled from "../lib/styled";
import Grid, { GridProps } from "./Grid";

const AutoGrid: React.FC<GridProps> = styled(Grid)();

AutoGrid.defaultProps = {
  ...Grid.defaultProps,
  gridGap: [24, 48],
  gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
  gridAutoRows: "min-content",
  gridAutoFlow: "row",
};

AutoGrid.displayName = "AutoGrid";

export default AutoGrid;
