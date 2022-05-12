import { IUser } from '../Interfaces/IUser';
import { User } from '../Entity/User';

export const CreateUser = (data: IUser) => {
  const userInfo = User.create(data);
  return User.save(userInfo);
};

export const FindUserInfo = (data: string) => {
  return User.findOne({ email: data });
};

export const EditUser = (data: User) => {
  return User.save(data);
};

export const DeleteUser = (data: User) => {
  return User.remove(data);
};
