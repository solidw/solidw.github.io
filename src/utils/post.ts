import { dateUtils } from "./date";
import { PostFrontMatters } from "#/types/Post";

export const postUtils = {
  getFileNameBase: (fileName: string) => fileName.replace(/.md$/g, ""),
  safeParseAttributes: (
    postAttributes: PostFrontMatters,
    fallbackPostAttributes: Partial<Omit<PostFrontMatters, "title">>
  ) => {
    const { title, description, draft, date } = postAttributes;
    const {
      description: fallbackDescription = "",
      draft: fallbackDraft = false,
      date: fallbackDate = dateUtils.formatDate(new Date()),
    } = fallbackPostAttributes;

    return {
      title,
      description: description ?? fallbackDescription,
      draft: draft ?? fallbackDraft,
      date: date ?? fallbackDate,
    };
  },
};
