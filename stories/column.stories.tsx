import * as React from "react";
import Wrap from "../src/components/Wrap";
import Row from "../src/components/Row";
import Column from "../src/components/Column";
import Text from "../src/components/Text";

const meta = {
  title: "Column",
  component: Column,
};

export default meta;

export const TwoColumn = {
  render: () => (
    <Wrap size={2}>
      <Row>
        <Column>
          <Text as="h3" fontSize={1}>
            Agility
          </Text>
          <Text as="p">
            We've successfully built complex systems a hundred times over. We
            are able to identify issues quickly and adjust in real-time to
            ensure we are tracking well against expectations and constantly
            delivering value.
          </Text>
        </Column>
        <Column>
          <Text as="h3" fontSize={1}>
            Team Strength
          </Text>
          <Text as="p">
            Designers and engineers are assigned to one, full-time project. This
            allows the team to focus solely on clients' goals, internalizing a
            product vision, and taking pride and ownership in their work.
          </Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text as="h3" fontSize={1}>
            User-Centered Design
          </Text>
          <Text as="p">
            Our designs are built on a deep understanding of your business, your
            customers, and what you want to achieve.
          </Text>
        </Column>
      </Row>
    </Wrap>
  ),
};
