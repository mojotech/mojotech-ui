import { tv, type VariantProps } from '../tv';

/**
 * Semantic page section spacing. Defaults to a fluid bottom margin of step 5
 * (the v3 Section `marginBottom: 5`). The element itself is the consumer's choice
 * (`<section className={section()}>`).
 */
export const section = tv({
  variants: {
    spacing: {
      '0': 'mb-fluid-0',
      '1': 'mb-fluid-1',
      '2': 'mb-fluid-2',
      '3': 'mb-fluid-3',
      '4': 'mb-fluid-4',
      '5': 'mb-fluid-5',
      '6': 'mb-fluid-6',
    },
  },
  defaultVariants: { spacing: '5' },
});

export type SectionVariants = VariantProps<typeof section>;
