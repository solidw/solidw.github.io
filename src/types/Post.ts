import { AnyObject } from ".";

export interface PostAttributes extends AnyObject {
  title: string;
  description?: string;
  to?: string;
  draft?: boolean;
  timestamp?: string;
}

export interface PostRenderMeatData extends Required<PostAttributes> {
  path: string;
}
