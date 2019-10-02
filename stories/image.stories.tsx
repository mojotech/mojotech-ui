import * as React from "react";
import { storiesOf } from "@storybook/react";
import Image from "../src/components/Image";

storiesOf("Image", module).add("Image", () => (
  <Image
    srcSet="https://source.unsplash.com/random/320x320 320w, https://source.unsplash.com/random/480x480 480w, https://source.unsplash.com/random/800x800 800w"
    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
    src="https://source.unsplash.com/random/800x800"
  />
));
