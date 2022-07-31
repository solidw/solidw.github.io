import { useMutation } from "@tanstack/react-query";
import { apiClient } from "#/lib/apiClient";

useIncreasePostViews.mutationKey = "posts/{postId}/views/increment" as const;

// TODO: sessionId로 반복 요청 막아두기
export function useIncreasePostViews(id: number) {
  return useMutation([useIncreasePostViews.mutationKey], async () => {
    return apiClient.patch(`posts/${id}/views/increment`);
  });
}
