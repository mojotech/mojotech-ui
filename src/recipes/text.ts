import { tv, type VariantProps } from '../tv';

/**
 * Typography primitive. Replaces the v3 polymorphic `Text`.
 *
 * `size` 0–5 maps to the fluid type scale; each token already carries its
 * line-height + letter-spacing (paired in theme.css), so the recipe only adds the
 * per-size bottom margin (`marginBottom = spaces[fontSize]` in v3 → `mb-fluid-{size}`).
 * Use `flush` to drop the bottom margin.
 */
export const text = tv({
  base: 'text-inherit no-underline',
  variants: {
    size: {
      '0': 'text-body-sm mb-fluid-0',
      '1': 'text-body mb-fluid-1',
      '2': 'text-h3 mb-fluid-2',
      '3': 'text-h2 mb-fluid-3',
      '4': 'text-h1 mb-fluid-4',
      '5': 'text-display mb-fluid-5',
    },
    family: {
      main: 'font-main',
      regular: 'font-regular',
      display: 'font-display',
      mono: 'font-mono',
    },
    flush: { true: 'mb-fluid-0' },
  },
  defaultVariants: { size: '1', family: 'main' },
});

export type TextVariants = VariantProps<typeof text>;
