import { useParams } from "react-router-dom";
import {
  useAddPostViewMutation,
  useGetPostByIdQuery,
} from "../slices/postsApiSlice";
import { useDispatch } from "react-redux";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import ThumbnailBar from "./ThumbnailBar";
import { useEffect } from "react";
import { StyledPost } from "../styles/Post.styled";
import PostContent from "./PostContent";
import PostInfo from "./PostInfo";

export default function Post() {
  const { id } = useParams();
  const {
    data: rawPostData,
    isLoading: isGettingLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostByIdQuery(id);
  const [addPostView, { isError: isAddPostViewError }] =
    useAddPostViewMutation();

  const dispatch = useDispatch();

  if (isError) {
    dispatch(setErrMsg(error?.data?.message));
  }

  let postData;
  let translatedVisibility;
  if (isSuccess) {
    postData = rawPostData.entities[id];

    switch (postData.visibility) {
      case "public":
        translatedVisibility = "Publiczny";
        break;
      case "private":
        translatedVisibility = "Prywatny";
        break;
      case "unlisted":
        translatedVisibility = "Niepubliczny";
        break;
      case "draft":
        translatedVisibility = "Szkic";
        break;
      case "verifiedOnly":
        translatedVisibility = "Dla zweryfikowanych";
        break;
    }
  }

  useEffect(() => {
    if (isGettingLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
      (async () => {
        await addPostView(id);
      })();
    }
  }, [isGettingLoading]);

  return (
    <StyledPost>
      {postData && (
        <>
          <ThumbnailBar thumbnailFile={postData?.thumbnail} />
          <PostInfo postData={postData} />
          <PostContent postContentData={postData?.content} />
        </>
      )}
    </StyledPost>
  );
}
