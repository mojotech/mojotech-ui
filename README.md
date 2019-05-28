# MojoTech UI
A set of styled React components for MojoTech.com user interfaces.

## Installation
Mojo-UI is available as an npm module

```
// with yarn
yarn add @mojotech/mojo-ui

// with npm
npm install @mojotech/mojo-ui
```

## Setup
When using make sure to wrap all the components in the `<ThemeDecorator />` component. This component provides the theme styles for the components, as well as adds MojoTech fonts and CSS reset.

Example:
```tsx
import * as React from 'react'
import { ThemeDecorator, Section, Text } from '@mojotech/mojo-ui'

const Page: React.FunctionComponent = () => (
  <ThemeDecorator>
    <Section>
      <Text as="h1" size={6}>Build Better.</Text>
    </Section>
  </ThemeDecorator>
)

```

## Development
Upon cloning the repo and installing the dependencies run `npm start` to start the storybook dev server. Run `npm run build-storybook` to build a static version of the storybook to the `storybook-static` folder. Run `npm build` to compile the library into the `dist` folder.
