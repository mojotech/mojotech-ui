import * as React from "react";
import styled from "lib/styled";
import {
  fontSize,
  FontSizeProps,
  spaceSet,
  SpaceSetProps,
  get,
  propTypes,
} from "onno-react";
import { TextTags, FontSizes } from "types/global";

type TextProps = FontSizeProps & SpaceSetProps;

interface Props extends TextProps {
  as?: TextTags;
  display?: boolean;
  dim?: boolean;
  fontSize?: FontSizes;
}

const Text: React.FC<Props> = styled.p<Props>(
  props => ({
    fontFamily: props.display
      ? props.theme.fontFamilies.display
      : props.theme.fontFamilies.main,
    marginBottom: get(["spaces", props.fontSize], props.theme),
    lineHeight:
      props.fontSize === 4
        ? props.theme.lineHeights[2]
        : props.fontSize === 0
        ? props.theme.lineHeights[0]
        : props.theme.lineHeights[1],
    opacity: props.dim ? 0.5 : 1,
  }),
  fontSize,
  spaceSet,
);

Text.propTypes = propTypes([fontSize, spaceSet]);

Text.defaultProps = {
  dim: false,
  fontSize: 0,
};

export default Text;
