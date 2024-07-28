import { useState, useCallback } from "react";

import "react-quill/dist/quill.snow.css";

import PostContentEditorRow from "./PostContentEditorRow";
import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";
import { StyledButton } from "../../global/styles/Button.styled";

export default function PostContentEditor({ postRows, setPostRows }) {
  const [activeRowNumber, setActiveRowNumber] = useState(0);

  const addRow = useCallback(() => {
    const newRow = [
      {
        type: "textEditor",
        textEditorContent: "",
        imagePreview: null,
        videoUrl: "",
      },
      {
        type: "image",
        textEditorContent: "",
        imagePreview: null,
        videoUrl: "",
      },
    ];
    setPostRows((prevPostRows) => [...prevPostRows, newRow]);
  }, [setPostRows]);

  const updateElement = useCallback(
    (rowIndex, elementIndex, updatedFields) => {
      setPostRows((prevPostRows) => {
        const newPostRows = [...prevPostRows];
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
    },
    [setPostRows]
  );

  const changeRowType = useCallback(
    (rowIndex, firstElementType, secondElementType) => {
      setPostRows((prevPostRows) => {
        const newPostRows = [...prevPostRows];
        const newPostRow = [...newPostRows[rowIndex]];
        newPostRow[0] = { ...newPostRow[0], type: firstElementType };
        newPostRow[1] = { ...newPostRow[1], type: secondElementType };

        newPostRows[rowIndex] = newPostRow;
        return newPostRows;
      });
    },
    [setPostRows]
  );

  const deleteRow = (rowIndex) => {
    const newRows = postRows.filter((row, index) => index !== rowIndex);
    setPostRows([...newRows]);
  };

  const changeRowIndex = (oldRowIndex, newRowIndex) => {
    const rowData = [...postRows[oldRowIndex]];
    const newRows = postRows.filter((row, index) => index !== oldRowIndex);
    newRows.splice(newRowIndex, 0, rowData);
    setPostRows([...newRows]);
    setActiveRowNumber(newRowIndex);
  };

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
          deleteRow={deleteRow}
          changeRowIndex={changeRowIndex}
          isLast={i == postRows.length - 1}
        />
      ))}
      <StyledButton onClick={addRow}>Dodaj nowy wiersz</StyledButton>
    </StyledPostContentEditor>
  );
}
