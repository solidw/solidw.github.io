import { css, useTheme } from "@emotion/react";
import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <span
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        flex: 1;
        background-color: ${theme.palette.secondary.dark};
        border-radius: 12px;
        padding: 1rem;
        color: ${theme.palette.fontColor.main};
      `}
    >
      {children}
    </span>
  );
}
