export interface PostAttributes {
  title: string;
  description: string;
  draft: boolean;
  date: string;
}

export interface PostFrontMatters extends Partial<PostAttributes> {
  title: PostAttributes["title"];
}

export interface PostSummary extends Omit<PostAttributes, "draft"> {
  path: string;
}
