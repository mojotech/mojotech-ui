import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { compile } from 'tailwindcss';

// Resolve `@import "tailwindcss"` (and its relative sub-imports) from node_modules.
const TW = resolve('node_modules/tailwindcss');
const loadStylesheet = async (id: string, base: string) => {
  const path = id === 'tailwindcss' ? resolve(TW, 'index.css') : resolve(base, id);
  return { path, base: dirname(path), content: readFileSync(path, 'utf8') };
};

let compiler: Awaited<ReturnType<typeof compile>> | undefined;
async function getCompiler() {
  if (!compiler) {
    const css = readFileSync(resolve('src/theme.css'), 'utf8');
    compiler = await compile(css, { base: process.cwd(), loadStylesheet });
  }
  return compiler;
}

/** Compile the given candidate classes against the real theme.css. */
export async function buildCss(candidates: string[]): Promise<string> {
  return (await getCompiler()).build(candidates);
}

// `peer`/`group` are marker classes that emit no rule of their own.
const MARKERS = new Set(['peer', 'group']);

/** Return the candidates that produced NO CSS rule (i.e. would be purged / are invalid). */
export async function findUnresolved(candidates: string[]): Promise<string[]> {
  // Strip selector escapes from both haystack and needle so escaped values
  // (e.g. the `content-['\00B7']` bullet) match reliably.
  const out = (await buildCss(candidates)).replace(/\\/g, '');
  return candidates.filter((candidate) => {
    if (MARKERS.has(candidate)) return false;
    const needle = `.${candidate}`.replace(/\\/g, '');
    let i = out.indexOf(needle);
    while (i !== -1) {
      const next = out[i + needle.length];
      if (next === undefined || !/[\w-]/.test(next)) return false; // matched with a clean boundary
      i = out.indexOf(needle, i + 1);
    }
    return true; // never matched -> unresolved
  });
}
