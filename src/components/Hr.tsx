import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

interface HrProps extends HTMLAttributes<HTMLHRElement> {}

export function Hr(props: HrProps) {
  return (
    <hr
      css={css`
        height: 1px;
        margin: 5px 0px;
      `}
      {...props}
    />
  );
}
