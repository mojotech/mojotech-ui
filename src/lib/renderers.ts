import { style } from "onno-react";

type CursorProperty =
  | "auto"
  | "default"
  | "none"
  | "context-menu"
  | "help"
  | "pointer"
  | "progress"
  | "wait"
  | "cell"
  | "crosshair"
  | "text"
  | "vertical-text"
  | "alias"
  | "copy"
  | "move"
  | "no-drop"
  | "not-allowed"
  | "e-resize"
  | "n-resize"
  | "ne-resize"
  | "nw-resize"
  | "s-resize"
  | "se-resize"
  | "sw-resize"
  | "w-resize"
  | "ew-resize"
  | "ns-resize"
  | "nesw-resize"
  | "nwse-resize"
  | "col-resize"
  | "row-resize"
  | "all-scroll"
  | "zoom-in"
  | "zoom-out"
  | "grab"
  | "grabbing";

export type CursorSetProps = {
  cursor?: CursorProperty;
};

export const cursorSet = style({
  propsKeys: ["cursor"],
  styleKeys: ["cursor"],
});

export type ObjectFitProperty =
  | "fill"
  | "contain"
  | "cover"
  | "none"
  | "scale-down";

export type ObjectFitSetProps = {
  objectFit?: ObjectFitProperty;
};

export const objectFitSet = style({
  propsKeys: ["objectFit"],
  styleKeys: ["objectFit"],
});
