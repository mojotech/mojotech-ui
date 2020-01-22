import * as React from "react";
import styled from "../lib/styled";
import theme from "../lib/theme";
import Text, { TextProps } from "./Text";

const { colors } = theme;

const ListItem: React.FC<TextProps> = styled(Text)({
  "&:before": {
    content: "'·   '",
    color: colors.mediumGray,
  },
});

ListItem.defaultProps = {
  as: "li",
  ...Text.defaultProps,
};

ListItem.displayName = "ListItem";

export default ListItem;
