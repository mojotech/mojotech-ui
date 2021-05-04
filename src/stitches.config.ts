import { createCss } from '@stitches/react';

export const {
  styled,
  css,
  global,
  keyframes,
  getCssString,
  theme,
} = createCss({
  theme: {
    space: {
      0: '0px', // 0
      1: 'clamp(0.25rem, 0.15rem + 0.49vw, 0.50rem)', // 4-8
      2: 'clamp(0.50rem, 0.30rem + 0.98vw, 1.00rem)', // 8-16
      3: 'clamp(1.13rem, 0.98rem + 0.73vw, 1.50rem)', // 18-24
      4: 'clamp(2.75rem, 1.68rem + 5.37vw, 5.50rem)', // 44-88
      5: 'clamp(5.50rem, 3.35rem + 10.73vw, 11.00rem)', // 88-176
      6: 'clamp(11.00rem, 6.71rem + 21.46vw, 22.00rem)', // 176-352
    },
  },
});
