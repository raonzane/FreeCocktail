import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../_store/store';
import { IUserState, ILogin, OauthLogin } from '../types/types';

const INITIAL_STATE: IUserState = {
  id: 0,
  nickname: '',
  email: '',
  password: '',
  pwdCheck: '',
  image: '',
  likes: [],
  recipes: [],
  OAuth: false,
  submit: false,
};

export const socialUserAsnyc = createAsyncThunk(
  'SNS_LOGIN',
  async (ARG: OauthLogin): Promise<any> => {
    const socialLoginUserData = await axios
      .post(`http://localhost:3001/user/${ARG.snsName}`, {
        idToken: `${ARG.accessToken}`,
      })
      .then((userInfo) => {
        return userInfo.data;
      })
      .catch((err) => console.log(err));
    return socialLoginUserData;
  }
);

export const userLoginAsync = createAsyncThunk(
  'USER_LOGIN',
  async (LoginInput: ILogin): Promise<any> => {
    const loginUserData = axios
      .post(
        `http://localhost:3001/user/login`,
        { email: LoginInput.email, password: LoginInput.password },
        { withCredentials: true }
      )
      .then((userInfo) => {
        console.log('userInfo', userInfo);
        const userLikesData = userInfo.data.likes.map((el: any) => {
          return el.drink;
        });
        userInfo.data.likes = [...userLikesData];
        return userInfo.data;
      })
      .catch((err) => console.log(err));
    return loginUserData;
  }
);

const userSlice: any = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    signup: (INITIAL_STATE, action: PayloadAction<IUserState>) => {
      const {
        id,
        nickname,
        email,
        password,
        pwdCheck,
        image,
        likes,
        recipes,
        OAuth,
        submit,
      } = action.payload;

      INITIAL_STATE = {
        id,
        nickname,
        email,
        password,
        pwdCheck,
        image,
        likes,
        recipes,
        OAuth,
        submit,
      };
      return INITIAL_STATE;
    },

    editUserBookmark: (
      INITIAL_STATE: IUserState,
      action: PayloadAction<IUserState>
    ) => {
      INITIAL_STATE = { ...action.payload };
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    // * 소셜 로그인
    builder.addCase(socialUserAsnyc.pending, (INITIAL_STATE, action) => {
      return INITIAL_STATE;
    });
    builder.addCase(socialUserAsnyc.fulfilled, (INITIAL_STATE, action) => {
      return { ...action.payload };
    });
    builder.addCase(socialUserAsnyc.rejected, (INITIAL_STATE, action) => {
      return INITIAL_STATE;
    });

    // * 일반 로그인
    builder.addCase(userLoginAsync.pending, (INITIAL_STATE, action) => {
      return INITIAL_STATE;
    });
    builder.addCase(userLoginAsync.fulfilled, (INITIAL_STATE, action) => {
      return { ...action.payload };
    });
    builder.addCase(userLoginAsync.rejected, (INITIAL_STATE, action) => {
      return INITIAL_STATE;
    });
  },
});

export const userData = (state: RootState) => state.persistedReducer.userInfo;
export const { signup, editUserBookmark } = userSlice.actions;

export default userSlice.reducer;
