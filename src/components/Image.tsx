import * as React from "react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";
import { objectFitSet, ObjectFitSetProps } from "../lib/renderers";

export type ImageProps = BoxProps &
  ObjectFitSetProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = styled(Box)<ImageProps>(objectFitSet);

Image.defaultProps = {
  as: "img",
};

Image.displayName = "Image";

export default Image;
