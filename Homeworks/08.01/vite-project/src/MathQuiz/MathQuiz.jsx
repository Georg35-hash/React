import { useState } from "react";
import Answer from "./Answer";
import QuizStyles from "./QuizStyles.module.css";

export default function MathQuiz() {
    const [a, setA] = useState(generateRandomNumber());
    const [b, setB] = useState(generateRandomNumber());
    const [score, setScore] = useState(0);
  
    function generateRandomNumber() {
      return Math.floor(Math.random() * 10) + 1;
    }
  
    const updatePoints = (userAnswer) => {
      const correctAnswer = a + b;
      if (parseInt(userAnswer, 10) === correctAnswer) {
        setScore(score + 1);
        alert("Правильно!");
      } else {
        setScore(score - 1);
        alert(`Неправильно! Правильный ответ: ${correctAnswer}`);
      }
      
      setA(generateRandomNumber());
      setB(generateRandomNumber());
    };
  
    return (
      <div className={QuizStyles.quizform}>
     
        <h1>Ваши очки: {score}</h1>
        <h2>
          {a} + {b} = ?
        </h2>
        <Answer onSubmit={updatePoints} />
      </div>
    );
  
};



