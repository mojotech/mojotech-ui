import * as React from "react";
import { omit } from "onno-react";

export interface PolymorphProps {
  as?: React.ElementType;
}

const omitPolymorphProps = omit({ propsKeys: ["as"] });

export function polymorph<P extends unknown>(
  defaultEl: React.ElementType,
): React.FunctionComponent<PolymorphProps & P> {
  return props => {
    const Element = props.as || defaultEl;
    return <Element {...omitPolymorphProps(props)} />;
  };
}
