export interface ILoginState {
  isLoggedIn: boolean;
  isInValid: boolean;
  accessToken: string;
}

export interface ILoginPayload {
  payload: {
    data: {
      accessToken: string;
      message: string;
    };
  };
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserState {
  id: number;
  nickname: string;
  email: string;
  password: string;
  pwdCheck: string;
  image: string;
  OAuth: boolean;
  submit: boolean;
}
