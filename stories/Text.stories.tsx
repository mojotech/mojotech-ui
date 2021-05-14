import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '../src/components/Box';
import Container from '../src/components/Container';
import Text from '../src/components/Text';

const meta: Meta = {
  title: 'Text',
  component: Text,
};

export default meta;

const Template: Story = () => (
  <Box>
    <Container css={{ marginBottom: '$4' }}>
      <Text size="6">We build software that...</Text>
      <Text size="5">We build software that...</Text>
      <Text size="4">We build software that...</Text>
      <Text size="3">We build software that...</Text>
      <Text size="2">We build software that...</Text>
      <Text size="1">We build software that...</Text>
    </Container>
    <Container css={{ marginBottom: '$4' }}>
      <Text size="6" font="display">
        We build software that...
      </Text>
      <Text size="5" font="display">
        We build software that...
      </Text>
      <Text size="4" font="display">
        We build software that...
      </Text>
      <Text size="3" font="display">
        We build software that...
      </Text>
      <Text size="2" font="display">
        We build software that...
      </Text>
      <Text size="1" font="display">
        We build software that...
      </Text>
    </Container>
    <Container>
      <Text size="6" font="mono">
        We build software that...
      </Text>
      <Text size="5" font="mono">
        We build software that...
      </Text>
      <Text size="4" font="mono">
        We build software that...
      </Text>
      <Text size="3" font="mono">
        We build software that...
      </Text>
      <Text size="2" font="mono">
        We build software that...
      </Text>
      <Text size="1" font="mono">
        We build software that...
      </Text>
    </Container>
  </Box>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
