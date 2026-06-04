import * as React from "react";
import { storiesOf } from "@storybook/react";
import Text from "../src/components/Text";

storiesOf("Text", module).add("All Type", () => (
  <React.Fragment>
    <Text fontFamily="semibold" marginBottom={3} fontSize={5} as="h1">
      Title 120px
    </Text>
    <Text fontFamily="semibold" fontSize={4} as="h1">
      H1 96px
    </Text>
    <Text fontFamily="semibold" fontSize={3} as="h2">
      H2 72px
    </Text>
    <Text fontFamily="semibold" fontSize={2} as="h3">
      H3 56px
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
