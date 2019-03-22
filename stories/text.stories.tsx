import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../src/components/Text";

storiesOf("Text", module).add("All Type", () => (
  <React.Fragment>
    <Text size={5} as="h1">
      We’re builders.
    </Text>
    <Text size={4} as="h2">
      The principles that guide us.
    </Text>
    <Text size={3} as="h3">
      Our engineers work alongside focused product strategists and exceptional
      experience designers to transform complex business problems into elegant,
      scalable solutions.
    </Text>
    <Text size={2} as="h3">
      Agility
    </Text>
    <Text size={1} as="p">
      We’ve successfully built complex systems a hundred times over. We are able
      to identify issues quickly and adjust in real-time to ensure we are
      tracking well against expectations and constantly delivering value.
    </Text>
  </React.Fragment>
));
