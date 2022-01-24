import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userStateType {
  id: number;
  nickname: string;
  email: string;
  password: string;
  image: string;
  OAuth: boolean;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    signup: (userState, action: PayloadAction<userStateType>) => {
      const { id, nickname, email, password, image, OAuth } = action.payload;
      userState = { id, nickname, email, password, image, OAuth };
      return userState;
    },
  },
});

export const { signup } = userSlice.actions;
export default userSlice.reducer;
