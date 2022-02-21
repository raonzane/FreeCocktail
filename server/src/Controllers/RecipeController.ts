import { Request, Response } from 'express';
import { Drink } from '../Entity/Drink';
import { getRepository } from 'typeorm';

const RecipeSerchTag = async (req: Request, res: Response) => {
  const Tag = req.body.Tag;

  // const drinkInfo = await Drink.findOneOrFail({
  //   where: { tags: { ...Tag } },
  // });
  const data = '달달한';
  const drinkInfo = await getRepository(Drink)
    .createQueryBuilder('drink')
    .where('drink.tags like :tags', { tags: `%${data}%` })
    .getMany();

  console.log(drinkInfo);
};

export default { RecipeSerchTag };
