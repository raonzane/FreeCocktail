import { IUserInput } from '../Interfaces/IUser';
import { User } from '../Entity/User';

export const CreateUser = (data: IUserInput) => {
  const userInfo = User.create(data);
  return User.save(userInfo);
};

export const FindUserInfo = (data: string) => {
  //const email = data;
  return User.findOne({ email: data });
};

export const EditUser = (data: User) => {
  return User.save(data);
};

export const DeleteUser = (data: User) => {
  return User.remove(data);
};
