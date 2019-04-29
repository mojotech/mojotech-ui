/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Theme } from "../../types/global";
import Text from "../Text";

interface Props {
  text?: string;
}

const Button: React.SFC<Props> = ({ text, children }) => (
  <button
    css={({ ...theme }: Theme) => ({
      border: "none",
      cursor: "pointer",
      mixBlendMode: "normal",
      paddingBottom: theme.spacing[2],
      paddingLeft: theme.spacing[4],
      paddingRight: theme.spacing[4],
      paddingTop: theme.spacing[2],
      position: "relative",
      zIndex: 1,
      "&:before": {
        backgroundColor: theme.colors.white,
        content: "''",
        height: "100%",
        left: 0,
        mixBlendMode: "difference",
        transform: "translateX(-100%)",
        position: "absolute",
        top: 0,
        transition: "transform .3s ease",
        width: "100%",
        willChange: "transform",
        zIndex: 3,
      },
      "&:after": {
        backgroundColor: theme.colors.dark,
        content: "''",
        height: "100%",
        left: 0,
        mixBlendMode: "screen",
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 100,
      },
      "&:hover": {
        "&:before": {
          transform: "translateX(0)",
        },
      },
    })}
  >
    <Text leading={0} size={1}>
      {text || children}
    </Text>
  </button>
);

export default Button;
