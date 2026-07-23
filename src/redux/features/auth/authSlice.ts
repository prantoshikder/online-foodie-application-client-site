import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = {
  name: string;
  // A user signs in with either an email or a phone number — at least one is set.
  email?: string;
  phone?: string;
};

type AuthState = {
  user: AuthUser | null;
};

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    clearCredentials: (state) => {
      state.user = null;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
