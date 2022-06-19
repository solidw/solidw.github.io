import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { neumorphismTheme, Variant } from "#/styles/theme";
import { createNeumorphismBoxShadow, defualtTransition } from "#/styles/utils";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      css={css`
        padding: 8px 20px;
        font-size: 1.6rem;
        border-radius: 8px;
        border: none;

        ${defualtTransition};
        color: ${variant === "primary"
          ? neumorphismTheme.primaryText
          : neumorphismTheme.secondaryText};
        background: ${neumorphismTheme[variant]};
        box-shadow: ${createNeumorphismBoxShadow(5, 10)};

        &:hover {
          box-shadow: ${createNeumorphismBoxShadow(2, 5)};
        }

        &:active {
          box-shadow: ${createNeumorphismBoxShadow(1, 2, {
            inset: true,
          })};
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
}
