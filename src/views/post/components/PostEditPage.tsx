import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";
import useTranslateVisibility from "../../../hooks/useTranslateVisibility";
import useUpdatePost from "../../../hooks/useUpdatePost";

import {
  resetPostState,
  selectPostCategoryName,
  selectPostTitle,
  selectPostVisibility,
  selectThumbnailFile,
  setPostCategoryName,
  setPostTitle,
  setPostVisibility,
  setThumbnailPreview,
} from "../slices/postSlice";
import {
  Post,
  useGetPostByIdQuery,
  useUpdatePostMutation,
} from "../slices/postsApiSlice";
import {
  selectSuccessMsg,
  setErrMsg,
  setIsLoading,
  setSuccessMsg,
} from "../../global/slices/globalStatesSlice";
import { selectUserId } from "../../auth/slices/authSlice";
import { PostRowType } from "../slices/postsApiSlice";

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

  const [postRows, setPostRows] = useState<PostRowType[]>([
    [
      {
        type: "textEditor",
        textEditorContent: "",
        imagePreview: null,
        videoUrl: "",
      },
      {
        type: "image",
        textEditorContent: "",
        imagePreview: null,
        videoUrl: "",
      },
    ],
  ]);

  useEffect(() => {
    dispatch(resetPostState());
  }, []);

  useEffect(() => {
    if (isSuccess) {
      const postData = rawPostData.entities[id!];
      dispatch(setThumbnailPreview(postData.thumbnail));
      dispatch(setPostTitle(postData.title));
      if (postData.categoryName) {
        dispatch(setPostCategoryName(postData.categoryName));
      }
      setPostRows(postData.content);

      const translatedVisibility = translateVisibility(
        postData.visibility,
        "polish"
      );

      dispatch(setPostVisibility(translatedVisibility));
    }
  }, [isSuccess]);

  const thumbnail = useSelector(selectThumbnailFile);
  const title = useSelector(selectPostTitle);
  const category = useSelector(selectPostCategoryName);
  const visibility = useSelector(selectPostVisibility);
  const userId = useSelector(selectUserId);
  const updatePost = useUpdatePost();
  useEffect(() => {
    const intervalId = setInterval(() => {
      const translatedVisibility = translateVisibility(visibility, "english");

      (async () => {
        const newPostData = {
          thumbnail,
          title: title!,
          categoryName: category,
          author: userId!,
          content: postRows,
          visibility: translatedVisibility,
        };

        updatePost(newPostData, id!);
      })();
    }, 300000);

    return () => clearInterval(intervalId);
  }, [thumbnail, title, category, visibility, postRows]);

  const [updatePostMutation, { isLoading }] = useUpdatePostMutation();
  const editPost = async (postData: Partial<Post>) => {
    try {
      await updatePostMutation({ postId: id, postData }).unwrap();
      dispatch(setSuccessMsg("Zmiany zostały zapisane"));
      navigate("/adminpanel", { replace: true });
    } catch (err) {
      handleEditPostError(err);
    }
  };

  const handleEditPostError = (err: any) => {
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
          handleClick={(postData: Partial<Post>) => editPost(postData)}
          buttonText="Zapisz zmiany"
          postRows={postRows}
          setPostRows={setPostRows}
        />
      ) : null}
    </>
  );
}
