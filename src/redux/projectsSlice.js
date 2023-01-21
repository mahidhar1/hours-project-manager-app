import { createSlice } from "@reduxjs/toolkit";

const initialData = [
  {
    projectTitle: "Insurance App",
    client: "Verto",
    totalBudget: "75000",
    profit: "-2500",
    completionStatus: -25,
    actualHours: 1100,
    message: "1000 hours over budget",
  },
  {
    projectTitle: "Neo",
    client: "Bankla",
    totalBudget: "70000",
    profit: "4000",
    completionStatus: 50,
    actualHours: 1100,
    message: "2000 sold hours",
  },
  {
    projectTitle: "VR Website",
    client: "Barca",
    totalBudget: "75000",
    profit: "2500",
    completionStatus: 25,
    actualHours: 1100,
    message: "1000 sold hours",
  },
  {
    projectTitle: "Web3 Project",
    client: "Barklays",
    totalBudget: "5000",
    profit: "2500",
    completionStatus: 100,
    actualHours: 1100,
    message: "2000 sold hours",
  },
  {
    projectTitle: "Insurance App",
    client: "Verto",
    totalBudget: "7500",
    profit: "2500",
    completionStatus: 25,
    actualHours: 1100,
    message: "1000 hours over budget",
  },
  {
    projectTitle: "Insurance App",
    client: "Verto",
    totalBudget: "5000",
    profit: "2500",
    completionStatus: 100,
    actualHours: 1100,
    message: "1000 hours over budget",
  },
];

const initialState = {
  projectsList: initialData,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projectsList = [...state.projectsList, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProject } = projectsSlice.actions;

export default projectsSlice.reducer;
