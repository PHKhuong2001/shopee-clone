import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login() {},
    signup() {},
  },
  extraReducers(builder) {},
});
export const { login, signup } = authSlice.actions;
export default authSlice.reducer;
