import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./sectionSlice";
import projectsReducer from "./projectsSlice";
import teamReducer from "./teamSlice";
import budgetSlice from "./budgetSlice";
import revenueSlice from "./revenueSlice";

export default configureStore({
  reducer: {
    section: sectionReducer,
    projects: projectsReducer,
    team: teamReducer,
    budget: budgetSlice,
    revenue: revenueSlice,
  },
});
