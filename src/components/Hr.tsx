import { css } from "@emotion/react";

export function Hr() {
  return (
    <hr
      css={css`
        height: 1px;
        margin: 5px 0px;
      `}
    />
  );
}
