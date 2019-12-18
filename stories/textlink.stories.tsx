import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextLink from "../src/components/TextLink";
import SchemeProvider from "../src/components/SchemeProvider";

storiesOf("Text Link", module).add("Link", () => (
  <div>
    <TextLink fontSize={1}>Need an NDA?</TextLink>
    <br />
    <TextLink fontSize={5} underline>
      Need an
      <br /> NDA?
    </TextLink>
    <SchemeProvider scheme="dark">
      <TextLink scheme="dark" fontSize={5} underline>
        Need an
        <br /> NDA?
      </TextLink>
    </SchemeProvider>
  </div>
));
