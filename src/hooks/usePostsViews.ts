import { useQuery } from "@tanstack/react-query";
import { apiClient } from "#/lib/apiClient";
import { objectifyById } from "#/lib/objectifyBy";
import { PostDto } from "#/types/Post";

usePostsViews.queryKey = "posts/views" as const;

export function usePostsViews() {
  const query = useQuery([usePostsViews.queryKey], () =>
    apiClient.get<PostDto[]>("posts")
  );
  const posts = query.data ?? [];

  return objectifyById(posts);
}
