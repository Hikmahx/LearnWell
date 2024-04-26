import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    isMenuVisible: false,
    isColorPickerVisible: false,
    color: "#ffffff",
  },
  reducers: {
    setIsColorPickerVisible: (state, { payload }) => {
      state.isColorPickerVisible = !state.isColorPickerVisible;
    },
    setColor: (state, { payload }) => {
      state.color = payload;

    },
  },
});

export const { setIsColorPickerVisible, setColor } = notesSlice.actions;
export default notesSlice.reducer;
