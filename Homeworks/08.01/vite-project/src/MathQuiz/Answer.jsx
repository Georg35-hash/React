import { useState } from "react";
import QuizStyles from "./QuizStyles.module.css";

export default function Answer({ onSubmit }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === "") {
      alert("Введите ответ!");
      return;
    }
    onSubmit(answer);
    setAnswer("");
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Ваш ответ"
        className={QuizStyles.quizinput}
      />
      <button type="submit" className={QuizStyles.button}>
        Проверить
      </button>
    </form>
  );
};


