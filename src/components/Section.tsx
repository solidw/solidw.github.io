import { css } from "@emotion/react";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {}

export function Section({ children, ...props }: SectionProps) {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
      `}
      {...props}
    >
      {children}
    </section>
  );
}
