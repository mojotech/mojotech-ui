import * as React from "react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";

export interface Props extends BoxProps {
  children?: React.ReactNode;
  scheme?: string;
}

const Section: React.FC<Props> = styled(Box)();

// Fallback default props for React 19 compatibility
const defaultProps: Partial<Props> = {
  as: "section",
  marginBottom: 5,
};

// Apply default props manually since React 19 deprecated defaultProps for function components
const SectionWithDefaults: React.FC<Props> = (props) => {
  return <Section {...defaultProps} {...props} />;
};

SectionWithDefaults.displayName = "Section";

export default SectionWithDefaults;
