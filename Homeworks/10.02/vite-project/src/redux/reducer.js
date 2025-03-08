const initialState = {
  users: ["Alice", "Bob", "Charlie", "David", "Eve"],
  filter: "",
};

//Reducer вызывает action ВСЕГДА даже если он ему не предназначен
//ну а соотвественно если никаких перерисовок не происходит, то наш стейт не должен ломаться и
// всегда возвращаться БЕЗ ИЗМЕНЕНИЙ

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
export default reducer;

//Action не известен, тоесть тот случай когда редьюсер не обрабатывает экшн
const unknownAction = { type: "UNKNOWN_ACTION" };
// Тут мы вызываем редбюсер, который мы ранее в качестве стрелочной функции сделали
const newState = reducer(initialState, unknownAction);
console.log(newState); // { filter: 'all', data: [1, 2, 3] }
