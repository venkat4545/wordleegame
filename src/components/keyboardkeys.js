import React, { useContext } from "react";
import { AppContext } from "../App";

function keyboardkeys({ keyVal, bigKey, disabled }) {
  const { gameOver,Letteronselected, onDelete, onEnter } =useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
     Letteronselected(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default keyboardkeys;