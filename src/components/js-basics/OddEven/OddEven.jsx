"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const OddEven = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkNumber = () =>
    number % 2 === 0 ? setResult("Even") : setResult("Odd");
  return (
    <>
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
    </>
  );
};

export default OddEven;
