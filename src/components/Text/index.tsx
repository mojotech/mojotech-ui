import * as React from "react";
import styled from "lib/styled";
import {
  textSet,
  TextSetProps,
  spaceSet,
  SpaceSetProps,
  opacity,
  OpacityProps,
  layoutSet,
  LayoutSetProps,
  transformSet,
  TransformSetProps,
  transition,
  TransitionProps,
  get,
} from "onno-react";
import { Theme } from "types/global";
import { polymorph, PolymorphProps } from "lib/polymorph";

type TextProps = TextSetProps &
  SpaceSetProps &
  OpacityProps &
  LayoutSetProps &
  TransformSetProps &
  TransitionProps &
  PolymorphProps;

interface Props extends TextProps {}

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

const Text: React.FC<Props> = styled(polymorph<Props>("p"))<Props>(
  props => ({
    marginBottom: get(["spaces", props.fontSize], props.theme),
    lineHeight: getLineHeights(props.fontSize, props.theme),
  }),
  layoutSet,
  opacity,
  spaceSet,
  transition,
  transformSet,
  textSet,
);

Text.defaultProps = {
  fontSize: 0,
  fontFamily: "main",
};

export default Text;
