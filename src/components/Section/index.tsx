/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import { Theme } from "types/global";

type MarginBottom = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  as?: string;
  marginBottom?: MarginBottom;
}

const Section: React.FC<Props> = ({
  as: S = "section",
  marginBottom = 6,
  ...props
}) => (
  <S
    css={({ ...theme }: Theme) => ({
      marginBottom: marginBottom && theme.spacing[marginBottom - 1],
    })}
    {...props}
  />
);

export default Section;
