import { HTMLAttributes } from "react";
import { Stack } from "./Stack";

interface ViewCountProps extends HTMLAttributes<HTMLImageElement> {
  count: number;
}

export function ViewCount({ count, ...props }: ViewCountProps) {
  return (
    <Stack align="center" spacing={10} css={{ marginRight: 5 }}>
      <img src="/icons/view.png" width={20} height={20} alt="view" {...props} />
      <span css={{ fontSize: "1.6rem" }}>{count}</span>
    </Stack>
  );
}
