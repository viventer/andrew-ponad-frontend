import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import useTranslateVisibility from "../../../hooks/useTranslateVisibility";

import {
  selectPostCategoryName,
  selectPostTitle,
  selectPostVisibility,
  selectThumbnailPreview,
  setThumbnailPreview,
} from "../slices/postSlice";
import {
  Post,
  PostRowType,
  useDeletePostMutation,
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

import ImageDropzone from "../../global/components/ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import CategorySelector from "./CategorySelector";
import PostContentEditor from "./PostContentEditor";
import VisibilitySelector from "./VisibilitySelector";
import { StyledButton } from "../../global/styles/Button.styled";
import { selectUserId } from "../../auth/slices/authSlice";
import { StyledPostEditPage } from "../styles/PostEditPage.styled";

type Props = {
  handleClick: (postData: Partial<Post>) => any;
  buttonText: string;
  postRows: PostRowType[];
  setPostRows: React.Dispatch<React.SetStateAction<PostRowType[]>>;
};

export default function PostEditForm({
  handleClick,
  buttonText,
  postRows,
  setPostRows,
}: Props) {
  const thumbnailPreview = useSelector(selectThumbnailPreview);
  const postTitle = useSelector(selectPostTitle);
  const postCategoryName = useSelector(selectPostCategoryName);
  const postVisiblity = useSelector(selectPostVisibility);
  const userId = useSelector(selectUserId);
  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);

  const dispatch = useDispatch();
  const translateVisibility = useTranslateVisibility();
  const translatedVisibility = translateVisibility(postVisiblity, "english");

  const { id } = useParams();
  const navigate = useNavigate();
  const [deletePostMutation, { isLoading: isDeletingLoading }] =
    useDeletePostMutation();

  const showDialog = () => {
    dispatch(setDialogOptions(["Tak", "Nie"]));
    dispatch(setDialogAction(`deletePost${id}`));
    dispatch(
      setDialogMsg(
        "Czy na pewno chcesz odrzucić posta? Ta operacja jest nieodwracalna."
      )
    );
  };

  useEffect(() => {
    if (dialogAnswer == "Tak" && dialogAction == `deletePost${id}`) {
      deletePost();
    }
    dispatch(setDialogAnswer(""));
    dispatch(setDialogAction(""));
  }, [dialogAnswer]);

  const deletePost = async () => {
    try {
      await deletePostMutation(id!).unwrap();
      if (isDeletingLoading) {
        dispatch(setIsLoading(true));
        return;
      } else {
        dispatch(setIsLoading(false));
        navigate("/adminpanel", { replace: true });
      }
    } catch (err: any) {
      dispatch(setErrMsg(err?.data?.message || "Błąd odrzucania posta."));
      dispatch(setIsLoading(false));
    }
  };

  const postData = {
    author: userId as string,
    title: postTitle as string,
    thumbnail: thumbnailPreview,
    visibility: translatedVisibility,
    content: postRows,
    categoryName: postCategoryName,
  };

  const isPostContentValid = (postRows: PostRowType[]) => {
    for (const row of postRows) {
      for (const item of row) {
        if (item.type == "none") continue;
        if (
          item.textEditorContent == "" &&
          !item.imagePreview &&
          !item.videoUrl
        ) {
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
      !(value as string)?.includes("Wybierz")
  );

  const canSave =
    (isPostContentValid(postRows) && isAllDataExist) ||
    postVisiblity == "Szkic";

  const discardThumbnailImg = () => {
    dispatch(setThumbnailPreview(""));
  };

  return (
    <StyledPostEditPage>
      <ThumbnailBar view="edit" />
      {thumbnailPreview && (
        <div className="responsivePostElement deleteImgResponsivePostElement">
          <button className="deleteImgButton" onClick={discardThumbnailImg}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
      <ImageDropzone isThumbnail={true} imagePreview={thumbnailPreview} />
      <div className="thumbnailBarOverlay">
        <PostTitleInput />
        <CategorySelector />
      </div>
      <PostContentEditor postRows={postRows} setPostRows={setPostRows} />
      <footer>
        <StyledButton disabled={!canSave} onClick={() => handleClick(postData)}>
          {buttonText}
        </StyledButton>
        {buttonText == "Dodaj post" && (
          <StyledButton onClick={showDialog}>Odrzuć post</StyledButton>
        )}
        <VisibilitySelector />
      </footer>
    </StyledPostEditPage>
  );
}
