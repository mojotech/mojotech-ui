import * as React from "react";
import styled from "../lib/styled";
import { flexParentSet, FlexParentSetProps } from "onno-react";
import Box, { BoxProps } from "./Box";

export type FlexProps = FlexParentSetProps & BoxProps;

const Flex: React.FC<FlexProps> = styled(Box)(flexParentSet);

// Fallback default props for React 19 compatibility
const defaultProps: Partial<FlexProps> = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
};

// Apply default props manually since React 19 deprecated defaultProps for function components
const FlexWithDefaults: React.FC<FlexProps> = (props) => {
  return <Flex {...defaultProps} {...props} />;
};

FlexWithDefaults.displayName = "Flex";

export default FlexWithDefaults;
