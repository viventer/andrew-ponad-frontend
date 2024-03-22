import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "react-quill/dist/quill.snow.css";

import { selectPostRows, setPostRows } from "../slices/postSlice";

import PostContentEditorRow from "./PostContentEditorRow";
import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";
import { StyledButton } from "../../global/styles/Button.styled";

export default function PostContentEditor() {
  const dispatch = useDispatch();
  const postRows = useSelector(selectPostRows);

  const [activeRowNumber, setActiveRowNumber] = useState(0);

  function addRow() {
    const newRow = [
      {
        type: "textEditor",
        textEditorContent: "",
        imagePreview: null,
      },
      {
        type: "image",
        textEditorContent: "",
        imagePreview: null,
      },
    ];
    dispatch(setPostRows([...postRows, newRow]));
  }

  function updateElement(rowIndex, elementIndex, updatedFields) {
    const newPostRows = [...postRows];
    const newRow = [...newPostRows[rowIndex]];

    Object.keys(updatedFields).forEach((field) => {
      newRow[elementIndex] = {
        ...newRow[elementIndex],
        [field]: updatedFields[field],
      };
    });

    newPostRows[rowIndex] = newRow;

    dispatch(setPostRows(newPostRows));
  }

  function changeRowType(rowIndex, firstElementType, secondElementType) {
    const newPostRows = [...postRows];
    const newPostRow = [...newPostRows[rowIndex]];
    newPostRow[0] = { ...newPostRow[0], type: firstElementType };
    newPostRow[1] = { ...newPostRow[1], type: secondElementType };

    newPostRows[rowIndex] = newPostRow;

    dispatch(setPostRows(newPostRows));
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
          changeRowType={changeRowType}
        />
      ))}
      <StyledButton onClick={addRow}>Dodaj nowy wiersz</StyledButton>
    </StyledPostContentEditor>
  );
}
