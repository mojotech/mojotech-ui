import Button from "../src/components/Button";


const meta = {
  title: "Button",
  component: Button,
};

export default meta;

export const WithText = {
  render: () => (
    <>
      <Button>Ship it</Button>
      <Button scheme="light">Ship it</Button>
    </>
  ),
};
