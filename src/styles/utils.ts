import { css } from "@emotion/react";
import { neumorphismTheme } from "./theme";

export const normalizeLink = css`
  text-decoration: none;
  color: inherit;
`;

export const defualtTransition = `
  transition: all 0.2s ease-in-out;
`;

const calcNeumorphismBoxShadow = (
  distance: number,
  blur: number,
  {
    shadowDark,
    shadowLight,
    inset = false,
  }: { shadowDark: string; shadowLight: string; inset?: boolean }
) =>
  `${
    inset ? "inset " : ""
  }${distance}px ${distance}px ${blur}px ${shadowDark}, ${
    inset ? "inset " : ""
  }${-distance}px ${-distance}px ${blur}px ${shadowLight}`;

export const createNeumorphismBoxShadow = (
  distance: number,
  blur: number,
  {
    inset = false,
    shadowDark = neumorphismTheme.primaryDarkShadow,
    shadowLight = neumorphismTheme.primaryLightShadow,
  } = {}
) => {
  const boxShadow = calcNeumorphismBoxShadow(distance, blur, {
    shadowDark,
    shadowLight,
    inset,
  });

  return boxShadow;
};
