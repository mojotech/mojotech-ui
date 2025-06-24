import { css } from "@emotion/react";
import AutoGrid from "../src/components/AutoGrid";

const styles = css({
  backgroundColor: "gainsboro",
  height: 200,
  width: "100%",
});

const meta = {
  title: "AutoGrid",
  component: AutoGrid,
};

export default meta;

export const Grid = {
  render: () => (
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
  ),
};
