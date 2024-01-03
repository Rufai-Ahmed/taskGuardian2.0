import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
  userDetail: {} || null,
  toggleP: false,
  toggleT: false,
  project: [],
  tasks: [],
};

const reduxState = createSlice({
  name: "second",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
    changeToggleT: (state, { payload }) => {
      state.toggleT = payload;
    },
    changeToggleP: (state, { payload }) => {
      state.toggleP = payload;
    },
    addProject: (state, { payload }) => {
      state.project = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks = payload;
    },
    addUserDetail: (state, { payload }) => {
      state.userDetail = payload;
    },
  },
});

export const {
  login,
  logout,
  changeToggleT,
  changeToggleP,
  addProject,
  addTask,
  addUserDetail,
} = reduxState.actions;

export default reduxState.reducer;
