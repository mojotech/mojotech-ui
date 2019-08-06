import * as React from "react";
import styled from "lib/styled";
import {
  textSet,
  TextSetProps,
  spaceSet,
  SpaceSetProps,
  opacity,
  OpacityProps,
  get,
} from "onno-react";
import { Theme, TextTags } from "types/global";

type TextProps = TextSetProps & SpaceSetProps & OpacityProps;

interface Props extends TextProps {
  as?: TextTags;
}

const getLineHeights = (size: any, theme: Theme) => {
  switch (size) {
    case 4:
      return theme.lineHeights[2];
    case 0:
      return theme.lineHeights[0];
    default:
      return theme.lineHeights[1];
  }
};

const Text: React.FC<Props> = styled("p")(
  (props: any) => ({
    marginBottom: get(["spaces", props.fontSize], props.theme),
    lineHeight: getLineHeights(props.fontSize, props.theme),
  }),
  opacity,
  spaceSet,
  textSet,
);

Text.defaultProps = {
  fontSize: 0,
  fontFamily: "main",
};

export default Text;
