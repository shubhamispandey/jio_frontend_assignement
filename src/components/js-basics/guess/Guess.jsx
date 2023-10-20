import React, { useState, useEffect } from "react";
import styles from "./Guess.module.css";

const Guess = () => {
  const [guess, setGuess] = useState("");
  const [guessesLeft, setGuessesLeft] = useState(3);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [message, setMessage] = useState("🤖 Start Guessing...");

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  useEffect(() => {
    if (guessesLeft === 0 && guess == randomNumber) {
      setIsGameOver(true);
      setMessage("🎉 Woohoooo...You Won 🎉");
    } else if (guessesLeft == 0 && guess != randomNumber) {
      setIsGameOver(true);
      setMessage("GAME OVER, You Lose ⌛");
    }
  }, [guessesLeft]);

  const checkGuess = () => {
    if (isGameOver) return;

    const userGuess = parseInt(guess);
    if (isNaN(userGuess)) {
      setMessage("Please Enter a valid guess 🤷‍♀️");
      return;
    }

    setGuessesLeft((prevGuessesLeft) => prevGuessesLeft - 1);

    if (userGuess === randomNumber) {
      setMessage("🎉 Woohoooo...You Won 🎉");
      setIsGameOver(true);
      setIsWon(true);
    } else {
      const messageText =
        userGuess > randomNumber ? "Too High 📈" : "Too Low 📉";
      setMessage(`Oops...${messageText}`);
    }
  };

  const handleReset = () => {
    setGuess("");
    setRandomNumber(generateRandomNumber());
    setGuessesLeft(3);
    setIsGameOver(false);
    setIsWon(false);
    setMessage("🤖 Start Guessing...");
  };
  console.log(randomNumber);

  return (
    <div>
      <button className={styles.reset} onClick={handleReset}>
        Reset
      </button>
      <div className={styles.InputWrapper}>
        <div
          className={`${styles.guess} ${
            isGameOver ? (isWon ? styles.won : styles.lose) : ""
          }`}
        >
          {isWon ? randomNumber : "?"}
        </div>
        <div className={styles.form_group}>
          <input
            type="number"
            id="guessedNumber"
            placeholder="Guess A Number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={isGameOver}
          />
          <label htmlFor="guessedNumber">Guess A Number</label>
        </div>
        <button onClick={checkGuess} disabled={isGameOver}>
          Guess
        </button>
      </div>
      <p className={styles.message}>{message}</p>
      <p className={styles.guessMessage}>
        Guess Left: <span>{guessesLeft}</span>
      </p>
    </div>
  );
};

export default Guess;
