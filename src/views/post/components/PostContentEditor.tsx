import { useState, useCallback } from "react";

import "react-quill/dist/quill.snow.css";

import PostContentEditorRow from "./PostContentEditorRow";
import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";
import { StyledButton } from "../../global/styles/Button.styled";
import {
  PostRowElement,
  PostRowElementType,
  PostRowType,
} from "../slices/postsApiSlice";

type Props = {
  postRows: PostRowType[];
  setPostRows: React.Dispatch<React.SetStateAction<PostRowType[]>>;
};

export default function PostContentEditor({ postRows, setPostRows }: Props) {
  const [activeRowNumber, setActiveRowNumber] = useState(0);

  const addRow = useCallback(() => {
    const newRow: PostRowType = [
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

    setPostRows((prevPostRows) => [...(prevPostRows as any), newRow]);
  }, [setPostRows]);

  const updateElement = useCallback(
    (
      rowIndex: number,
      elementIndex: number,
      updatedFields: Partial<PostRowElement>
    ) => {
      setPostRows((prevPostRows) => {
        const newPostRows = [...prevPostRows];
        const newRow = [...newPostRows[rowIndex]];

        Object.keys(updatedFields).forEach((field) => {
          newRow[elementIndex] = {
            ...newRow[elementIndex],
            [field]: updatedFields[field as keyof PostRowElement],
          };
        });

        newPostRows[rowIndex] = newRow;
        return newPostRows;
      });
    },
    [setPostRows]
  );

  const changeRowType = useCallback(
    (
      rowIndex: number,
      firstElementType: PostRowElementType,
      secondElementType: PostRowElementType
    ) => {
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

  const deleteRow = (rowIndex: number) => {
    const newRows = postRows.filter((row, index) => index !== rowIndex);
    setPostRows([...(newRows as any)]);
  };

  const changeRowIndex = (oldRowIndex: number, newRowIndex: number) => {
    const rowData = [...postRows[oldRowIndex]];
    const newRows = postRows.filter((row, index) => index !== oldRowIndex);
    newRows.splice(newRowIndex, 0, rowData);
    setPostRows([...(newRows as any)]);
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
