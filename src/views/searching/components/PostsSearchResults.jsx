import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";

import useAuth from "../../../hooks/useAuth";

import PostFromList from "../../global/components/PostFromList";
import { StyledPostsSearchResults } from "../styles/PostsSearchResults.styled";

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

  let postsData;
  let filteredPostsData;
  if (isSuccess) {
    postsData = Object.entries(postsRawData.entities);
    filteredPostsData = postsData.filter((post) => {
      const postData = post[1];
      if (postData.visibility == "draft") {
        return false;
      }

      const postTitle = postData.title.toLowerCase();
      const postCategoryName = postData.category;

      const isCategoryFilterSet =
        categoryFilter != "Wybierz kategorię" && categoryFilter != "Dowolna";
      const isSearchQueryMatch = postTitle.includes(searchQuery.toLowerCase());
      const isCategoryFilterMatch = postCategoryName == categoryFilter;

      if (searchQuery && !isSearchQueryMatch) {
        return false;
      } else if (isCategoryFilterSet && !isCategoryFilterMatch) {
        return false;
      }
      return true;
    });
  }
  if (isError) {
    if (![401, 403].includes(error.status)) {
      dispatch(
        setErrMsg(
          error?.data?.message ||
            "Błąd pobierania wyników wyszukiwania. Odśwież stronę."
        )
      );
    }
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
      {filteredPostsData && filteredPostsData.length == 0 && (
        <p>Nie znaleziono postów spełniających podane kryteria wyszukiwania.</p>
      )}
    </StyledPostsSearchResults>
  );
}
