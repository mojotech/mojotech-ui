import * as React from "react";
import { variant, colorSet, ColorSetProps } from "onno-react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";

type ColorScheme = "dark" | "light" | "gray";

type SchemeProviderProps = ColorSetProps & BoxProps;

export interface Props extends SchemeProviderProps {
  scheme?: ColorScheme;
  children?: React.ReactNode;
}

const schemeSet = variant({
  propsKeys: ["scheme"],
  themeKeys: ["schemes"],
  renderers: [colorSet],
});

const SchemeProvider: React.FC<Props> = styled(Box)(schemeSet);

// Fallback default props for React 19 compatibility
const defaultProps: Partial<Props> = {
  scheme: "dark",
};

// Apply default props manually since React 19 deprecated defaultProps for function components
const SchemeProviderWithDefaults: React.FC<Props> = (props) => {
  return <SchemeProvider {...defaultProps} {...props} />;
};

SchemeProviderWithDefaults.displayName = "SchemeProvider";

export default SchemeProviderWithDefaults;
