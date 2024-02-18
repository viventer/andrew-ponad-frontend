import { StyledPostContentEditorRow } from "../styles/PostContentEditorRow.styled";
import RowTypeSelection from "./RowTypeSelection";
import ImageDropzone from "./ImageDropzone";

import ReactQuill from "react-quill";

export default function PostContentEditorRow({
  activeRowNumber,
  setActiveRowNumber,
  index,
  rowData,
  updateElement,
}) {
  let toolbarOptions = [
    ["bold", "italic", "underline", "strike", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, false] }],
    [{ color: [] }],
    [{ align: [] }],
  ];
  const quillModules = { toolbar: toolbarOptions };

  return (
    <StyledPostContentEditorRow>
      {activeRowNumber == index && (
        <RowTypeSelection index={index} updateElement={updateElement} />
      )}
      <div
        className={`flex flex-center ${
          rowData[1].type == "none" && "onlyOneElement"
        } ${activeRowNumber == index && "active"}`}
        onClick={() => {
          setActiveRowNumber(index);
        }}
      >
        {rowData.map((elementData, i) => {
          const imageUrl = rowData[i].imageUrl;
          const setImageUrl = (url) => {
            updateElement(index, i, { imageUrl: url });
          };

          if (elementData.type === "image") {
            return (
              <div className="responsivePostElement" key={i}>
                {imageUrl && <img src={imageUrl} />}
                <ImageDropzone
                  rowIndex={index}
                  imageUrl={rowData[i].imageUrl}
                  setImageUrl={setImageUrl}
                />
              </div>
            );
          } else if (elementData.type === "textEditor") {
            return (
              <ReactQuill
                key={i + 10}
                theme="snow"
                value={rowData[i].textEditorContent}
                onChange={(content) => {
                  updateElement(index, i, { textEditorContent: content });
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
