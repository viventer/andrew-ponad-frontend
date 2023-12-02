import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";
import ImageDropzone from "./ImageDropzone";

import { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PostContentEditor({
  postRows,
  setPostRows,
  setErrorMessage,
}) {
  const [imageUrl, setImageUrl] = useState("");

  const [quillContent, setQuillContent] = useState();
  const quillsContentList = [];
  const quillModules = {};

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
      <ReactQuill
        theme="snow"
        value={quillContent}
        onChange={(content) => {
          setQuillContent(content);
          quillsContentList[0] = quillContent;
          console.log(quillsContentList);
        }}
        modules={quillModules}
        className="quillEditor responsivePostElement"
      />
      <div className="responsivePostElement">
        {imageUrl && <img src={imageUrl} />}
        <ImageDropzone
          setErrorMessage={setErrorMessage}
          setImageUrl={setImageUrl}
          imageUrl={imageUrl}
        />
      </div>
    </StyledPostContentEditor>
  );
}
