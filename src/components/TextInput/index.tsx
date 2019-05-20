/** @jsx jsx */
import * as React from "react";
import { jsx } from "@emotion/core";
import Text from "../Text";

type FontSizes = 1 | 2 | 3 | 4 | 5;

interface Props {
  label?: string;
}

const TextInput: React.FC<Props> = ({ label = "Label", ...props }) => {
  const [focused, setFocus] = React.useState<boolean>(false);
  const [filled, setFilled] = React.useState<boolean>(false);
  const [labelSize, setLabelSize] = React.useState<FontSizes>(5);

  return (
    <div
      css={{
        position: "relative",
        marginBottom:
          "calc(24px + (56 - 24) * ((100vw - 400px) / (1800 - 600)))",
        paddingTop: "calc(24px + (56 - 24) * ((100vw - 400px) / (1800 - 600)))",
      }}
    >
      <label
        css={{
          display: "block",
          opacity: 0.5,
          pointerEvents: "none",
          position: "absolute",
          transformOrigin: "left",
          transform:
            focused || filled
              ? "translateX(0px) translateY(-2.8em) scale(.9)"
              : "translateY(0px) scale(1)",
          transition: ".3s ease",
        }}
      >
        <Text size={labelSize}>{label}</Text>
      </label>
      <input
        onBlur={e => {
          setFocus(false);
          setLabelSize(2);
          e.target.value.length > 0 ? setFilled(true) : setFilled(false);
          e.target.value.length > 0 ? setLabelSize(2) : setLabelSize(5);
        }}
        onFocus={e => {
          setFocus(true);
          setLabelSize(2);
        }}
        css={{
          background: "none",
          border: "none",
          borderBottom: "1px solid rgba(20, 17, 29, .25)",
          fontSize: "calc(24px + (56 - 24) * ((100vw - 400px) / (1800 - 600)))",
          paddingBottom: ".5em",
          width: "100%",
          "&:focus": {
            outline: "none",
          },
        }}
        type="text"
      />
    </div>
  );
};

export default TextInput;
