import { describe, expect, test } from 'bun:test';
import { breakpoints, colors, schemes, tokens, zStack } from '../src/tokens';

describe('tokens', () => {
  test('zStack layers match the brand z-index scale', () => {
    expect(zStack).toEqual({
      sink: -1,
      overlay: 800,
      overlayControl: 900,
      modal: 1000,
      modalBg: 2000,
      toast: 4000,
      toastControls: 8000,
    });
  });

  test('brand colors are pinned', () => {
    expect(colors.mojogreen).toBe('#00ba40');
    expect(colors.dark).toBe('#14111d');
    expect(colors.darkgreen).toBe('#193c2a');
    expect(colors.aaMojogreen).toBe('#00882f');
  });

  test('schemes pair background + foreground', () => {
    expect(schemes.dark).toEqual({ bg: '#14111d', fg: '#ffffff' });
    expect(schemes.light).toEqual({ bg: '#ffffff', fg: '#14111d' });
    expect(schemes.gray).toEqual({ bg: '#f0f0f0', fg: '#14111d' });
  });

  test('breakpoints map to the mojo-md/mojo-lg stops', () => {
    expect(breakpoints).toEqual({ mojoMd: 800, mojoLg: 1600 });
  });

  test('aggregate tokens object exposes every group', () => {
    expect(Object.keys(tokens).sort()).toEqual([
      'breakpoints',
      'colors',
      'easings',
      'fontFamilies',
      'fontSizes',
      'schemes',
      'spaceFluid',
      'zStack',
    ]);
  });
});
