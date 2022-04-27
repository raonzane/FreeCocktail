import { Like } from '../Entity/Like';

export const FindByIdLike = async (id) => {
  return Like.find({
    where: {
      userId: id,
    },
  });
};
