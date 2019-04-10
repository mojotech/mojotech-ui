import * as React from "react";
import { storiesOf } from "@storybook/react";
import Wrap from "../src/components/Wrap";
import Row from "../src/components/Row";
import Column from "../src/components/Column";
import Text from "../src/components/Text";

storiesOf("Column", module).add("Two Column", () => (
  <Wrap size={2}>
    <Row>
      <Column>
        <Text as="h3" size={2}>
          Agility
        </Text>
        <Text as="p">
          We’ve successfully built complex systems a hundred times over. We are
          able to identify issues quickly and adjust in real-time to ensure we
          are tracking well against expectations and constantly delivering
          value.
        </Text>
      </Column>
      <Column>
        <Text as="h3" size={2}>
          Team Strength
        </Text>
        <Text as="p">
          Designers and engineers are assigned to one, full-time project. This
          allows the team to focus solely on clients’ goals, internalizing a
          product vision, and taking pride and ownership in their work.
        </Text>
      </Column>
    </Row>
    <Row>
      <Column>
        <Text as="h3" size={2}>
          User-Centered Design
        </Text>
        <Text as="p">
          Our designs are built on a deep understanding of your business, your
          customers, and what you want to achieve.
        </Text>
      </Column>
      <Column>
        <Text as="h3" size={2}>
          User-Centered Design
        </Text>
        <Text as="p">
          Our designs are built on a deep understanding of your business, your
          customers, and what you want to achieve.
        </Text>
      </Column>
    </Row>
  </Wrap>
));
