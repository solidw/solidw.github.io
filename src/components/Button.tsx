import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { neumorphismTheme } from "#/styles/theme";
import { defualtTransition } from "#/styles/utils";

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

        background: ${neumorphismTheme.background};
        box-shadow: -5px -5px 20px ${neumorphismTheme.lightShadow},
          5px 5px 20px ${neumorphismTheme.darkShadow};

        &:hover {
          box-shadow: -2px -2px 5px ${neumorphismTheme.lightShadow},
            2px 2px 5px ${neumorphismTheme.darkShadow};
        }

        &:active {
          box-shadow: inset 1px 1px 2px ${neumorphismTheme.darkShadow},
            inset -1px -1px 2px ${neumorphismTheme.lightShadow};
        }

        text-shadow: 1px 1px 0 ${neumorphismTheme.lightShadow};
      `}
      {...props}
    >
      {children}
    </button>
  );
}
