import { tv, type VariantProps } from '../tv';

/**
 * Centered content column inside a `gridSystem`: full width on mobile, columns
 * 3–10 (start 3, span 8) at `mojo-md`. Mirrors the v3 Wrap `gridColumn` defaults.
 */
export const wrap = tv({
  base: 'col-span-full mojo-md:col-start-3 mojo-md:col-span-8',
});

export type WrapVariants = VariantProps<typeof wrap>;
