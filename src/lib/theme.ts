import { ZStack } from "../types/global";

const theme = {
  colors: {
    mojogreen: "#00ba40",
    meangreen: "#1E4D32",
    white: "#ffffff",
    dark: "#14111D",
    gray: "#F0F0F0",
    mediumGray: "#ACACAC",
    darkGray: "#5B5B5B",
    yellow: "#E2A210",
  },
  schemes: {
    dark: { backgroundColor: "#14111D", color: "#ffffff" },
    light: { backgroundColor: "#ffffff", color: "#14111D" },
    gray: { backgroundColor: "#F0F0F0", color: "#14111D" },
  },
  spaces: [
    "0px",
    "calc(4px + (8 - 4) * ((100vw - 400px) / (1800 - 400)))",
    "calc(8px + (16 - 8) * ((100vw - 400px) / (1800 - 400)))",
    "calc(18px + (24 - 18) * ((100vw - 400px) / (1800 - 400)))",
    "calc(44px + (88 - 44) * ((100vw - 400px) / (1800 - 400)))",
    "calc(88px + (176 - 88) * ((100vw - 400px) / (1800 - 400)))",
    "calc(176px + (352 - 176) * ((100vw - 400px) / (1800 - 400)))",
  ],
  fontFamilies: {
    main: `'GT America Light', system-ui, sans-serif`,
    display: `'altis-mojoregular', system-ui, sans-serif`,
    mono: `'GT America Mono', monospace`,
  },
  fontSizes: [
    "calc(16px + (18 - 16) * ((100vw - 400px) / (1800 - 400)))", //0-BodySmall
    "calc(16px + (24 - 16) * ((100vw - 400px) / (1800 - 400)))", //1-Body
    "calc(20px + (24 - 20) * ((100vw - 400px) / (1800 - 400)))", //2-H3
    "calc(24px + (32 - 24) * ((100vw - 400px) / (1800 - 400)))", //3-H2
    "calc(28px + (48 - 28) * ((100vw - 400px) / (1800 - 400)))", //4-H1
    "calc(29px + (50 - 29) * ((100vw - 400px) / (1800 - 400)))", //5-Display
  ],
  lineHeights: [1.8, 1.7, 1.5, 1.3],
  opacities: [0.5, 1],
  maxWidths: ["100%", "800px", "1400px"],
  widths: ["100%", "55vw", "66.666vw", "90vw", "100vw"],
  breakpoints: [0, 800, 1600],
  easings: {
    easeOut: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easeInOut: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  },
  zIndices: [
    -1, // 0-Sink
    100, // 1-SourceOrder + 1
    200, // 2-SourceOrder + 2
    400, // 3-SourceOrder + 3
    800, // 4-Overlay
    900, // 5-OverlayControls
    1000, // 6-Modal
    2000, // 7-ModalControls
    4000, // 8-Alert/Toast
    8000, // 9-AlertControls
  ],
};

export default theme;

export const zStack: ZStack = {
  sink: theme.zIndices[0],
  overlay: theme.zIndices[4],
  overlayControl: theme.zIndices[5],
  modal: theme.zIndices[6],
  modalBg: theme.zIndices[7],
  toast: theme.zIndices[8],
  toastControls: theme.zIndices[9],
};
