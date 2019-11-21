import * as React from "react";
import styled from "../lib/styled";
import Text, { TextProps } from "./Text";

const ListItem: React.FC<TextProps> = styled(Text)({
  "&:before": {
    content: "''",
    background: `currentColor`,
    left: 0,
    position: "absolute",
    borderRadius: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    height: 10,
    width: 10,
    display: "inline",
  },
});

ListItem.defaultProps = {
  as: "li",
  position: "relative",
  paddingLeft: 3,
  ...Text.defaultProps,
};

ListItem.displayName = "ListItem";

export default ListItem;
