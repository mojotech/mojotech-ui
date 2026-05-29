import { describe, expect, test } from 'bun:test';
import {
  autoGrid,
  button,
  flex,
  grid,
  gridSystem,
  image,
  listItem,
  scheme,
  section,
  text,
  textInput,
  textLink,
  wrap,
} from '../src/index';
import { findUnresolved } from './tw-compile';

describe('recipe output', () => {
  test('button defaults map to the v3 dark/md defaults', () => {
    const { base } = button();
    const cls = base();
    expect(cls).toContain('bg-white'); // dark scheme = light button face
    expect(cls).toContain('text-dark');
    expect(cls).toContain('px-fluid-5'); // size md = old paddingX 5
    expect(cls).toContain('py-fluid-3'); // old paddingY 3
    expect(cls).toContain('text-h3'); // old fontSize 2
  });

  test('button light scheme inverts contrast and has no invalid color literal', () => {
    const { base } = button({ scheme: 'light' });
    expect(base()).toContain('bg-dark');
    expect(base()).toContain('text-white');
    expect(base()).not.toMatch(/(^|\s)bg-(?!dark|white)\w/); // no stray bg-<word> like the v3 bg:'dark' bug
  });

  test('text size maps to the fluid token plus its per-size bottom margin', () => {
    expect(text({ size: '4' })).toContain('text-h1');
    expect(text({ size: '4' })).toContain('mb-fluid-4');
    expect(text()).toContain('text-body'); // default size 1
  });

  test('gridSystem keeps FIXED gutters (gap-6/12), never fluid', () => {
    const g = gridSystem();
    expect(g).toContain('grid-cols-4');
    expect(g).toContain('mojo-md:grid-cols-12');
    expect(g).toContain('gap-x-6');
    expect(g).toContain('mojo-md:gap-x-12');
    expect(g).toContain('max-w-mojo-lg'); // default maxWidth = old index 2 (1400px)
    expect(g).not.toContain('fluid');
  });

  test('wrap places columns 3..10 on desktop', () => {
    expect(wrap()).toBe('col-span-full mojo-md:col-start-3 mojo-md:col-span-8');
  });

  test('textInput floating label is CSS-driven (peer) and visible by default', () => {
    const { input, label } = textInput();
    expect(input()).toContain('peer');
    expect(label()).toContain('peer-focus:-translate-y-[150%]');
    expect(label()).not.toContain('opacity-0'); // v3 bug: label was always invisible
  });

  test('scheme applies the semantic bg/fg tokens', () => {
    expect(scheme()).toBe('bg-bg text-fg');
  });

  test('listItem extends text and adds the bullet', () => {
    const cls = listItem({ size: '1' });
    expect(cls).toContain('text-body'); // inherited from text
    expect(cls).toContain('pl-fluid-3');
    expect(cls).toContain("before:content-['\\00B7']");
  });
});

describe('no recipe class is purged (compiles against the real theme)', () => {
  test('every class every recipe emits resolves to CSS', async () => {
    const classes = new Set<string>();
    const add = (s: string) => {
      for (const c of s.split(/\s+/).filter(Boolean)) classes.add(c);
    };
    const addSlots = (obj: Record<string, () => string>) => {
      for (const fn of Object.values(obj)) add(fn());
    };

    for (const direction of ['row', 'row-reverse', 'col', 'col-reverse'] as const)
      add(flex({ direction }));
    for (const w of ['wrap', 'nowrap', 'wrap-reverse'] as const) add(flex({ wrap: w }));
    for (const align of ['start', 'center', 'end', 'stretch', 'baseline'] as const)
      add(flex({ align }));
    for (const justify of ['start', 'center', 'end', 'between', 'around', 'evenly'] as const)
      add(flex({ justify }));
    for (const gap of ['0', '1', '2', '3', '4', '5', '6'] as const) {
      add(flex({ gap }));
      add(grid({ gap }));
    }
    for (const flow of ['row', 'col', 'dense'] as const) add(grid({ flow }));
    for (const maxWidth of ['full', 'md', 'lg'] as const)
      add(gridSystem({ maxWidth, centered: true }));
    add(autoGrid());
    add(wrap());
    for (const spacing of ['0', '1', '2', '3', '4', '5', '6'] as const) add(section({ spacing }));
    for (const size of ['0', '1', '2', '3', '4', '5'] as const) add(text({ size }));
    for (const family of ['main', 'regular', 'display', 'mono'] as const) add(text({ family }));
    add(text({ flush: true }));
    add(listItem({ size: '1' }));
    for (const underline of [true, false]) add(textLink({ underline }));
    for (const fit of ['contain', 'cover', 'fill', 'none', 'scale-down'] as const)
      add(image({ fit }));
    add(scheme());
    for (const s of ['dark', 'light'] as const)
      for (const size of ['sm', 'md', 'lg'] as const)
        for (const disabled of [true, false]) addSlots(button({ scheme: s, size, disabled }));
    for (const size of ['body', 'h3', 'h2'] as const) addSlots(textInput({ size }));

    const unresolved = await findUnresolved([...classes]);
    expect(unresolved).toEqual([]);
  });
});
