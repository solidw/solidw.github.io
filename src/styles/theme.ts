import { Theme } from "@emotion/react";

const PURPLE = {
  50: "#e8e6ff",
  100: "#c4c1ff",
  200: "#9999ff",
  300: "#6e71f5",
  400: "#5352e4",
  500: "#3931d3",
  600: "#3428c8",
  700: "#2b1bbb",
  800: "#2509ae",
  900: "#1a0096",
};

const BURGUNDY = {
  50: "#f8e5ea",
  100: "#f0bdcb",
  200: "#e793aa",
  300: "#dd6c8a",
  400: "#d55373",
  500: "#d13d5d",
  600: "#c1395a",
  700: "#ac3454",
  800: "#982f4f",
  900: "#742546",
};

const GREY = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
};

const WHITE = "#ffffff";
const BLACK = "#000000";

export const theme: Theme = {
  palette: {
    primary: {
      light: PURPLE[100],
      main: PURPLE[200],
      dark: PURPLE[400],
    },
    secondary: {
      light: BURGUNDY[100],
      main: BURGUNDY[200],
      dark: BURGUNDY[400],
    },
    background: GREY[50],
    fontColor: {
      light: GREY[100],
      main: GREY[200],
      dark: GREY[400],
    },
    white: WHITE,
    black: BLACK,
  },
};

export type Variant = "primary" | "secondary";

export const neumorphismTheme = {
  primary: "#d6d7ff",
  primaryLightShadow: "#f6f7ff",
  primaryDarkShadow: "#b6b7d9",
  primaryText: "#001f3f",

  secondary: "#6667AB",
  secondaryLightShadow: "#7576c5",
  secondaryDarkShadow: "#575891",
  secondaryText: "#F6F5F7",

  white: WHITE,
  black: BLACK,
};
