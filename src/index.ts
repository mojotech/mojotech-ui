/**
 * @mojotech/mojo-ui — framework-agnostic recipes.
 *
 * Every export is a `tailwind-variants` recipe returning className strings, plus the
 * merge helpers and design tokens. Pair with the theme:
 *   @import "@mojotech/mojo-ui/theme.css";
 * Subpath imports are also available, e.g. `@mojotech/mojo-ui/button`.
 */

export { type AutoGridVariants, autoGrid } from './recipes/auto-grid';
// Interactive & content
export { type ButtonVariants, button } from './recipes/button';
// Layout
export { type FlexVariants, flex } from './recipes/flex';
export { type GridVariants, grid } from './recipes/grid';
export { type GridSystemVariants, gridSystem } from './recipes/grid-system';
export { type ImageVariants, image } from './recipes/image';
export { type ListItemVariants, listItem } from './recipes/list-item';
// Scheme
export { type SchemeName, type SchemeVariants, scheme } from './recipes/scheme';
export { type SectionVariants, section } from './recipes/section';
// Typography
export { type TextVariants, text } from './recipes/text';
export { type TextInputVariants, textInput } from './recipes/text-input';
export { type TextLinkVariants, textLink } from './recipes/text-link';
export { type WrapVariants, wrap } from './recipes/wrap';
// Design tokens (also available granularly from "@mojotech/mojo-ui/tokens").
export { tokens, zStack } from './tokens';
// Authoring helpers: the brand-configured `tv` (for consumer recipes) + class mergers.
export { cn, cx, tv, type VariantProps } from './tv';
