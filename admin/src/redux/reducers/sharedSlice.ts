import { createSlice, } from "@reduxjs/toolkit";

const sharedSlice = createSlice({
  name: "shared",
  initialState: {
    showAside: false,
    searchText: "",

  },
  reducers: {
    asideToggle: (state, { payload }) => {
      state.showAside = payload
    }, 
    searchInput: (state, { payload }) => {
      state.searchText = payload;
    }
  },
})

export const { asideToggle, searchInput } = sharedSlice.actions
export default sharedSlice.reducer;
