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

ListItem.defaultProps = {
  as: "li",
  ...Text.defaultProps,
};

ListItem.displayName = "ListItem";

export default ListItem;
