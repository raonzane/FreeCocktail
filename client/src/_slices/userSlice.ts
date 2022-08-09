import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../_store/store';

interface InitialStateType {
  id: number;
  nickname: string;
  email: string;
  password: string;
  pwdCheck: string;
  image: string;
  likes: Array<any>;
  recipes: Array<any>;
  OAuth: boolean;
  submit: boolean;
}

const INITIAL_STATE: InitialStateType = {
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

interface LOGIN_INPUT {
  email: string;
  password: string;
}

interface SocialLoginARG {
  snsName: string;
  accessToken: string;
}

interface SignUpARG {
  nickname: string;
  email: string;
  password: string;
  image: string;
  submit: boolean;
}

export const socialUserAsnyc = createAsyncThunk(
  'SNS_LOGIN',
  async (arg: SocialLoginARG): Promise<any> => {
    const socialLoginUserData = await axios
      .post(`http://localhost:3001/user/${arg.snsName}`, {
        idToken: `${arg.accessToken}`,
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
  async (LoginInput: LOGIN_INPUT): Promise<any> => {
    const loginUserData = axios
      .post(
        `http://localhost:3001/user/login`,
        { email: LoginInput.email, password: LoginInput.password },
        { withCredentials: true }
      )
      .then((userInfo) => {
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
    signup: (INITIAL_STATE, action: PayloadAction<InitialStateType>) => {
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
      INITIAL_STATE: InitialStateType,
      action: PayloadAction<InitialStateType>
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
