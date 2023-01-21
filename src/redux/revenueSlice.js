import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  monthly: {
    Jan: 45,
    Feb: 56,
    Mar: 75,
    April: 45,
    May: 33,
    Jun: 56,
    July: 76,
  },
  weekly: {
    Sun: 12,
    Mon: 13,
    Tue: 45,
    Wed: 45,
    Thur: 22,
    Fri: 22,
    Sat: 14,
  },
};

const initialState = {
  data: initialData,
};

export const revenueSlice = createSlice({
  name: "revenue",
  initialState,
  reducers: {
    addRevenue: (state, action) => {
      state.projectsList = { ...state.projectsList, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRevenue } = revenueSlice.actions;

export default revenueSlice.reducer;
