import React, { useState } from "react";
import staticData from "@/utils/staticData";
import styles from "./ImageGallery.module.css";
import Image from "next/image";

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = staticData.imageGallery;
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className={styles.imageGallery}>
      <Image
        className={styles.img}
        src={images[currentImageIndex].src}
        alt={`Image ${currentImageIndex + 1}`}
        width={300}
        height={175}
      />

      <div>
        <button className={styles.button} onClick={previousImage}>
          Previous
        </button>
        <button className={styles.button} onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
