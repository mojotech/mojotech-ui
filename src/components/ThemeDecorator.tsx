import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import Reset from "./Reset";
import Font from "./Font";
import t from "../lib/theme";

const ThemeDecorator = ({ ...props }) => (
  <ThemeProvider theme={props.theme}>
    <Reset />
    <Font />
    {props.children}
  </ThemeProvider>
);

ThemeDecorator.displayName = "ThemeDecorator";

ThemeDecorator.defaultProps = {
  theme: t,
};

export default ThemeDecorator;
