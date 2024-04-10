import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Category from "../img/category.svg";
import "./PinkCategory.css";

const PinkCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category, reorder: true });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div>
        {quizState.questions.map((question, index) => (
          <button
            key={index}
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={Category} alt="Categorias do Quiz" />
    </div>
  );
};

export default PinkCategory;
