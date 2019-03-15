import { configure, addDecorator, addParameters } from "@storybook/react";
import themeDecorator from "./theme-decorator";
import { create } from "@storybook/theming";

const theme = create({
  base: "dark",
  appBg: "#1f2629",
  appContentBg: "#171c1f",
  appBorderRadius: 4,
  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontCode: "monospace",
  textColor: "white",
  barTextColor: "white",
  barBg: "#1f2629",
  brandTitle: "Mojotech UI",
  brandUrl: "https://mojotech.com",
  brandImage: "https://i.imgur.com/pRB0BOb.png"
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  options: {
    theme
  }
});

addDecorator(themeDecorator);
configure(loadStories, module);
