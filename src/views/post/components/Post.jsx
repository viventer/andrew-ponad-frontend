import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../slices/postsApiSlice";
import { useDispatch } from "react-redux";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";
import ThumbnailBar from "./ThumbnailBar";
import { useEffect } from "react";
import { StyledPost } from "../styles/Post.styled";
import PostContent from "./PostContent";

export default function Post() {
  const { id } = useParams();
  const {
    data: rawPostData,
    isLoading: isGettingLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostByIdQuery(id);

  const dispatch = useDispatch();

  if (isError) {
    dispatch(setErrMsg(error?.data?.message));
  }

  let postData;
  let translatedVisibility;
  if (isSuccess) {
    postData = rawPostData.entities[id];

    console.log(postData);

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
    }
  }, [isGettingLoading]);

  return (
    <StyledPost>
      {postData && (
        <>
          <ThumbnailBar thumbnailFile={postData?.thumbnail} />
          <PostContent postContentData={postData?.content} />
        </>
      )}
    </StyledPost>
  );
}
