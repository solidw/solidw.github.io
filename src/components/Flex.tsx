import { css } from "@emotion/react";
import { CSSProperties, HTMLProps, ReactNode } from "react";

type Direction = "row" | "column";

interface FlexProps extends HTMLProps<HTMLDivElement> {
  direction?: Direction;
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  children?: ReactNode;
}

export function Flex({
  direction = "row",
  justify = "flex-start",
  align = "flex-start",
  children,
  ...props
}: FlexProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
      `}
      {...props}
    >
      {children}
    </div>
  );
}
