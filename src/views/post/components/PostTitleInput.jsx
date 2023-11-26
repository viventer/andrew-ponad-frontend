import { StyledPostTitleInput } from "../styles/PostEditor.styled";

export default function PostTitleInput({
  postTitle,
  setPostTitle,
  setErrorMessage,
}) {
  return (
    <StyledPostTitleInput
      placeholder="Tytuł posta"
      value={postTitle}
      onChange={(e) => setPostTitle(e.target.value)}
      maxLength={40}
      onKeyDown={() => {
        if (postTitle.length >= 40) {
          setErrorMessage("Tytuł może zawierać maksymalnie 40 znaków");
        }
      }}
    />
  );
}
