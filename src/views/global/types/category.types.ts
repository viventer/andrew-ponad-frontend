export interface CategoryType {
  _id: string;
  name: string;
  __v: number;
  connectedPosts: string[];
  id: string;
  postTitles: string[];
  [key: string]: any;
}

export type CategoryEntity = [string, CategoryType];

export interface CategoriesResult {
  ids: string[];
  entities: { [id: string]: CategoryType };
}
