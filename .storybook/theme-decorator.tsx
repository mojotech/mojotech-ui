import * as React from "react";
import { RenderFunction } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import Reset from "../src/Reset";
import t from "../lib/theme";

export default (storyFunction: RenderFunction) => (
  <ThemeProvider theme={t}>
    <Reset />
    {storyFunction()}
  </ThemeProvider>
);
