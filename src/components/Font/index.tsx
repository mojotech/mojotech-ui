/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";

import { GT_AMERICA, MOJO_ALTIS } from "lib/font-data";
import t from "lib/theme";

export default () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "altis-mojoregular";
          font-display: block;
          font-weight: normal;
          font-style: normal;
          src: url(${MOJO_ALTIS}) format("woff");
        }
        @font-face {
          font-family: "GT America Light";
          font-display: block;
          src: url(${GT_AMERICA}) format("woff");
        }
        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body {
          font-family: ${t.fonts.display};
        }
      `}
    />
  );
};
