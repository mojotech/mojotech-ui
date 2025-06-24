import TextInput from "../src/components/TextInput";
import Box from "../src/components/Box";

const meta = {
  title: "TextInput",
  component: TextInput,
};

export default meta;

export const Default = {
  render: () => {
    return (
      <Box paddingTop={200}>
        <TextInput label="What's your name?" />
        <TextInput label="What's your email address?" />
        <TextInput label="What problem are you trying to solve?" />
      </Box>
    );
  },
};
