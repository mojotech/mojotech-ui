export type Theme = {
  spaces: string[];
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
  fontFamilies: { main: string; display: string };
  fontSizes: string[];
  lineHeights: number[];
};

export type TextTags =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "a";

export type FontSizes = 0 | 1 | 2 | 3 | 4 | 5;

export type SpaceScale = 0 | 1 | 2 | 3 | 4 | 5;
