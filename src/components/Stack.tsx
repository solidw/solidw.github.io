import { css } from "@emotion/react";
import { ComponentProps, ReactNode } from "react";
import { Flex } from "./Flex";

interface StackProps extends ComponentProps<typeof Flex> {
  spacing?: number;
  children?: ReactNode;
}

export function Stack({ spacing = 20, children, ...props }: StackProps) {
  return (
    <Flex
      css={css`
        gap: ${spacing}px;
      `}
      {...props}
    >
      {children}
    </Flex>
  );
}

Stack.Vertical = function ({
  children,
  ...props
}: Omit<StackProps, "direction"> & { children?: ReactNode }) {
  return (
    <Stack direction='column' {...props}>
      {children}
    </Stack>
  );
};

Stack.Horizontal = function ({
  children,
  ...props
}: Omit<StackProps, "direction"> & { children?: ReactNode }) {
  return (
    <Stack direction='row' {...props}>
      {children}
    </Stack>
  );
};
