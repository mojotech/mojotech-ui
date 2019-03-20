import * as React from "react";

import { storiesOf } from "@storybook/react";

import Button from "../src/Button";
import Text from "../src/Text";
storiesOf("Button", module).add("with text", () => (
  <Button>Hello Button</Button>
));

storiesOf("Text", module).add("with text", () => (
  <Text size={2} as="h1">
    Hello Button
  </Text>
));
