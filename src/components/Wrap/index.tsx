import * as React from "react";
import styled from "lib/styled";
import Box, { BoxProps } from "components/Box";

const Wrap: React.FC<BoxProps> = styled(Box)();

Wrap.defaultProps = {
  height: "100%",
  marginX: "auto",
  maxWidth: [0, 2, 1],
  paddingX: 3,
  width: "100%",
};

Wrap.displayName = "Wrap";

export default Wrap;
