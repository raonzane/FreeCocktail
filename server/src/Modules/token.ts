import { sign, verify } from 'jsonwebtoken';
import { User } from '../Entity/User';

const AccessTokenCreate = (data: object) => {
  try {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '3h' });
  } catch (err) {
    return err;
  }
};

const RefreshTokenCreate = (data: object) => {
  try {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: '3d' });
  } catch (err) {
    return err;
  }
};

const TokensCreate = async (userInfo: User) => {
  const email = userInfo;
  const accessToken: string = AccessTokenCreate({ email });
  const refreshToken: string = RefreshTokenCreate({ email });

  return { accessToken, refreshToken };
};

const AccessTokenVerify = async (accessToken: string) => {
  try {
    return verify(accessToken, process.env.ACCESS_SECRET);
  } catch (err) {
    console.log(err);
    return null;
  }
};

const RefreshTokenVerify = (accessToken: string) => {
  try {
    return verify(accessToken, process.env.REFRESH_SECRET);
  } catch (err) {
    console.log(err);
    return null;
  }
};

const ConfirmEmailToken = async (email: string) => {
  try {
    return sign({ email }, process.env.ACCESS_SECRET, { expiresIn: '15m' });
  } catch (err) {
    console.log(err);
  }
};

export {
  TokensCreate,
  AccessTokenCreate,
  AccessTokenVerify,
  RefreshTokenVerify,
  ConfirmEmailToken,
};
