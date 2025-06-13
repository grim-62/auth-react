import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthModel from "../../models/auth.model";

import authModel from "../../models/auth.model";

export const login = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await AuthModel.loginUser(formData);
      
      // console.log("data =======>",data);

      console.log("Login success:", data);
      return data;
      // return the useful part or sending use full data to redux to set the state
      //  like token,userid isauth something like the action part
      // this shit get formated in this-way
      // res.token =>> action.payload.token
      
    } catch (error) {
      console.error("Login error:", error);

      // Return a readable error message
      const message =
        error.response?.data?.message || "Login failed. Please try again.";
      // const message = "Login failed. Please try again.";

      return rejectWithValue(message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue, dispatch }) => {
    try {
      const res = await authModel.register(formData);
      return res;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
