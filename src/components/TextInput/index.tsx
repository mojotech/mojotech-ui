import * as React from "react";
import styled from "lib/styled";
import { spaceSet, SpaceSetProps, fontSize, FontSizeProps } from "onno-react";
import Text from "components/Text";
import Box from "components/Box";

type TextInputProps = SpaceSetProps &
  FontSizeProps &
  React.HTMLProps<HTMLInputElement>;

interface Props extends TextInputProps {
  label?: string;
  name?: string;
  required?: boolean;
  type?: string;
}

const StyledTextInput: React.FC<Props> = styled.input<Props>(
  spaceSet,
  fontSize,
  props => ({
    border: "none",
    borderBottom: `1px solid ${props.theme.colors.dark}30`,
    width: "100%",
  }),
);

export const TextInput: React.FC<Props> = props => {
  const [focus, setFocus] = React.useState<boolean>(false);

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocus(e.target.value.length > 0);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <Box
      display="block"
      as="label"
      marginBottom={3}
      position="relative"
      height="100%"
      width="100%"
    >
      <Text
        bottom={0}
        position="absolute"
        transformOrigin="left"
        transform={focus ? "translateY(-150%)" : "translateY(0px)"}
        transition="transform .3s ease"
        opacity={0}
        as="span"
        fontSize={1}
      >
        {props.label}
      </Text>
      <StyledTextInput
        name={props.name}
        paddingBottom={1}
        type={props.type}
        onBlur={handleBlur}
        fontSize={props.fontSize}
        onFocus={handleFocus}
        required={props.required}
        aria-label={props.label}
      />
    </Box>
  );
};

TextInput.defaultProps = {
  paddingY: 1,
  fontSize: 2,
  label: "label",
  type: "text",
};

export default TextInput;
