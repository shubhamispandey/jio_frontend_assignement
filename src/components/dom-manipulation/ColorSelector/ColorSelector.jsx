import React, { useState } from "react";
import styles from "./ColorSelector.module.css";

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(""); // Initialize with an empty string
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Initial background color

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    setBackgroundColor(newColor);
  };

  return (
    <div className={styles.container}>
      <h1>Select a Color</h1>
      <select
        onChange={handleColorChange}
        className={styles.select}
        value={selectedColor}
      >
        <option value="">-- Select a color --</option>
        <option value="#f71c2a" className={styles.colorOption}>
          Red
        </option>
        <option value="#33ff57" className={styles.colorOption}>
          Green
        </option>
        <option value="#5733ff" className={styles.colorOption}>
          Blue
        </option>
      </select>
      <div
        className={styles.colorDisplay}
        style={{ backgroundColor: backgroundColor }}
      ></div>
    </div>
  );
};

export default ColorSelector;
