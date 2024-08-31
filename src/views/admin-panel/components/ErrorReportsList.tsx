import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetErrorReportsQuery } from "../../error-reports/slices/errorReportApiSlice";
import {
  selectErrorReportsTabSearchQuery,
  selectStatusFilter,
} from "../slices/adminPanelSlice";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";

import { ErrorReportType } from "../../error-reports/types/errorReport.types";
import { ErrorReportEntity } from "../../error-reports/types/errorReport.types";

import ErrorReportFromList from "./ErrorReportFromList";
import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";
import useGetFilteredData from "../../../hooks/useGetFilteredData";

export default function ErrorReportsList() {
  const {
    data: errorReportsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetErrorReportsQuery();

  const statusFilter = useSelector(selectStatusFilter);
  const searchQuery = useSelector(selectErrorReportsTabSearchQuery);
  const getFilteredData = useGetFilteredData();

  let reportsData: ErrorReportEntity[];
  let filteredReportsData;
  if (isSuccess) {
    reportsData = Object.entries(errorReportsRawData.entities);
    filteredReportsData = getFilteredData(reportsData, {
      status: statusFilter,
      searchQuery,
    });
  }

  const dispatch = useDispatch();
  if (isError) {
    dispatch(setErrMsg(error?.data?.message || "Błąd pobierania zgłoszeń."));
  }

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

  return (
    <StyledAdminPanelList className="errorReportsList">
      {filteredReportsData &&
        filteredReportsData.map(([id, reportData]) => {
          return (
            <ErrorReportFromList
              reportData={reportData as ErrorReportType}
              key={id}
              refetch={refetch}
            />
          );
        })}
      {filteredReportsData && filteredReportsData.length == 0 && (
        <p>
          Nie znaleziono zgłoszeń spełniających podane kryteria wyszukiwania.
        </p>
      )}
    </StyledAdminPanelList>
  );
}
