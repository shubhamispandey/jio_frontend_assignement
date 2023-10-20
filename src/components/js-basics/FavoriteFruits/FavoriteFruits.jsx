import React, { useState } from "react";
import styles from "./FavoriteFruits.module.css";

const FavoriteFruits = () => {
  const [fruits, setFruits] = useState([
    "Apple",
    "Banana",
    "Strawberry",
    "Mango",
    "Pineapple",
  ]);
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleList}>
        Toggle Fruits
      </button>
      {showList && (
        <ol className={styles.fruitList}>
          {fruits.map((fruit, index) => (
            <li key={index} className={styles.listItem}>
              {fruit}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default FavoriteFruits;
