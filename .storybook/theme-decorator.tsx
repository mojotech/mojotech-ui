import * as React from "react";
import { RenderFunction } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import Reset from "../src/components/Reset";
import Font from "../src/components/Font";
import t from "../src/lib/theme";

export default (storyFunction: RenderFunction): any => (
  <ThemeProvider theme={t}>
    <Reset />
    <Font />
    {storyFunction()}
  </ThemeProvider>
);
