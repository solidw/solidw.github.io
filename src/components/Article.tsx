import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

interface ArticleProps extends HTMLAttributes<HTMLElement> {}

export function Article({ children, ...props }: ArticleProps) {
  return (
    <article
      css={css`
        width: 900px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        gap: 40px;
        margin-top: 40px;
      `}
      {...props}
    >
      {children}
    </article>
  );
}
