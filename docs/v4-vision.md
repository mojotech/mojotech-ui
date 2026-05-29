# `@mojotech/mojo-ui` v4 — Vision & Spec

**A breaking rewrite from React + Emotion + onno-react into a framework-agnostic Tailwind v4 + `tailwind-variants` library.**

Status: proposal for senior-team sign-off. Authored 2026-05-29. Grounded in the live `tailwind-variants` v1 and Tailwind v4 docs and an adversarial review pass (technical correctness + pragmatic soundness).

---

## 0. Decisions locked

These four calls shape everything below and are treated as settled:

| Decision | Choice | Consequence |
|---|---|---|
| **Framework reach** | **Truly agnostic, no default** | Ship **no** first-party framework adapter — only `theme.css` + `tv()` recipes + docs. All behavior/a11y is the consumer's, documented and delegated. |
| **Breakpoints** | **Namespaced `mojo-md:` / `mojo-lg:`** | Keep Tailwind's stock 5 breakpoints untouched; **add** two brand stops. Non-invasive: a consumer's existing `md:`/`lg:` keep their stock meaning. |
| **Migration** | **Clean break, no adapter** | No drop-in target. Migration is a **guide + style-prop→utility cheat sheet** (+ an optional import/flagging codemod). Consumers rewrite markup. |
| **Tailwind support** | **v4 only** | CSS-first `@theme`. No v3 preset, no dual `tailwind-merge` major. Browser floor follows v4: Safari 16.4+, Chrome 111+, Firefox 128+. |

**Net effect:** the purest possible shape — one package, no React anywhere, no version bridges. Maximum portability; behavior, a11y, and per-framework component authoring move entirely to the consumer (with docs guidance).

---

## 1. The vision (one paragraph)

