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
  transformSet,
  TransformSetProps,
  propTypes,
} from "onno-react";

import styled from "../lib/styled";
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
  JSX.IntrinsicClassAttributes<{}> &
  React.HTMLAttributes<HTMLElement>;

const Box = styled(polymorph<BoxProps>("div"))<BoxProps>(
  backgroundSet,
  borderSet,
  colorSet,
  displaySet,
  flexChildSet,
  gridChildSet,
  layoutSet,
  spaceSet,
  transformSet,
);

Box.propTypes = propTypes([
  backgroundSet,
  borderSet,
  displaySet,
  flexChildSet,
  gridChildSet,
  layoutSet,
  spaceSet,
  transformSet,
]);

Box.displayName = "Box";

export default Box;
