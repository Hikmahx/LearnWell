import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    currentQuestion: 1,
    score: 0,
    quizQuestions: [],
  },
  reducers: {
    setQuizQuestion: (state, { payload }) => {
      state.quizQuestions = payload;
    },
    setCurrentQuestion: (state, { payload }) => {
      state.currentQuestion = payload;
    },
    setScore: (state, { payload }) => {
      state.score = payload;
    },
  },
});

export const { setQuizQuestion, setCurrentQuestion, setScore } =
  quizSlice.actions;
export default quizSlice.reducer;
