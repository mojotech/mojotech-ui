import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextLink from "../src/components/TextLink";

storiesOf("Text Link", module).add("Link", () => (
  <div>
    <TextLink fontSize={1}>Need an NDA?</TextLink>
  </div>
));
