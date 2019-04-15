import * as React from "react";
import t from "../../../lib/theme";
import { ThemeProvider } from "emotion-theming";

const Theme: React.SFC = ({ children }) => (
  <ThemeProvider theme={t}>{children}</ThemeProvider>
);

export default Theme;
