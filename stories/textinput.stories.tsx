import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "../src/components/TextInput";

storiesOf("TextInput", module).add("Text Input", () => {
  return (
    <div>
      <TextInput label="What's your name?" />
      <TextInput label="What's your email address?" />
      <TextInput label="What problem are you trying to solve?" />
    </div>
  );
});
