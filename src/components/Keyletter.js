import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Keyletter({ letterposition, attemptedvalue }) {
  const { board, setDisabledLetters, currentattempted, correctWord } = useContext(AppContext);
  const letter = board[attemptedvalue][letterposition];
  const green = correctWord.toUpperCase()[letterposition] === letter;
  const yellow =
  !green && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
  currentattempted.attempt > attemptedvalue &&
    (green ? "correct" : yellow ? "almost" : "error");

 useEffect(() => {
    if (letter !== "" && !green && !yellow) {
      console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  },[currentattempted.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Keyletter;