interface Colors {
  mojogreen: string;
  black: string;
}

interface ThemeInterface {
  colors: Colors;
}

const theme: ThemeInterface = {
  colors: {
    mojogreen: "#00ba40",
    black: "#171c1f",
  },
};

export default theme;
