import facepaint from "facepaint";
import t from "./theme";

export const mq = facepaint([
  `@media(min-width: ${t.breakpoints[1]}px)`,
  `@media(min-width: ${t.breakpoints[2]}px)`,
]);

export const rgbaify = (hex: string, alpha: number = 1) => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x: string) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
