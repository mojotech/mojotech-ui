import * as React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "../src/components/Grid";
import Box from "../src/components/Box";

storiesOf("Grid", module).add("Two Column Grid", () => (
  <Grid gridGap={3} gridTemplateColumns="1fr 1fr">
    <Box border="1px solid red">Box</Box>
    <Box border="1px solid red">Box</Box>
    <Box border="1px solid red">Box</Box>
    <Box border="1px solid red">Box</Box>
    <Box border="1px solid red">Box</Box>
  </Grid>
));
