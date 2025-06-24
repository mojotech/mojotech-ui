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
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.HTMLAttributes<HTMLElement>;

export interface Props extends TextProps {}

const getLineHeights = (size: any, theme: Theme) => {
  if (!theme?.lineHeights) {
    return 1.4; // fallback line height
  }

  const getValue = (fs: any) => {
    switch (fs) {
      case 5:
        return theme.lineHeights[3] || 1.1;
      case 4:
        return theme.lineHeights[2] || 1.2;
      case 3:
        return theme.lineHeights[1] || 1.3;
      case 0:
        return theme.lineHeights[1] || 1.3;
      default:
        return theme.lineHeights[0] || 1.4;
    }
  };

  if (isArray(size)) {
    return [getValue(size[0]), getValue(size[1])];
  }

  return getValue(size);
};

const getMarginBottom = (size: any, theme: Theme) => {
  if (!theme?.spaces) {
    return "0px"; // fallback margin
  }

  if (isArray(size)) {
    return [theme.spaces[size[0]] || "0px", theme.spaces[size[1]] || "0px"];
  }

  return theme.spaces[size] || "0px";
};

const getTracking = (size: any, theme: Theme) => {
  if (!theme?.letterSpacing) {
    return "0em"; // fallback letter spacing
  }

  const getValue = (fs: any) => {
    switch (fs) {
      case 5:
        return theme.letterSpacing[1] || "-0.025em";
      case 4:
        return theme.letterSpacing[2] || "-0.015em";
      default:
        return theme.letterSpacing[0] || "0em";
    }
  };

  return getValue(size);
};

const Text: React.FC<Props> = styled(polymorph<Props>("p"))<Props>(
  (props) => {
    if (!props.theme) {
      return {}; // return empty styles if theme is undefined
    }

    return mq({
      lineHeight: getLineHeights(props.fontSize, props.theme),
      marginBottom: getMarginBottom(props.fontSize, props.theme),
      letterSpacing: getTracking(props.fontSize, props.theme),
    });
  },
  layoutSet,
  opacity,
  spaceSet,
  transition,
  transformSet,
  textSet,
  cursorSet,
);

// Fallback default props for React 19 compatibility
const defaultProps: Partial<Props> = {
  color: "inherit",
  fontSize: 1,
  fontFamily: "main",
  textDecoration: "none",
};

// Apply default props manually since React 19 deprecated defaultProps for function components
const TextWithDefaults: React.FC<Props> = (props) => {
  return <Text {...defaultProps} {...props} />;
};

TextWithDefaults.displayName = "Text";

export default TextWithDefaults;
