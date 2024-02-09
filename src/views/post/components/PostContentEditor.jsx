import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";
import PostContentEditorRow from "./PostContentEditorRow";

import { useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function PostContentEditor({
  postRows,
  setPostRows,
  updateElement,
  deleteRow,
}) {
  const [activeRowNumber, setActiveRowNumber] = useState(0);

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
