import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    signup: (userState, action: PayloadAction<UserState>) => {
      const { id, nickname, email, password, pwdCheck, image, OAuth, submit } =
        action.payload;
      userState = {
        id,
        nickname,
        email,
        password,
        pwdCheck,
        image,
        OAuth,
        submit,
      };
      return userState;
    },
  },
});

export const userData = (state: RootState) => state.userInfo;
export const { signup } = userSlice.actions;
export default userSlice.reducer;
