import * as React from "react";
import styled from "lib/styled";
import Grid, { GridProps } from "components/Grid";

const AutoGrid: React.FC<GridProps> = styled(Grid)();

AutoGrid.defaultProps = {
  ...Grid.defaultProps,
  gridGap: 1,
  gridTemplateColumns: ["repeat(1, 1fr)", "repeat(5, 1fr)"],
  gridAutoRows: "min-content",
  gridAutoFlow: "row",
};

export default AutoGrid;
