import * as React from "react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";

const Wrap: React.FC<BoxProps> = styled(Box)();

// Fallback default props for React 19 compatibility
const defaultProps: Partial<BoxProps> = {
  gridColumn: ["1/-1", "3 / span 8"],
};

// Apply default props manually since React 19 deprecated defaultProps for function components
const WrapWithDefaults: React.FC<BoxProps> = (props) => {
  return <Wrap {...defaultProps} {...props} />;
};

WrapWithDefaults.displayName = "Wrap";

export default WrapWithDefaults;
