import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../features/questionnaire/questionnaireSlice";

const Question = ({ id, text, options }) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(
    (state) => state.questionnaire.answers[id]
  );

  return (
    <div>
      <p>{text}</p>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={`question-${id}`}
            value={option}
            checked={selectedAnswer === option}
            onChange={() => dispatch(answerQuestion({ id, answer: option }))}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
