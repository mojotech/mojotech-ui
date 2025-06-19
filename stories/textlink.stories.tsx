import TextLink from "../src/components/TextLink";
import SchemeProvider from "../src/components/SchemeProvider";

const meta = {
  title: "Text Link",
  component: TextLink,
};

export default meta;

export const Link = {
  render: () => (
    <div>
      <TextLink fontSize={1}>Need an NDA?</TextLink>
      <br />
      <TextLink fontSize={5} underline>
        Need an
        <br /> NDA?
      </TextLink>
      <SchemeProvider scheme="dark">
        <TextLink scheme="dark" fontSize={5} underline>
          Need an
          <br /> NDA?
        </TextLink>
      </SchemeProvider>
    </div>
  ),
};
