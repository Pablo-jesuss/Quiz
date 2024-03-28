import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Quest = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  return <div>Question</div>;
};

export default Quest;
