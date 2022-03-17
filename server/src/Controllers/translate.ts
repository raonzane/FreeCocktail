import { Request, Response } from 'express';
import axios from 'axios';
import { Drink } from '../Entity/Drink';
import { getRepository } from 'typeorm';
const { Translate } = require('@google-cloud/translate').v2;

const projectId = process.env.GOOGLE_PROJECT_ID;
const keyFileName = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const translate = new Translate({ projectId, keyFileName });
const target = 'ko';

const cocktatilNameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini';
const cocktatilRandomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export const GoogleTranslate = async (req: Request, res: Response) => {
  try {
    for (let i = 0; i < 1000; i++) {
      const { data }: any = await axios.get(cocktatilRandomUrl, {
        headers: {
          'Content-type': 'application/json',
        },
      });
      const drinkData = data.drinks[0];
      const name = await Translation(drinkData.strDrink);
      const nameCheck = await Drink.findOne({ name });
      if (nameCheck || drinkData === null) {
        continue;
      }
      const image = await Translation(drinkData.strDrinkThumb);
      const Instructions = await Translation(
        drinkData.strInstructions.replace(/\n/g, '').replace(/\r/g, '')
      );
      const Ingredient = await ObjectToArray(drinkData, 'strIngredient');
      const measure = await ObjectToArray(drinkData, 'strMeasure');
      const tags = [];
      if (drinkData.strAlcoholic === 'Non_Alcoholic') {
        tags.push('무알콜');
      }
      const drinkInfo = Drink.create({
        name,
        image,
        Ingredient,
        measure,
        Instructions,
        tags,
      });
      await Drink.save(drinkInfo);
    }
    res.send();
  } catch (err) {
    console.log(err);
  }
};

async function ObjectToArray(el: Object, name: string): Promise<string[]> {
  let arrayIngredient = [];
  let num = 1;
  while (true) {
    const ingredient = `${name}${num}`;
    if (el[ingredient] === null) break;
    arrayIngredient.push(await Translation(`${el[ingredient]}`));
    num++;
  }

  return arrayIngredient;
}

async function Translation(text: string): Promise<string> {
  let [translations] = await translate.translate(text, target);
  return translations;
}

export const TagEdit = async (req: Request, res: Response) => {
  const tags = req.body.tag;
  const Ingredient = req.body.Ingredient;
  const drinkInfo = await getRepository(Drink)
    .createQueryBuilder('drink')
    .where('drink.Ingredient like :Ingredient', { Ingredient: `%${Ingredient}%` })
    .getMany();

  for (const el of drinkInfo) {
    if (el.tags === null) {
      el.tags = [tags];
    } else {
      if (!el.tags.includes(tags)) {
        el.tags.push(`${tags}`);
      }
    }
    await Drink.save(el);
  }

  console.log(drinkInfo);
  res.send();
};

/*
달달한 시럽,초콜릿, 크림,설탕,
청량한 소다 탄산수,콜라,사이다,토닉 워터
드라이한 진
트로피칼 오렌지,자몽 레몬 복숭아 라즈베리 과일
커피 커피
무알코올  strAlcoholic === 'Non_Alcoholic'
편의점 레시피 검색....
/////////////////////////////////////////////
샴페인
꼬냑 없음
진
럼
테낄라
보드카
위스키
*/
