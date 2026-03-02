import styled from "../lib/styled";
import { gridParentSet, GridParentSetProps } from "onno-react";
import Box, { BoxProps } from "./Box";

export type GridProps = GridParentSetProps & BoxProps;

const Grid = styled(Box as any)<GridProps>(gridParentSet);

export default Grid;
