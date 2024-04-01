import { useDispatch } from "react-redux";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import PostFromList from "./PostFromList";
import { useEffect } from "react";
import useTranslateVisibility from "../../../hooks/useTranslateVisibility";
import { StyledAdminPanelList } from "../styles/AdminPanelList.styled";

export default function PostsList({
  categoryFilter,
  visibilityFilter,
  searchQuery,
}) {
  const {
    data: postsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

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
      } else if (searchQuery && !postData.title.includes(searchQuery)) {
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
            />
          );
        })}
    </StyledAdminPanelList>
  );
}
