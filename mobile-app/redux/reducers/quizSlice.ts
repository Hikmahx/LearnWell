import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Quiz } from "./types";

interface QuizState {
  currentQuestionIndex: number;
  score: number;
  quizQuestions: Quiz[];
  showAnswer: boolean;
  selectedOption: number | null;
}

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    currentQuestionIndex: 1,
    score: 0,
    quizQuestions: [],
    showAnswer: false,
    selectedOption: null,
  } as QuizState,
  reducers: {
    setQuizQuestions: (state, { payload }) => {
      state.quizQuestions = payload;
    },
    setCurrentQuestionIndex: (state, { payload }) => {
      state.currentQuestionIndex = payload;
    },
    setScore: (state, { payload }) => {
      state.score = payload;
    },
    setShowAnswer: (state, { payload }) => {
      state.showAnswer = payload;
    },
    setSelectedOption: (state, { payload }) => {
      state.selectedOption = payload;
    },
  },
});

export const {
  setQuizQuestions,
  setCurrentQuestionIndex,
  setScore,
  setShowAnswer,
  setSelectedOption,
} = quizSlice.actions;
export default quizSlice.reducer;
