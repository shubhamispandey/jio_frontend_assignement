"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Guess from "@/components/js-basics/guess/Guess";
import FavoriteFruits from "@/components/js-basics/FavoriteFruits/FavoriteFruits";

const page = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = () =>
    number % 2 === 0 ? setResult("Even") : setResult("Odd");

  return (
    <div className={styles.container}>
      <div className={styles.Item}>
        <div className={styles.heading}>
          <i className="fas fa-bolt"></i>
          <h2 className={styles.heading__secondary}>1. Even or Odd</h2>
        </div>
        <div className={styles.InputField}>
          <div className={styles.form_group}>
            <input
              type="number"
              id="numberOddEven"
              placeholder="Enter  A Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="numberOddEven">Enter A Number</label>
          </div>
          <button onClick={checkNumber}>Check</button>
        </div>

        <p className={styles.message}>
          {result ? `The number ${number} number is ${result} 😎😎` : ""}
        </p>
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
