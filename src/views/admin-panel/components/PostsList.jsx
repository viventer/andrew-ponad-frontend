import { useDispatch } from "react-redux";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import { useGetPostsQuery } from "../../post/slices/postsApiSlice";
import { StyledPostsList } from "../styles/PostsTab.styled";
import PostFromList from "./PostFromList";
import { useEffect } from "react";

export default function PostsList() {
  const {
    data: postsRawData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  let postsData;
  if (isSuccess) {
    postsData = Object.entries(postsRawData.entities);
    console.log(postsData);
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
    <StyledPostsList>
      {postsData &&
        postsData.map(([id, postData]) => {
          return (
            <PostFromList
              thumbnail={postData.thumbnail}
              title={postData.title}
              id={id}
              key={id}
            />
          );
        })}
    </StyledPostsList>
  );
}
