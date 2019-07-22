import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../src/components/Text";

storiesOf("Text", module).add("All Type", () => (
  <React.Fragment>
    <Text marginBottom={3} display fontSize={5} as="h1">
      We’re builders.
    </Text>
    <Text fontSize={4} as="h2">
      The principles that guide us.
    </Text>
    <Text fontSize={3} as="h3">
      Our engineers work alongside focused product strategists and exceptional
      experience designers to transform complex business problems into elegant,
      scalable solutions.
    </Text>
    <Text fontSize={2} as="h3">
      Agility
    </Text>
    <Text fontSize={1} as="p">
      We’ve successfully built complex systems a hundred times over. We are able
      to identify issues quickly and adjust in real-time to ensure we are
      tracking well against expectations and constantly delivering value.
    </Text>
    <Text fontSize={0} as="p">
      We’ve successfully built complex systems a hundred times over. We are able
      to identify issues quickly and adjust in real-time to ensure we are
      tracking well against expectations and constantly delivering value.
    </Text>
  </React.Fragment>
));
