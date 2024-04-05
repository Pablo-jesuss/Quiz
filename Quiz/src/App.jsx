import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";
import Welcome from "./components/Welcome";
import Quest from "./components/Quest";
import GameOver from "./components/GameOver";
import "./App.css";
import PinkCategory from "./components/PinkCategory";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PinkCategory />}
      {quizState.gameStage === "Playing" && <Quest />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
