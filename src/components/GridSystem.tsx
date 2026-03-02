import styled from "../lib/styled";
import Grid, { GridProps } from "./Grid";

export type GridSystemProps = GridProps;

const GridSystem = styled(Grid as any)<GridSystemProps>();

export default GridSystem;
