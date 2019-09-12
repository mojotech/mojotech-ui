import * as React from "react";
import {
  omit,
  spaceSet,
  backgroundSet,
  borderSet,
  colorSet,
  displaySet,
  flexSet,
  gridSet,
  layoutSet,
  outlineSet,
  textSet,
  transformSet,
} from "onno-react";
import { cursorSet } from "./renderers";

export interface PolymorphProps {
  as?: React.ElementType;
}

const omitProps = omit({
  propsKeys: [
    "as",
    ...backgroundSet.options.propsKeys,
    ...borderSet.options.propsKeys,
    ...colorSet.options.propsKeys,
    ...cursorSet.options.propsKeys,
    ...displaySet.options.propsKeys,
    ...flexSet.options.propsKeys,
    ...gridSet.options.propsKeys,
    ...layoutSet.options.propsKeys,
    ...outlineSet.options.propsKeys,
    ...spaceSet.options.propsKeys,
    ...textSet.options.propsKeys,
    ...transformSet.options.propsKeys,
  ],
});

export function polymorph<P extends unknown>(
  defaultEl: React.ElementType,
): React.FunctionComponent<PolymorphProps & P> {
  return props => {
    const Element = props.as || defaultEl;
    return <Element {...omitProps(props)} />;
  };
}
