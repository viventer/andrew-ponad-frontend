import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  useAddPostViewMutation,
  useGetPostByIdQuery,
} from "../slices/postsApiSlice";
import { setErrMsg, setIsLoading } from "../../global/slices/globalStatesSlice";

import ThumbnailBar from "./ThumbnailBar";
import PostContent from "./PostContent";
import PostInfo from "./PostInfo";
import { StyledPost } from "../styles/Post.styled";
import useAuth from "../../../hooks/useAuth";
import ErrorPage from "../../global/components/ErrorPage";

export default function Post() {
  const { isLogged } = useAuth();

  const { id } = useParams();
  const {
    data: rawPostData,
    isLoading: isGettingLoading,
    isSuccess,
    isError: isGetDataError,
    error: getDataError,
  } = useGetPostByIdQuery({ postId: id, isLogged });
  const [
    addPostView,
    { isError: isAddPostViewError, error: addPostViewError },
  ] = useAddPostViewMutation();

  const dispatch = useDispatch();

  let postData;
  let translatedVisibility;
  if (isSuccess && rawPostData.entities[id as string]) {
    postData = rawPostData.entities[id as string];

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
      {postData ? (
        <>
          <ThumbnailBar thumbnailFile={postData?.thumbnail} />
          <PostInfo postData={postData} />
          <PostContent postContentData={postData?.content} />
        </>
      ) : !isGettingLoading ? (
        <ErrorPage
          headingMessage="Nie masz uprawnień do tego posta."
          subheadingMessage="Zaloguj się na konto o odpowiednich uprawnieniach."
        />
      ) : null}
    </StyledPost>
  );
}
