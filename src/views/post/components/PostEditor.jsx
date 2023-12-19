import { StyledPostEditor } from "../styles/PostEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ThumbnailBar from "./ThumbnailBar";
import PostTitleInput from "./PostTitleInput";
import ErrorWindow from "../../global/components/ErrorWindow";

import { useEffect, useState } from "react";
import PostContentEditor from "./PostContentEditor";

export default function PostEditor() {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [postTitle, setPostTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [postRows, setPostRows] = useState([
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

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  }, [errorMessage]);

  return (
    <>
      <StyledPostEditor>
        {thumbnailUrl && <ThumbnailBar thumbnailUrl={thumbnailUrl} />}
        <ImageDropzone
          isThumbnail={true}
          imageUrl={thumbnailUrl}
          setImageUrl={setThumbnailUrl}
          setErrorMessage={setErrorMessage}
        />
        <div className="input">
          <PostTitleInput
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            setErrorMessage={setErrorMessage}
          />
        </div>
        <PostContentEditor
          setErrorMessage={setErrorMessage}
          postRows={postRows}
          setPostRows={setPostRows}
          updateElement={updateElement}
          deleteRow={deleteRow}
        />
      </StyledPostEditor>
      <div style={{ opacity: errorMessage ? 1 : 0 }} className="transition">
        <ErrorWindow message={errorMessage} />
      </div>
    </>
  );
}
