import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useTranslateVisibility from "../../../hooks/useTranslateVisibility";

import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import {
  selectCategoryFilter,
  selectPostsTabSearchQuery,
  selectVisibilityFilter,
} from "../slices/adminPanelSlice";
import { useGetPostsQuery } from "../../post/slices/postsApiSlice";

import PostFromList from "./PostFromList";
import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";

export default function PostsList() {
  const {
    data: postsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  const categoryFilter = useSelector(selectCategoryFilter);
  const visibilityFilter = useSelector(selectVisibilityFilter);
  const searchQuery = useSelector(selectPostsTabSearchQuery);

  let postsData;
  let filteredPostData;
  const translateVisibility = useTranslateVisibility();
  if (isSuccess) {
    postsData = Object.entries(postsRawData.entities);
    filteredPostData = postsData.filter((post) => {
      const postData = post[1];
      const translatedVisibility = translateVisibility(
        visibilityFilter,
        "english"
      );
      const postTitle = postData.title.toLowerCase();

      const isCategoryFilterSet =
        categoryFilter != "Kategoria" && categoryFilter != "Dowolna";
      const isCategoryFilterMatch = postData.category == categoryFilter;

      const isVisibilityFilterSet =
        visibilityFilter != "Widoczność" && visibilityFilter != "Dowolna";
      const isVisibilityFilterMatch =
        postData.visibility == translatedVisibility;

      const isSearchQueryMatch = postTitle.includes(searchQuery.toLowerCase());

      if (isCategoryFilterSet && !isCategoryFilterMatch) {
        return false;
      } else if (isVisibilityFilterSet && !isVisibilityFilterMatch) {
        return false;
      } else if (searchQuery && !isSearchQueryMatch) {
        return false;
      } else {
        return true;
      }
    });
  }
  if (isError) {
    dispatch(setErrMsg(error));
  }

  const dispatch = useDispatch();

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
              thumbnail={postData.thumbnail}
              title={postData.title}
              id={id}
              key={id}
              setReloadComponent={setReloadComponent}
            />
          );
        })}
    </StyledAdminPanelList>
  );
}
