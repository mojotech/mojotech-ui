import { describe, expect, test } from 'bun:test';
import { buildCss, findUnresolved } from './tw-compile';

describe('theme.css compiles against Tailwind v4', () => {
  test('custom token utilities all resolve', async () => {
    const unresolved = await findUnresolved([
      'bg-mojogreen',
      'text-dark',
      'bg-bg',
      'text-fg',
      'font-display',
      'text-h1',
      'leading-mojo-1',
      'tracking-mojo-2',
      'max-w-mojo-lg',
      'ease-mojo-out',
      'px-fluid-4',
      'mb-fluid-0',
      'gap-x-fluid-3',
      'z-modal',
      'z-sink',
      'w-mojo-55',
    ]);
    expect(unresolved).toEqual([]);
  });

  test('fluid type tokens carry paired line-height + letter-spacing', async () => {
    const css = await buildCss(['text-h1']);
    expect(css).toContain('var(--text-h1--line-height)');
    expect(css).toContain('var(--text-h1--letter-spacing)');
  });

  test('fluid spacing resolves to the calc-based scale', async () => {
    const css = await buildCss(['px-fluid-4']);
    expect(css).toContain('var(--space-fluid-4)');
  });

  test('semantic scheme tokens reference the reassignable runtime var', async () => {
    const css = await buildCss(['bg-bg', 'text-fg']);
    expect(css).toContain('var(--scheme-bg)');
    expect(css).toContain('var(--scheme-fg)');
  });

  test('brand breakpoints are added without disturbing stock ones', async () => {
    const css = await buildCss(['mojo-md:grid-cols-12', 'md:grid-cols-12']);
    expect(css).toContain('width >= 50rem'); // mojo-md = 800px
    expect(css).toContain('width >= 48rem'); // stock md = 768px, still works
  });
});
