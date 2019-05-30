import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../src/components/Text";
import TextLink from "../src/components/TextLink";

storiesOf("TextLink", module).add("Link", () => (
  <React.Fragment>
    <Text size={5}>
      This is some text <TextLink>this is an inline link</TextLink> this is some
      more text
    </Text>
    <TextLink href="/" size={6}>
      This is another link
    </TextLink>
  </React.Fragment>
));
