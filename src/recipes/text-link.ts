import { tv, type VariantProps } from '../tv';
import { text } from './text';

/**
 * Anchor styling. Extends `text`.
 *
 * - `underline` true: an animated underline that wipes in from the left on
 *   hover/focus, using a `currentColor` gradient sized 0% → 100% (the v3
 *   box-shadow + gradient effect, simplified to follow text color so it works
 *   across schemes without per-scheme colors).
 * - `underline` false (default): a plain link that dims slightly on hover.
 *   (The v3 default of `opacity: 0` — invisible until hover — was a bug and is
 *   intentionally not reproduced.)
 */
export const textLink = tv({
  extend: text,
  base: 'relative cursor-pointer',
  variants: {
    underline: {
      true: 'bg-no-repeat bg-linear-to-r from-current to-current [background-size:0%_1px] [background-position:0%_100%] transition-[background-size] duration-300 ease-mojo-in-out hover:[background-size:100%_1px] focus:[background-size:100%_1px]',
      false:
        'opacity-100 transition-opacity duration-300 ease-mojo-in-out hover:opacity-60 focus:opacity-60',
    },
  },
  defaultVariants: { underline: false },
});

export type TextLinkVariants = VariantProps<typeof textLink>;
