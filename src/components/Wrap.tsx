import * as React from "react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";

const Wrap: React.FC<BoxProps> = styled(Box)();

Wrap.defaultProps = {
  gridColumn: ["1/-1", "3 / span 8"],
};

Wrap.displayName = "Wrap";

export default Wrap;
