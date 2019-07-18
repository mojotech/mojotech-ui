import * as React from "react";
import { storiesOf } from "@storybook/react";
import Flex from "../src/components/Flex";
import Text from "../src/components/Text";

storiesOf("Flex", module).add("Row", () => (
  <Flex justifyContent="space-around" width={500}>
    <Flex
      height={200}
      alignItems="center"
      justifyContent="center"
      width={225}
      border="1px solid red"
    >
      <Text>Box</Text>
    </Flex>
    <Flex
      height={200}
      alignItems="center"
      justifyContent="center"
      width={225}
      border="1px solid red"
    >
      <Text>Box</Text>
    </Flex>
  </Flex>
));
