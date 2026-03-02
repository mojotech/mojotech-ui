import type * as React from "react";
import styled from "../lib/styled";
import Box, { BoxProps } from "./Box";
import { objectFitSet, ObjectFitSetProps } from "../lib/renderers";

export type ImageProps = BoxProps &
  ObjectFitSetProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const Image = styled(Box as any)<ImageProps>(objectFitSet);

export default Image;