`@mojotech/mojo-ui` v4 stops being a React component library and becomes a **framework-agnostic styling system**: a Tailwind v4 CSS theme encoding the MojoTech brand tokens (fluid type, fluid spacing, brand colors, two extra breakpoints, schemes, z-stack) plus a set of [`tailwind-variants`](https://www.tailwind-variants.org) (`tv()`) **recipes** — pure functions that take variant props and return plain `className` strings. Because `tv()` returns strings and never touches a framework, the *same* recipe is consumed identically by a React, Vue, or Svelte component the **consumer** writes and owns. This delivers true framework-agnosticism (no React in the package), build-time-only styling (zero CSS-in-JS runtime, RSC/SSR-safe), and a small maintainable surface (one recipe file per component, mirroring the proven `@heroui/theme` model) — while honestly accepting that behavior, state, polymorphism, and accessibility, which a string-returning library cannot ship, become the consumer's responsibility, smoothed only by documentation and recommended patterns.

---

## 2. Mental model & architecture

### 2.1 Recipes are the product

The library ships **two kinds of artifact and nothing else**:

1. **`theme.css`** — the old `src/lib/theme.ts` re-expressed as Tailwind v4 `@theme` / `@utility` / `@custom-variant`. Single source of truth for tokens; generates both runtime CSS vars (`var(--color-dark)`) and utilities (`bg-dark`).
2. **`tv()` recipe modules** — one per component (`button.ts`, `text.ts`, …). Each exports a named class-builder plus its `VariantProps` type. **Zero framework code, zero DOM, zero state.**

The library decides *what classes a Button gets for a given scheme/size*; the consumer decides *what element it is, what events it listens to, what state drives the variants, and how it's made accessible.*

```
        ┌──────────────────────────────────────────────┐
        │  @mojotech/mojo-ui  (the ENTIRE product)      │
        │  ┌──────────────┐   ┌────────────────────┐    │
        │  │  theme.css   │   │  tv() recipes      │    │
        │  │  @theme /    │   │  button.ts text.ts │    │
        │  │  @utility    │   │  grid-system.ts …  │    │
        │  └──────────────┘   └────────────────────┘    │
        │         + tokens.ts (JS mirror) + docs/        │
        └───────────────────────┬──────────────────────┘
                                 │ returns plain strings
        ┌────────────────────────┼────────────────────────┐
        │                        │                         │
 ┌──────▼──────┐         ┌───────▼──────┐          ┌───────▼──────┐
 │ React app   │         │ Vue app      │          │ Svelte app   │
 │ owns element │        │ owns element │          │ owns element │
 │ + state/a11y │        │ + state/a11y │          │ + state/a11y │
 └─────────────┘         └──────────────┘          └──────────────┘
```

### 2.2 The canonical example: define once, consume anywhere

**Define the recipe (framework-free):**

```ts
// src/recipes/button.ts
import { tv, type VariantProps } from '../tv'; // brand-configured createTV instance

export const button = tv({
  base: 'relative block cursor-pointer overflow-hidden border-0 ' +
        'transition-[filter] duration-500 ease-mojo-out hover:brightness-110 focus-visible:brightness-110',
  variants: {
    scheme: { dark: 'bg-white text-dark', light: 'bg-dark text-white' },
    size: {
      sm: 'px-fluid-4 py-fluid-2 text-h3',
      md: 'px-fluid-5 py-fluid-3 text-h3', // == old defaults paddingX:5 paddingY:3 fontSize:2
      lg: 'px-fluid-6 py-fluid-4 text-h2',
    },
    disabled: { true: 'opacity-60 pointer-events-none' },
  },
  defaultVariants: { scheme: 'dark', size: 'md' },
});

export type ButtonVariants = VariantProps<typeof button>;
// button({ scheme: 'light', size: 'md' }) -> "relative block … bg-dark text-white px-fluid-5 py-fluid-3 text-h3"
```

**React (consumer owns element + behavior):**

```tsx
import { button, type ButtonVariants } from '@mojotech/mojo-ui/button';
import { cn } from '@mojotech/mojo-ui';

type Props = ButtonVariants & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ scheme, size, disabled, className, ...rest }: Props) => (
  <button disabled={disabled} className={cn(button({ scheme, size, disabled }), className)} {...rest} />
);
```

**Vue (same import, same call, no React in the graph):**

```vue
<script setup lang="ts">
import { button, type ButtonVariants } from '@mojotech/mojo-ui/button';
defineProps<{ scheme?: ButtonVariants['scheme']; size?: ButtonVariants['size']; disabled?: boolean }>();
</script>
<template>
  <button :class="button({ scheme, size, disabled })" :disabled="disabled"><slot /></button>
</template>
```

Both call `button({ scheme: 'light', size: 'md' })` and get the identical string. **That shared import is the entire payoff.**

---

## 3. Package shape

### 3.1 One package

```
mojo-ui/
├─ src/
│  ├─ theme.css            → @theme tokens + fluid @utility + scheme @custom-variant
│  ├─ index.ts             → barrel (re-exports every recipe + cn/cx)
│  ├─ tv.ts                → createTV() w/ brand twMergeConfig
│  ├─ tokens.ts            → JS mirror of tokens incl. zStack (for JS consumers)
│  └─ recipes/
│     ├─ box?.ts (dropped) text.ts button.ts text-input.ts text-link.ts list-item.ts
│     ├─ flex.ts grid.ts grid-system.ts auto-grid.ts wrap.ts section.ts image.ts
│     └─ scheme.ts
├─ docs/                   → framework-agnostic catalog (see §10)
├─ examples/{react,vue}/   → double as CI purge-regression tests
├─ tsup.config.ts
├─ .changeset/
└─ package.json
```

### 3.2 The `exports` map

ESM-first with CJS fallback, per-subpath `types`, plus the load-bearing CSS entry. No `/react`, no `tailwind-preset` (v4-only, no adapter).

```jsonc
{
  "name": "@mojotech/mojo-ui",
  "version": "4.0.0",
  "type": "module",
  "sideEffects": ["**/*.css"],   // NOT false; see §3.5 for the nuance
  "files": ["dist"],
  "exports": {
    ".":             { "types": "./dist/index.d.ts",       "import": "./dist/index.js",       "require": "./dist/index.cjs" },
    "./button":      { "types": "./dist/button.d.ts",      "import": "./dist/button.js",      "require": "./dist/button.cjs" },
    "./text":        { "types": "./dist/text.d.ts",        "import": "./dist/text.js",        "require": "./dist/text.cjs" },
    "./text-input":  { "types": "./dist/text-input.d.ts",  "import": "./dist/text-input.js",  "require": "./dist/text-input.cjs" },
    "./grid-system": { "types": "./dist/grid-system.d.ts", "import": "./dist/grid-system.js", "require": "./dist/grid-system.cjs" },
    "./scheme":      { "types": "./dist/scheme.d.ts",      "import": "./dist/scheme.js",      "require": "./dist/scheme.cjs" },
    "./tokens":      { "types": "./dist/tokens.d.ts",      "import": "./dist/tokens.js",      "require": "./dist/tokens.cjs" },
    "./theme.css":   "./dist/theme.css",
    "./package.json": "./package.json"
  },
  "peerDependencies": { "tailwindcss": ">=4.0.0" },
  "dependencies": { "tailwind-variants": "^1.0.0" }
}
```

`tailwind-variants` is a real (tiny) runtime dep because recipes call `tv()`; it transitively pins `tailwind-merge` **v3** (matters for the `twMergeConfig` shape, §4.6). The original `tailwind-variants` build (with `tailwind-merge`) is the default so consumer `className` overrides win; the `/lite` build (no conflict resolution) is a documented opt-out.

### 3.3 Theme distribution (v4)

```css
/* consumer app.css */
@import "tailwindcss";
@import "@mojotech/mojo-ui/theme.css";              /* brand tokens + fluid utilities + schemes */
@source "../node_modules/@mojotech/mojo-ui/dist";   /* REQUIRED so recipe classes aren't purged */
```

### 3.4 Build / release tooling

- **Build: `tsup`** (esbuild) — multi-entry (one per recipe subpath), emitting `.js` (ESM) + `.cjs` + `.d.ts`, `treeshake: true`, **`splitting: true`** so the shared `tv.ts` config is a single chunk (not duplicated per entry), `tailwind-variants` marked external. An `onSuccess` step copies `theme.css` into `dist`.
- **Release: Changesets** — this is a major (`4.0.0`); Changesets drives changelog + npm publish in CI.
- **TS 5.x**, `"moduleResolution": "bundler"`, `"verbatimModuleSyntax": true`, declaration emit on.
- **Node: LTS 22.** Current repo pins Node 16 (`.nvmrc lts/carbon`, `.tool-versions 16.15.1`) — EOL; bump as part of the rewrite.

```ts
// tsup.config.ts
import { defineConfig } from 'tsup';
import { cp } from 'node:fs/promises';
export default defineConfig({
  entry: ['src/index.ts', 'src/tokens.ts', 'src/recipes/*.ts'],
  format: ['esm', 'cjs'],
  dts: true, treeshake: true, splitting: true, clean: true,
  external: ['tailwind-variants'],
  outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.js' }),
  async onSuccess() { await cp('src/theme.css', 'dist/theme.css'); },
});
```

### 3.5 The #1 distribution pitfall: content scanning

**Tailwind never scans `node_modules` by default.** Every class our recipes emit is silently purged unless the consumer registers our `dist` via `@source`. Two hard rules:

1. The `@source` line ([§3.3](#33-theme-distribution-v4)) is the **first thing in the README** and is validated by the `examples/` apps in CI (build each, assert a known recipe class resolves to expected CSS — e.g. grep the built CSS for a fluid `clamp()` value, or a Playwright computed-style check that `bg-mojogreen !== transparent`).
2. Because purging is plain-text scanning, **recipes must emit complete static class strings** — never `` `bg-${x}` `` interpolation. A CI lint rule forbids template-literal class construction. (`tv()` satisfies this naturally — every variant value is a literal.)

> **`sideEffects` nuance:** the `["**/*.css"]` array only matters if a consumer *JS-imports* the CSS (so a JS bundler doesn't tree-shake it away). The primary path here is a CSS `@import`, which `sideEffects` does not govern. Keep the array (harmless, matches NextUI), but don't rely on it as the thing that protects `theme.css` in the documented setup.

---

## 4. Theme strategy — rely on default Tailwind, flag every divergence LOUD

Rely on the default Tailwind v4 theme; **explicitly flag where the brand diverges.** ⚠️ marks a *fundamental/mechanical* divergence Tailwind has no equivalent for; everything else is additive (feed new values to existing machinery).

### 4.1 The divergence table

| Token group | Tailwind v4 default | MojoTech value | Action | v4 expression |
|---|---|---|---|---|
| **Font sizes (FLUID)** ⚠️ | `--text-xs..9xl`, fixed, paired line-heights | 6 semantic `clamp()` sizes BodySmall→Display | **ADD** named scale (keep stock) | `--text-h1: clamp(...)` **+ paired** `--text-h1--line-height` / `--text-h1--letter-spacing` |
| **Spacing (FLUID)** ⚠️ | single `--spacing:0.25rem` multiplier; no named scale, no vw | 7-step calc/vw ladder `0 → 176–352px` | **ADD** via `:root` vars + static `@utility` | `--space-fluid-*` + `@utility p-fluid-3 {…}` family |
| **Breakpoints** ⚠️ | sm 40/md 48/lg 64/xl 80/2xl 96 rem | `[0, 800, 1600]` | **ADD namespaced** (keep stock) | `--breakpoint-mojo-md:50rem; --breakpoint-mojo-lg:100rem;` → `mojo-md:`/`mojo-lg:` |
| **z-stack** ⚠️ | `z-0..z-50` + `z-[100]`; no `--z-index-*` namespace | sink -1 … toastControls 8000 | **ADD** as `@utility` | `@utility z-modal { z-index: var(--z-modal); }` |
| Brand colors | OKLCH palette 50–950 + b/w | mojogreen `#00ba40` … darkgreen `#193c2a` | **ADD** (keep stock palette) | `@theme { --color-mojogreen:#00ba40; … }` |
| Schemes (dark/light/gray) | none (only `dark:` via prefers-color-scheme) | bg+fg contexts | **ADD** semantic tokens + variants | `[data-scheme]` runtime vars → `@theme inline`; `@custom-variant scheme-*` |
| Font families | `--font-sans/serif/mono` | GT America (Light/Regular/Mono) + altis-mojoregular | **ADD** named + override sans | `@theme { --font-main:…; --font-display:…; --font-sans: var(--font-main); }` |
| Line heights | per-`--text-*` + `--leading-*` | `[1.4, 1.3, 1.2, 1.1]` | **ADD** named (also baked into type tokens) | `--leading-mojo-1: 1.4; …` |
| Letter spacing | `--tracking-*` | `["0","-0.025em","-0.015em"]` | **ADD** named (also baked into type tokens) | `--tracking-mojo-0: 0em; …` |
| Max widths | `max-w-*` (`--container-*`) | `["100%","800px","1400px"]` | **ADD** via container ns | `--container-mojo-md:800px; --container-mojo-lg:1400px;` |
| Widths | `w-*` (spacing + fractions + screen) | `["100%","55vw","66.6vw","90vw","100vw"]` | **ADD** custom (vw fractions absent) | `@utility w-mojo-55 { width:55vw; }` (100%/100vw = stock `w-full`/`w-screen`) |
| Easings | `--ease-in/out/in-out` | easeOut / easeInOut cubic-beziers | **ADD** namespaced (avoid clobbering stock) | `--ease-mojo-out: …; --ease-mojo-in-out: …;` |
| Opacities `[0.6, 1]` | continuous `opacity-0..100` | — | **none** | use `opacity-60` / `opacity-100` |

### 4.2 Foregrounded: fluid type + fluid spacing (the two with no stock analog)

**Fluid type → named `@theme` tokens, with line-height + tracking baked in.** The 6 sizes are *semantic* (BodySmall…Display), not the `xs..9xl` continuum. We mint named tokens carrying the `clamp()` strings verbatim from `theme.ts`, and — because Tailwind v4 supports **paired modifiers** on a font-size token — we attach each size's line-height and letter-spacing directly to the token. This means a bare `text-h1` is self-sufficient (correct leading + tracking with no recipe), eliminating the "consumer typed the raw utility and got a broken heading" hazard. We deliberately do **not** override stock `--text-base` etc.

**Fluid spacing → `:root` vars + a static `@utility` family.** v4 spacing is a *single* `--spacing: 0.25rem` multiplier — there is no named spacing scale to override and no way to express vw-interpolation through it. So fluid spacing lives in `:root` CSS vars exposed through explicit **static** `@utility` declarations (`px-fluid-5`, `mb-fluid-3`, …). Stock numeric spacing (`p-4`, `gap-2`) stays fully intact for fixed needs (borders, icon gaps, and — importantly — the grid gutters; see §5.3).

> **Flagged, unresolved-until-validated:** a *functional* `@utility name-* { … --value(--space-fluid-*) }` form would avoid enumerating each step, but `--space-fluid-*` is **not** a recognized v4 theme namespace, and the nested `--value()` form against a custom namespace is **not confirmed** by the docs. The spec ships **static utilities** (the only purge-proof, grounded form) and leaves the functional form as a future optimization to validate against a real build. The static list is small because only the (property × step) pairs the recipes actually use need to exist.

### 4.3 The real `theme.css`

```css
/* @mojotech/mojo-ui/theme.css
 * Consumer: @import "tailwindcss"; @import "@mojotech/mojo-ui/theme.css";
 *           @source "../node_modules/@mojotech/mojo-ui/dist";
 * STRATEGY: rely on default Tailwind; every block below is a FLAGGED divergence. */

/* ── 1. BREAKPOINTS — DIVERGENCE ⚠️: ADD namespaced (stock sm/md/lg/xl/2xl kept) ──
 * Recipes use mojo-md:/mojo-lg:; the consumer's own md:/lg: are untouched. */
@theme {
  --breakpoint-mojo-md: 50rem;   /* 800px  (first  old mq stop) */
  --breakpoint-mojo-lg: 100rem;  /* 1600px (second old mq stop) */

  /* ── 2. BRAND COLORS — ADD (stock palette kept) ───────────────────── */
  --color-mojogreen:    #00ba40;
  --color-meangreen:    #1e4d32;
  --color-darkgreen:    #193c2a;
  --color-aa-mojogreen: #00882f;
  --color-yellow:       #e2a210;
  --color-dark:         #14111d;
  --color-gray:         #f0f0f0;
  --color-medium-gray:  #acacac;
  --color-dark-gray:    #5b5b5b;
  --color-white:        #ffffff;

  /* ── 3. FONT FAMILIES — ADD named + make brand the default sans ──────
   * NOTE: 'altis-mojoregular' is an Adobe Fonts/Typekit face — likely NOT
   * redistributable in this package; consumers load their own kit (see §12). */
  --font-main:    'GT America Light',   system-ui, sans-serif;
  --font-regular: 'GT America Regular', system-ui, sans-serif;
  --font-display: 'altis-mojoregular',  system-ui, sans-serif;
  --font-mono:    'GT America Mono',     ui-monospace, monospace;
  --font-sans:    var(--font-main);

  /* ── 4. FONT SIZES (FLUID clamp) — DIVERGENCE #1 ⚠️ ──────────────────
   * Named semantic scale; clamp strings VERBATIM from theme.ts (body-sm fixed:
   * the original `+ -0.07vw` is invalid CSS → `- 0.07vw`, min<max).
   * line-height + letter-spacing PAIRED per size (reproduces old Text getters,
   * and makes a bare `text-*` utility self-sufficient). */
  --text-body-sm: clamp(0.84rem, 0.91rem - 0.07vw, 0.89rem);
  --text-body-sm--line-height: 1.3;  --text-body-sm--letter-spacing: 0em;     /* size 0 */
  --text-body:    clamp(1.00rem, 0.95rem + 0.20vw, 1.13rem);
  --text-body--line-height: 1.4;     --text-body--letter-spacing: 0em;        /* size 1 (default) */
  --text-h3:      clamp(1.13rem, 0.98rem + 0.60vw, 1.50rem);
  --text-h3--line-height: 1.4;       --text-h3--letter-spacing: 0em;          /* size 2 */
  --text-h2:      clamp(1.27rem, 0.97rem + 1.17vw, 2.00rem);
  --text-h2--line-height: 1.3;       --text-h2--letter-spacing: 0em;          /* size 3 */
  --text-h1:      clamp(1.42rem, 0.93rem + 1.99vw, 2.66rem);
  --text-h1--line-height: 1.2;       --text-h1--letter-spacing: -0.015em;     /* size 4 */
  --text-display: clamp(1.60rem, 0.82rem + 3.12vw, 3.55rem);
  --text-display--line-height: 1.1;  --text-display--letter-spacing: -0.025em;/* size 5 */

  /* ── 5/6. LINE HEIGHTS + LETTER SPACING — ADD named (general-purpose) ── */
  --leading-mojo-1: 1.4; --leading-mojo-2: 1.3; --leading-mojo-3: 1.2; --leading-mojo-4: 1.1;
  --tracking-mojo-0: 0em; --tracking-mojo-1: -0.025em; --tracking-mojo-2: -0.015em;

  /* ── 7. MAX WIDTHS — ADD (100% = stock max-w-full) ──────────────────── */
  --container-mojo-md: 800px;   /* -> max-w-mojo-md */
  --container-mojo-lg: 1400px;  /* -> max-w-mojo-lg */

  /* ── 8. EASINGS — ADD namespaced (avoid overriding stock ease-out) ──── */
  --ease-mojo-out:    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-mojo-in-out: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

/* ── 9. SPACING (FLUID) — DIVERGENCE #2 ⚠️: :root vars + static @utility ──
 * Values = calc(min + (max-min)*((100vw-400px)/1400)) from theme.ts. */
:root {
  --space-fluid-0: 0px;
  --space-fluid-1: calc(4px   + (8   - 4)   * ((100vw - 400px) / 1400));
  --space-fluid-2: calc(8px   + (16  - 8)   * ((100vw - 400px) / 1400));
  --space-fluid-3: calc(18px  + (24  - 18)  * ((100vw - 400px) / 1400));
  --space-fluid-4: calc(44px  + (88  - 44)  * ((100vw - 400px) / 1400));
  --space-fluid-5: calc(88px  + (176 - 88)  * ((100vw - 400px) / 1400));
  --space-fluid-6: calc(176px + (352 - 176) * ((100vw - 400px) / 1400));

  /* z-stack values (no native --z-index-* namespace) */
  --z-sink: -1;
  --z-overlay: 800;   --z-overlay-control: 900;
  --z-modal: 1000;    --z-modal-bg: 2000;
  --z-toast: 4000;    --z-toast-controls: 8000;
}

/* Fluid spacing utilities — STATIC, purge-proof. One per (property × step) the
 * recipes actually use (see §5). Add a line when a new pairing is needed. */
@utility px-fluid-4 { padding-inline: var(--space-fluid-4); }
@utility px-fluid-5 { padding-inline: var(--space-fluid-5); }
@utility px-fluid-6 { padding-inline: var(--space-fluid-6); }
@utility py-fluid-1 { padding-block: var(--space-fluid-1); }
@utility py-fluid-2 { padding-block: var(--space-fluid-2); }
@utility py-fluid-3 { padding-block: var(--space-fluid-3); }
@utility py-fluid-4 { padding-block: var(--space-fluid-4); }
@utility pl-fluid-3 { padding-left:  var(--space-fluid-3); }
@utility mb-fluid-0 { margin-bottom: var(--space-fluid-0); }
@utility mb-fluid-1 { margin-bottom: var(--space-fluid-1); }
@utility mb-fluid-2 { margin-bottom: var(--space-fluid-2); }
@utility mb-fluid-3 { margin-bottom: var(--space-fluid-3); }
@utility mb-fluid-4 { margin-bottom: var(--space-fluid-4); }
@utility mb-fluid-5 { margin-bottom: var(--space-fluid-5); }

/* z-stack utilities (negative sink needs custom; no native namespace) */
@utility z-sink            { z-index: var(--z-sink); }
@utility z-overlay         { z-index: var(--z-overlay); }
@utility z-overlay-control { z-index: var(--z-overlay-control); }
@utility z-modal           { z-index: var(--z-modal); }
@utility z-modal-bg        { z-index: var(--z-modal-bg); }
@utility z-toast           { z-index: var(--z-toast); }
@utility z-toast-controls  { z-index: var(--z-toast-controls); }

/* Custom widths (vw fractions absent from stock w-*) */
@utility w-mojo-55 { width: 55vw; }
@utility w-mojo-66 { width: 66.666vw; }
@utility w-mojo-90 { width: 90vw; }

/* ── 10. SCHEMES — DIVERGENCE ⚠️: no stock equivalent. Two mechanisms. ──
 * (A) Semantic tokens bg-bg / text-fg follow [data-scheme] subtree.
 *     Distinct runtime var names (--scheme-bg) referenced via @theme inline —
 *     NOT a self-referential --color-bg: var(--color-bg) (that is circular). */
:root,
[data-scheme='light'] { --scheme-bg: #ffffff; --scheme-fg: #14111d; }
[data-scheme='dark']  { --scheme-bg: #14111d; --scheme-fg: #ffffff; }
[data-scheme='gray']  { --scheme-bg: #f0f0f0; --scheme-fg: #14111d; }

@theme inline {
  --color-bg: var(--scheme-bg);
  --color-fg: var(--scheme-fg);
}

/* (B) Optional per-class variants for one-off overrides: scheme-dark:bg-dark etc. */
@custom-variant scheme-light (&:where([data-scheme='light'], [data-scheme='light'] *));
@custom-variant scheme-dark  (&:where([data-scheme='dark'],  [data-scheme='dark']  *));
@custom-variant scheme-gray  (&:where([data-scheme='gray'],  [data-scheme='gray']  *));

/* ── 11. RESET residue — old Reset.tsx rules NOT covered by v4 Preflight ──
 * Preflight already does: box-sizing, margin:0, headings→inherit, list-style:none
 * on ul/ol, img/video max-width:100% + height:auto, form-control font/margin reset.
 * Residue below (validate with a line-by-line Preflight diff at build time). */
@layer base {
  table { border-collapse: collapse; border-spacing: 0; }
  td, th { padding: 0; text-align: left; }
  embed, object, iframe { max-width: 100%; }
  iframe { border: 0; }
  audio { max-width: 100%; }
}
```

### 4.4 Breakpoints — non-invasive by decision

Brand breakpoints `[0, 800, 1600]` are **added** as `mojo-md:` (800) / `mojo-lg:` (1600); stock `sm/md/lg/xl/2xl` are untouched. A consumer dropping mojo-ui into an existing Tailwind app sees **zero** change to their own responsive utilities. Recipes use the `mojo-` prefixes throughout (longer strings, but safe).

> **Binds the recipe layer:** `tailwind-variants` v1 on Tailwind v4 **removed `responsiveVariants` + `withTV`**. All responsiveness is hand-coded `mojo-md:`/`mojo-lg:` prefixes inside recipe strings. There is no `button({ size: { initial, mojoMd } })` object form — that's gone.

### 4.5 The clamp-vs-fixed tradeoff

**Keep the fluid (clamp/vw) system** — it is the brand, it's fully expressible in v4, and one token replaces a whole responsive ladder (doubly valuable since responsive variants are gone). Accepted costs: `tailwind-merge` needs `twMergeConfig` to dedupe custom scales (§4.6); fluid values are opaque in devtools; the `400px→1800px` viewport window is baked into every token (note: type clamps and spacing calcs must use the **same** window — verify during implementation). The fixed-scale alternative buys stock devtools + free line-heights but abandons continuous scaling and explodes every typographic recipe into breakpoint ladders — not worth it for a fluid-identity brand.

### 4.6 The twMerge obligation

`tailwind-merge` doesn't know our custom scales, so `text-body` vs `text-h1`, `px-fluid-5` vs `px-fluid-6`, and `z-modal` vs `z-toast` won't dedupe and consumer overrides won't reliably win. We ship one pre-configured `tv` instance all recipes import:

```ts
// src/tv.ts
import { createTV } from 'tailwind-variants';
export const tv = createTV({
  twMergeConfig: {
    // tailwind-merge v3 shape: classGroups at top level (NOT wrapped in `extend`).
    classGroups: {
      'font-size': [{ text: ['body-sm', 'body', 'h3', 'h2', 'h1', 'display'] }],
      // Custom fluid utilities must merge INTO tailwind-merge's REAL groups so that,
      // e.g., px-fluid-5 conflicts with stock px-12. The exact group KEYS below must
      // be validated against tailwind-merge v3's group names + covered by a test.
      // (Do not assume inventing a `px-fluid` group makes it dedupe vs stock px-*.)
    },
  },
});
export { cn, cx, type VariantProps } from 'tailwind-variants';
```

> **Open implementation task (not hand-waved):** map every custom utility family (`px-fluid-*`, `py-fluid-*`, `mb-fluid-*`, `pl-fluid-*`, `z-*`, `w-mojo-*`) to the correct tailwind-merge v3 conflict group and pin the behavior with override tests in `examples/`. Until validated, assume only the documented `font-size` extension is proven.

---

## 5. Component → recipe migration

**Dispositions across the 18:** 12 become recipes; 3 become CSS/theme mechanisms (SchemeProvider, Reset, ThemeDecorator); 1 dropped for raw utilities (Box); 2 legacy merge/drop (Row, Column).

| # | Old component | New | Notes / what moves to the consumer |
|---|---|---|---|
| 1 | **Box** | **DROP** → raw utilities + `cx`/`cn` | No recipe analog for an open style-prop bag. See [§6](#6-behavior-state--polymorphism). |
| 2 | **Flex** | `flex()` | Thin convenience over flex utilities. |
| 3 | **Grid** | `grid()` | Shared base; `gridSystem`/`autoGrid` `extend` it. |
| 4 | **GridSystem** | `gridSystem()` ✅ | 4-col / `mojo-md:`12-col, **fixed** 24/48 gutters + padding. |
| 5 | **AutoGrid** | `autoGrid()` ✅ | 1-col / `mojo-md:`2-col, **fixed** 24/48 gap. |
| 6 | **Row** (legacy) | **DROP** | Negative-margin gutter; superseded by `flex` + gap. |
| 7 | **Column** (legacy) | **DROP** | Holy-grail `flex-basis` = a single arbitrary class if ever needed. |
| 8 | **Section** | `section()` | `mb-fluid-5`. `<section>` element is the consumer's. |
| 9 | **Wrap** | `wrap()` ✅ | `col-span-full mojo-md:col-start-3 mojo-md:col-span-8`. |
| 10 | **Text** | `text()` ✅ | size 0–5 + family; leading/tracking via paired tokens; `mb-fluid-{size}`. |
| 11 | **ListItem** | `listItem()` via `extend: text` | `relative list-outside pl-fluid-3` + bullet. |
| 12 | **Image** | `image()` | `object-cover`/etc. `<img>` is the consumer's. |
| 13 | **Button** | `button()` ✅ | scheme contrast + shine slot; fixes old `bg:'dark'` bug. |
| 14 | **TextLink** | `textLink()` via `extend: text` | scheme-aware animated underline. |
| 15 | **TextInput** | `textInput()` ✅ | floating label via CSS `peer` — zero JS for the common case. |
| 16 | **SchemeProvider** | **DROP** → `data-scheme` + `@custom-variant` + `scheme()` | React context → data attribute. |
| 17 | **Reset** | **DROP** → Preflight + `@layer base` (§4.3) | residue shipped in theme.css. |
| 18 | **ThemeDecorator** | **DROP** → `@theme` + `@font-face` | `useMojoTheme()` gone; JS reads `tokens.ts`. |

### 5.1 `button()` (with shine slot)

```ts
// src/recipes/button.ts
import { tv, type VariantProps } from '../tv';
export const button = tv({
  slots: {
    root: 'group relative z-[1] block cursor-pointer overflow-hidden border-0 ' +
          'transition-[filter] duration-500 ease-mojo-out hover:brightness-110 focus-visible:brightness-110 ' +
          // fixes the old invalid `background-color: dark` literal:
          'after:absolute after:inset-0 after:z-[100] after:content-[""] after:bg-dark after:mix-blend-screen',
    shine: 'pointer-events-none absolute inset-0 z-[3] w-full bg-white mix-blend-difference will-change-transform ' +
           '-translate-x-full transition-transform duration-300 ease-mojo-out ' +
           'group-hover:translate-x-0 group-focus-visible:translate-x-0',
  },
  variants: {
    scheme: { dark: { root: 'bg-white text-dark' }, light: { root: 'bg-dark text-white' } },
    size:   { sm: { root: 'px-fluid-4 py-fluid-2 text-h3' },
              md: { root: 'px-fluid-5 py-fluid-3 text-h3' },
              lg: { root: 'px-fluid-6 py-fluid-4 text-h2' } },
    disabled: { true: { root: 'opacity-60 pointer-events-none' } },
  },
  defaultVariants: { scheme: 'dark', size: 'md' },
});
export type ButtonVariants = VariantProps<typeof button>;
// const { root, shine } = button({ scheme: 'light', size: 'lg' });
// <button className={root()}><span className={shine()} aria-hidden /><span className="relative z-[2]">{kids}</span></button>
```

### 5.2 `text()` (fluid scale + per-size leading/tracking + bottom margin)

Exact reproduction of the old `getLineHeights`/`getTracking`/`getMarginBottom` (verified against `Text.tsx`): leading/tracking ride on the named tokens (§4.3); the per-size bottom margin (`marginBottom = spaces[fontSize]`) is added by the recipe.

```ts
// src/recipes/text.ts — note STRING variant keys ('0'..'5') for stable runtime + VariantProps
import { tv, type VariantProps } from '../tv';
export const text = tv({
  base: 'text-inherit no-underline',
  variants: {
    size: {
      '0': 'text-body-sm mb-fluid-0', // BodySmall  lh1.3 ls0
      '1': 'text-body    mb-fluid-1', // Body       lh1.4 ls0   (default)
      '2': 'text-h3      mb-fluid-2', // H3         lh1.4 ls0
      '3': 'text-h2      mb-fluid-3', // H2         lh1.3 ls0
      '4': 'text-h1      mb-fluid-4', // H1         lh1.2 ls-0.015em
      '5': 'text-display mb-fluid-5', // Display    lh1.1 ls-0.025em
    },
    family: { main: 'font-main', regular: 'font-regular', display: 'font-display', mono: 'font-mono' },
    flush:  { true: 'mb-fluid-0' }, // opt out of per-size bottom margin
  },
  defaultVariants: { size: '1', family: 'main' },
});
export type TextVariants = VariantProps<typeof text>;

// ListItem extends Text and adds the bullet (ASCII-escaped middot, not a raw non-ASCII glyph).
export const listItem = tv({
  extend: text,
  base: "relative list-outside pl-fluid-3 before:absolute before:left-0 before:top-0 " +
        "before:text-medium-gray before:content-['\\00B7']",
});
export type ListItemVariants = VariantProps<typeof listItem>;
```

### 5.3 `gridSystem()`, `autoGrid()`, `wrap()` (fixed gutters — NOT fluid)

Verified against source: GridSystem uses `gridColumnGap:[24,48]`, `paddingX:[24,48]` (literal px), `maxWidth:2` (=1400px); AutoGrid uses `gridGap:[24,48]`. These are **fixed**, so they map to stock fixed spacing (`gap-6`=24px, `gap-12`=48px) — *not* `*-fluid-*`. Two-element `[mobile, desktop]` arrays map to `base` + `mojo-md:` **only** (the old 2-stop `mq`).

```ts
// src/recipes/grid-system.ts
import { tv, type VariantProps } from '../tv';
export const gridSystem = tv({
  base: 'grid w-full grid-cols-4 mojo-md:grid-cols-12 ' +
        'gap-y-0 gap-x-6 mojo-md:gap-x-12 ' +   // FIXED 24px -> 48px
        'px-6 mojo-md:px-12',                    // FIXED 24px -> 48px
  variants: {
    centered: { true: 'mx-auto' },
    maxWidth: { full: 'max-w-full', md: 'max-w-mojo-md', lg: 'max-w-mojo-lg' }, // lg = 1400px (old index 2)
  },
  defaultVariants: { centered: true, maxWidth: 'lg' },
});
export type GridSystemVariants = VariantProps<typeof gridSystem>;

// src/recipes/auto-grid.ts
export const autoGrid = tv({
  base: 'grid grid-cols-1 mojo-md:grid-cols-2 gap-6 mojo-md:gap-12 auto-rows-min grid-flow-row',
});

// src/recipes/wrap.ts — old gridColumn ['1/-1','3 / span 8']
export const wrap = tv({ base: 'col-span-full mojo-md:col-start-3 mojo-md:col-span-8' });

// src/recipes/section.ts — old marginBottom:5
export const section = tv({ base: 'mb-fluid-5' });
```

### 5.4 `textInput()` (stateful look, zero library JS)

```ts
// src/recipes/text-input.ts
import { tv, type VariantProps } from '../tv';
export const textInput = tv({
  slots: {
    root:  'relative block h-full w-full mb-fluid-3',
    input: 'peer block w-full border-0 border-b border-b-dark/20 bg-transparent py-fluid-1 text-h3 ' +
           'placeholder:opacity-0 focus:outline-none',
    label: 'pointer-events-none absolute bottom-0 left-0 origin-left text-body opacity-60 ' +
           'transition-transform duration-300 ease-mojo-out ' +
           'peer-focus:-translate-y-[150%] peer-[:not(:placeholder-shown)]:-translate-y-[150%]',
  },
  variants: { size: { body: { input: 'text-body' }, h3: { input: 'text-h3' }, h2: { input: 'text-h2' } } },
  defaultVariants: { size: 'h3' },
});
export type TextInputVariants = VariantProps<typeof textInput>;
// Consumer renders <input> BEFORE <label> (so `peer` resolves), input placeholder=" ", and
// associates them with a real <label htmlFor>. Old React useState focus toggle is REPLACED by
// CSS :focus + :placeholder-shown. Fixes the old bug where the label opacity was always 0.
```

### 5.5 `textLink()` (animated underline)

```ts
// src/recipes/text-link.ts — extends Text; underline follows currentColor (more robust than the
// old white/dark scheme-switched gradient; flag this as an intentional improvement over v3).
import { tv, type VariantProps } from '../tv';
export const textLink = tv({
  extend: text,
  base: 'relative cursor-pointer',
  variants: {
    underline: {
      true:  'bg-no-repeat bg-gradient-to-r from-current to-current ' +
             '[background-size:0%_1px] [background-position:100%_100%] ' +
             'transition-[background-size] duration-300 ease-mojo-in-out ' +
             'hover:[background-size:100%_1px] hover:[background-position:0%_100%] ' +
             'focus:[background-size:100%_1px] ' +
             'shadow-[inset_0_-1px_0_0_rgb(from_currentColor_r_g_b_/_0.4)]',
      false: 'opacity-0 transition-opacity duration-300 ease-mojo-in-out hover:opacity-100 focus:opacity-100',
    },
  },
  defaultVariants: { underline: false },
});
export type TextLinkVariants = VariantProps<typeof textLink>;
```
> The old default `opacity:0` (link invisible until hover) is preserved here for fidelity but is a **questionable default to reconsider** in the rewrite (alongside the Button/TextInput bugs).

### 5.6 `scheme()` + the JS-free SchemeProvider

```ts
// src/recipes/scheme.ts — bg-bg / text-fg auto-follow the data-scheme cascade (§4.3 block 10).
import { tv, type VariantProps } from '../tv';
export const scheme = tv({ base: 'bg-bg text-fg' });
export type SchemeName = 'dark' | 'light' | 'gray';
// Consumer: <section data-scheme="light" className={scheme()}> … descendants inherit bg/fg … </section>
```

---

## 6. Behavior, state & polymorphism

A string-returning library cannot ship behavior. With **no adapter** (decision §0), all of it is the consumer's — so the design principle is: **push as much state into CSS as the v4 browser floor allows** (`:has()`, `:placeholder-shown`, `peer`/`group` are all available on Safari 16.4+), so recipes stay JS-free wherever possible.

| Concern | Lives in | How |
|---|---|---|
| Visual variants (scheme, shine, focus *styles*, label positions) | core recipes (`tv()`) | variants + CSS state selectors (`peer-focus:`, `group-hover:`, `data-[…]:`) |
| State machine (focus/blur, value-presence, context) | **consumer** | CSS where possible; otherwise their own `useState`/`ref`/store |
| Accessibility (ARIA, focus management, keyboard, focus-trap for the z-stack) | **consumer** | docs recommend a headless lib per framework (React Aria / Zag / Ark UI); we ship none |
| Reset + fonts (old ThemeDecorator/Reset) | `theme.css` | `@layer base` + `@font-face`; just an import |

### What replaces polymorphic `as=` + style-props

The old model had **element choice** and **theme-indexed style props**; neither has a recipe analog:

- **Element choice → gone from the styling layer.** The consumer writes the element literally (`<h1 className={text({size:'4'})}>`). No `as`, no `polymorph()`. `asChild`-style merging is a consumer concern (e.g. Radix `Slot`) in their own layer.
- **Theme-indexed style props → curated variants + pass-through utilities.** Common cases are variants; one-offs are plain Tailwind the consumer appends via `className` (merged by `tailwind-merge`). Responsive array props become hand-coded prefixes: `marginBottom={[0,1]}` → `mb-fluid-0 mojo-md:mb-fluid-1` (**2-element arrays = base + `mojo-md:` only**; only rare 3-element arrays reach `mojo-lg:`). **Box is dropped** — the kitchen sink is Tailwind utilities directly.

---

## 7. Consumer DX & migration

### 7.1 SSR / RSC — a concrete win

Recipes are pure synchronous string functions → trivially SSR-safe and **React Server Component-safe** (no `"use client"` to import a recipe, no runtime, no style injection). Strict improvement over Emotion 10 (render-time injection, `extractCritical`, RSC-incompatible). Styles are emitted at **build** time by the consumer's Tailwind; only class strings are produced at runtime.

### 7.2 Tree-shaking

Per-subpath ESM exports mean importing `@mojotech/mojo-ui/button` pulls only the button recipe; `splitting: true` keeps the shared `tv.ts` a single chunk rather than duplicating the config into every entry. Recipes carry **no CSS weight** — the consumer's Tailwind generates CSS only for classes they actually use.

### 7.3 Migration: guide + cheat sheet (clean break, no adapter)

There is no drop-in adapter to repoint to, so migration is **markup rewrite, not codemod-repoint**. Set expectations with consuming teams up front: `import` + `scheme=` + padding→`size` are mechanical; everything else (the bulk — per-instance style-props) is manual triage. A `jscodeshift` codemod can rewrite imports and **flag** every old call site with a `// TODO(mojo-ui): manual` breadcrumb, but it does not synthesize markup.

**Style-prop → utility cheat sheet (excerpt):**

| Old (onno style-prop) | New (Tailwind utility) |
|---|---|
| `marginBottom={3}` | `mb-fluid-3` |
| `marginBottom={[0,1]}` | `mb-fluid-0 mojo-md:mb-fluid-1` |
| `paddingX={5}` | `px-fluid-5` |
| `fontSize={2}` | `text-h3` (via `text({size:'2'})`) |
| `scheme="light"` (Button/TextLink) | `button({scheme:'light'})` |
| `as="section"` | write `<section>` |
| `gridColumn="3 / span 8"` | `wrap()` / `mojo-md:col-start-3 mojo-md:col-span-8` |
| `color="mojogreen"` | `text-mojogreen` |
| `width="55vw"` | `w-mojo-55` |

---

## 8. Phased rollout

1. **Phase 0 — Tokens first.** Land `theme.css` and let teams adopt brand tokens (fluid type/spacing, colors, `mojo-md/lg`, schemes) before any component change. Low risk; validates `@theme`/`@utility` + the `@source` story in real builds.
2. **Phase 1 — Recipes.** Ship `@mojotech/mojo-ui@4.0.0`. New code uses recipes directly. Old Emotion `3.x` stays installable on the `3.x` dist-tag in parallel.
3. **Phase 2 — Migrate.** Publish the migration guide + cheat sheet + import/flagging codemod. Teams rewrite call sites incrementally against the running `3.x`.
4. **Phase 3 — Second framework (the proof).** A Vue (or Svelte) `examples/` app reusing the identical recipes — the real proof of agnosticism and a CI guard.
5. **Phase 4 — Deprecate old.** Mark Emotion `3.x` deprecated on npm, freeze it, point its README at the migration guide.

---

## 9. Open decisions (ratified) & residual forks

Ratified (see §0): truly-agnostic / no adapter · namespaced breakpoints · clean-break migration · v4-only. Remaining smaller forks:

1. **Color collision policy.** Brand `gray`/`white`/`dark` intentionally override-by-name alongside the stock palette. Alternative: `mojo*` prefix everywhere to avoid any collision. *Recommend* brand names (simpler authoring); one-line switch if collision-avoidance is preferred.
2. **Keep thin `flex()`/`grid()`/`section()` recipes vs push to raw utilities.** *Recommend* keep `grid()` (real shared base that `gridSystem`/`autoGrid` `extend`) and thin `flex()`/`section()` for ergonomics.
3. **`tokens.ts` JS export vs CSS-vars-only.** *Recommend* keep a small JS mirror (esp. `zStack`) for consumers who compute in JS.
4. **`tailwind-variants` default build vs `/lite`.** *Recommend* default (with `twMerge`) so `className` overrides win; document `/lite` as a size opt-out.

---

## 10. Docs / catalog (now first-class)

With no adapter and no default framework, the docs **are** the product surface — they replace the 12 Storybook stories that were the de-facto component reference, and matter *more* now that consumers assemble components themselves. Build a **framework-agnostic catalog**: each recipe rendered into plain HTML across its variant matrix, with **copy-paste "recommended component" snippets per framework** (React / Vue / Svelte tabs), the markup contracts (e.g. TextInput's input-before-label + `placeholder=" "`), the a11y guidance (which headless lib, which ARIA), and the live style-prop→utility cheat sheet. Implementation options: a small Vite site that imports recipes and renders strings, or Storybook 8 driven by plain-HTML stories — decide during Phase 1.

---

## 11. Testing strategy

The current repo has **zero tests**; the rewrite must not. Because recipes are the product and a single class typo silently purges, the net is:

- **Recipe output snapshots** — pin the exact string each recipe returns for representative variant combos (catches typos, accidental class drift, and the size→leading/tracking/`mb` mapping regressing vs `theme.ts`).
- **Token assertions** — pin every token value (colors, clamps, fluid steps, z-stack) against `theme.ts` source-of-truth so the port can't silently drift.
- **`examples/` build + render checks** — each example app builds in CI and asserts a known recipe class resolves to real CSS (the purge guard, §3.5).
- **twMerge override tests** — assert consumer `className` overrides actually win over recipe defaults for the custom scales (§4.6).

---

## 12. Known gaps to close before/while building

- **A11y is fully delegated.** No focus management, ARIA, keyboard, or focus-trapping (the whole z-stack: overlay/modal/toast) ships. Docs must prescribe a headless lib per framework and the ARIA contracts; this is a real burden shift to accept consciously.
- **`dark:` ↔ `data-scheme` reconciliation.** The brand scheme system is orthogonal to Tailwind's built-in `dark:` variant / `prefers-color-scheme`. Decide whether `dark:` should map to `[data-scheme=dark]` (e.g. `@custom-variant dark`) so stock `dark:` utilities and brand schemes don't diverge in a consumer app.
- **Design-token versioning.** Tokens are bundled into the package for zero skew, but a breaking token change (a color or breakpoint shift) changes the meaning of an existing class across every consumer. Define a semver policy + changelog discipline for token changes.
- **Font licensing / `@font-face`.** `GT America` and especially `altis-mojoregular` (an Adobe Fonts/Typekit face) are almost certainly **not redistributable** in an npm package. The library references the families but must **not** ship the font files; docs instruct consumers to load their own Typekit kit / self-host with the appropriate license, and define a FOUT/FOIT strategy.
- **TextLink underline fidelity.** The recipe in §5.5 modernizes the effect to follow `currentColor`; confirm it matches the intended look across schemes, or fall back to a small custom utility.
- **Confirm `tv()` numeric-vs-string variant keys** and `VariantProps` extraction for `text()` (spec uses string keys `'0'..'5'` deliberately) against the installed version.

---

## Appendix — corrections applied during review

This spec already incorporates fixes an adversarial review surfaced in the first draft:

- **`--text-body-sm` clamp** rewritten from invalid `0.91rem + -0.07vw` (and an inverted min/max) to valid `clamp(0.84rem, 0.91rem - 0.07vw, 0.89rem)`.
- **Line-height/tracking baked into the named `--text-*` tokens** via paired modifiers (v4-supported) instead of forcing the Text recipe to own them — removes the bare-`text-h1` hazard.
- **Scheme tokens use distinct names** (`--scheme-bg` → `@theme inline --color-bg: var(--scheme-bg)`) instead of a circular `--color-bg: var(--color-bg)`.
- **GridSystem/AutoGrid gutters mapped to FIXED `gap-6`/`gap-12` + `px-6`/`px-12`** (24/48px), not fluid utilities — the source uses literal px, so fluid-ifying would be a silent visual regression.
- **Breakpoints ADDED namespaced** (`mojo-md`/`mojo-lg`) instead of globally REPLACING `md`/`lg` — chosen to avoid silently redefining the consumer's existing responsive utilities.
- **`twMergeConfig`** corrected to top-level `classGroups` (tailwind-merge v3), with the custom-utility group mapping called out as a validate-with-tests task rather than assumed solved.
- **ASCII-escaped bullet** (`content-['\\00B7']`) instead of a raw non-ASCII glyph in an arbitrary class value.
- **`sideEffects` rationale** corrected: it protects JS-imported CSS, not the CSS-`@import` distribution path.
