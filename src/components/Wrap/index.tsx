/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { mq } from "../../../lib/utils";
import { Theme } from "../../types/global";

type MaxWidths = 1 | 2;

interface Props {
  as?: string;
  size?: MaxWidths;
}

const Wrap: React.FC<Props> = ({ as: W = "div", size = 1, ...props }) => {
  return (
    <W
      css={({ ...theme }: Theme) =>
        mq({
          paddingLeft: theme.spacing[3],
          paddingRight: theme.spacing[3],
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: [theme.maxWidths[0], size && theme.maxWidths[size - 1]],
          width: "100%",
        })
      }
      {...props}
    />
  );
};

export default Wrap;
