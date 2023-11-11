import { StyledPostEditor } from "../styles/PostEditor.styled";

import { UploadDropzone } from "@bytescale/upload-widget-react";

const customLocale = {
  "error!": "Błąd!",
  done: "Zakończono",
  cancel: "anuluj",
  "cancelled!": "anulowano",
  continue: "kontynuuj",
  crop: "przytnij",
  finish: "Koniec",
  image: "obraz",
  maxSize: "Maksymalny rozmiar pliku:",
  orDragDropImage: "...lub przeciągnij ją tutaj.",
  pleaseWait: "Proszę czekać...",
  remove: "Usuń",
  skip: "pomiń",
  unsupportedFileType: "File type not supported.",
  uploadImage: "Wybierz miniaturkę",
};

const options = {
  apiKey: "free",
  maxFileCount: 1,
  maxFileSizeBytes: 1048576,
  mimeTypes: ["image/*"],
  multi: false,
  editor: {
    images: {
      cropRatio: 16 / 9,
    },
  },
  locale: customLocale,
  styles: {
    colors: {
      primary: "#15315C",
      active: "#19365F",
    },
    fontFamilies: {
      base: "Ubuntu, sans-serif",
    },
  },
};

export default function PostEditor() {
  return (
    <StyledPostEditor>
      <UploadDropzone
        options={options}
        onUpdate={({ uploadedFiles }) => {
          console.log(uploadedFiles.map((x) => x.fileUrl).join("\n"));
        }}
        className="dropZone"
        width="48rem"
        height="27rem"
      />
    </StyledPostEditor>
  );
}
