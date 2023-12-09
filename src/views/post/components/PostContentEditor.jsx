import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";
import ImageDropzone from "./ImageDropzone";

import { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RowTypeSelection from "./RowTypeSelection";
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

  useEffect(() => {
    setPostRows([
      ...postRows,
      {
        firstElement: {
          type: "image",
          imageUrl: "",
        },
        secondElement: {
          type: "textEditor",
          textEditorContent: "",
        },
      },
    ]);
  }, []);

  return (
    <StyledPostContentEditor>
      <PostContentEditorRow setErrorMessage={setErrorMessage} />
    </StyledPostContentEditor>
  );
}
