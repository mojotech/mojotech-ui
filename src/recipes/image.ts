import { tv, type VariantProps } from '../tv';

/** Responsive image. Replaces the v3 `Image` (Box as=img + objectFit). */
export const image = tv({
  base: 'block h-auto max-w-full',
  variants: {
    fit: {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    },
  },
});

export type ImageVariants = VariantProps<typeof image>;
