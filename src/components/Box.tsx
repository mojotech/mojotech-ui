import * as React from "react";
import {
  backgroundSet,
  BackgroundSetProps,
  borderSet,
  BorderSetProps,
  colorSet,
  ColorSetProps,
  displaySet,
  DisplaySetProps,
  flexChildSet,
  FlexChildSetProps,
  gridChildSet,
  GridChildSetProps,
  layoutSet,
  LayoutSetProps,
  spaceSet,
  SpaceSetProps,
  textSet,
  TextSetProps,
  transformSet,
  TransformSetProps,
  propTypes,
} from "onno-react";

import styled from "../lib/styled";
import { cursorSet, CursorSetProps } from "../lib/renderers";
import { polymorph, PolymorphProps } from "../lib/polymorph";

export type BoxProps = BackgroundSetProps &
  BorderSetProps &
  ColorSetProps &
  SpaceSetProps &
  DisplaySetProps &
  FlexChildSetProps &
  GridChildSetProps &
  LayoutSetProps &
  TransformSetProps &
  PolymorphProps &
  TextSetProps &
  CursorSetProps &
  JSX.IntrinsicClassAttributes<{}> &
  React.HTMLAttributes<HTMLElement>;

const Box = styled(polymorph<BoxProps>("div"))<BoxProps>(
  backgroundSet,
  borderSet,
  colorSet,
  cursorSet,
  displaySet,
  flexChildSet,
  gridChildSet,
  layoutSet,
  spaceSet,
  textSet,
  transformSet,
);

Box.propTypes = propTypes([
  backgroundSet,
  borderSet,
  cursorSet,
  displaySet,
  flexChildSet,
  gridChildSet,
  layoutSet,
  spaceSet,
  textSet,
  transformSet,
]);

Box.displayName = "Box";

export default Box;
