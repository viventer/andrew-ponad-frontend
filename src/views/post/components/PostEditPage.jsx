import { useDispatch, useSelector } from "react-redux";
import {
  resetPostState,
  selectEditedPostId,
  setEditedPostId,
  setPostCategory,
  setPostRows,
  setPostTitle,
  setPostVisibility,
  setThumbnailPreview,
} from "../slices/postSlice";
import { useEffect } from "react";
import {
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from "../slices/postsApiSlice";
import {
  setErrMsg,
  setIsLoading,
  setSuccessMsg,
} from "../../global/slices/globalStatesSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PostEditForm from "./PostEditForm";

export default function PostEditPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();

  const editedPostId = useSelector(selectEditedPostId);

  const { id } = useParams();
  const {
    data: rawPostData,
    isLoading: isGettingLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostByIdQuery(id, {
    skip: editedPostId == id,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setEditedPostId(id));
    }
  }, [isSuccess, id]);

  if (isError) {
    dispatch(setErrMsg(error?.data?.message));
  }

  if (isSuccess) {
    const postData = rawPostData.entities[id];
    dispatch(setThumbnailPreview(postData.thumbnail));
    dispatch(setPostTitle(postData.title));
    dispatch(setPostRows(postData.content));
    dispatch(setPostCategory(postData.category));

    let translatedVisibility;
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

    dispatch(setPostVisibility(translatedVisibility));
  }

  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const editPost = async (postData) => {
    try {
      await updatePost({ postId: id, postData }).unwrap();
      dispatch(resetPostState());
      dispatch(setSuccessMsg("Zmiany zostały zapisane"));
      navigate(from, { replace: true });
    } catch (err) {
      handleEditPostError(err);
    }
  };

  const handleEditPostError = (err) => {
    if (
      (!err?.originalStatus && !err?.status) ||
      err?.status === "FETCH_ERROR"
    ) {
      console.log(err);
      dispatch(setErrMsg("Brak odpowiedzi serwera"));
    } else if (err.originalStatus === 400 || err.status === 400) {
      dispatch(setErrMsg("Uzupełnij wymagane pola"));
    } else if (err.status === 409 || err.originalStatus === 409) {
      dispatch(setErrMsg("Post o takim tytule już istnieje"));
    } else if (err.status === 403 || err.originalStatus === 403) {
      dispatch(setErrMsg("Nie masz uprawnień do edycji posta"));
    }
  };

  useEffect(() => {
    if (isLoading || isGettingLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading, isGettingLoading]);

  return (
    <PostEditForm
      handleClick={(postData) => editPost(postData)}
      buttonText="Zapisz zmiany"
    />
  );
}
