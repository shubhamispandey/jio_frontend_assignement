"use client";
import React from "react";
import styles from "./page.module.css";
import ToggleText from "@/components/dom-manipulation/ToggleText/ToggleText";
import ImageGallery from "@/components/dom-manipulation/ImageGallery/ImageGallery";
import ColorSelector from "@/components/dom-manipulation/ColorSelector/ColorSelector";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Item}>
        <div className={styles.heading}>
          <i className="fas fa-bolt"></i>
          <h2 className={styles.heading__secondary}>1. Toggle Text</h2>
        </div>
        <ToggleText />
      </div>
      <div className={styles.Item}>
        <div className={styles.heading}>
          <i className="fas fa-bolt"></i>
          <h2 className={styles.heading__secondary}>2. Image Gallery</h2>
        </div>
        <ImageGallery />
      </div>
      <div className={styles.Item}>
        <div className={styles.heading}>
          <i className="fas fa-bolt"></i>
          <h2 className={styles.heading__secondary}>3. Color Selector</h2>
        </div>
        <ColorSelector />
      </div>
    </div>
  );
};

export default page;
