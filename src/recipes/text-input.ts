import { tv, type VariantProps } from '../tv';

/**
 * Labeled text input with a floating label. Replaces the v3 `TextInput`.
 *
 * Three slots: `root` (the `<label>` wrapper), `input`, and `label`. The float is
 * pure CSS — the label lifts on `:focus` and while the input is filled
 * (`:not(:placeholder-shown)`), so NO JavaScript ships for the common case. The
 * consumer renders `<input>` BEFORE `<label>` (so `peer` resolves) with
 * `placeholder=" "`. Fixes the v3 bug where the label `opacity` was always 0.
 */
export const textInput = tv({
  slots: {
    root: 'relative block h-full w-full mb-fluid-3',
    input:
      'peer block w-full border-0 border-b border-b-dark/20 bg-transparent py-fluid-1 placeholder:opacity-0 focus:outline-none',
    label:
      'pointer-events-none absolute bottom-0 left-0 origin-left opacity-60 ' +
      'transition-transform duration-300 ease-mojo-out ' +
      'peer-focus:-translate-y-[150%] peer-[:not(:placeholder-shown)]:-translate-y-[150%]',
  },
  variants: {
    size: {
      body: { input: 'text-body', label: 'text-body' },
      h3: { input: 'text-h3', label: 'text-body' },
      h2: { input: 'text-h2', label: 'text-h3' },
    },
  },
  defaultVariants: { size: 'h3' },
});

export type TextInputVariants = VariantProps<typeof textInput>;
