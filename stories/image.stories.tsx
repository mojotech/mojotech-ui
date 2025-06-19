import * as React from "react";
import Image from "../src/components/Image";

const meta = {
  title: "Image",
  component: Image,
};

export default meta;

export const Default = {
  render: () => (
    <Image
      srcSet="https://source.unsplash.com/random/320x320 320w, https://source.unsplash.com/random/480x480 480w, https://source.unsplash.com/random/800x800 800w"
      sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
      src="https://source.unsplash.com/random/800x800"
    />
  ),
};
