import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { neumorphismTheme } from "#/styles/theme";
import { createNeumorphismBoxShadow, defualtTransition } from "#/styles/utils";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      css={css`
        padding: 8px 20px;
        font-size: 1.6rem;
        border-radius: 8px;
        border: none;

        ${defualtTransition};
        color: ${neumorphismTheme.text};
        background: ${neumorphismTheme.background};
        box-shadow: ${createNeumorphismBoxShadow(4, 10)};

        &:hover {
          box-shadow: ${createNeumorphismBoxShadow(2, 5)};
        }

        &:active {
          box-shadow: ${createNeumorphismBoxShadow(1, 2, { inset: true })};
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
}
