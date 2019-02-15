/**
 * Exporting our own styled function wrapper allows us to have type save theme props
 */
import styled, { CreateStyled } from "@emotion/styled";

type Theme = {
  color: {
    mojogreen: string;
  },
};

export default styled as CreateStyled<Theme>
