import {
  QueryActionCreatorResult,
  QueryDefinition,
} from "@reduxjs/toolkit/query";
import { CategoriesResult } from "../../global/types/category.types";

export type AdminPanelState = {
  visibilityFilter: string;
  categoryFilter: string;
  postsTabSearchQuery: string;
  roleFilter: string;
  usersTabSearchQuery: string;
  statusFilter: string;
  errorReportsTabSearchQuery: string;
  categoriesTabSearchQuery: string;
};
