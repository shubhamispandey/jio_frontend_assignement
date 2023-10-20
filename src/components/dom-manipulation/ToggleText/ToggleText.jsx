import React, { useState } from "react";
import styles from "./ToggleText.module.css";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.Container}>
      <button onClick={toggleVisibility}>Toggle Text</button>
      <p
        className={`${styles.text} ${styles.hidden} ${
          isVisible ? "" : styles.visible
        }`}
      >
        This is the hidden text. It will appear when you click the button.
      </p>
    </div>
  );
};

export default ToggleText;
