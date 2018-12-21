import * as React from "react";
import styled from "../lib/styled-components";

interface Props {
  name?: string;
}

const StyledButton = styled.button<Props>({
  color: "white",
  backgroundColor: "green",
});

const Button: React.SFC<Props> = props => <StyledButton {...props} />;

export default Button;
