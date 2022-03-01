import { Drink } from '../Entity/Drink';
import { getRepository } from 'typeorm';

export const FindAllRecipe = () => {
  return Drink.find({ order: { id: 'ASC' } });
};

export const FindTagRecipe = (tags: Array<string>) => {
  return getRepository(Drink)
    .createQueryBuilder()
    .where('tags && ARRAY[:...tags]', { tags })
    .orderBy('id', 'ASC')
    .getMany();
};

export const FindLikeRecipe = () => {
  return Drink.find({ order: { likeCount: 'DESC' } });
};
