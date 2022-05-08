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
        margin-top: 40px;

        padding: 30px;
        box-shadow: 3px 3px 5px ${neumorphismTheme.darkShadow},
          -3px -3px 5px ${neumorphismTheme.lightShadow};
      `}
      {...props}
    >
      {children}
    </article>
  );
}
