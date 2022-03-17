import { Request, Response } from 'express';
import { Drink } from '../Entity/Drink';
import { getRepository } from 'typeorm';
import {
  FindAllRecipe,
  FindTagRecipe,
  FindLikeRecipe,
  FindIdRecipe,
  AddRecipe,
} from '../Services/RecipeService';

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

const RecipeFindId = async (req: Request, res: Response) => {
  try {
    const recipeId = req.params.id;
    const drinkInfo = await FindIdRecipe(recipeId);

    res.status(200).send({ data: drinkInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const RecipeAdd = async (req: Request, res: Response) => {
  try {
    const { name, image, Ingredient, measure, Instructions, tags } = req.body;
    const drinkData = { name, image, Ingredient, measure, Instructions, tags };
    if (!!req.file) {
      drinkData.image = req.file['location'];
    }
    const drinkInfo = await AddRecipe(drinkData);

    if (!drinkData) {
      return res.status(404).send({ message: 'Wrong Recipe Data' });
    }
    res.status(201).send({ data: drinkInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

export default { RecipeSerchTag, RecipeFindAll, RecipeFindLike, RecipeFindId, RecipeAdd };
