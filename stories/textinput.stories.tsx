import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "../src/components/TextInput";
import Box from "../src/components/Box";

storiesOf("TextInput", module).add("Text Input", () => {
  return (
    <Box paddingTop={200}>
      <TextInput label="What's your name?" />
      <TextInput label="What's your email address?" />
      <TextInput label="What problem are you trying to solve?" />
    </Box>
  );
});
