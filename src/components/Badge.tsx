import { css } from "@emotion/react";
import { HTMLAttributes } from "react";
import { neumorphismTheme, theme } from "#/styles/theme";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "small" | "medium";
}

const sizeToCss = (size: BadgeProps["size"]) => {
  switch (size) {
    case "small":
      return {
        padding: "0.5rem 1rem",
        fontSize: "1.4rem",
      };
    case "medium":
      return {
        padding: "0.75rem 1.5rem",
        fontSize: "1.6rem",
      };
  }
};

export function Badge({ size = "medium", children, ...props }: BadgeProps) {
  return (
    <span
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        background-color: ${neumorphismTheme.primary};
        color: ${neumorphismTheme.white};
        border-radius: 16px;
        ${sizeToCss(size)}
      `}
      {...props}
    >
      {children}
    </span>
  );
}
