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
  // reset
  'html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6': {
    margin: 0,
    padding: 0,
  },
  'h1,h2,h3,h4,h5,h6': {
    fontSize: '100%',
    fontWeight: 'normal',
  },
  ul: {
    listStyle: 'none',
  },
  'button,input,select,textarea': {
    margin: 0,
  },
  html: {
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  '*,*:before,*:after': {
    boxSizing: 'inherit',
  },
  'img,embed,iframe,object,video': {
    height: 'auto',
    maxWidth: '100%',
  },
  audio: {
    maxWidth: '100%',
  },
  iframe: {
    border: 0,
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
  'td,th': {
    padding: 0,
    textAlign: 'left',
  },
});

export default globalStyles;
