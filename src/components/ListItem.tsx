import styled from "../lib/styled";
import theme from "../lib/theme";
import Text, { TextProps } from "./Text";

const { colors, spaces } = theme;

const ListItem = styled(Text as any)<TextProps>({
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

export default ListItem;
