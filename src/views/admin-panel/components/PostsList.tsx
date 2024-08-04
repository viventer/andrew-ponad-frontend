import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import {
  selectCategoryFilter,
  selectPostsTabSearchQuery,
  selectVisibilityFilter,
} from "../slices/adminPanelSlice";
import {
  Post,
  PostEntity,
  useGetPostsQuery,
} from "../../post/slices/postsApiSlice";

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

  let postsData: PostEntity[];
  let filteredPostData;
  if (isSuccess) {
    postsData = Object.entries(postsRawData.entities);
    filteredPostData = getFilteredData(postsData, {
      visibility: visibilityFilter,
      categoryName: categoryFilter,
      searchQuery: searchQuery,
    });
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
              postData={postData as Post}
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
