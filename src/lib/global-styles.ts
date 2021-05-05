import { global } from '../stitches.config';
import { GT_AMERICA, GT_AMERICA_MONO, MOJO_ALTIS } from './font-data';

const globalStyles = global({
  // fonts
  '@font-face': [
    {
      fontFamily: 'altis-mojoregular',
      fontDisplay: 'block',
      fontWeight: 'normal',
      fontStyle: 'normal',
      src: `url(${MOJO_ALTIS}) format("woff")`,
    },
    {
      fontFamily: 'GT America Light',
      fontDisplay: 'block',
      src: `url(${GT_AMERICA}) format("woff")`,
    },
    {
      fontFamily: 'GT America Mono',
      fontDisplay: 'block',
      fontWeight: 'normal',
      fontStyle: 'normal',
      src: `url(${GT_AMERICA_MONO}) format("woff")`,
    },
  ],
  body: {
    fontFamily: '$main',
  },
});

export default globalStyles;
