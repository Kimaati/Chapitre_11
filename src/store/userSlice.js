import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    userDetails: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { login, setUserDetails } = userSlice.actions;
export const userDetails = (state) => state.user.userDetails;
export default userSlice.reducer;
