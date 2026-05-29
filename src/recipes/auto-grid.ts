import { tv, type VariantProps } from '../tv';

/**
 * Card grid: 1 column on mobile, 2 columns at `mojo-md` (800px), auto rows.
 * Gap is FIXED 24px → 48px (the v3 AutoGrid used literal pixel `[24, 48]`).
 */
export const autoGrid = tv({
  base: 'grid grid-cols-1 mojo-md:grid-cols-2 gap-6 mojo-md:gap-12 auto-rows-min grid-flow-row',
});

export type AutoGridVariants = VariantProps<typeof autoGrid>;
