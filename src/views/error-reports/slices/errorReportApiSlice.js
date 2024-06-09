import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../redux/apiSlice";

const errorReportAdapter = createEntityAdapter({});

const initialState = errorReportAdapter.getInitialState();

export const errorReportApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getErrorReports: builder.query({
      query: () => ({
        url: "/errorReports",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedReports = responseData.map((report) => {
          report.id = report._id;
          return report;
        });
        return errorReportAdapter.setAll(initialState, loadedReports);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "ErrorReport", id: "LIST" },
            ...result.ids.map((id) => ({ type: "ErrorReport", id })),
          ];
        } else return [{ type: "ErrorReport", id: "LIST" }];
      },
    }),
    getErrorReportById: builder.query({
      query: ({ id }) => ({
        url: `/errorReports/${id}`,
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const report = { ...responseData, id: responseData._id };
        return errorReportAdapter.setOne(initialState, report);
      },
      providesTags: (result, error, id) => [{ type: "ErrorReport", id }],
    }),
    changeErrorReportStatus: builder.mutation({
      query: ({ id, newStatus }) => ({
        url: `/errorReports/${id}`,
        method: "PATCH",
        body: JSON.stringify({ newStatus }),
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "ErrorReport", id: arg.id },
      ],
    }),
    deleteErrorReport: builder.mutation({
      query: (id) => ({
        url: `/errorReports/${id}`,
        method: "DELETE",
      }),
    }),
    createNewErrorReport: builder.mutation({
      query: (errorReportData) => ({
        url: "/errorReports",
        method: "POST",
        body: { ...errorReportData },
      }),
      invalidatesTags: [{ type: "ErrorReport", id: "LIST" }],
    }),
  }),
});

export const {
  useGetErrorReportsQuery,
  useGetErrorReportByIdQuery,
  useChangeErrorReportStatusMutation,
  useDeleteErrorReportMutation,
  useCreateNewErrorReportMutation,
} = errorReportApiSlice;

export const selectErrorReportsResult =
  errorReportApiSlice.endpoints.getErrorReports.select();
const selectErrorReportByIdResult =
  errorReportApiSlice.endpoints.getErrorReportById.select();

const selectErrorReportsData = createSelector(
  selectErrorReportsResult,
  (errorReportsResult) => errorReportsResult.data
);

const selectPostByIdData = createSelector(
  selectErrorReportByIdResult,
  (errorReportResult) => errorReportResult.data
);

export const {
  selectAll: selectAllErrorReports,
  selectIds: selectErrorReportIds,
} = errorReportAdapter.getSelectors(
  (state) => selectErrorReportsData(state) ?? initialState
);

export const selectErrorReportById = (state, id) =>
  errorReportAdapter
    .getSelectors()
    .selectById(selectErrorReportByIdData(state), id) ?? initialState;
