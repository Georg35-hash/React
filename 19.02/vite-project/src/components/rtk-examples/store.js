import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import counterSlice from './slice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  }, // передаем корневой reducer
  middleware: (getDefaultMiddleware) => {
    // Добавляем middleware по умолчанию
    // (например, для обработки асинхронных операций)
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV !== 'production', // Включаем devTools только в режиме разработки
  enhancers: [] // Дополнительные улучшения нашего хранилища
})

export default store;


// dispatch action from UI => (middleware) => change state via reducer => update UI