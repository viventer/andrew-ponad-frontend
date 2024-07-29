import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import {
  selectCategoryFilter,
  selectPostsTabSearchQuery,
  selectVisibilityFilter,
} from "../slices/adminPanelSlice";
import { useGetPostsQuery } from "../../post/slices/postsApiSlice";

import PostFromList from "../../global/components/PostFromList";
import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";
import useAuth from "../../../hooks/useAuth";
import useGetFilteredData from "../../../hooks/useGetFilteredData";

export default function PostsList() {
  const { isLogged } = useAuth();

  const {
    data: postsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery({ isLogged });

  const categoryFilter = useSelector(selectCategoryFilter);
  const visibilityFilter = useSelector(selectVisibilityFilter);
  const searchQuery = useSelector(selectPostsTabSearchQuery);

  const getFilteredData = useGetFilteredData();

  let postsData;
  let filteredPostData;
  if (isSuccess) {
    postsData = Object.entries(postsRawData.entities);
    filteredPostData = getFilteredData(postsData, {
      visibility: visibilityFilter,
      categoryName: categoryFilter,
      searchQuery: searchQuery,
    });

    console.log("tak");
  }

  const dispatch = useDispatch();
  if (isError) {
    dispatch(setErrMsg(error?.data?.message || "Błąd pobierania postów."));
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
    <StyledAdminPanelList>
      {filteredPostData &&
        filteredPostData.map(([id, postData]) => {
          return (
            <PostFromList
              postData={postData}
              key={id}
              setReloadComponent={setReloadComponent}
            />
          );
        })}
      {filteredPostData && filteredPostData.length == 0 && (
        <p>Nie znaleziono postów spełniających podane kryteria wyszukiwania.</p>
      )}
    </StyledAdminPanelList>
  );
}
