import * as React from "react";
import styled from "../lib/styled";
import { gridParentSet, GridParentSetProps } from "onno-react";
import Box, { BoxProps } from "./Box";

export type GridProps = GridParentSetProps & BoxProps;

const Grid: React.FC<GridProps> = styled(Box)<GridProps>(gridParentSet);

Grid.defaultProps = {
  ...Box.defaultProps,
  display: "grid",
};

Grid.displayName = "Grid";

export default Grid;
