import { createSlice } from '@reduxjs/toolkit';
import { loginUserAction, registerUserAction } from './auth.action';

interface AuthState {
  token: string | null;
  loading: boolean;
  fetched: boolean;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  fetched: true,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state) => {
        state.loading = true;
        state.fetched = false;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.fetched = true;
        state.token = action.payload.token;
      })
      .addCase(loginUserAction.rejected, (state) => {
        state.loading = false;
        state.fetched = false;
      })
      .addCase(registerUserAction.pending, (state) => {
        state.loading = true;
        state.fetched = false;
      })
      .addCase(registerUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.fetched = true;
      })
      .addCase(registerUserAction.rejected, (state) => {
        state.loading = false;
        state.fetched = false;
      });
  },
});

export default authSlice.reducer;
