import {
  backgroundSet,
  BackgroundSetProps,
  borderSet,
  BorderSetProps,
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

import styled from "lib/styled";
import { polymorph, PolymorphProps } from "lib/polymorph";

export type BoxProps = BackgroundSetProps &
  BorderSetProps &
  SpaceSetProps &
  DisplaySetProps &
  FlexChildSetProps &
  GridChildSetProps &
  LayoutSetProps &
  TransformSetProps &
  PolymorphProps;

const Box = styled(polymorph<BoxProps>("div"))<BoxProps>(
  backgroundSet,
  borderSet,
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

export default Box;
