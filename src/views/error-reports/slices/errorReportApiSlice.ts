import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../redux/apiSlice.ts";
import { RootState } from "../../../redux/store.ts";
import { ErrorReportType } from "../types/errorReports.types.ts";

interface ReportsResult {
  ids: string[];
  entities: { [id: string]: ErrorReportType };
}

const errorReportAdapter = createEntityAdapter<ErrorReportType>({});

const initialState = errorReportAdapter.getInitialState();

export const errorReportApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getErrorReports: builder.query<ReportsResult, void>({
      query: () => ({
        url: "/errorReports",
        validateStatus: (response: Response, result: ErrorReportType) => {
          return response.status === 200;
        },
      }),
      transformResponse: (responseData: ErrorReportType[]) => {
        const loadedReports = responseData.map((report) => {
          report.id = report._id;
          return report;
        });
        return errorReportAdapter.setAll(initialState, loadedReports);
      },
    }),
    getErrorReportById: builder.query<ReportsResult, { id: string }>({
      query: ({ id }) => ({
        url: `/errorReports/${id}`,
        validateStatus: (response: Response, result: ErrorReportType) => {
          return response.status === 200;
        },
      }),
      transformResponse: (responseData: ErrorReportType) => {
        const report = { ...responseData, id: responseData._id };
        return errorReportAdapter.setOne(initialState, report);
      },
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
  errorReportApiSlice.endpoints.getErrorReportById.select({ id: "" });

const selectErrorReportsData = createSelector(
  selectErrorReportsResult,
  (errorReportsResult) => errorReportsResult.data
);

const selectErrorReportByIdData = createSelector(
  selectErrorReportByIdResult,
  (errorReportResult) => errorReportResult.data
);

export const {
  selectAll: selectAllErrorReports,
  selectIds: selectErrorReportIds,
} = errorReportAdapter.getSelectors(
  (state: RootState) => selectErrorReportsData(state) ?? initialState
);

export const selectErrorReportById = (state: RootState, id: string) =>
  selectErrorReportByIdData(state)?.entities?.[id] ?? null;
