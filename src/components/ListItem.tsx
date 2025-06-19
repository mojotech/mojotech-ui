import * as React from "react";
import styled from "../lib/styled";
import theme from "../lib/theme";
import Text, { TextProps } from "./Text";

const { colors, spaces } = theme;

const ListItem: React.FC<TextProps> = styled(Text)({
  listStylePosition: "outside",
  position: "relative",
  paddingLeft: spaces[3],
  "&:before": {
    content: "'·'",
    position: "absolute",
    top: 0,
    left: 0,
    color: colors.mediumGray,
  },
});

// Fallback default props for React 19 compatibility
const defaultProps: Partial<TextProps> = {
  as: "li",
  color: "inherit",
  fontSize: 1,
  fontFamily: "main",
  textDecoration: "none",
};

// Apply default props manually since React 19 deprecated defaultProps for function components
const ListItemWithDefaults: React.FC<TextProps> = (props) => {
  return <ListItem {...defaultProps} {...props} />;
};

ListItemWithDefaults.displayName = "ListItem";

export default ListItemWithDefaults;
