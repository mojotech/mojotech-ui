export default {
  colors: {
    mojogreen: "#00ba40",
    white: "#ffffff",
    dark: "#14111D",
    gray: "#F0F0F0",
    scheme: {
      dark: { bg: "#14111D", fg: "#ffffff" },
      light: { bg: "#ffffff", fg: "#14111D" },
      gray: { bg: "#F0F0F0", fg: "#14111D" },
    },
  },
  spacing: [
    "calc(4px + (8 - 4) * ((100vw - 400px) / (1800 - 600)))",
    "calc(8px + (16 - 8) * ((100vw - 400px) / (1800 - 600)))",
    "calc(16px + (32 - 16) * ((100vw - 400px) / (1800 - 600)))",
    "calc(44px + (88 - 44) * ((100vw - 400px) / (1800 - 600)))",
    "calc(88px + (176 - 88) * ((100vw - 400px) / (1800 - 600)))",
    "calc(176px + (352 - 176) * ((100vw - 400px) / (1800 - 600)))",
  ],
  fonts: {
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
  maxWidths: ["66.666vw", "100vw"],
};