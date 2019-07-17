import * as React from "react";
import styled from "lib/styled";
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

export type BoxProps = BackgroundSetProps &
  BorderSetProps &
  SpaceSetProps &
  DisplaySetProps &
  FlexChildSetProps &
  GridChildSetProps &
  LayoutSetProps &
  TransformSetProps;

const Box: React.FC<BoxProps> = styled.div<BoxProps>(
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
