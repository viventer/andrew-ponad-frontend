import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  postsApiSlice,
  useAddNewPostMutation,
  useGetPostByIdQuery,
} from "../slices/postsApiSlice";
import { PostType, PostRowType } from "../types/post.types";
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

import useAuth from "../../../hooks/useAuth";
import useUpdatePost from "../../../hooks/useUpdatePost";

import PostEditForm from "./PostEditForm";
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
import { selectUserId } from "../../auth/slices/authSlice";
import useTranslateVisibility from "../../../hooks/useTranslateVisibility";

export default function PostCreatePage() {
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
  const [addNewPost, { isLoading: isAddingLoading }] = useAddNewPostMutation();

  const updatePost = useUpdatePost();

  useEffect(() => {
    dispatch(resetPostState());
  }, []);

  const thumbnail = useSelector(selectThumbnailFile);
  const title = useSelector(selectPostTitle);
  const category = useSelector(selectPostCategoryName);
  const visibility = useSelector(selectPostVisibility);
  const userId = useSelector(selectUserId);
  const translateVisibility = useTranslateVisibility();
  useEffect(() => {
    const intervalId = setInterval(() => {
      const translatedVisibility = translateVisibility(visibility, "english");
      (async () => {
        const newPostData = {
          thumbnail,
          title: title as string,
          categoryName: category,
          author: userId as string,
          content: postRows,
          visibility: translatedVisibility,
        };

        updatePost(newPostData, id!);
      })();
    }, 30000);

    return () => clearInterval(intervalId);
  }, [thumbnail, title, category, visibility, postRows]);

  const finishCreation = async () => {
    const translatedVisibility = translateVisibility(visibility, "english");

    try {
      await updatePost(
        {
          thumbnail,
          title,
          categoryName: category,
          author: userId as string,
          content: postRows,
          visibility: translatedVisibility,
        },
        id!
      );
      showDialog();
    } catch (err) {
      handleAddPostError(err);
    }
  };

  let postData;
  useEffect(() => {
    if (isSuccess && rawPostData.entities[id!]) {
      postData = rawPostData.entities[id!];
      dispatch(setThumbnailPreview(postData.thumbnail));
      dispatch(setPostTitle(postData.title));
      setPostRows(postData.content);
      if (postData.categoryName) {
        dispatch(setPostCategoryName(postData.categoryName));
      }

      const translatedVisibility = translateVisibility(
        postData.visibility,
        "polish"
      );
      dispatch(setPostVisibility(translatedVisibility));
    } else if (isError) {
      (async () => {
        const initialPostData = {
          author: userId as string,
          visibility: "draft",
          content: postRows,
          category: "Wybierz kategorię",
        };
        const newPostId = await addPost(initialPostData);
        navigate(`/post/create/${newPostId}`);
      })();
    }
  }, [isSuccess, isError]);

  const addPost = async (postData: Partial<PostType>) => {
    try {
      const response = await addNewPost(postData).unwrap();
      dispatch(postsApiSlice.util.invalidateTags(["Post"]));

      return response.id;
    } catch (err) {
      handleAddPostError(err);
    }
  };

  const showDialog = () => {
    dispatch(setDialogOptions(["Dodaj kolejny", "Zakończ"]));
    dispatch(setDialogAction("postAdded"));
    dispatch(setDialogMsg("Post został dodany, co chcesz zrobić?"));
  };

  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);
  useEffect(() => {
    if (dialogAnswer == "Zakończ" && dialogAction == "postAdded") {
      navigate("/adminpanel", { replace: true });
    } else if (dialogAnswer == "Dodaj kolejny" && dialogAction == "postAdded") {
      navigate("/post/create");
      window.location.reload();
    }
    dispatch(setDialogMsg(""));
    console.log("wywołało się");
    dispatch(setDialogAnswer(""));
    dispatch(setDialogAction(""));
  }, [dialogAnswer]);

  const handleAddPostError = (err: any) => {
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
    if (isGettingLoading || isAddingLoading) {
      dispatch(setIsLoading(true));
      return;
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isGettingLoading, isAddingLoading]);

  return (
    <PostEditForm
      handleClick={() => finishCreation()}
      buttonText="Dodaj post"
      postRows={postRows}
      setPostRows={setPostRows}
    />
  );
}
