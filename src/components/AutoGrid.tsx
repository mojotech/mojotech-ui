import * as React from "react";
import styled from "../lib/styled";
import Grid, { GridProps } from "./Grid";

const AutoGrid: React.FC<GridProps> = styled(Grid)`
  /* Explicitly set grid properties since defaultProps don't work reliably in React 19 */
  display: grid;
  grid-gap: ${({ theme }) => theme?.spaces?.[2] || "16px"} ${({ theme }) => theme?.spaces?.[3] || "24px"};
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: min-content;
  grid-auto-flow: row;

  @media (min-width: ${({ theme }) => theme?.breakpoints?.[1] || "768px"}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme?.spaces?.[3] || "24px"} ${({ theme }) => theme?.spaces?.[4] || "48px"};
  }
`;

// Fallback default props for React 19 compatibility
const defaultProps: Partial<GridProps> = {
  gridGap: [24, 48],
  gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
  gridAutoRows: "min-content",
  gridAutoFlow: "row",
};

// Apply default props manually since React 19 deprecated defaultProps for function components
const AutoGridWithDefaults: React.FC<GridProps> = (props) => {
  return <AutoGrid {...defaultProps} {...props} />;
};

AutoGridWithDefaults.displayName = "AutoGrid";

export default AutoGridWithDefaults;
