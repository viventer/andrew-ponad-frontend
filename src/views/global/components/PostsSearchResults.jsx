import { useDispatch } from "react-redux";
import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import { StyledPostsSearchResults } from "../styles/PostsSearchResults.styled";
import { setErrMsg, setIsLoading } from "../slices/globalStatesSlice";
import { useEffect } from "react";
import PostFromSearchResults from "./PostFromSearchResults";
import PostFromList from "../../admin-panel/components/PostFromList";

export default function PostsSearchResults({ searchQuery, categoryFilter }) {
  const {
    data: postsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();
  const dispatch = useDispatch();

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
  console.log(filteredPostsData);

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
          return <PostFromSearchResults postData={postData} key={id} />;
        })}
    </StyledPostsSearchResults>
  );
}
