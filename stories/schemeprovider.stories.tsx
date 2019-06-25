/** @jsx jsx */
import * as React from "react";
import { storiesOf } from "@storybook/react";
import Wrap from "../src/components/Wrap";
import { jsx } from "@emotion/core";
import Row from "../src/components/Row";
import Column from "../src/components/Column";
import SchemeProvider from "../src/components/SchemeProvider";
import Text from "../src/components/Text";

storiesOf("SchemeProvider", module).add("Schemes", () => (
  <React.Fragment>
    <SchemeProvider>
      <Wrap size={2}>
        <svg
          css={{
            height: 50,
            width: 58,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51 44"
        >
          <g fill="none" fillRule="evenodd">
            <title>MojoTech Logo</title>
            <path fill="#FFF" d="M11 9h29v25H11z" />
            <path
              fill="#00BA40"
              d="M12.744 0h25.48l12.739 21.999-12.739 22-25.486-.01L0 21.988 12.744 0zM32.68 12.892l-7.134 5.137-7.134-5.137h-3.615v18.215h6.027v-7.775l-1.112-1.81 5.834 3.753 5.835-3.753-1.113 1.81v7.775h6.027V12.892H32.68z"
            />
          </g>
        </svg>
      </Wrap>
      <Wrap size={1}>
        <Row>
          <Column>
            <Text as="h3" fontSize={1}>
              Agility
            </Text>
            <Text as="p">
              We’ve successfully built complex systems a hundred times over. We
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
              Designers and engineers are assigned to one, full-time project.
              This allows the team to focus solely on clients’ goals,
              internalizing a product vision, and taking pride and ownership in
              their work.
            </Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text as="h3" fontSize={1}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
          <Column>
            <Text as="h3" fontSize={1}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
        </Row>
      </Wrap>
    </SchemeProvider>
    <SchemeProvider scheme="light">
      <Wrap size={1}>
        <Row>
          <Column>
            <Text as="h3" fontSize={1}>
              Agility
            </Text>
            <Text as="p">
              We’ve successfully built complex systems a hundred times over. We
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
              Designers and engineers are assigned to one, full-time project.
              This allows the team to focus solely on clients’ goals,
              internalizing a product vision, and taking pride and ownership in
              their work.
            </Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text as="h3" fontSize={1}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
          <Column>
            <Text as="h3" fontSize={1}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
        </Row>
      </Wrap>
    </SchemeProvider>
    <SchemeProvider scheme="gray">
      <Wrap size={2}>
        <Row>
          <Column>
            <Text as="h3" fontSize={1}>
              Agility
            </Text>
            <Text as="p">
              We’ve successfully built complex systems a hundred times over. We
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
              Designers and engineers are assigned to one, full-time project.
              This allows the team to focus solely on clients’ goals,
              internalizing a product vision, and taking pride and ownership in
              their work.
            </Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text as="h3" fontSize={1}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
          <Column>
            <Text as="h3" fontSize={1}>
              User-Centered Design
            </Text>
            <Text as="p">
              Our designs are built on a deep understanding of your business,
              your customers, and what you want to achieve.
            </Text>
          </Column>
        </Row>
      </Wrap>
    </SchemeProvider>
  </React.Fragment>
));
