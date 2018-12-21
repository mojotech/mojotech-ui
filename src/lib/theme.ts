interface Colors {
  mojogreen: string;
  black: string;
}

export interface ThemeInterface {
  colors: Colors;
}

const theme: ThemeInterface = {
  colors: {
    mojogreen: "#00ba40",
    black: "#171c1f",
  },
};

export default theme;
