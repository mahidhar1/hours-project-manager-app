import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  status: {
    underBudget: 48,
    onBudget: 33,
    overBudget: 19,
  },
  profitability: {
    inLoss: 10,
    neutral: 70,
    inProfit: 20,
  },
};

const initialState = {
  data: initialData,
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addBudget: (state, action) => {
      state.projectsList = [...state.projectsList, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBudget } = budgetSlice.actions;

export default budgetSlice.reducer;
