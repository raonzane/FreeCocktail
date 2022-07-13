import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../_store/store';

interface InitialStateType {
  data: {
    id: number;
    nickname: string;
    email: string;
    password: string;
    pwdCheck: string;
    image: string;
    OAuth: boolean;
    submit: boolean;
  };
  likeInfo: Array<object>;
}

let INITIAL_STATE: InitialStateType = {
  data: {
    id: 0,
    nickname: '',
    email: '',
    password: '',
    pwdCheck: '',
    image: '',
    OAuth: false,
    submit: false,
  },
  likeInfo: [],
};

interface SIGNIN_ARG {
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
    const socialLoginUserData = axios
      .post(`http://localhost:3001/oauth/${arg.snsName}`, {
        idToken: `${arg.accessToken}`,
      })
      .then((userInfo) => userInfo.data.data)
      .catch((err) => console.log(err));
    return socialLoginUserData;
  }
);

export const userLoginAsync = createAsyncThunk(
  'USER_LOGIN',
  async (arg: SIGNIN_ARG): Promise<any> => {
    const loginUserData = axios
      .post(
        `http://localhost:3001/user/login`,
        { email: arg.email, password: arg.password },
        { withCredentials: true }
      )
      .then((userInfo) => {
        const userLikesDrinks = userInfo.data.likeInfo.map((el: any) => {
          return el.drinkId;
        });
        INITIAL_STATE = {
          data: { ...userInfo.data.data },
          likeInfo: [...userLikesDrinks],
        };
        console.log('로그인 유저의 INITIAL_STATE', INITIAL_STATE);
        return INITIAL_STATE;
      })
      .catch((err) => console.log(err));
    return loginUserData;
  }
);

const userSlice: any = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    signup: (
      INITIAL_STATE,
      action: PayloadAction<InitialStateType['data']>
    ) => {
      console.log('action', action);
      console.log('action.payload', action.payload);

      const { id, nickname, email, password, pwdCheck, image, OAuth, submit } =
        action.payload;

      INITIAL_STATE = {
        data: { id, nickname, email, password, pwdCheck, image, OAuth, submit },
        likeInfo: [],
      };
      return INITIAL_STATE;
    },
  },
  extraReducers: (builder) => {
    // * 소셜 로그인
    builder.addCase(socialUserAsnyc.pending, (INITIAL_STATE, action) => {
      return INITIAL_STATE;
    });
    builder.addCase(socialUserAsnyc.fulfilled, (INITIAL_STATE, action) => {
      console.log('action.payload', action.payload);
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

// export const userData = (state: RootState) => state.userInfo;

export const userData = (state: RootState) => state.persistedReducer.userInfo;
export const { signup, userAddBookmark, userRemoveBookmark } =
  userSlice.actions;
export default userSlice.reducer;
