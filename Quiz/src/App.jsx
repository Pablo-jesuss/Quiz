import { useContext } from "react";
import { QuizContext } from "./context/quiz";
import Welcome from "./components/Welcome";
import question from "./components/question";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Welcome />}
    </div>
  );
}

export default App;
