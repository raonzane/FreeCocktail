import { Drink } from '../Entity/Drink';
import { getRepository } from 'typeorm';

export const FindAllRecipe = () => {
  return Drink.find({ order: { id: 'ASC' } });
};

export const FindTagRecipe = (tags) => {
  if (typeof tags === 'string') {
    tags = StringToArray(tags);
  }
  return getRepository(Drink)
    .createQueryBuilder()
    .where('tags && ARRAY[:...tags]', { tags })
    .orderBy('id', 'ASC')
    .getMany();
};

export const FindLikeRecipe = () => {
  return Drink.find({ order: { likeCount: 'DESC' } });
};

export const FindIdRecipe = (id) => {
  return Drink.findOne({ where: { id } });
};

export const AddRecipe = (drinkInfo) => {
  if (typeof drinkInfo.tags === 'string') {
    drinkInfo.tags = StringToArray(drinkInfo.tags);
  }
  if (typeof drinkInfo.Ingredient === 'string') {
    drinkInfo.Ingredient = StringToArray(drinkInfo.Ingredient);
  }
  if (typeof drinkInfo.measure === 'string') {
    drinkInfo.Ingredient = StringToArray(drinkInfo.Ingredient);
  }
  const drink = Drink.create(drinkInfo);
  return Drink.save(drink);
};

export const FindPageNation = (lastRecipeId, size) => {
  return getRepository(Drink)
    .createQueryBuilder('drink')
    .where('drink.id > :lastRecipeId', { lastRecipeId })
    .limit(size)
    .orderBy('id', 'ASC')
    .getMany();
};

const StringToArray = (itme) => {
  return [itme];
};
