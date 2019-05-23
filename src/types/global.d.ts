export type Theme = {
  spacing: string[];
  colors: {
    mojogreen: string;
    white: string;
    dark: string;
    gray: string;
    scheme: {
      dark: {
        bg: string;
        fg: string;
      };
      light: {
        bg: string;
        fg: string;
      };
      gray: {
        bg: string;
        fg: string;
      };
    };
  };
  maxWidths: Array<string[]>;
  fonts: { main: string; display: string };
  fontSizes: string[];
  lineHeights: number[];
};
