import { useDispatch } from "react-redux";
import { StyledPostTitleInput } from "../styles/PostEditor.styled";
import { setErrMsg } from "../../global/slices/globalStatesSlice";

export default function PostTitleInput({ postTitle, setPostTitle }) {
  const dispatch = useDispatch();

  return (
    <StyledPostTitleInput
      placeholder="Tytuł posta"
      value={postTitle}
      onChange={(e) => setPostTitle(e.target.value)}
      maxLength={40}
      onKeyDown={() => {
        if (postTitle.length >= 40) {
          dispatch(setErrMsg("Tytuł może zawierać maksymalnie 40 znaków"));
        }
      }}
    />
  );
}
