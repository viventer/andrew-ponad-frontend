import { useDispatch, useSelector } from "react-redux";
import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";
import PostContentEditorRow from "./PostContentEditorRow";

import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { selectPostRows, setPostRows } from "../slices/postSlice";

export default function PostContentEditor() {
  const dispatch = useDispatch();

  const postRows = useSelector(selectPostRows);

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
    dispatch(setPostRows([...postRows, newRow]));
  }

  function updateElement(rowIndex, elementIndex, updatedFields) {
    dispatch(
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
      })
    );
  }

  console.log(postRows);

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
        />
      ))}
      <button onClick={addRow}>
        <p>Dodaj nowy wiersz</p>
      </button>
    </StyledPostContentEditor>
  );
}
