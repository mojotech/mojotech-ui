import * as React from "react";
import { storiesOf } from "@storybook/react";
import Box from "../src/components/Box";
import ListItem from "../src/components/ListItem";

storiesOf("List Item", module).add("Link", () => (
  <Box as="ul">
    <ListItem>This is a list item</ListItem>
    <ListItem>This is a list item</ListItem>
    <ListItem>This is a list item</ListItem>
    <ListItem>This is a list item</ListItem>
  </Box>
));
