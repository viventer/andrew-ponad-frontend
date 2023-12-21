import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";

import { useEffect, useState } from "react";

import "react-quill/dist/quill.snow.css";
import PostContentEditorRow from "./PostContentEditorRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostContentEditor({
  postRows,
  setPostRows,
  setErrorMessage,
  updateElement,
  deleteRow,
}) {
  const [imageUrl, setImageUrl] = useState("");

  const [activeRowNumber, setActiveRowNumber] = useState(0);

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
    const newRow = [
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
    ];
    setPostRows([...postRows, newRow]);
  }

  return (
    <StyledPostContentEditor>
      {postRows.map((postRow, i) => (
        <PostContentEditorRow
          setErrorMessage={setErrorMessage}
          key={i}
          index={i}
          activeRowNumber={activeRowNumber}
          setActiveRowNumber={setActiveRowNumber}
          rowData={postRow}
          updateElement={updateElement}
          deleteRow={deleteRow}
        />
      ))}
      <button onClick={addRow}>
        <p>Dodaj nowy wiersz</p>
      </button>
    </StyledPostContentEditor>
  );
}
