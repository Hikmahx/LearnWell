import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notesSlice";
import quizReducer from "./reducers/quizSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;