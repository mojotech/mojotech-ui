import facepaint from "facepaint";
import t from "./theme";

export const mq = facepaint([
  `@media(min-width: ${t.breakpoints[1]}px)`,
  `@media(min-width: ${t.breakpoints[2]}px)`,
]);
