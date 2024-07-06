import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useTranslateErrorReportsStatus from "../../../hooks/useTranslateErrorReportsStatus";

import { useGetErrorReportsQuery } from "../../error-reports/slices/errorReportApiSlice";
import {
  selectErrorReportsTabSearchQuery,
  selectStatusFilter,
} from "../slices/adminPanelSlice";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";

import ErrorReportFromList from "./ErrorReportFromList";
import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";

export default function ErrorReportsList() {
  const {
    data: errorReportsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetErrorReportsQuery();

  const statusFilter = useSelector(selectStatusFilter);
  const searchQuery = useSelector(selectErrorReportsTabSearchQuery);

  let reportsData;
  let filteredReportsData;
  const translateStatus = useTranslateErrorReportsStatus();
  if (isSuccess) {
    reportsData = Object.entries(errorReportsRawData.entities);
    filteredReportsData = reportsData.filter((report) => {
      const reportData = report[1];
      const translatedStatus = translateStatus(statusFilter, "english");
      const reportTitle = reportData.title.toLowerCase();

      const isStatusFilterSet =
        statusFilter != "Wybierz status" && statusFilter != "Dowolny";
      const isStatusFilterMatch = reportData.status == translatedStatus;

      const isSearchQueryMatch = reportTitle.includes(
        searchQuery.toLowerCase()
      );

      if (isStatusFilterSet && !isStatusFilterMatch) {
        return false;
      } else if (searchQuery && !isSearchQueryMatch) {
        return false;
      } else {
        return true;
      }
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

  const [reloadComponent, setReloadComponent] = useState(false);

  return (
    <StyledAdminPanelList className="errorReportsList">
      {filteredReportsData &&
        filteredReportsData.map(([id, reportData]) => {
          return (
            <ErrorReportFromList
              reportData={reportData}
              key={id}
              setReloadComponent={setReloadComponent}
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
