import type { Preview } from "@storybook/react";
import themeDecorator from "./theme-decorator";

const preview: Preview = {
  decorators: [themeDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
