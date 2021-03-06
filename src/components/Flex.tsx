import * as React from "react";
import styled from "../lib/styled";
import { flexParentSet, FlexParentSetProps } from "onno-react";
import Box, { BoxProps } from "./Box";

export type FlexProps = FlexParentSetProps & BoxProps;

const Flex: React.FC<FlexProps> = styled(Box)(flexParentSet);

const flexDefaultProps: FlexProps = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
};

Flex.defaultProps = flexDefaultProps;

Flex.displayName = "Flex";

export default Flex;
