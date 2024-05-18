import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import useTranslateVisibility from "../../../hooks/useTranslateVisibility";

import {
  setPostCategory,
  setPostTitle,
  setPostVisibility,
  setThumbnailPreview,
} from "../slices/postSlice";
import {
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from "../slices/postsApiSlice";
import {
  selectSuccessMsg,
  setErrMsg,
  setIsLoading,
  setSuccessMsg,
} from "../../global/slices/globalStatesSlice";

import PostEditForm from "./PostEditForm";

export default function PostEditPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogged } = useAuth();

  const { id } = useParams();
  const {
    data: rawPostData,
    isLoading: isGettingLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostByIdQuery({ postId: id, isLogged });

  if (isError) {
    dispatch(setErrMsg(error?.data?.message || "Błąd edycji posta."));
  }

  const translateVisibility = useTranslateVisibility();

  const [postRows, setPostRows] = useState();

  useEffect(() => {
    if (isSuccess) {
      const postData = rawPostData.entities[id];
      dispatch(setThumbnailPreview(postData.thumbnail));
      dispatch(setPostTitle(postData.title));
      dispatch(setPostCategory(postData.category));
      setPostRows(postData.content);

      const translatedVisibility = translateVisibility(
        postData.visibility,
        "polish"
      );

      dispatch(setPostVisibility(translatedVisibility));
    }
  }, [isSuccess]);

  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const editPost = async (postData) => {
    try {
      console.log(postData);
      await updatePost({ postId: id, postData }).unwrap();
      dispatch(setSuccessMsg("Zmiany zostały zapisane"));
      navigate("/adminpanel", { replace: true });
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
      dispatch(setErrMsg("Nie masz uprawnień do edycji tego posta"));
    }
  };

  const successMsg = useSelector(selectSuccessMsg);

  useEffect(() => {
    if ((isLoading || isGettingLoading || !postRows) && !successMsg) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading, isGettingLoading, postRows]);

  return (
    <>
      {postRows ? (
        <PostEditForm
          handleClick={(postData) => editPost(postData)}
          buttonText="Zapisz zmiany"
          postRows={postRows}
          setPostRows={setPostRows}
        />
      ) : null}
    </>
  );
}
