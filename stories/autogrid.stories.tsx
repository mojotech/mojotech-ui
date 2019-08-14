/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { storiesOf } from "@storybook/react";
import AutoGrid from "../src/components/AutoGrid";

const styles = css({
  backgroundColor: "gainsboro",
  height: 200,
  width: "100%",
});

storiesOf("AutoGrid", module).add("Grid", () => (
  <AutoGrid>
    <div css={styles} />
    <div css={styles} />
    <div css={styles} />
    <div css={styles} />
    <div css={styles} />
    <div css={styles} />
    <div css={styles} />
    <div css={styles} />
    <div css={styles} />
    <div css={styles} />
  </AutoGrid>
));
