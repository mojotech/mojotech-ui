export default {
  colors: {
    mojogreen: "#00ba40",
    meangreen: "#1E4D32",
    white: "#ffffff",
    dark: "#14111D",
    gray: "#F0F0F0",
    yellow: "#E2A210",
  },
  schemes: {
    dark: { backgroundColor: "#14111D", color: "#ffffff" },
    light: { backgroundColor: "#ffffff", color: "#14111D" },
    gray: { backgroundColor: "#F0F0F0", color: "#14111D" },
  },
  spaces: [
    "calc(4px + (8 - 4) * ((100vw - 400px) / (1800 - 600)))",
    "calc(8px + (16 - 8) * ((100vw - 400px) / (1800 - 600)))",
    "calc(16px + (32 - 16) * ((100vw - 400px) / (1800 - 600)))",
    "calc(44px + (88 - 44) * ((100vw - 400px) / (1800 - 600)))",
    "calc(88px + (176 - 88) * ((100vw - 400px) / (1800 - 600)))",
    "calc(176px + (352 - 176) * ((100vw - 400px) / (1800 - 600)))",
  ],
  fontFamilies: {
    main: `'GT America Light', system-ui, sans-serif`,
    display: `'altis-mojoregular', system-ui, sans-serif`,
  },
  fontSizes: [
    "calc(16px + (18 - 16) * ((100vw - 400px) / (1800 - 600)))",
    "calc(18px + (24 - 18) * ((100vw - 400px) / (1800 - 600)))",
    "calc(18px + (32 - 18) * ((100vw - 400px) / (1800 - 600)))",
    "calc(18px + (42 - 18) * ((100vw - 400px) / (1800 - 600)))",
    "calc(24px + (56 - 24) * ((100vw - 400px) / (1800 - 600)))",
    "calc(32px + (75 - 32) * ((100vw - 400px) / (1800 - 600)))",
  ],
  lineHeights: [2, 1.5, 1.2],
  opacities: [0.5, 1],
  maxWidths: ["100%", "55vw", "66.666vw", "90vw", "100vw"],
  breakpoints: [0, 600, 1600],
};
