import "./App.css";
import Board from "./components/innerboard";
import Keyboard from "./components/innerKeyboard";
import { boardDefault, wordGenerated } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/gamefinish";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentattempted, setcurrentattempted] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [letterdisabled, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  useEffect(() => {
    wordGenerated().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onEnter = () => {
    if (currentattempted.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currentattempted.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setcurrentattempted({ attempt: currentattempted.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currentattempted);
    if (currentattempted.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currentattempted.letter === 0) return;
    const newBoard = [...board];
    newBoard[currentattempted.attempt][currentattempted.letter - 1] = "";
    setBoard(newBoard);
    setcurrentattempted({ ...currentattempted, letter: currentattempted.letter - 1 });
  };

  constLetteronselected = (key) => {
    if (currentattempted.letter > 4) return;
    const newBoard = [...board];
    newBoard[currentattempted.attempt][currentattempted.letter] = key;
    setBoard(newBoard);
    setcurrentattempted({
      attempt: currentattempted.attempt,
      letter: currentattempted.letter + 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentattempted,
          setcurrentattempted,
          correctWord,
         Letteronselected,
          onDelete,
          onEnter,
          setDisabledLetters,
          letterdisabled,
          gameOver,
        }}
      >
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
