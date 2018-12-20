import * as React from "react";
import { RenderFunction } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import theme from "../src/lib/theme";

export default (story: RenderFunction) => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
);
