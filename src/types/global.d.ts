export type Theme = {
  spaces: string[];
  colors: {
    mojogreen: string;
    meangreen: string;
    white: string;
    dark: string;
    gray: string;
    mediumGray: string;
    darkGray: string;
    yellow: string;
    aaMojogreen: string;
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
  fontFamilies: { main: string; display: string; mono: string };
  maxWidths: string[];
  widths: string[];
  fontSizes: string[];
  lineHeights: number[];
  letterSpacing: string[];
  opacities: number[];
  breakpoints: number[];
  easings: { easeOut: string; easeInOut: string };
  zIndices: number[];
};

export type ZStack = {
  sink: number;
  overlay: number;
  overlayControl: number;
  modal: number;
  modalBg: number;
  toast: number;
  toastControls: number;
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
