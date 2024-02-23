import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import PostContentEditor from "./PostContentEditor";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPostState,
  selectPostCategory,
  selectPostRows,
  selectPostTitle,
  selectPostVisibility,
  selectThumbnailUrl,
} from "../slices/postSlice";
import CategorySelector from "./CategorySelector";
import VisibilitySelector from "./VisibilitySelector";
import { selectUserId } from "../../auth/slices/authSlice";
import { useEffect } from "react";
import { useAddNewPostMutation } from "../slices/postsApiSlice";
import { StyledButton } from "../../global/styles/Button.styled";
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
import { useLocation, useNavigate } from "react-router-dom";

export default function PostEditor() {
  const dispatch = useDispatch();
  const thumbnailUrl = useSelector(selectThumbnailUrl);
  const postRows = useSelector(selectPostRows);
  const postTitle = useSelector(selectPostTitle);
  const postCategory = useSelector(selectPostCategory);
  const postVisiblity = useSelector(selectPostVisibility);
  const userId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(resetPostState());
  }, []);

  let translatedVisibility;
  switch (postVisiblity) {
    case "Publiczny":
      translatedVisibility = "public";
      break;
    case "Prywatny":
      translatedVisibility = "private";
      break;
    case "Niepubliczny":
      translatedVisibility = "unlisted";
      break;
    case "Szkic":
      translatedVisibility = "draft";
      break;
    case "Dla zweryfikowanych":
      translatedVisibility = "verifiedOnly";
      break;
  }

  const postData = {
    author: userId,
    title: postTitle,
    thumbnail: thumbnailUrl,
    visibility: translatedVisibility,
    content: postRows,
    category: postCategory,
  };

  const isPostContentValid = (postRows) => {
    for (const row of postRows) {
      for (const item of row) {
        if (item.textEditorContent == "" && !item.imageUrl) {
          return false;
        }
      }
    }
    return true;
  };

  const isAllDataExist = Object.values(postData).every(
    (value) =>
      value !== null &&
      value !== undefined &&
      value !== "" &&
      !value?.includes("Wybierz")
  );

  const canAdd = isPostContentValid(postRows) && isAllDataExist;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [addNewPost, { isLoading, isSuccess, isError, error }] =
    useAddNewPostMutation();
  const addPost = async (e, postData) => {
    e.preventDefault();
    try {
      await addNewPost(postData).unwrap();
      dispatch(resetPostState());
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
      navigate(from, { replace: true });
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

  return (
    <>
      <StyledPostEditor>
        <ThumbnailBar />
        <ImageDropzone isThumbnail={true} imageUrl={thumbnailUrl} />
        <div className="thumbnailBarOverlay">
          <PostTitleInput />
          <CategorySelector />
        </div>
        <PostContentEditor />
        <footer>
          <StyledButton
            disabled={!canAdd}
            onClick={(e) => addPost(e, postData)}
          >
            Dodaj posta
          </StyledButton>
          <VisibilitySelector />
        </footer>
      </StyledPostEditor>
    </>
  );
}
