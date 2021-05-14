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
    fontSizes: {
      1: 'clamp(1.00rem, 0.95rem + 0.24vw, 1.13rem)', // 16-18
      2: 'clamp(1.00rem, 0.80rem + 0.98vw, 1.50rem)', // 16-24
      3: 'clamp(1.25rem, 1.15rem + 0.49vw, 1.50rem)', // 20-24
      4: 'clamp(1.50rem, 1.30rem + 0.98vw, 2.00rem)', // 24-32
      5: 'clamp(1.75rem, 1.26rem + 2.44vw, 3.00rem)', // 28-48
      6: 'clamp(1.88rem, 1.14rem + 3.66vw, 3.75rem)', // 30-60
    },
    fonts: {
      main: `'GT America Light', system-ui, sans-serif`,
      display: `'altis-mojoregular', system-ui, sans-serif`,
      mono: `'GT America Mono', monospace`,
    },
    lineHeights: {
      1: 1.8,
      2: 1.7,
      3: 1.5,
      4: 1.3,
    },
    sizes: {
      1: '100%',
      2: '55vw',
      3: '66.666vw',
      4: '90vw',
      5: '100vw',
    },
  },
  utils: {
    marginX: (config) => (
      value: `$${keyof typeof config['theme']['space'] | (string & {})}`
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (config) => (
      value: `$${keyof typeof config['theme']['space'] | (string & {})}`
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (config) => (
      value: `$${keyof typeof config['theme']['space'] | (string & {})}`
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (config) => (
      value: `$${keyof typeof config['theme']['space'] | (string & {})}`
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 600px)',
    bp2: '(min-width: 1600px)',
  },
});
