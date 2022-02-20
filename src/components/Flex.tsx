import { css } from "@emotion/react";
import { HTMLAttributes, ReactNode } from "react";

type Direction = "row" | "column";

type AlignmentOption =
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "left"
  | "right"
  | "normal"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: Direction;
  justify?: AlignmentOption;
  align?: AlignmentOption;
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
