import * as React from "react";
import Grid from "../src/components/Grid";
import Box from "../src/components/Box";

const meta = {
  title: "Grid",
  component: Grid,
};

export default meta;

export const TwoColumnGrid = {
  render: () => (
    <Grid gridGap={3} gridTemplateColumns="1fr 1fr">
      <Box border="1px solid red">Box</Box>
      <Box border="1px solid red">Box</Box>
      <Box border="1px solid red">Box</Box>
      <Box border="1px solid red">Box</Box>
      <Box border="1px solid red">Box</Box>
    </Grid>
  ),
};
