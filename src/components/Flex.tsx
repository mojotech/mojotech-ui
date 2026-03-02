import styled from "../lib/styled";
import { flexParentSet, FlexParentSetProps } from "onno-react";
import Box, { BoxProps } from "./Box";

export type FlexProps = FlexParentSetProps & BoxProps;

const Flex = styled(Box as any)<FlexProps>(flexParentSet);

export default Flex;
