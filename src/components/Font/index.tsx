/** @jsx jsx */
import * as React from "react";
import { css, jsx, Global } from "@emotion/core";

import { GT_AMERICA, MOJO_ALTIS } from "../../../lib/font-data";
import t from "../../../lib/theme";

export default () => {
  React.useEffect(() => {
    // Typescript is not acknowledging the fontface constructor for some reaason
    // @ts-ignore
    const gt_america = new FontFace("GT America Light", `url(${GT_AMERICA})`);
    // @ts-ignore
    const mojo_altis = new FontFace("altis-mojoregular", `url(${MOJO_ALTIS}})`);
    Promise.all([mojo_altis.load(), gt_america.load()]).then(loadedFonts => {
      loadedFonts.forEach(font => {
        // also doesnt seem to know about `document.fonts`
        // @ts-ignore
        document.fonts.add(font);
      });
    });
  });

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
