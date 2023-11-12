import { useState } from "react";
import { StyledPostEditor } from "../styles/PostEditor.styled";

import { UploadDropzone } from "@bytescale/upload-widget-react";

const customLocale = {
  "error!": "Błąd!",
  done: "Zakończono",
  cancel: "Anuluj",
  cancelInPreviewWindow: "Anuluj",
  "cancelled!": "anulowano",
  continue: "Kontynuuj",
  crop: "Przytnij",
  finish: "Dodaj",
  image: "obraz",
  maxSize: "Maksymalny rozmiar pliku:",
  orDragDropImage: "...lub przeciągnij ją tutaj.",
  pleaseWait: "Proszę czekać...",
  remove: "Usuń",
  skip: "Pomiń",
  unsupportedFileType: "Nie wspierany typ pliku.",
  uploadImage: "Wybierz miniaturkę",
  "removed!": "usunięto",
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
  showFinishButton: true,
  apiKey: "public_12a1yfj8Brf88jVbjp8iUHaJ6sJs",
};

export default function PostEditor() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <StyledPostEditor>
      {!imageUrl ? (
        <UploadDropzone
          options={options}
          onComplete={(file) => {
            setImageUrl(file[0].fileUrl);
            console.log(file[0].fileUrl);
          }}
          className="dropZone"
          width="48rem"
          height="27rem"
        />
      ) : (
        <img src={imageUrl} />
      )}
    </StyledPostEditor>
  );
}
