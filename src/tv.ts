import { createTV, type TVConfig } from 'tailwind-variants';

/** Class-part validator: matches the fluid spacing scale, e.g. `fluid-3` in `mb-fluid-3`. */
const isFluidStep = (part: string): boolean => /^fluid-[0-6]$/.test(part);

/** tailwind-merge group ids (v3) that should also recognize the `*-fluid-*` members. */
const SPACING_GROUPS = [
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
  'm',
  'mx',
  'my',
  'mt',
  'mr',
  'mb',
  'ml',
  'gap',
  'gap-x',
  'gap-y',
] as const;

const twMergeConfig: TVConfig['twMergeConfig'] = {
  extend: {
    classGroups: {
      // named fluid type scale conflicts with stock font sizes and with itself
      'font-size': [{ text: ['body-sm', 'body', 'h3', 'h2', 'h1', 'display'] }],
      'max-w': [{ 'max-w': ['mojo-md', 'mojo-lg'] }],
      w: [{ w: ['mojo-55', 'mojo-66', 'mojo-90'] }],
      z: [
        {
          z: ['sink', 'overlay', 'overlay-control', 'modal', 'modal-bg', 'toast', 'toast-controls'],
        },
      ],
      // fluid spacing: every padding/margin/gap family gains a fluid-* member
      ...Object.fromEntries(SPACING_GROUPS.map((group) => [group, [{ [group]: [isFluidStep] }]])),
    },
  },
};

/**
 * The brand-configured tailwind-variants instance every recipe imports.
 *
 * It teaches tailwind-merge about mojo-ui's custom scales (fluid type, fluid spacing,
 * brand max-widths/widths, z-stack) so recipe defaults and consumer `className`
 * overrides resolve predictably — the last value of a conflicting group wins.
 */
export const tv = createTV({ twMergeConfig });

export { cn, cx, type VariantProps } from 'tailwind-variants';
