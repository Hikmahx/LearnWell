import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    isMenuVisible: false,
    isColorPickerVisible: false,
    color: "#ffffff",
    articleContent: "",
    editorState: "" || "cancelled" || "editing" || "updating",
  },
  reducers: {
    setIsColorPickerVisible: (state, { payload }) => {
      state.isColorPickerVisible = !state.isColorPickerVisible;
    },
    setColor: (state, { payload }) => {
      state.color = payload;
    },
    setArticleContent: (state, { payload }) => {
      state.articleContent = payload;
    },
    setEditorState: (state, { payload }) => {
      state.editorState = payload;
    },
  },
});

export const {
  setIsColorPickerVisible,
  setColor,
  setArticleContent,
  setEditorState,
} = notesSlice.actions;
export default notesSlice.reducer;
