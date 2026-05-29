import { describe, expect, test } from 'bun:test';
import { tv } from '../src/tv';

describe('tv (brand twMerge config)', () => {
  test('consumer className overrides win for every custom scale', () => {
    const recipe = tv({
      base: 'text-h1 px-fluid-3 mb-fluid-2 z-modal max-w-mojo-lg w-mojo-55 bg-dark',
    });
    const out = recipe({
      class: 'text-body px-fluid-5 mb-fluid-0 z-toast max-w-mojo-md w-full bg-white',
    }).split(/\s+/);

    for (const overridden of [
      'text-h1',
      'px-fluid-3',
      'mb-fluid-2',
      'z-modal',
      'max-w-mojo-lg',
      'w-mojo-55',
      'bg-dark',
    ]) {
      expect(out).not.toContain(overridden);
    }
    for (const winner of [
      'text-body',
      'px-fluid-5',
      'mb-fluid-0',
      'z-toast',
      'max-w-mojo-md',
      'w-full',
      'bg-white',
    ]) {
      expect(out).toContain(winner);
    }
  });

  test('fluid spacing dedupes within the same property group', () => {
    const recipe = tv({ base: 'mb-fluid-1' });
    expect(recipe({ class: 'mb-fluid-4' })).toBe('mb-fluid-4');
  });
});
