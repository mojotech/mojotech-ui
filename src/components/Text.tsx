import { styled } from '../stitches.config';

const Text = styled('p', {
  variants: {
    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$1',
      },
      2: {
        fontSize: '$2',
        lineHeight: '$2',
      },
      3: {
        fontSize: '$3',
        lineHeight: '$2',
      },
      4: {
        fontSize: '$4',
        lineHeight: '$3',
      },
      5: {
        fontSize: '$5',
        lineHeight: '$3',
      },
      6: {
        fontSize: '$6',
        lineHeight: '$4',
      },
    },
    font: {
      display: {
        fontFamily: '$display',
      },
      main: {
        fontFamily: '$main',
      },
      mono: {
        fontFamily: '$mono',
      },
    },
  },
  defaultVariants: {
    size: '1',
    font: 'main',
  },
});

export default Text;
