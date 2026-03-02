import styled from "../lib/styled";
import { flexParentSet, FlexParentSetProps } from "onno-react";
import Box, { BoxProps } from "./Box";

export type FlexProps = FlexParentSetProps & BoxProps;

const Flex = styled(Box)<FlexProps>(flexParentSet);

export default Flex;
