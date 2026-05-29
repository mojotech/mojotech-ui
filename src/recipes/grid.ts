import { tv, type VariantProps } from '../tv';

/** CSS Grid container. Replaces the v3 `Grid` (Box + gridParentSet, default grid). */
export const grid = tv({
  base: 'grid',
  variants: {
    flow: {
      row: 'grid-flow-row',
      col: 'grid-flow-col',
      dense: 'grid-flow-dense',
    },
    gap: {
      '0': 'gap-fluid-0',
      '1': 'gap-fluid-1',
      '2': 'gap-fluid-2',
      '3': 'gap-fluid-3',
      '4': 'gap-fluid-4',
      '5': 'gap-fluid-5',
      '6': 'gap-fluid-6',
    },
  },
});

export type GridVariants = VariantProps<typeof grid>;
