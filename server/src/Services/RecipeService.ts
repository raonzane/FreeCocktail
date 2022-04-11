import { Drink } from '../Entity/Drink';
import { getRepository, In } from 'typeorm';

export const FindAllRecipe = () => {
  return Drink.find({ order: { id: 'ASC' } });
};

export const FindTagRecipe = (tags, skip, size) => {
  if (typeof tags === 'string') {
    tags = StringToArray(tags);
  }
  return getRepository(Drink)
    .createQueryBuilder('drink')
    .where('drink.tags @> ARRAY[:...tags]', { tags })
    .offset(skip)
    .limit(size)
    .orderBy('id', 'ASC')
    .getMany();
};

export const FindLikeRecipe = (skip, size) => {
  return getRepository(Drink)
    .createQueryBuilder('Drink')
    .offset(skip)
    .limit(size)
    .orderBy('Drink.likeCount', 'DESC')
    .addOrderBy('Drink.id', 'ASC')
    .getMany();
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

export const FindPageNation = (skip, size) => {
  return getRepository(Drink)
    .createQueryBuilder()
    .offset(skip)
    .limit(size)
    .orderBy('id', 'ASC')
    .getMany();
};

const StringToArray = (itme) => {
  return [itme];
};
