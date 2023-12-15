import { StyledPostContentEditorRow } from "../styles/PostContentEditor.styled";
import ImageDropzone from "./ImageDropzone";
import ReactQuill from "react-quill";
import RowTypeSelection from "./RowTypeSelection";

import { useState } from "react";

export default function PostContentEditorRow({
  setErrorMessage,
  activeRowNumber,
  setActiveRowNumber,
  index,
}) {
  const [rowElementsType, setRowElementsType] = useState([
    "postEditor",
    "image",
  ]);

  const [firstImageUrl, setFirstImageUrl] = useState("");
  const [secondImageUrl, setSecondImageUrl] = useState("");

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

  return (
    <StyledPostContentEditorRow>
      {activeRowNumber == index && (
        <RowTypeSelection setRowElementsType={setRowElementsType} />
      )}
      <div
        className={`flex flex-center ${
          rowElementsType.length == 1 && "onlyOneElement"
        } ${activeRowNumber == index && "active"}`}
        onClick={() => {
          setActiveRowNumber(index);
        }}
      >
        {rowElementsType.map((type, i) => {
          const imageUrl = i == 0 ? firstImageUrl : secondImageUrl;
          const setImageUrl = i == 0 ? setFirstImageUrl : setSecondImageUrl;

          if (type === "image") {
            return (
              <div className="responsivePostElement" key={i}>
                {imageUrl && <img src={imageUrl} />}
                <ImageDropzone
                  setErrorMessage={setErrorMessage}
                  setImageUrl={setImageUrl}
                  imageUrl={imageUrl}
                />
              </div>
            );
          } else {
            return (
              <ReactQuill
                key={i + 10}
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
            );
          }
        })}
      </div>
    </StyledPostContentEditorRow>
  );
}
