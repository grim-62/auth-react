import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/auth.action";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state, action) => {
      // sessionStorage.clear();
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.loading = false;
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
      state.loading = false;
      
    })
    // .addCase()
  },
});
export default authSlice.reducer;

export const { logOut } = authSlice.actions;
// export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
// export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
