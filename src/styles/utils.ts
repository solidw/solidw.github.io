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
  inset = false
) =>
  `${inset ? "inset " : ""}${distance}px ${distance}px ${blur}px ${
    neumorphismTheme.darkShadow
  }, ${inset ? "inset " : ""}${-distance}px ${-distance}px ${blur}px ${
    neumorphismTheme.lightShadow
  }`;

export const createNeumorphismBoxShadow = (
  distance: number,
  blur: number,
  { inset = false } = {}
) => {
  const boxShadow = calcNeumorphismBoxShadow(distance, blur, inset);

  return boxShadow;
};
