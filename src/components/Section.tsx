import * as React from "react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";

const Section: React.FC<BoxProps> = styled(Box)<BoxProps>();

Section.defaultProps = {
  ...Box.defaultProps,
  as: "section",
  marginBottom: 5,
};

Section.displayName = "Section";

export default Section;
