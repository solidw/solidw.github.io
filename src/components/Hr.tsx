import { css } from "@emotion/react";
import { neumorphismTheme } from "#/styles/theme";

export function Hr() {
  return (
    <hr
      css={css`
        height: 1px;
        box-shadow: 0px 4px 2px -2px ${neumorphismTheme.black};
        margin: 5px 0px;
      `}
    />
  );
}
