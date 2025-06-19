import * as React from "react";
import Box from "../src/components/Box";
import ListItem from "../src/components/ListItem";

const meta = {
  title: "List Item",
  component: ListItem,
};

export default meta;

export const BulletedItem = {
  render: () => (
    <Box as="ul">
      <ListItem>This is a list item</ListItem>
      <ListItem>This is a list item</ListItem>
      <ListItem>This is a list item</ListItem>
      <ListItem>This is a list item</ListItem>
    </Box>
  ),
};
