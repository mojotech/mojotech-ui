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
  isArray,
} from "onno-react";
import { Theme } from "../types/global";
import { polymorph, PolymorphProps } from "../lib/polymorph";
import { cursorSet, CursorSetProps } from "../lib/renderers";
import { mq } from "../lib/utils";

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
  const getValue = (fs: any) => {
    switch (fs) {
      case 5:
        return theme.lineHeights[3];
      case 4:
        return theme.lineHeights[2];
      case 3:
        return theme.lineHeights[2];
      case 0:
        return theme.lineHeights[0];
      default:
        return theme.lineHeights[1];
    }
  };

  if (isArray(size)) {
    return [getValue(size[0]), getValue(size[1])];
  }

  return getValue(size);
};

const getMarginBottom = (size: any, theme: Theme) => {
  if (isArray(size)) {
    return [theme.spaces[size[0]], theme.spaces[size[1]]];
  }

  return theme.spaces[size];
};

const Text: React.FC<Props> = styled(polymorph<Props>("p"))<Props>(
  props =>
    mq({
      lineHeight: getLineHeights(props.fontSize, props.theme),
      marginBottom: getMarginBottom(props.fontSize, props.theme),
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
