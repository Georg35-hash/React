import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    { id: 1, text: "Вы любите путешествовать?", options: ["Да", "Нет"] },
    {
      id: 2,
      text: "Вы предпочитаете кошек или собак?",
      options: ["Кошки", "Собаки"],
    },
  ],
  answers: {},
  submitted: false,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, { payload: { id, answer } }) => {
      state.answers[id] = answer;
    },
    submitAnswers: (state) => {
      state.submitted = true;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
