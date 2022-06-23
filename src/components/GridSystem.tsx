import * as React from "react";
import styled from "../lib/styled";
import Grid, { GridProps } from "./Grid";

export type GridSystemProps = GridProps;

const GridSystem: React.FC<GridSystemProps> = styled(Grid)<GridSystemProps>();

GridSystem.defaultProps = {
  ...Grid.defaultProps,
  gridColumnGap: [24, 48],
  gridRowGap: 0,
  gridTemplateColumns: [
    "repeat(4, minmax(0, 1fr))",
    "repeat(12, minmax(0, 1fr))",
  ],
  gridTemplateRows: "auto",
  margin: "0 auto",
  maxWidth: 2,
  paddingX: [24, 48],
  width: "100%",
};

GridSystem.displayName = "GridSystem";

export default GridSystem;
