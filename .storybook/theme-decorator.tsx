import * as React from "react";
import { RenderFunction } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import Reset from "../src/Reset";
import Font from "../src/Font";
import t from "../lib/theme";

export default (storyFunction: RenderFunction): any => (
  <ThemeProvider theme={t}>
    <Reset />
    <Font />
    {storyFunction()}
  </ThemeProvider>
);
