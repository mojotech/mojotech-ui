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

const SchemeProvider = styled(Box as any)<Props>(schemeSet);

export default SchemeProvider;
