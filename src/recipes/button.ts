import { tv, type VariantProps } from '../tv';

/**
 * Button. Replaces the v3 `Button`.
 *
 * Two slots: `root` (the element) and `shine` (a `::`-free sliding overlay the
 * consumer renders as an `aria-hidden` child and which animates on `group-hover`).
 * `scheme` controls contrast; `size` maps to the old paddingX/Y + fontSize defaults.
 * Fixes the v3 bug where the `::after` blend layer used an invalid `background-color: dark`.
 */
export const button = tv({
  slots: {
    root:
      'group relative z-[1] block cursor-pointer overflow-hidden border-0 ' +
      'transition-[filter] duration-500 ease-mojo-out hover:brightness-110 focus-visible:brightness-110 ' +
      "after:absolute after:inset-0 after:z-[100] after:content-[''] after:bg-dark after:mix-blend-screen",
    shine:
      'pointer-events-none absolute inset-0 z-[3] w-full bg-white mix-blend-difference will-change-transform ' +
      '-translate-x-full transition-transform duration-300 ease-mojo-out ' +
      'group-hover:translate-x-0 group-focus-visible:translate-x-0',
  },
  variants: {
    scheme: {
      dark: { root: 'bg-white text-dark' },
      light: { root: 'bg-dark text-white' },
    },
    size: {
      sm: { root: 'px-fluid-4 py-fluid-2 text-h3' },
      md: { root: 'px-fluid-5 py-fluid-3 text-h3' },
      lg: { root: 'px-fluid-6 py-fluid-4 text-h2' },
    },
    disabled: { true: { root: 'opacity-60 pointer-events-none' } },
  },
  defaultVariants: { scheme: 'dark', size: 'md' },
});

export type ButtonVariants = VariantProps<typeof button>;
