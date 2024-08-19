import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import { PostType, PostEntity } from "../../post/types/post.types";

import useAuth from "../../../hooks/useAuth";

import PostFromList from "../../global/components/PostFromList";
import { StyledPostsSearchResults } from "../styles/PostsSearchResults.styled";
import useGetFilteredData from "../../../hooks/useGetFilteredData";

type Props = {
  searchQuery: string;
  categoryFilter: string;
};

export default function PostsSearchResults({
  searchQuery,
  categoryFilter,
}: Props) {
  const { isLogged } = useAuth();

  const {
    data: postsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery({ isLogged });
  const dispatch = useDispatch();

  const getFilteredData = useGetFilteredData();

  let postsData: PostEntity[];
  let filteredPostsData;
  if (isSuccess) {
    postsData = Object.entries(postsRawData.entities);
    const postsDataWithoutDrafts = postsData.filter((post) => {
      const postData = post[1];
      if (postData.visibility == "draft") {
        return false;
      }
      return true;
    });
    filteredPostsData = getFilteredData(postsDataWithoutDrafts, {
      searchQuery,
      categoryName: categoryFilter,
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
              postData={postData as PostType}
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
