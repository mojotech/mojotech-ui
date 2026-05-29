# @mojotech/mojo-ui

A **framework-agnostic** design system for MojoTech UIs. It ships a [Tailwind v4](https://tailwindcss.com)
theme plus [`tailwind-variants`](https://www.tailwind-variants.org) **recipes** — pure functions that
take variant props and return `className` strings. Because recipes return plain strings, the *same*
recipe powers a React, Vue, or Svelte component that **you** write and own. No runtime, no framework
lock-in, SSR/RSC-safe.

> v4 is a complete, breaking rewrite of the v3 Emotion + onno-react component library. See
> [`docs/v4-vision.md`](docs/v4-vision.md) for the full design and a migration cheat sheet.

## Install

```sh
bun add @mojotech/mojo-ui          # + npm i / pnpm add
# peer dependency:
bun add -d tailwindcss
```

## Setup

In your Tailwind entry CSS:

```css
@import "tailwindcss";
@import "@mojotech/mojo-ui/theme.css";

/* REQUIRED: Tailwind never scans node_modules, so register the recipe output
   or every recipe class is purged. */
@source "../node_modules/@mojotech/mojo-ui/dist";
```

## Usage

Recipes return strings; you own the element and its behavior.

```tsx
// React
import { button, type ButtonVariants } from '@mojotech/mojo-ui/button';
import { cn } from '@mojotech/mojo-ui';

type Props = ButtonVariants & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({ scheme, size, className, ...rest }: Props) => {
  const { base, shine } = button({ scheme, size });
  return (
    <button className={cn(base(), className)} {...rest}>
      <span className={shine()} aria-hidden />
      <span className="relative z-[2]">{rest.children}</span>
    </button>
  );
};
```

```vue
<!-- Vue — same import, same call, no React in the graph -->
<script setup lang="ts">
import { button } from '@mojotech/mojo-ui/button';
const { base } = button({ scheme: 'light' });
</script>
<template><button :class="base()"><slot /></button></template>
```

### Color schemes

Schemes are a `data-scheme` attribute + semantic `bg`/`fg` tokens — no provider/context required:

```tsx
import { scheme } from '@mojotech/mojo-ui/scheme';
<section data-scheme="dark" className={scheme()}> … </section>
```

### What diverges from stock Tailwind

mojo-ui relies on the default Tailwind theme and only adds the brand on top (every divergence is
flagged in `theme.css`):

- **Fluid type** — semantic `text-body-sm … text-display` (clamp-based, with paired line-height/tracking)
- **Fluid spacing** — `p-fluid-*`, `mb-fluid-*`, `gap-fluid-*`, … (the `0–6` calc/vw scale)
- **Breakpoints** — `mojo-md:` (800px) / `mojo-lg:` (1600px); stock `sm/md/lg/xl/2xl` are untouched
- **z-stack** — `z-modal`, `z-toast`, … ; brand colors, `font-main/display`, `ease-mojo-*`

> Fonts: `theme.css` declares the `GT America` / `altis-mojoregular` (Adobe Fonts) families but does
> **not** ship the font files — load your own licensed kit.

## Development

```sh
bun install
bun run check      # biome (lint + format) · tsc · bun test
bun run build      # tsdown → dist (ESM + .d.ts + theme.css)
bun run validate   # build + publint + attw
bun run changeset  # record a release
```

See [`AGENTS.md`](AGENTS.md) for architecture and contribution conventions.
