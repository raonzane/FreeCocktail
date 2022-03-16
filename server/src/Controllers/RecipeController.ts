import { Request, Response } from 'express';
import { Drink } from '../Entity/Drink';
import { getRepository } from 'typeorm';
import { FindAllRecipe, FindTagRecipe, FindLikeRecipe } from '../Services/RecipeService';

const RecipeSerchTag = async (req: Request, res: Response) => {
  try {
    const tag = req.query.tag;

    const drinkInfo = await FindTagRecipe(tag);

    res.status(200).send({ data: drinkInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const RecipeFindAll = async (req: Request, res: Response) => {
  try {
    const drinkInfo = await FindAllRecipe();

    res.status(200).send({ data: drinkInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const RecipeFindLike = async (req: Request, res: Response) => {
  try {
    const drinkInfo = await FindLikeRecipe();

    res.status(200).send({ data: drinkInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

export default { RecipeSerchTag, RecipeFindAll, RecipeFindLike };
