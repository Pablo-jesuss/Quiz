import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from "../img/category.svg";

import "./PinkCategory.css";

const PinkCategory = () => {
  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <p>linguagens</p>
      <img src={Category} alt="Categorias do Quiz" />
    </div>
  );
};

export default PinkCategory;
