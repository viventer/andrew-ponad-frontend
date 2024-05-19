import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  useAddNewPostMutation,
  useGetPostByIdQuery,
} from "../slices/postsApiSlice";
import {
  selectDialogAction,
  selectDialogAnswer,
  setDialogAction,
  setDialogAnswer,
  setDialogMsg,
  setDialogOptions,
  setErrMsg,
  setIsLoading,
} from "../../global/slices/globalStatesSlice";

import PostEditForm from "./PostEditForm";
import {
  resetPostState,
  setPostCategory,
  setPostTitle,
  setPostVisibility,
  setThumbnailPreview,
} from "../slices/postSlice";
import useAuth from "../../../hooks/useAuth";
import useTranslateVisibility from "../../../hooks/useTranslateVisibility";
import { selectUserId } from "../../auth/slices/authSlice";

export default function PostCreatePage() {
  const [postRows, setPostRows] = useState([
    [
      {
        type: "textEditor",
        textEditorContent: "",
        imagePreview: null,
      },
      {
        type: "image",
        textEditorContent: "",
        imagePreview: null,
      },
    ],
  ]);

  const { isLogged } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const {
    data: rawPostData,
    isLoading: isGettingLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostByIdQuery({ postId: id, isLogged });

  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  useEffect(() => {
    dispatch(resetPostState());
  }, []);

  const translateVisibility = useTranslateVisibility();
  const userId = useSelector(selectUserId);
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
    } else if (isError) {
      (async () => {
        const initialPostData = {
          author: userId,
          visibility: "draft",
          content: postRows,
          category: "Wybierz kategorię",
        };
        const newPostId = await addPost(initialPostData);
        navigate(`/post/create/${newPostId}`);
      })();
    }
  }, [isSuccess, isError]);

  const addPost = async (postData) => {
    try {
      const response = await addNewPost(postData).unwrap();
      return response.id;
    } catch (err) {
      handleAddPostError(err);
    }
  };

  const showDialog = () => {
    dispatch(setDialogOptions(["Dodaj kolejny", "Zakończ dodawanie"]));
    dispatch(setDialogAction("postAdded"));
    dispatch(setDialogMsg("Post został dodany, co chcesz zrobić?"));
  };

  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);
  useEffect(() => {
    if (dialogAnswer == "Zakończ dodawanie" && dialogAction == "postAdded") {
      navigate("/adminpanel", { replace: true });
    } else if (dialogAnswer == "Dodaj kolejny" && dialogAction == "postAdded") {
      window.location.reload();
    }
    dispatch(setDialogAnswer(null));
    dispatch(setDialogAction(null));
  }, [dialogAnswer]);

  const handleAddPostError = (err) => {
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
      dispatch(setErrMsg("Nie masz uprawnień do dodania posta"));
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
      handleClick={(postData) => addPost(postData)}
      buttonText="Dodaj posta"
      postRows={postRows}
      setPostRows={setPostRows}
    />
  );
}
