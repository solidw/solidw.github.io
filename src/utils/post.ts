import frontMatterParser from "front-matter";
import { dateUtils } from "./date";
import { PostAttributes } from "#/types/Post";

function validatePostAttributes(
  postAttributes: Partial<PostAttributes>
): asserts postAttributes is PostAttributes {
  if (postAttributes.title == null) {
    throw new Error("title은 반드시 입력해야 합니다.");
  }
}

export const postUtils = {
  getFileNameBase: (fileName: string) => fileName.replace(/.md$/g, ""),
  parseFrontMatter: (
    data: string
  ): { attributes: PostAttributes; body: string } => {
    const { attributes, body } =
      frontMatterParser<Partial<PostAttributes>>(data);

    validatePostAttributes(attributes);

    return { attributes, body };
  },
  safeParseAttributes: (
    postAttributes: PostAttributes,
    fallbackPostAttributes: Omit<PostAttributes, "title">
  ): Required<PostAttributes> => {
    const defaultAttributes = {
      title: postAttributes.title,
      description: fallbackPostAttributes.description ?? "",
      draft: fallbackPostAttributes.draft ?? false,
      timestamp:
        fallbackPostAttributes.timestamp ?? dateUtils.formatDate(new Date()),
      to: "누구나",
    };

    return {
      title: postAttributes.title,
      description: postAttributes.description ?? defaultAttributes.description,
      draft: postAttributes.draft ?? defaultAttributes.draft,
      timestamp: postAttributes.timestamp ?? defaultAttributes.timestamp,
      to: postAttributes.to ?? defaultAttributes.to,
    };
  },
};
