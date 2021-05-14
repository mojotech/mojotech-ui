import { styled } from '../stitches.config';

import Box from './Box';

const Container = styled(Box, {
  marginX: 'auto',
  paddingX: '$3',
  variants: {
    size: {
      1: {
        maxWidth: '$1',
        '@bp1': {
          maxWidth: '$3',
        },
        '@bp2': {
          maxWidth: '$2',
        },
      },
      2: {
        maxWidth: '$1',
        paddingX: '$0',
        '@bp1': {
          maxWidth: '$4',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

export default Container;
