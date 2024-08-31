export interface PostType {
  __v: number;
  _id: string;
  postNumber: number;
  author: string;
  category: string;
  categoryName: string;
  content: PostRowType[];
  createdAt: string;
  id: string;
  thumbnail: string;
  title: string;
  updatedAt?: string;
  views: number;
  visibility: string;
  [key: string]: any;
}

export type PostEntity = [string, PostType];

export type PostRowElementType = "textEditor" | "image" | "video" | "none";

export interface PostRowElement {
  type: PostRowElementType;
  textEditorContent?: string;
  imagePreview?: null | string;
  videoUrl?: string;
}

export type PostRowType = PostRowElement[];

export interface PostsResult {
  ids: string[];
  entities: { [id: string]: PostType };
}
