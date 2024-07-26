import ReactQuill from "react-quill";
import ImageDropzone from "../../global/components/ImageDropzone";
import ReactPlayer from "react-player";

import thumbnailPlaceholder from "../images/thumbnailPlaceholder.jpg";

import RowTypeSelection from "./RowTypeSelection";
import { StyledPostContentEditorRow } from "../styles/PostContentEditorRow.styled";
import VideoUploader from "./VideoUploader";

export default function PostContentEditorRow({
  activeRowNumber,
  setActiveRowNumber,
  index,
  rowData,
  updateElement,
  changeRowType,
  deleteRow,
}) {
  const toolbarOptions = [
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
        <RowTypeSelection
          index={index}
          updateElement={updateElement}
          changeRowType={changeRowType}
          deleteRow={deleteRow}
        />
      )}
      <div
        className={`flex flex-center ${
          rowData[1].type == "none" ? "onlyOneElement" : ""
        } ${activeRowNumber == index ? "active" : ""}`}
        onClick={() => {
          setActiveRowNumber(index);
        }}
      >
        {rowData.map((elementData, i) => {
          const imagePreview = rowData[i].imagePreview;
          const videoUrl = rowData[i].videoUrl;
          const setImagePreview = (url) => {
            updateElement(index, i, { imagePreview: url });
          };
          const setVideoUrl = (url) => {
            updateElement(index, i, { videoUrl: url });
          };

          if (elementData.type === "image") {
            return (
              <div className="responsivePostElement" key={i}>
                <img src={imagePreview || thumbnailPlaceholder} />
                <ImageDropzone
                  rowIndex={index}
                  imagePreview={rowData[i].imagePreview}
                  setImagePreview={setImagePreview}
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
          } else if (elementData.type === "video") {
            return (
              <VideoUploader
                setVideoUrl={setVideoUrl}
                key={i - 11}
                videoUrl={videoUrl}
              />
            );
          }
        })}
      </div>
    </StyledPostContentEditorRow>
  );
}
