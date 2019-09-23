import * as React from "react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";

const Wrap: React.FC<BoxProps> = styled(Box)();

Wrap.defaultProps = {
  marginX: "auto",
  maxWidth: [0, 2, 1],
  paddingX: 3,
  width: "100%",
};

Wrap.displayName = "Wrap";

export default Wrap;
