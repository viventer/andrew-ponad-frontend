import { StyledPostContentEditor } from "../styles/PostContentEditor.styled";

import { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PostContentEditor() {
  const [quillContent, setQuillContent] = useState();
  const quillsContentList = [];
  const quillModules = {};

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
        className="quillEditor"
      />
    </StyledPostContentEditor>
  );
}
