import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AdminPanelState = {
  visibilityFilter: string;
  categoryFilter: string;
  postsTabSearchQuery: string;
  roleFilter: string;
  usersTabSearchQuery: string;
  statusFilter: string;
  errorReportsTabSearchQuery: string;
  categoriesTabSearchQuery: string;
};

const initialState: AdminPanelState = {
  visibilityFilter: "Widoczność",
  categoryFilter: "Kategoria",
  postsTabSearchQuery: "",
  roleFilter: "Wybierz rolę",
  usersTabSearchQuery: "",
  statusFilter: "Wybierz status",
  errorReportsTabSearchQuery: "",
  categoriesTabSearchQuery: "",
};

const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState,
  reducers: {
    setVisibilityFilter: (state, action: PayloadAction<string>) => {
      state.visibilityFilter = action.payload;
    },
    setCategoryFilter: (state, action: PayloadAction<string>) => {
      state.categoryFilter = action.payload;
    },
    setPostsTabSearchQuery: (state, action: PayloadAction<string>) => {
      state.postsTabSearchQuery = action.payload;
    },
    setRoleFilter: (state, action: PayloadAction<string>) => {
      state.roleFilter = action.payload;
    },
    setUsersTabSearchQuery: (state, action: PayloadAction<string>) => {
      state.usersTabSearchQuery = action.payload;
    },
    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.statusFilter = action.payload;
    },
    setErrorReportsTabSearchQuery: (state, action: PayloadAction<string>) => {
      state.errorReportsTabSearchQuery = action.payload;
    },
    setCategoriesTabSearchQuery: (state, action: PayloadAction<string>) => {
      state.categoriesTabSearchQuery = action.payload;
    },
  },
});

export const {
  setCategoryFilter,
  setVisibilityFilter,
  setPostsTabSearchQuery,
  setRoleFilter,
  setUsersTabSearchQuery,
  setStatusFilter,
  setErrorReportsTabSearchQuery,
  setCategoriesTabSearchQuery,
} = adminPanelSlice.actions;

export const selectVisibilityFilter = (state: {
  adminPanel: AdminPanelState;
}) => state.adminPanel.visibilityFilter;
export const selectCategoryFilter = (state: { adminPanel: AdminPanelState }) =>
  state.adminPanel.categoryFilter;
export const selectPostsTabSearchQuery = (state: {
  adminPanel: AdminPanelState;
}) => state.adminPanel.postsTabSearchQuery;
export const selectRoleFilter = (state: { adminPanel: AdminPanelState }) =>
  state.adminPanel.roleFilter;
export const selectUsersTabSearchQuery = (state: {
  adminPanel: AdminPanelState;
}) => state.adminPanel.usersTabSearchQuery;
export const selectStatusFilter = (state: { adminPanel: AdminPanelState }) =>
  state.adminPanel.statusFilter;
export const selectErrorReportsTabSearchQuery = (state: {
  adminPanel: AdminPanelState;
}) => state.adminPanel.errorReportsTabSearchQuery;
export const selectCategoriesTabSearchQuery = (state: {
  adminPanel: AdminPanelState;
}) => state.adminPanel.categoriesTabSearchQuery;

export default adminPanelSlice.reducer;
