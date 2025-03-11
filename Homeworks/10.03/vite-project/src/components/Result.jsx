import { useSelector } from "react-redux";

const Result = () => {
  const { answers, submitted } = useSelector((state) => state.questionnaire);

  if (!submitted) return null;

  return (
    <div>
      <h2>Результаты</h2>
      <ul>
        {Object.keys(answers).map((id) => (
          <li key={id}>
            Вопрос {id}: {answers[id]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
