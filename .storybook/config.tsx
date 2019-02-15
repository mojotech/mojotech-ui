import { configure, addDecorator } from "@storybook/react";
import themeDecorator from "./theme-decorator";

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(themeDecorator);
configure(loadStories, module);
