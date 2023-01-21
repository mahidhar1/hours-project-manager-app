import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "dashboard",
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.selected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSection } = sectionSlice.actions;

export default sectionSlice.reducer;
