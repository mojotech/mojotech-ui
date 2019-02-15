import * as React from "react";
import styled from "../../lib/styled";
import t from "../../lib/theme";

interface Props {
  text?: string;
}

const StyledButton = styled.button({
  color: "#fff",
  background: `${t.colors.mojogreen}`,
});

const Button: React.SFC<Props> = ({ text, children }) => (
  <StyledButton>{text || children}</StyledButton>
);

export default Button;
