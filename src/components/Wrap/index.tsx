/** @jsx jsx */
import * as React from "react";
import { mq } from "lib/utils";
import { jsx } from "@emotion/core";
import { Theme } from "types/global";

type MaxWidths = 1 | 2;

interface Props {
  as?: string;
  size?: MaxWidths;
}

const Wrap: React.FC<Props> = ({ as: El = "div", size = 1, ...props }) => {
  return (
    <El
      css={({ ...theme }: Theme) =>
        mq({
          paddingLeft: theme.spacing[3],
          paddingRight: theme.spacing[3],
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: [
            "100%",
            size && theme.maxWidths[size - 1][0],
            size && theme.maxWidths[size - 1][1],
          ],
          width: "100%",
        })
      }
      {...props}
    />
  );
};

export default Wrap;
