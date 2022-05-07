import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function Title({ children, ...props }: TitleProps) {
  return (
    <h1
      css={css`
        font-size: 3.2rem;
      `}
      {...props}
    >
      {children}
    </h1>
  );
}
