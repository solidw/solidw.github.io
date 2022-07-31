export interface PostAttributes {
  id: number;
  title: string;
  description?: string;
  to?: string;
  draft?: boolean;
  timestamp?: string;
}

export interface PostRenderMeatData extends Required<PostAttributes> {
  path: string;
}

export interface PostDto {
  id: number;
  views: number;
}
