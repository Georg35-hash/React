import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'data/fetchData', // имя action'а
  async (apiUrl) => {
    // Функция, которая будет вызвана при dispatch'е action'а
    const response = await axios.get(apiUrl); // Отправляем GET-запрос
    return response.data; // Возвращаем данные из ответа сервера
  }
)