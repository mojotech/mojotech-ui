import * as React from "react";
import styled from "../lib/styled";
import { gridParentSet, GridParentSetProps } from "onno-react";
import Box, { BoxProps } from "./Box";

export type GridProps = GridParentSetProps & BoxProps;

const Grid: React.FC<GridProps> = styled(Box)(gridParentSet);

// Fallback default props for React 19 compatibility
const defaultProps: Partial<GridProps> = {
  display: "grid",
};

// Apply default props manually since React 19 deprecated defaultProps for function components
const GridWithDefaults: React.FC<GridProps> = (props) => {
  return <Grid {...defaultProps} {...props} />;
};

GridWithDefaults.displayName = "Grid";

export default GridWithDefaults;
