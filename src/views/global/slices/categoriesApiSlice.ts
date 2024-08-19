import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../../redux/apiSlice.ts";
import { RootState } from "../../../redux/store";
import { CategoryType } from "../types/category.types.ts";

interface CategoriesResult {
  ids: string[];
  entities: { [id: string]: CategoryType };
}

type Tag = { type: string; id: string };

const categoriesAdapter = createEntityAdapter<CategoryType>({});

const initialState = categoriesAdapter.getInitialState();

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoriesResult, void>({
      query: () => ({
        url: "/categories",
        validateStatus: (response: Response, result: CategoryType[]) => {
          return response.status === 200;
        },
      }),
      transformResponse: (responseData: CategoryType[]) => {
        const loadedCategories = responseData.map((category) => {
          category.id = category._id;
          return category;
        });
        return categoriesAdapter.setAll(initialState, loadedCategories);
      },
    }),
    getCategoryById: builder.query({
      query: (id) => ({
        url: `/categories/${id}`,
        validateStatus: (response: Response, result: CategoryType) => {
          return response.status === 200;
        },
      }),
      transformResponse: (responseData: CategoryType) => {
        const category = { ...responseData, id: responseData._id };
        return categoriesAdapter.setOne(initialState, category);
      },
      providesTags: (result, error, id) => [{ type: "Category", id }],
    }),
    createNewCategory: builder.mutation({
      query: (name: string) => ({
        url: "/categories",
        method: "POST",
        body: {
          name,
        },
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),
    changeCategoryName: builder.mutation({
      query: ({ id, newName }: { id: string; newName: string }) => ({
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
  useGetCategoryByIdQuery,
  useCreateNewCategoryMutation,
  useDeleteCategoryMutation,
  useChangeCategoryNameMutation,
} = categoriesApiSlice;

export const selectCategoriesResult =
  categoriesApiSlice.endpoints.getAllCategories.select();

const selectCategoryByIdResult = (state: RootState, categoryId: string) =>
  categoriesApiSlice.endpoints.getCategoryById.select(categoryId)(state);

const selectCategoriesData = createSelector(
  selectCategoriesResult,
  (categoriesResult) => categoriesResult.data
);

const selectCategoryByIdData = createSelector(
  selectCategoryByIdResult,
  (categoryResult) => categoryResult.data
);

export const { selectAll: selectAllCategories, selectIds: selectCategoryIds } =
  categoriesAdapter.getSelectors(
    (state: RootState) => selectCategoriesData(state) ?? initialState
  );

export const selectCategoryById = (state: RootState, categoryId: string) =>
  selectCategoryByIdData(state, categoryId)?.entities[categoryId] ??
  initialState;
