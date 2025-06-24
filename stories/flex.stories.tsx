import Flex from "../src/components/Flex";
import Text from "../src/components/Text";

const meta = {
  title: "Flex",
  component: Flex,
};

export default meta;

export const Row = {
  render: () => (
    <Flex justifyContent="space-around" width={500}>
      <Flex
        height={200}
        alignItems="center"
        justifyContent="center"
        width={225}
        border="1px solid red"
      >
        <Text>Box</Text>
      </Flex>
      <Flex
        height={200}
        alignItems="center"
        justifyContent="center"
        width={225}
        border="1px solid red"
      >
        <Text>Box</Text>
      </Flex>
    </Flex>
  ),
};
