import { useDispatch } from "react-redux";
import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import { StyledPostsSearchResults } from "../styles/PostsSearchResults.styled";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import { useEffect } from "react";
import PostFromList from "../../global/components/PostFromList";
import useAuth from "../../../hooks/useAuth";

export default function PostsSearchResults({ searchQuery, categoryFilter }) {
  const { isLogged } = useAuth();

  const {
    data: postsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery({ isLogged });
  const dispatch = useDispatch();

  console.log(postsRawData);

  let postsData;
  let filteredPostsData;
  if (isSuccess) {
    postsData = Object.entries(postsRawData.entities);
    filteredPostsData = postsData.filter((post) => {
      const postData = post[1];
      const postTitle = postData.title.toLowerCase();
      const postCategory = postData.category;

      const isCategoryFilterSet =
        categoryFilter != "Wybierz kategorię" && categoryFilter != "dowolna";
      const isSearchQueryMatch = postTitle.includes(searchQuery.toLowerCase());
      const isCategoryFilterMatch = postCategory == categoryFilter;

      if (searchQuery && !isSearchQueryMatch) {
        return false;
      } else if (isCategoryFilterSet && !isCategoryFilterMatch) {
        return false;
      }
      return true;
    });
  }
  if (isError) {
    dispatch(setErrMsg(error));
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
    <StyledPostsSearchResults>
      {filteredPostsData &&
        filteredPostsData.map(([id, postData]) => {
          return (
            <PostFromList
              postData={postData}
              key={id}
              view="postsSearchResults"
            />
          );
        })}
    </StyledPostsSearchResults>
  );
}
