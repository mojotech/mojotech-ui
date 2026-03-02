import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
