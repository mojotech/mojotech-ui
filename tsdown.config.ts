import { defineConfig } from 'tsdown';

/**
 * Framework-agnostic ESM-only library build.
 * - one entry per public module; recipes flatten to dist/recipes/* (see package.json exports wildcard)
 * - `platform: 'neutral'` — no Node/browser assumptions; recipes are pure string functions
 * - shared internals (tv.ts) are emitted as a split chunk, imported relatively (not via exports)
 * - theme.css is copied verbatim to dist (it is authored CSS, not bundled)
 */
export default defineConfig({
  entry: ['src/index.ts', 'src/tokens.ts', 'src/recipes/*.ts'],
  format: 'esm',
  platform: 'neutral',
  target: 'es2023',
  dts: true,
  treeshake: true,
  clean: true,
  copy: ['src/theme.css'],
});
