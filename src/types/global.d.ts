export type Theme = {
  spaces: string[];
  colors: {
    mojogreen: string;
    meangreen: string;
    white: string;
    dark: string;
    gray: string;
    yellow: string;
  };
  schemes: {
    dark: {
      backgroundColor: string;
      color: string;
    };
    light: {
      backgroundColor: string;
      color: string;
    };
    gray: {
      backgroundColor: string;
      color: string;
    };
  };
  fontFamilies: { main: string; display: string };
  maxWidths: string[];
  fontSizes: string[];
  lineHeights: number[];
  opacities: number[];
  breakpoints: number[];
  easings: { easeOut: string; easeInOut: string };
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
  | "label"
  | "a";

export type FontSizes = 0 | 1 | 2 | 3 | 4 | 5;

export type SpaceScale = 0 | 1 | 2 | 3 | 4 | 5;
