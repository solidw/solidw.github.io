import { css } from "@emotion/react";

export const setup = css`
  @font-face {
    font-family: "VitroCore";
    src: local("/fonts/VitroCore.ttf"), url("/fonts/VitroCore.ttf");
  }

  @font-face {
    font-family: "VitroPride";
    src: local("/fonts/VitroPride.ttf"), url("/fonts/VitroPride.ttf");
  }

  body {
    font-family: "VitroPride", "VitroCore", "SpoqaHanSansRegular", Arial,
      Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  html {
    font-size: 62.5%;
  }
`;
