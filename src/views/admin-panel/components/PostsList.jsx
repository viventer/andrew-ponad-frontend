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

      if (
        categoryFilter != "Kategoria" &&
        categoryFilter != "Dowolna" &&
        postData.category != categoryFilter
      ) {
        return false;
      } else if (
        visibilityFilter != "Widoczność" &&
        visibilityFilter != "Dowolna" &&
        postData.visibility != translatedVisibility
      ) {
        return false;
      } else if (
        searchQuery &&
        !postTitle.includes(searchQuery.toLowerCase())
      ) {
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
