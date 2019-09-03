# MojoTech UI
A set of styled React components for MojoTech.com user interfaces.

## Usage
Mojo-UI is available as an npm module

```sh
# with yarn
yarn add @mojotech/mojo-ui

# with npm
npm install @mojotech/mojo-ui
```
When using make sure to wrap all the components in the `<ThemeDecorator />` component. This component provides the theme styles for the components, as well as adds MojoTech fonts and CSS reset.

Example:
```tsx
import * as React from 'react'
import { ThemeDecorator, Section, Text } from '@mojotech/mojo-ui'

const Page: React.FunctionComponent = () => (
  <ThemeDecorator>
    <Section>
      <Text as="h1" fontSize={5}>Build Better.</Text>
    </Section>
  </ThemeDecorator>
)

```

## Development
Upon cloning the repo and installing the dependencies run `npm start` to start the storybook dev server. Run `npm run build-storybook` to build a static version of the storybook to the `storybook-static` folder. Run `npm build` to compile the library into the `dist` folder.

### Components
The components in this library are built using [emotion](https://emotion.sh/docs/styled), and [onno](https://github.com/wagerfield/onno). Emotion itself handles the styling of the components and onno provides the ability to use style props.

#### Theme
The core of the entire ui library is the [theme file](https://github.com/mojotech/mojotech-ui/blob/master/src/lib/theme.ts). The theme allows us to create a cohesive system of style values that are used across all components. The theme keys correspond to the [render functions](https://github.com/wagerfield/onno/blob/master/docs/render-functions.md) in onno. The array index of the property set in the theme is what onno looks for when applying the style.

#### Style Props
To style the components we use style props. For example:
```tsx
<Box marginBottom={2} />
```
This would render out the Box component with a `marginBottom` that corresponds with the array index of `2` in the `spaces` [key](https://github.com/mojotech/mojotech-ui/blob/dcbd11b74014ed5f9392dd3bcbe6b55ac9ab0ecb/src/lib/theme.ts#L16) in the theme. The style props that are allowed to be used for each component are dictated by the render functions that each component uses. You can use your own non-theme values within the style props, but this should be only use sparingly as a means to preserve uniformity. For an extensive list of which css properties correspond to which render function visit the [onno docs](https://github.com/wagerfield/onno/blob/master/docs/render-functions.md).

#### Responsive Values
The breakpoints for the components are set via the theme. For example:
```ts
breakpoints: [0, 600, 1200]
```
This would set three `min-width` breakpoints. One at `0px`, `600px`, and `1200px`. To create responsive styles within a component you would use this syntax
```tsx
<Box marginBottom={[0, 1, 2]} />
```
This would set the `marginBottom` within each breakpoint at the corresponding index.
