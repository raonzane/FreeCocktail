import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ILoginState, ILoginPayload, ILogin } from 'types/types';
import type { RootState } from '../_store/store';

// 초기 상태값
const initialState: ILoginState = {
  isLoggedIn: false,
  isInValid: false,
  accessToken: '',
};

export const setAuth = createAsyncThunk(
  'authSlice/setAuth',
  async ({ email, password }: ILogin) => {
    return axios.post(
      `http://localhost:3001/user/login`,
      { email, password },
      { withCredentials: true }
    );
  }
);

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setLogOut(state) {
      state.isLoggedIn = false;
      // state.accessToken = '';
    },
    setSocialLogin(state, action) {
      state.isLoggedIn = true;
      state.isInValid = false;
      // state.accessToken = action.payload;
    },
  },
  extraReducers: {
    [setAuth.pending.type]: (state) => {
      state.isLoggedIn = false;
      state.isInValid = false;
      // state.accessToken = '';
    },
    [setAuth.fulfilled.type]: (state, action: ILoginPayload) => {
      state.isLoggedIn = true;
      state.isInValid = false;
      // state.accessToken = action.payload.data.accessToken;
    },
    [setAuth.rejected.type]: (state) => {
      state.isLoggedIn = false;
      state.isInValid = true;
      // state.accessToken = '';
    },
  },
});

export const ILoginData = (state: RootState) =>
  state.persistedReducer.ILoginInfo;
export const { setLogOut, setSocialLogin } = authSlice.actions;
export default authSlice.reducer;
