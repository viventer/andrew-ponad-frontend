import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import PostContentEditor from "./PostContentEditor";

import useLocalStorage from "../../../hooks/useLocalStorage";
import { useDispatch } from "react-redux";

export default function PostEditor() {
  const [thumbnailUrl, setThumbnailUrl] = useLocalStorage("thumbnailUrl", "");
  const [postTitle, setPostTitle] = useLocalStorage("postTitle", "");
  const [postRows, setPostRows] = useLocalStorage("postRows", [
    [
      {
        type: "textEditor",
        textEditorContent: "",
        imageUrl: "",
      },
      {
        type: "image",
        textEditorContent: "",
        imageUrl: "",
      },
    ],
  ]);

  const postContent = {
    thumbnailUrl: thumbnailUrl,
    postRows: postRows,
    postTitle: postTitle,
  };

  function updateElement(rowIndex, elementIndex, updatedFields) {
    setPostRows((prevRows) => {
      const newPostRows = [...prevRows];
      const newRow = [...newPostRows[rowIndex]];

      Object.keys(updatedFields).forEach((field) => {
        newRow[elementIndex] = {
          ...newRow[elementIndex],
          [field]: updatedFields[field],
        };
      });
      newPostRows[rowIndex] = newRow;

      return newPostRows;
    });
  }

  const deleteRow = (rowIndex) => {
    setPostRows((prevRows) => {
      const newPostRows = prevRows.filter((row, index) => index !== rowIndex);

      return newPostRows;
    });
  };

  return (
    <>
      <StyledPostEditor>
        {thumbnailUrl && <ThumbnailBar thumbnailUrl={thumbnailUrl} />}
        <ImageDropzone
          isThumbnail={true}
          imageUrl={thumbnailUrl}
          setImageUrl={setThumbnailUrl}
        />
        <div className="input">
          <PostTitleInput postTitle={postTitle} setPostTitle={setPostTitle} />
        </div>
        <PostContentEditor
          postRows={postRows}
          setPostRows={setPostRows}
          updateElement={updateElement}
          deleteRow={deleteRow}
        />
        <footer>
          <button onClick={() => console.log(postContent)}>Dodaj posta</button>
        </footer>
      </StyledPostEditor>
    </>
  );
}
