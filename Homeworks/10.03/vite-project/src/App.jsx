import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const dispatch = useDispatch();
  const { questions, submitted } = useSelector((state) => state.questionnaire);

  return (
    <div>
      <h1>Анкета</h1>
      {questions.map((q) => (
        <Question key={q.id} id={q.id} text={q.text} options={q.options} />
      ))}
      {!submitted && (
        <button onClick={() => dispatch(submitAnswers())}>Отправить</button>
      )}
      <Result />
    </div>
  );
}

export default App;
