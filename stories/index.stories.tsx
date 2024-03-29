import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";

storiesOf("Button", module).add("with text", () => (
  <>
    <Button>Ship it</Button>
    <Button scheme="light">Ship it</Button>
  </>
));
