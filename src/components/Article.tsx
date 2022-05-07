import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { neumorphismTheme } from "#/styles/theme";

interface ArticleProps extends HTMLAttributes<HTMLElement> {}

export function Article({ children, ...props }: ArticleProps) {
  return (
    <article
      css={css`
        max-width: 900px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        gap: 40px;
        margin-top: 40px;

        padding: 30px;
        box-shadow: 5px 5px 20px ${neumorphismTheme.darkShadow},
          -5px -5px 20px ${neumorphismTheme.lightShadow};
      `}
      {...props}
    >
      {children}
    </article>
  );
}
