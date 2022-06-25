import styled from "@emotion/styled";
import { neumorphismTheme } from "#/styles/theme";
import { createNeumorphismBoxShadow } from "#/styles/utils";

export const Blockquote = styled.blockquote`
  box-shadow: ${createNeumorphismBoxShadow(1, 2, { inset: true })};
  margin: 0;
  padding: 5px;
  border-left: 0.25em solid ${neumorphismTheme.secondary};
  line-height: 3rem;
`;
