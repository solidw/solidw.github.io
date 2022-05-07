import "@emotion/react";

type DetailedColor = {
  // 50
  light: string;
  // 200
  main: string;
  // 400
  dark: string;
};

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      primary: DetailedColor;
      secondary: DetailedColor;
      fontColor: DetailedColor;
      background: string;
      white: string;
      black: string;
    };
  }
}
