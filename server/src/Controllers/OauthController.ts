import { Request, Response } from 'express';
import { IUser, loginType } from '../Interfaces/IUser';
import { OAuth2Client } from 'google-auth-library';
import 'dotenv/config';
import axios from 'axios';
import { TokensCreate } from '../Modules/token';
import { CreateUser, DeleteUser, EditUser, FindUserInfo } from '../Services/UserService';

const Google = async (req: Request, res: Response) => {
  try {
    const idToken: string = req.body.idToken;
    let userInfo;
    if (!idToken) {
      return res.status(400).send({
        message: 'invalid token',
      });
    }
    const client = new OAuth2Client(process.env.GOOGLE_CLIENTID);

    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLE_CLIENTID,
    });

    const { email, name, picture, sub } = ticket.getPayload();
    userInfo = await FindUserInfo(email);

    if (!userInfo) {
      userInfo = await CreateUser({
        nickname: name,
        password: sub, //sub: 구글아이디의 유니크 ID
        image: picture,
        email,
        type: loginType.google,
      });
    }

    const { accessToken, refreshToken } = await TokensCreate(userInfo);

    res.cookie('refreshToken', refreshToken, {
      maxAge: 60 * 60 * 24 * 3,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });

    res.status(200).send({ data: userInfo, accessToken, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const Naver = async (req: Request, res: Response) => {
  try {
    const idToken = req.body.idToken;
    const { data: NaverUserData } = await axios.get('https://openapi.naver.com/v1/nid/me', {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    if (!NaverUserData) {
      return res.status(400).send({
        message: 'invalid token',
      });
    }
    const { email, name, id, profile_image } = NaverUserData['response'];

    let userInfo = await FindUserInfo(email);

    if (!userInfo) {
      userInfo = await CreateUser({
        nickname: name, //
        password: id, // id: 네이버 유니크 id
        image: profile_image,
        email,
        type: loginType.naver,
      });
    }
    const { accessToken, refreshToken } = await TokensCreate(userInfo);

    res.cookie('refreshToken', refreshToken, {
      maxAge: 60 * 60 * 24 * 3,
      sameSite: 'none',
      httpOnly: true,
      secure: true,
    });

    res.status(200).send({ data: userInfo, accessToken, message: 'Success' });
  } catch (err) {
    console.log(err);
  }
};

export default { Google, Naver };
