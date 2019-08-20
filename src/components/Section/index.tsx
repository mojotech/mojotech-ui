import * as React from "react";
import styled from "lib/styled";
import Box, { BoxProps } from "components/Box";

const Section: React.FC<BoxProps> = styled(Box)<BoxProps>();

Section.defaultProps = {
  ...Box.defaultProps,
  as: "section",
  marginBottom: 5,
};

export default Section;
