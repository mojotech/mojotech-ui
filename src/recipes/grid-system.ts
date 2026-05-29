import { tv, type VariantProps } from '../tv';

/**
 * The page grid: 4 columns on mobile, 12 columns at `mojo-md` (800px).
 * Gutters and horizontal padding are FIXED 24px → 48px (the v3 GridSystem used
 * literal pixel `[24, 48]`, not the fluid scale — preserved here as gap-6/gap-12).
 */
export const gridSystem = tv({
  base: 'grid w-full grid-cols-4 mojo-md:grid-cols-12 gap-y-0 gap-x-6 mojo-md:gap-x-12 px-6 mojo-md:px-12',
  variants: {
    centered: { true: 'mx-auto' },
    maxWidth: {
      full: 'max-w-full',
      md: 'max-w-mojo-md',
      lg: 'max-w-mojo-lg',
    },
  },
  defaultVariants: { centered: true, maxWidth: 'lg' },
});

export type GridSystemVariants = VariantProps<typeof gridSystem>;
