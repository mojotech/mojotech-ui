import * as React from "react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";

export type ImageProps = BoxProps & React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = styled(Box)<ImageProps>();

Image.defaultProps = {
  as: "img",
};

Image.displayName = "Image";

export default Image;
