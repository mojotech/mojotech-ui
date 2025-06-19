import * as React from "react";
import styled from "../lib/styled";
import { BoxProps } from "./Box";
import { objectFitSet, ObjectFitSetProps } from "../lib/renderers";
import { polymorph } from "../lib/polymorph";

export type ImageProps = BoxProps &
  ObjectFitSetProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const Image = styled(polymorph<ImageProps>("img"))<ImageProps>(objectFitSet);

Image.defaultProps = {
  as: "img",
};

Image.displayName = "Image";

export default Image;
