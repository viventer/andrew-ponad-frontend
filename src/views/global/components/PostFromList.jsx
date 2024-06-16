import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import thumbnailPlaceholder from "../../post/image/thumbnailPlaceholder.jpg";

import {
  selectDialogAction,
  selectDialogAnswer,
  setDialogAction,
  setDialogAnswer,
  setDialogMsg,
  setDialogOptions,
  setErrMsg,
  setIsLoading,
  setIsSearchBoxVisible,
} from "../slices/globalStatesSlice";
import { useDeletePostMutation } from "../../post/slices/postsApiSlice";

import useShorten from "../../../hooks/useShorten";
import useAuth from "../../../hooks/useAuth";
import useGetBase64Regex from "../../../hooks/useGetBase64Regex";

import { StyledPostFromList } from "../styles/PostFromList.styled";
import PostFromListInfo from "./PostFromListInfo";

export default function PostFromList({ postData, setReloadComponent, view }) {
  const [isDeleted, setIsDeleted] = useState(false);

  const base64Regex = useGetBase64Regex();
  const isThumbnailCorrect = base64Regex.test(postData.thumbnail);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editPost = () => {
    navigate(`/post/${postData.id}/edit`);
  };

  const viewPost = () => {
    dispatch(setIsSearchBoxVisible(false));
    navigate(`/post/${postData.id}`);
  };

  const dialogAnswer = useSelector(selectDialogAnswer);
  const dialogAction = useSelector(selectDialogAction);

  const [deletePostMutation, { isDeletingLoading }] = useDeletePostMutation(
    postData.id
  );

  const showDialog = () => {
    dispatch(setDialogOptions(["Tak", "Nie"]));
    dispatch(setDialogAction(`deletePost${postData.id}`));
    dispatch(
      setDialogMsg(
        "Czy na pewno chcesz usunąć posta? Ta operacja jest nieodwracalna."
      )
    );
  };

  useEffect(() => {
    if (dialogAnswer == "Tak" && dialogAction == `deletePost${postData.id}`) {
      deletePost();
    }
    dispatch(setDialogAnswer(null));
    dispatch(setDialogAction(null));
  }, [dialogAnswer]);

  const deletePost = async () => {
    try {
      await deletePostMutation(postData.id).unwrap();
      if (isDeletingLoading) {
        dispatch(setIsLoading(true));
        return;
      } else {
        dispatch(setIsLoading(false));
        setReloadComponent((prev) => !prev);
        setIsDeleted(true);
      }
    } catch (err) {
      dispatch(setErrMsg(err?.data?.message || "Błąd usuwania posta."));
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

  const { mainRole, username } = useAuth();
  const canEdit =
    mainRole == "Admin" ||
    mainRole == "Editor" ||
    username == postData.username;

  const [showInfo, setShowInfo] = useState(false);

  const shortenTitleMaxWidth = view == "postsSearchResults" ? 475 : 650;

  return (
    <StyledPostFromList
      className={`${isDeleted ? "hide" : ""} ${
        view == "postsSearchResults" ? "postsSearchResults" : ""
      }`}
    >
      <div className="flex">
        <button onClick={() => setShowInfo((prev) => !prev)}>
          <FontAwesomeIcon icon={showInfo ? faChevronUp : faChevronDown} />
        </button>
        <img
          src={isThumbnailCorrect ? postData.thumbnail : thumbnailPlaceholder}
          onClick={viewPost}
          className={view == "postsSearchResults" && "postsSearchResultsImg"}
        />
        <div onClick={viewPost}>
          <h2>
            {shortenTitle(
              postData.title,
              18,
              shortenTitleMaxWidth,
              windowWidth
            )}
          </h2>
        </div>
        <div>
          <button
            onClick={editPost}
            className={
              !canEdit || view == "postsSearchResults" ? "transparent" : ""
            }
          >
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button
            onClick={showDialog}
            className={`deleteButton ${
              !canEdit || view == "postsSearchResults" ? "transparent" : ""
            }`}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      {showInfo && <PostFromListInfo postData={postData} />}
    </StyledPostFromList>
  );
}
