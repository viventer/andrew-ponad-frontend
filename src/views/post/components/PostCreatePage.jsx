import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAddNewPostMutation } from "../slices/postsApiSlice";
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

export default function PostCreatePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const addPost = async (postData) => {
    try {
      await addNewPost(postData).unwrap();
      showDialog();
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
    if (isLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isLoading]);

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

  return (
    <PostEditForm
      handleClick={(postData) => addPost(postData)}
      buttonText="Dodaj posta"
      postRows={postRows}
      setPostRows={setPostRows}
    />
  );
}
