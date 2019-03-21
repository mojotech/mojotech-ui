/**
 * Exporting our own styled function wrapper allows us to have type save theme props
 */
import styled, { CreateStyled } from "@emotion/styled";
import { Theme } from "../src/types";

export default styled as CreateStyled<Theme>;
