import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibilityFilter: "Widoczność",
  categoryFilter: "Kategoria",
  postsTabSearchQuery: "",
  roleFilter: "Wybierz rolę",
  usersTabSearchQuery: "",
};

const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState: initialState,
  reducers: {
    setVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    setPostsTabSearchQuery: (state, action) => {
      state.postsTabSearchQuery = action.payload;
    },
    setRoleFilter: (state, action) => {
      state.roleFilter = action.payload;
    },
    setUsersTabSearchQuery: (state, action) => {
      state.usersTabSearchQuery = action.payload;
    },
  },
});

export const {
  setCategoryFilter,
  setVisibilityFilter,
  setPostsTabSearchQuery,
  setRoleFilter,
  setUsersTabSearchQuery,
} = adminPanelSlice.actions;

export const selectVisibilityFilter = (state) =>
  state.adminPanel.visibilityFilter;
export const selectCategoryFilter = (state) => state.adminPanel.categoryFilter;
export const selectPostsTabSearchQuery = (state) =>
  state.adminPanel.postsTabSearchQuery;
export const selectRoleFilter = (state) => state.adminPanel.roleFilter;
export const selectUsersTabSearchQuery = (state) =>
  state.adminPanel.usersTabSearchQuery;

export default adminPanelSlice.reducer;
