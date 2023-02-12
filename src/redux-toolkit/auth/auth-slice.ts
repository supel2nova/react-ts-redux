import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// Define a type for the slice state
interface AuthState {
  profile: string;
  email: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  profile: "Jotaro Jostar",
  email: "Jojo@odds.team",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeProfile: (state) => {
      state.profile = "Dio";
      state.email = "dio@odds.team";
    },
  },
});

export const { changeProfile } = authSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const selectAuthState = (state: RootState) => state.auth;
export default authSlice.reducer;
