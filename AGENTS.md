# AGENTS.md

Guidance for agents and contributors working in this repo.

## What this is

`@mojotech/mojo-ui` is a **framework-agnostic** design system: a Tailwind v4 theme (`src/theme.css`)
plus [`tailwind-variants`](https://www.tailwind-variants.org) recipes that return `className` strings.
**The recipes are the product.** This package ships no React/Vue/Svelte — consumers write their own
components on top of the recipes. There is intentionally **no** legacy code: v3 (Emotion + onno-react)
was removed wholesale. Keep it that way.

## Toolchain (all current/cutting-edge, ESM-only)

- **Bun** — package manager, test runner, script runner
- **tsdown** (Rolldown/oxc) — library bundler → `dist` (ESM only; CJS is intentionally not shipped)
- **Biome** — lint + format (CSS is excluded; Tailwind v4 at-rules are hand-maintained)
- **TypeScript 6**, **Tailwind v4** (peer), **tailwind-variants 3** + **tailwind-merge 3**
- **Changesets** for releases; **publint** + **attw** validate the published package

## Layout

```
src/
  theme.css        # the Tailwind v4 theme — single source of truth for tokens
  tv.ts            # brand-configured `tv` (createTV with twMerge config). Recipes import this.
  tokens.ts        # JS mirror of the tokens (zStack, colors, …) for JS consumers
  index.ts         # public barrel
  recipes/*.ts     # one recipe per file
test/              # bun tests (+ tw-compile.ts, an in-memory Tailwind compiler)
docs/v4-vision.md  # the design doc + migration cheat sheet
```

## Commands

```sh
bun run check      # biome check + tsc --noEmit + bun test  (run this before committing)
bun run build      # tsdown
bun run validate   # build + publint --strict + attw
bun test           # tests only
```

## Conventions / invariants

1. **Recipes return strings.** Import `tv` from `../tv` (never `tailwind-variants` directly — the
   brand instance carries the tailwind-merge config). Export the recipe and its `VariantProps` type.
2. **Static class strings only.** Never build class names with template-literal interpolation
   (`` `bg-${x}` ``). Tailwind scans plain text; dynamic strings get purged. `tv` variant values must
   be literal strings.
3. **Type-safe variants.** Write variant maps as literal objects (not `Object.fromEntries`) so
   `VariantProps` infers the literal union. Use string keys for numeric scales (`'0'..'5'`).
4. **Slotted recipes use `base`** as the primary slot (tailwind-variants always exposes a `base`
   slot; don't leave it empty by naming the primary slot something else).
5. **Responsiveness is hand-coded** `mojo-md:` / `mojo-lg:` prefixes — `responsiveVariants` was
   removed in Tailwind v4. Never reintroduce stock `md:`/`lg:` for brand breakpoints (they belong to
   the consumer's app).
6. **No class may be purged.** `test/recipes.test.ts` compiles every class every recipe emits against
   the real `theme.css`; `bun run check` must stay green. New utilities go in `theme.css`.
7. **Tokens have two homes** that must agree: `theme.css` (styling source of truth) and `tokens.ts`
   (JS mirror, pinned by `test/tokens.test.ts`). Update both together.

## Adding a recipe

1. Create `src/recipes/<name>.ts`:
   ```ts
   import { tv, type VariantProps } from '../tv';
   export const widget = tv({ base: '…', variants: { … }, defaultVariants: { … } });
   export type WidgetVariants = VariantProps<typeof widget>;
   ```
2. Export it from `src/index.ts`.
3. If it uses a class not already produced, add the utility/token to `src/theme.css`.
4. `bun run check` (the purge guard will fail if a class doesn't compile).

The wildcard `exports` map (`"./*": "./dist/recipes/*.js"`) means new recipes need **no**
`package.json` change — they're importable as `@mojotech/mojo-ui/<name>` automatically.
