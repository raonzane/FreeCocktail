import { Request, Response } from 'express';
import { Drink } from '../Entity/Drink';
import { getRepository } from 'typeorm';
import {
  FindAllRecipe,
  FindTagRecipe,
  FindLikeRecipe,
  FindIdRecipe,
  AddRecipe,
  FindPageNation,
  AddLikeRecipe,
  DeleteLikeRecipe,
} from '../Services/RecipeService';

const RecipeSerchTag = async (req: Request, res: Response) => {
  try {
    const { tag, skip, size } = req.query;

    const recipeInfo = await FindTagRecipe(tag, skip, size);

    res.status(200).send({ data: recipeInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const RecipeFindAll = async (req: Request, res: Response) => {
  try {
    const recipeInfo = await FindAllRecipe();

    res.status(200).send({ data: recipeInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const RecipeFindLike = async (req: Request, res: Response) => {
  try {
    const { skip, size } = req.query;
    const recipeInfo = await FindLikeRecipe(skip, size);

    res.status(200).send({ data: recipeInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const RecipeFindId = async (req: Request, res: Response) => {
  try {
    const recipeId = req.params.id;
    const recipeInfo = await FindIdRecipe(recipeId);

    if (!recipeInfo) {
      return res.status(404).send({ message: 'Resource Not Found' });
    }

    res.status(200).send({ data: recipeInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const RecipeAdd = async (req: Request, res: Response) => {
  try {
    const { name, image, Ingredient, measure, Instructions, tags } = req.body;
    const recipeData = { name, image, Ingredient, measure, Instructions, tags };
    if (!!req.file) {
      recipeData.image = req.file['location'];
    }
    const recipeInfo = await AddRecipe(recipeData);

    if (!recipeData) {
      return res.status(404).send({ message: 'Wrong Recipe Data' });
    }
    res.status(201).send({ data: recipeInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const RecipePageNation = async (req: Request, res: Response) => {
  try {
    const { skip, size } = req.query;
    const recipeInfo = await FindPageNation(skip, size);

    res.status(200).send({ data: recipeInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

const RecipeLike = async (req: Request, res: Response) => {
  try {
    const { userId, recipeId, likeCheck } = req.body;
    let likeInfo;

    if (likeCheck) {
      likeInfo = await AddLikeRecipe({ userId, drinkId: recipeId });
    } else {
      likeInfo = await DeleteLikeRecipe({ userId, drinkId: recipeId });
    }

    res.status(200).send({ data: likeInfo, message: 'Success' });
  } catch (err) {
    return res.status(500).send({ message: 'Internal Server Error', err: err });
  }
};

export default {
  RecipeSerchTag,
  RecipeFindAll,
  RecipeFindLike,
  RecipeFindId,
  RecipeAdd,
  RecipePageNation,
  RecipeLike,
};
