import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginFormInput } from "../../app-types/login-form-input.types";
import { login } from "../../services/auth.service";
import { LoginErrorResponse, LoginResponse } from "../../app-types/login.type";
import { AxiosError } from "../../services/http.service";

// Define a type for the slice state
export interface AuthState {
  profile: string;
  email: string;
  loginResponse: LoginResponse | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  profile: "Jotaro Jostar",
  email: "Jojo@odds.team",
  loginResponse: null,
};

export const loginThunk = createAsyncThunk<
  LoginResponse,
  LoginFormInput,
  { rejectValue: LoginErrorResponse }
>(
  "auth/loginThunkStatus",
  async (user: LoginFormInput, { rejectWithValue }) => {
    try {
      const response = await login(user.email, user.password);
      return response.data;
    } catch (error: any) {
      let err: AxiosError<LoginErrorResponse> = error;
      if (!err.response) {
        throw error;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(
      loginThunk.fulfilled,
      (state, action: PayloadAction<LoginResponse | null>) => {
        state.loginResponse = action.payload;
      }
    );
  },
});

export const { changeProfile } = authSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const selectAuthState = (state: RootState) => state.auth;
export default authSlice.reducer;
