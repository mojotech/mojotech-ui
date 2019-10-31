import * as React from "react";
import styled from "../lib/styled";
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
import { Theme } from "../types/global";
import { polymorph, PolymorphProps } from "../lib/polymorph";
import { cursorSet, CursorSetProps } from "../lib/renderers";

export type TextProps = TextSetProps &
  SpaceSetProps &
  OpacityProps &
  LayoutSetProps &
  TransformSetProps &
  TransitionProps &
  PolymorphProps &
  CursorSetProps &
  JSX.IntrinsicClassAttributes<{}> &
  React.HTMLAttributes<HTMLElement>;

interface Props extends TextProps {}

const getLineHeights = (size: any, theme: Theme) => {
  switch (size) {
    case 5:
      return theme.lineHeights[2];
    case 4:
      return theme.lineHeights[1];
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
  cursorSet,
);

Text.defaultProps = {
  color: "inherit",
  fontSize: 0,
  fontFamily: "main",
  textDecoration: "none",
};

Text.displayName = "Text";

export default Text;
