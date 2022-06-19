import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { createNeumorphismBoxShadow } from "#/styles/utils";

interface ArticleProps extends HTMLAttributes<HTMLElement> {}

export function Article({ children, ...props }: ArticleProps) {
  return (
    <article
      css={css`
        max-width: 900px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-top: 40px;
        border-radius: 15px;
        padding: 30px;
        box-shadow: ${createNeumorphismBoxShadow(3, 5)};
      `}
      {...props}
    >
      {children}
    </article>
  );
}
