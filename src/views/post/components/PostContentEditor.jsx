import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";

import { useEffect, useState } from "react";

import "react-quill/dist/quill.snow.css";
import PostContentEditorRow from "./PostContentEditorRow";

export default function PostContentEditor({
  postRows,
  setPostRows,
  setErrorMessage,
}) {
  const [imageUrl, setImageUrl] = useState("");

  const [quillContent, setQuillContent] = useState();
  const quillsContentList = [];

  let toolbarOptions = [
    ["bold", "italic", "underline", "strike", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, 3, false] }],
    [{ color: [] }],
    [{ align: [] }],
  ];
  const quillModules = { toolbar: toolbarOptions };

  function addRow() {
    const newRow = {
      firstElement: {
        type: "textEditor",
        textEditorContent: "",
        imageUrl: "",
      },
      secondElement: {
        type: "image",
        textEditorContent: "",
        imageUrl: "",
      },
    };
    setPostRows([...postRows, newRow]);
  }

  return (
    <StyledPostContentEditor>
      {postRows.map((postRow, i) => (
        <PostContentEditorRow setErrorMessage={setErrorMessage} key={i} />
      ))}
      <button onClick={addRow}>
        <p>Dodaj nowy wiersz</p>
      </button>
    </StyledPostContentEditor>
  );
}
