/**
 * JS mirror of the design tokens defined in `theme.css`.
 *
 * `theme.css` is the source of truth for styling; this module exposes the same
 * values to consumers who need them in JavaScript (e.g. the z-stack for a portal,
 * or a breakpoint for a `matchMedia` query). Keep the two in sync — the token
 * snapshot test pins these against the expected brand values.
 */

export const colors = {
  mojogreen: '#00ba40',
  meangreen: '#1e4d32',
  darkgreen: '#193c2a',
  aaMojogreen: '#00882f',
  yellow: '#e2a210',
  dark: '#14111d',
  gray: '#f0f0f0',
  mediumGray: '#acacac',
  darkGray: '#5b5b5b',
  white: '#ffffff',
} as const;

export const schemes = {
  dark: { bg: '#14111d', fg: '#ffffff' },
  light: { bg: '#ffffff', fg: '#14111d' },
  gray: { bg: '#f0f0f0', fg: '#14111d' },
} as const;

export const fontFamilies = {
  main: "'GT America Light', system-ui, sans-serif",
  regular: "'GT America Regular', system-ui, sans-serif",
  display: "'altis-mojoregular', system-ui, sans-serif",
  mono: "'GT America Mono', ui-monospace, monospace",
} as const;

/** Fluid `clamp()` type scale, indexed BodySmall(0) → Display(5). */
export const fontSizes = {
  bodySm: 'clamp(0.84rem, 0.91rem - 0.07vw, 0.89rem)',
  body: 'clamp(1rem, 0.95rem + 0.2vw, 1.13rem)',
  h3: 'clamp(1.13rem, 0.98rem + 0.6vw, 1.5rem)',
  h2: 'clamp(1.27rem, 0.97rem + 1.17vw, 2rem)',
  h1: 'clamp(1.42rem, 0.93rem + 1.99vw, 2.66rem)',
  display: 'clamp(1.6rem, 0.82rem + 3.12vw, 3.55rem)',
} as const;

/** Fluid spacing scale (calc/vw), indexed 0 → 6. */
export const spaceFluid = [
  '0px',
  'calc(4px + (8 - 4) * ((100vw - 400px) / 1400))',
  'calc(8px + (16 - 8) * ((100vw - 400px) / 1400))',
  'calc(18px + (24 - 18) * ((100vw - 400px) / 1400))',
  'calc(44px + (88 - 44) * ((100vw - 400px) / 1400))',
  'calc(88px + (176 - 88) * ((100vw - 400px) / 1400))',
  'calc(176px + (352 - 176) * ((100vw - 400px) / 1400))',
] as const;

/** Min-widths (px) for the brand breakpoints exposed as `mojo-md:` / `mojo-lg:`. */
export const breakpoints = {
  mojoMd: 800,
  mojoLg: 1600,
} as const;

export const easings = {
  out: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  inOut: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
} as const;

/** Named z-index layers (the old `zStack`). Mirrors the `z-*` utilities in theme.css. */
export const zStack = {
  sink: -1,
  overlay: 800,
  overlayControl: 900,
  modal: 1000,
  modalBg: 2000,
  toast: 4000,
  toastControls: 8000,
} as const;

/** All tokens under one namespace, for ergonomic access. */
export const tokens = {
  colors,
  schemes,
  fontFamilies,
  fontSizes,
  spaceFluid,
  breakpoints,
  easings,
  zStack,
} as const;
