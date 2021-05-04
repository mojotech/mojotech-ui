import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '../src/components/Box';

const meta: Meta = {
  title: 'Box',
  component: Box,
};

export default meta;

const Template: Story = () => (
  <Box>
    <Box
      css={{
        marginBottom: '$6',
      }}
    >
      This is a box
    </Box>
    <Box>This is another box</Box>
  </Box>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
