import { tv, type VariantProps } from '../tv';

/**
 * Color-scheme context. Replaces the v3 `SchemeProvider` React context.
 *
 * Applies the semantic `bg`/`fg` tokens, which follow the nearest `[data-scheme]`
 * ancestor (set by theme.css). Usage:
 *   `<section data-scheme="dark" className={scheme()}> … </section>`
 * Descendants pick up the scheme automatically via the `bg-bg` / `text-fg` tokens,
 * and via the `scheme-dark:` / `scheme-light:` / `scheme-gray:` variants.
 */
export const scheme = tv({
  base: 'bg-bg text-fg',
});

export type SchemeVariants = VariantProps<typeof scheme>;

/** Valid `data-scheme` values. */
export type SchemeName = 'dark' | 'light' | 'gray';
