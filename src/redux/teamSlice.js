import { createSlice } from "@reduxjs/toolkit";

const initialData = [
  {
    profilePic: "",
    name: "Mahidhar",
    position: "Reactjs Developer",
    moodIndex: 10,
  },
  { profilePic: "", name: "Andrea", position: "UX Junior", moodIndex: 2 },
  {
    profilePic: "",
    name: "Alvaro",
    position: "Backend Developer",
    moodIndex: 5,
  },
  { profilePic: "", name: "Juan", position: "UX Senior", moodIndex: 4 },
  { profilePic: "", name: "Jose", position: "UX Junior", moodIndex: 1 },
  { profilePic: "", name: "Maria", position: "UX Junior", moodIndex: 3 },
  { profilePic: "", name: "Juan", position: "UX Senior", moodIndex: 4 },
];

const initialState = {
  members: initialData,
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.members = [...state.members, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMember } = teamSlice.actions;

export default teamSlice.reducer;
