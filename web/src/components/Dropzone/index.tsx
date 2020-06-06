import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import { IProps } from "./types";

import "./styles.css";

const MyDropzone: React.FC<IProps> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState<string>("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const urlFile = URL.createObjectURL(file);

      setSelectedFileUrl(urlFile);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input accept="image/*" {...getInputProps()} />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt={"Point thumbnail"} />
      ) : (
        <p>
          <FiUpload />
          Point's image
        </p>
      )}
    </div>
  );
};

export default MyDropzone;
