import { useDispatch, useSelector } from "react-redux";

import { setErrMsg } from "../../global/slices/globalStatesSlice";
import { selectPostTitle, setPostTitle } from "../slices/postSlice";

import { StyledPostTitleInput } from "../styles/PostEditPage.styled";

export default function PostTitleInput() {
  const dispatch = useDispatch();

  const postTitle = useSelector(selectPostTitle);

  return (
    <StyledPostTitleInput
      placeholder="Tytuł posta"
      value={postTitle}
      onChange={(e) => dispatch(setPostTitle(e.target.value))}
      maxLength={40}
      onKeyDown={() => {
        if (postTitle.length >= 40) {
          dispatch(setErrMsg("Tytuł może zawierać maksymalnie 40 znaków"));
        }
      }}
    />
  );
}
