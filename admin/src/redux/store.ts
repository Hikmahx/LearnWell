import { configureStore } from '@reduxjs/toolkit'
import sharedReducer from "./reducers/sharedSlice";


export const store = configureStore({
  reducer: {
    shared: sharedReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;