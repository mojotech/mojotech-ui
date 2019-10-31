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
    "0px",
    "calc(4px + (8 - 4) * ((100vw - 400px) / (1800 - 600)))",
    "calc(8px + (16 - 8) * ((100vw - 400px) / (1800 - 600)))",
    "calc(18px + (24 - 18) * ((100vw - 400px) / (1800 - 600)))",
    "calc(44px + (88 - 44) * ((100vw - 400px) / (1800 - 600)))",
    "calc(88px + (176 - 88) * ((100vw - 400px) / (1800 - 600)))",
    "calc(176px + (352 - 176) * ((100vw - 400px) / (1800 - 600)))",
  ],
  fontFamilies: {
    main: `'GT America Light', system-ui, sans-serif`,
    display: `'altis-mojoregular', system-ui, sans-serif`,
  },
  fontSizes: [
    "calc(16px + (18 - 16) * ((100vw - 400px) / (1800 - 600)))", //0-BodySmall
    "calc(16px + (24 - 16) * ((100vw - 400px) / (1800 - 600)))", //1-Body
    "calc(20px + (24 - 20) * ((100vw - 400px) / (1800 - 600)))", //2-H3
    "calc(24px + (32 - 24) * ((100vw - 400px) / (1800 - 600)))", //3-H2
    "calc(28px + (48 - 28) * ((100vw - 400px) / (1800 - 600)))", //4-H1
    "calc(29px + (50 - 29) * ((100vw - 400px) / (1800 - 600)))", //5-Display
  ],
  lineHeights: [1.8, 1.7, 1.3],
  opacities: [0.5, 1],
  maxWidths: ["100%", "55vw", "66.666vw", "90vw", "100vw"],
  breakpoints: [0, 600, 1600],
};
