"use client";
import React from "react";
import styles from "./page.module.css";
import Guess from "@/components/js-basics/guess/Guess";
import FavoriteFruits from "@/components/js-basics/FavoriteFruits/FavoriteFruits";
import OddEven from "@/components/js-basics/OddEven/OddEven";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Item}>
        <div className={styles.heading}>
          <i className="fas fa-bolt"></i>
          <h2 className={styles.heading__secondary}>1. Even or Odd</h2>
        </div>
        <OddEven />
      </div>
      <div className={styles.Item}>
        <div className={styles.heading}>
          <i className="fas fa-bolt"></i>
          <h2 className={styles.heading__secondary}>
            2. Guess the Number (1-10)
          </h2>
        </div>
        <Guess />
      </div>
      <div className={styles.Item}>
        <div className={styles.heading}>
          <i className="fas fa-bolt"></i>
          <h2 className={styles.heading__secondary}>
            3. Toggle Favorite Fruits
          </h2>
        </div>
        <FavoriteFruits />
      </div>
    </div>
  );
};

export default page;
