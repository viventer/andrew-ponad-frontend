import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../../redux/apiSlice";

const categoriesAdapter = createEntityAdapter({});

const initialState = categoriesAdapter.getInitialState();

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: "/categories",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedCategories = responseData.map((category) => {
          category.id = category._id;
          return category;
        });
        return categoriesAdapter.setAll(initialState, loadedCategories);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Category", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Category", id })),
          ];
        }
      },
    }),
    createNewCategory: builder.mutation({
      query: (name) => ({
        url: "/categories",
        method: "POST",
        body: {
          name,
        },
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),
    changeCategoryName: builder.mutation({
      query: ({ id, newName }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: {
          newName,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        {
          type: "Category",
          id: arg.id,
        },
      ],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Category", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateNewCategoryMutation,
  useDeleteCategoryMutation,
  useChangeCategoryNameMutation,
} = categoriesApiSlice;

export const selectCategoriesResult =
  categoriesApiSlice.endpoints.getAllCategories.select();

const selectCategoriesData = createSelector(
  selectCategoriesResult,
  (categoriesResult) => categoriesResult.data
);

export const { selectAll: selectAllCategories, selectIds: selectCategoryIds } =
  categoriesAdapter.getSelectors(
    (state) => selectCategoriesData(state) ?? initialState
  );
