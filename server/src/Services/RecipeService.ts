import { Drink } from '../Entity/Drink';
import { Connection, getRepository, In } from 'typeorm';
import { Like } from '../Entity/Like';

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
// const SQ = Connection.getRepository(Like)
//     .createQueryBuilder('like')
//     .subQuery()
//     .select('COUNT(like.drinkId)', 'likeCount')
//     .addSelect('like.drinkId', 'drinkId')
//     .groupBy('like.drinkId')
//     .getQuery();
// ;
// export const FindLikeRecipe = (skip, size) => {
//   try {
//     return (
//       getRepository(Drink)
//         .createQueryBuilder('drink')
//         .leftJoinAndSelect(
//           (SQ) => {
//             return SQ.select('COUNT(like.drinkId)', 'likeCount')
//               .from(Like, 'like')
//               .addSelect('like.drinkId', 'drinkId')
//               .groupBy('like.drinkId');
//           },
//           'asd',
//           'drink.id = asd.drinkId'
//         )
//         //.select('SUM(drink.likeCount)', 'sum')
//         .addSelect('IFNULL(likeCount, 0)', 'likeCount')
//         .getRawMany()
//     );

//     // .orderBy('Drink.likeCount', 'DESC')
//     // .addOrderBy('Drink.id', 'ASC')
//     // .offset(skip)
//     // .limit(size)
//     // .getMany();
//   } catch (err) {
//     console.log(err);
//     //4  // 1 3 7 8 9
//   }
// };
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

export const AddLikeRecipe = async (likeData) => {
  const likeInfo = Like.create(likeData);
  Like.save(likeInfo);

  const recipeInfo = await FindIdRecipe(likeData.drinkId);

  recipeInfo.likeCount = recipeInfo.likeCount + 1;

  return Drink.save(recipeInfo);
};

export const DeleteLikeRecipe = async (likeData) => {
  const likeInfo = await Like.find({
    where: {
      userId: likeData.userId,
      drinkId: likeData.drinkId,
    },
  });
  Like.remove(likeInfo);

  const recipeInfo = await FindIdRecipe(likeData.drinkId);

  if (recipeInfo.likeCount > 0) {
    recipeInfo.likeCount = recipeInfo.likeCount - 1;
  }

  return Drink.save(recipeInfo);
};

const StringToArray = (itme) => {
  return [itme];
};
