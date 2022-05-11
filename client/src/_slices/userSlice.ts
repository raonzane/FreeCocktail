import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../_store/store';

interface UserState {
  id: number;
  nickname: string;
  email: string;
  password: string;
  pwdCheck: string;
  image: string;
  OAuth: boolean;
  submit: boolean;
}

interface Arguments {
  snsName: string;
  accessToken: string;
}

const INITIAL_STATE: UserState = {
  id: 0,
  nickname: '',
  email: '',
  password: '',
  pwdCheck: '',
  image: '',
  OAuth: false,
  submit: false,
};

export const socialUserAsnyc = createAsyncThunk(
  'SNS_LOGIN',
  async (arg: Arguments): Promise<any> => {
    const loginUserData = axios
      .post(`http://localhost:3001/oauth/${arg.snsName}`, {
        idToken: `${arg.accessToken}`,
      })
      .then((userInfo) => userInfo.data.data)
      .catch((err) => console.log(err));
    return loginUserData;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // signup: (userState, action: PayloadAction<UserState>) => {
    //   const { id, nickname, email, password, pwdCheck, image, OAuth, submit } =
    //     action.payload;
    //   userState = {
    //     id,
    //     nickname,
    //     email,
    //     password,
    //     pwdCheck,
    //     image,
    //     OAuth,
    //     submit,
    //   };
    //   return userState;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(socialUserAsnyc.pending, (INITIAL_STATE, action) => {
      return INITIAL_STATE;
    });
    builder.addCase(socialUserAsnyc.fulfilled, (INITIAL_STATE, action) => {
      return { INITIAL_STATE, ...action.payload };
    });
    builder.addCase(socialUserAsnyc.rejected, (INITIAL_STATE, action) => {
      return INITIAL_STATE;
    });
  },
});

// export const userData = (state: RootState) => state.userInfo;
export const userData = (state: RootState) => state.persistedReducer.userInfo;
// export const { signup } = userSlice.actions;
export default userSlice.reducer;
