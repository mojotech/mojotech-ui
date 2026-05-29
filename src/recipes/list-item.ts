import { tv, type VariantProps } from '../tv';
import { text } from './text';

/**
 * List item with a middot bullet. Extends `text` (inherits size/family/flush) and
 * adds the bullet via a `::before` pseudo-element. Mirrors the v3 `ListItem`
 * (`paddingLeft: spaces[3]`, middot in `mediumGray`). The bullet uses the CSS
 * unicode escape for U+00B7 to stay ASCII-safe in the class scanner.
 */
export const listItem = tv({
  extend: text,
  base: "relative list-outside pl-fluid-3 before:absolute before:top-0 before:left-0 before:text-medium-gray before:content-['\\00B7']",
});

export type ListItemVariants = VariantProps<typeof listItem>;
