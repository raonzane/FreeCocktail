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
    signup: (useeState, action: PayloadAction<userStateType>) => {
      const { id, nickname, email, password, image, OAuth } = action.payload;
      useeState = { id, nickname, email, password, image, OAuth };
      return useeState;
    },
  },
});

export const { signup } = userSlice.actions;
export default userSlice.reducer;
