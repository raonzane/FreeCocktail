import { Request, Response } from 'express';
import { IUser, loginType } from '../Interfaces/IUser';
import * as bcrypt from 'bcrypt';
import { TokensCreate } from '../Modules/token';
import { CreateUser, DeleteUser, EditUser, FindUserInfo } from '../Services/UserService';
import { FindByIdLike } from '../Services/LikeServices';

const SignUp = async (req: Request, res: Response) => {
  try {
    const { nickname, password, email }: IUser = req.body;
    const findUser = await FindUserInfo(email);
    if (findUser) {
      return res.status(409).send({ message: `${email} Already Exists` });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const userInfo = await CreateUser({
      nickname,
      password: hashPassword,
      email,
      type: loginType.none,
    });

    res.status(201).send({ data: userInfo, message: 'Success' });
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
  const { nickname, password }: Partial<IUser> = req.body;
  const { email }: any = req.params;
  let userInfo = await FindUserInfo(email);

  if (!userInfo) {
    return res.status(404).send({ message: 'Resource Not Found' });
  }

  if (!!req.file) {
    userInfo.image = req.file['location'];
  }

  userInfo.nickname = nickname || userInfo.nickname;
  userInfo.password = password || userInfo.password;

  const editUserInfo = await EditUser(userInfo);

  res.status(200).send({ message: 'Success' });
};

const LogIn = async (req: Request, res: Response) => {
  const { password, email }: Partial<IUser> = req.body;
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

  const likeInfo = await FindByIdLike(userInfo.id);
  res.status(200).send({ data: userInfo, likeInfo, accessToken, message: 'Success' });
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
