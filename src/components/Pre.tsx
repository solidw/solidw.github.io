import styled from "@emotion/styled";
import { createNeumorphismBoxShadow } from "#/styles/utils";

export const Pre = styled.pre`
  box-shadow: ${createNeumorphismBoxShadow(3, 5, { inset: true })};
  border: none;
  padding: 15px;
  white-space: normal;
`;
