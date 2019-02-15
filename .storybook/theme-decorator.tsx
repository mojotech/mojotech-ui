import * as React from "react";
import { RenderFunction } from "@storybook/react";
import { ThemeProvider } from "emotion-theming";
import t from "../lib/theme";

export default (storyFunction: RenderFunction) => (
  <ThemeProvider theme={t}>{storyFunction()}</ThemeProvider>
);
