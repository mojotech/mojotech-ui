import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import Reset from "./Reset";
import Font from "./Font";
import t from "../lib/theme";

const ThemeDecorator = ({ ...props }) => (
  <ThemeProvider theme={t}>
    <Reset />
    <Font />
    {props.children}
  </ThemeProvider>
);

ThemeDecorator.displayName = "ThemeDecorator";

export default ThemeDecorator;