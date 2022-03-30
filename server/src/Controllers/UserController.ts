import { Request, Response } from 'express';
import { IUserInput, loginType } from '../Interfaces/IUser';
import * as bcrypt from 'bcrypt';
import { TokensCreate } from '../Modules/token';
import { CreateUser, DeleteUser, EditUser, FindUserInfo } from '../Services/UserService';

const SignUp = async (req: Request, res: Response) => {
  try {
    //image 작업필요
    const { nickname, password, image, email }: IUserInput = req.body;
    const findUser = await FindUserInfo(email);
    if (findUser) {
      return res.status(409).send({ message: `${email} Already Exists` });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const userInfo = await CreateUser({
      nickname,
      password: hashPassword,
      image,
      email,
      type: loginType.none,
    });

    const { accessToken, refreshToken } = await TokensCreate(userInfo);

    res.cookie('refreshToken', refreshToken, {
      maxAge: 60 * 60 * 24 * 3,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });

    res.status(201).send({ data: userInfo, accessToken, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const SignOut = async (req: Request, res: Response) => {
  const email = req.params.email;
  const userInfo = await FindUserInfo(email);
  if (!userInfo) {
    return res.status(404).send({ message: 'Resource Not Found' });
  }
  DeleteUser(userInfo);
  res.status(200).send({ message: 'Success' });
};

const Edit = async (req: Request, res: Response) => {
  //image 작업필요
  const { nickname, password, image }: IUserInput = req.body;
  const { email }: any = req.params;
  let userInfo = await FindUserInfo(email);

  if (!userInfo) {
    return res.status(404).send({ message: 'Resource Not Found' });
  }
  ///image 코드 확인
  userInfo.nickname = nickname || userInfo.nickname;
  userInfo.password = password || userInfo.password;
  userInfo.password = image || userInfo.image;

  const editUserInfo = await EditUser(userInfo);

  res.status(200).send({ message: 'Success' });
};

const LogIn = async (req: Request, res: Response) => {
  const { password, email }: IUserInput = req.body;
  const userInfo = await FindUserInfo(email);
  const hash = await bcrypt.compare(password, userInfo.password);

  if (!userInfo || !hash) {
    return res.status(404).send({ message: 'Resource Not Found' });
  }

  const { accessToken, refreshToken } = await TokensCreate(userInfo);
  res.cookie('refreshToken', refreshToken, {
    maxAge: 60 * 60 * 24 * 3,
    sameSite: 'none',
    httpOnly: true,
    secure: true,
  });

  res.status(200).send({ data: userInfo, accessToken, message: 'Success' });
};

const LogOut = async (req: Request, res: Response) => {
  res.clearCookie('refreshToken').status(200).send({ message: 'Success' });
};

const UserInfo = async (req: Request, res: Response) => {
  const { email }: any = req.params;
  const userInfo = await FindUserInfo(email);

  if (!userInfo) {
    return res.status(404).send({ message: 'Resource Not Found' });
  }
  res.status(200).send({ data: userInfo, message: 'Success' });
};

export default { SignUp, SignOut, LogIn, LogOut, UserInfo, Edit };
