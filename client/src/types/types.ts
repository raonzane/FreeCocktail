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

export interface OauthLogin {
  snsName: string;
  accessToken: string;
}

export interface IUserState {
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

export interface RecipePage {
  requestedCategory: string;
  requestedTags: string;
  description: string;
}

export interface RecipeCard {
  id: number;
  name: string;
  image: string;
  likeCount: number;
  Ingredient: Array<string>;
  Instructions: string;
  measure: Array<string>;
  tags: Array<string>;
  updatedAt: string;
  userId: null | number;
}

export interface RecipeBookmark {
  userId: number;
  recipeId: number;
  likeCheck: boolean;
}

export interface IODataType {
  boundingClientRect: any;
  intersectionRatio: number;
  intersectionRect: any;
  isIntersecting: boolean;
  rootBounds: any;
  target: any;
  time: number;
}
