import * as React from "react";
import { variant, colorSet, ColorSetProps } from "onno-react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";

type ColorScheme = "dark" | "light" | "gray";

type SchemeProviderProps = ColorSetProps & BoxProps;

interface Props extends SchemeProviderProps {
  scheme?: ColorScheme;
}

const schemeSet = variant({
  propsKeys: ["scheme"],
  themeKeys: ["schemes"],
  renderers: [colorSet],
});

const SchemeProvider: React.FC<Props> = styled(Box)(schemeSet);

const schemeProviderDefaultProps: Props = {
  scheme: "dark",
};

SchemeProvider.defaultProps = schemeProviderDefaultProps;

SchemeProvider.displayName = "SchemeProvider";

export default SchemeProvider;
