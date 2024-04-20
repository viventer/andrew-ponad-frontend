import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

import thumbnailPlaceholder from "../../post/image/thumbnailPlaceholder.jpg";

import { resetPostState } from "../../post/slices/postSlice";
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
import { useDeletePostMutation } from "../../post/slices/postsApiSlice";

import { StyledPostFromList } from "../styles/PostFromList.styled";
import useShorten from "../../../hooks/useShorten";

export default function PostFromList({
  thumbnail,
  title,
  id,
  setReloadComponent,
}) {
  const [isDeleted, setIsDeleted] = useState(false);

  const base64Regex = /^data:image\/[^;]+;base64,/;
  const isThumbnailCorrect = base64Regex.test(thumbnail);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editPost = () => {
    dispatch(resetPostState());
    navigate(`/post/${id}/edit`);
  };

  const viewPost = () => {
    navigate(`/post/${id}`);
  };

  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);

  const [deletePostMutation, { isDeletingLoading }] = useDeletePostMutation(id);

  const showDialog = () => {
    dispatch(setDialogOptions(["Tak", "Nie"]));
    dispatch(setDialogAction(`deletePost${id}`));
    dispatch(
      setDialogMsg(
        "Czy na pewno chcesz usunąć posta? Ta operacja jest nieodwracalna."
      )
    );
  };

  useEffect(() => {
    if (dialogAnswer == "Tak" && dialogAction == `deletePost${id}`) {
      deletePost();
    }
    dispatch(setDialogAnswer(null));
    dispatch(setDialogAction(null));
  }, [dialogAnswer]);

  const deletePost = async () => {
    try {
      await deletePostMutation(id).unwrap();
      if (isDeletingLoading) {
        dispatch(setIsLoading(true));
        return;
      } else {
        dispatch(setIsLoading(false));
        setReloadComponent((prev) => !prev);
        setIsDeleted(true);
      }
    } catch (err) {
      setErrMsg(err);
      dispatch(setIsLoading(false));
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shortenTitle = useShorten();

  return (
    <StyledPostFromList className={isDeleted && "hide"}>
      <img
        src={isThumbnailCorrect ? thumbnail : thumbnailPlaceholder}
        onClick={viewPost}
      />
      <div onClick={viewPost}>
        <h2>{shortenTitle(title, 18, 650, windowWidth)}</h2>
      </div>
      <div>
        <button onClick={editPost}>
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button onClick={showDialog} className="deleteButton">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </StyledPostFromList>
  );
}
