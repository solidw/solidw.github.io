import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { createNeumorphismBoxShadow } from "#/styles/utils";

interface ArticleProps extends HTMLAttributes<HTMLElement> {}

export function Block({ children, ...props }: ArticleProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        padding: 20px;
        box-shadow: ${createNeumorphismBoxShadow(3, 5)};
      `}
      {...props}
    >
      {children}
    </div>
  );
}
