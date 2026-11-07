"use client";
import styles from "./index.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string>("");
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      setPreviewImage("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/jpeg, image/png"
          ref={fileInputRef}
          onChange={handleFileChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
        >
          Choose Image
        </button>
      </div>
      <div className={styles.preview}>
        <p className={styles.previewText}>No image chosen</p>
        {previewImage && (
          <Image
            src={previewImage}
            alt="Preview"
            className={styles.previewImage}
            fill
          />
        )}
      </div>
    </div>
  );
}
