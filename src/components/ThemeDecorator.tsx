import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import Reset from "./Reset";
import t from "../lib/theme";
import { Theme } from "../types/global";

const MojoThemeContext = React.createContext<Theme | null>(null);

export const useMojoTheme = () => {
  const mojoTheme = React.useContext(MojoThemeContext);

  return mojoTheme;
};

const ThemeDecorator = ({ ...props }) => (
  <MojoThemeContext.Provider value={t}>
    <ThemeProvider theme={t}>
      <Reset />
      {props.children}
    </ThemeProvider>
  </MojoThemeContext.Provider>
);

ThemeDecorator.displayName = "ThemeDecorator";

export default ThemeDecorator;
