import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import Reset from "../src/components/Reset";
import t from "../src/lib/theme";

const themeDecorator = (Story) => (
  <ThemeProvider theme={t}>
    <Reset />
    <Story />
  </ThemeProvider>
);

export default themeDecorator;
