import { useContext } from "react";
import { QuizContext } from "./context/quiz";
import Welcome from "./components/Welcome";
import Quest from "./components/Quest";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Quest />}
    </div>
  );
}

export default App;
