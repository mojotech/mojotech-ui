import { tv, type VariantProps } from '../tv';

/** Flex container. Replaces the v3 `Flex` (Box + flexParentSet, default row/wrap). */
export const flex = tv({
  base: 'flex',
  variants: {
    direction: {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse',
    },
    wrap: {
      wrap: 'flex-wrap',
      nowrap: 'flex-nowrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
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
  defaultVariants: { direction: 'row', wrap: 'wrap' },
});

export type FlexVariants = VariantProps<typeof flex>;
