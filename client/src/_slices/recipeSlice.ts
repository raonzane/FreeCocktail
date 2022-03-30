import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../_store/store';

interface RecipeState {
  image: string | Blob;
  name: string;
  baseDrink: string;
  tags: string[];
  ingredient: string[];
  measure: string[];
  instructions: string;
}

interface ExtraURI {
  categoryURI: string;
  filteringURI: string;
}

const INITIAL_STATE: RecipeState = {
  image: '/defaultImg.png',
  name: '',
  baseDrink: '',
  tags: [],
  ingredient: [],
  measure: [],
  instructions: '',
};

export const recipeCardsAsnyc = createAsyncThunk(
  'RECIPE_DATA',
  async (URI: ExtraURI): Promise<any> => {
    const recipeCardData = axios
      .get(`http://localhost:3001/recipe/${URI.categoryURI}${URI.filteringURI}`)
      .then((recipeInfo: any) => {
        const recipeList = recipeInfo.data.data;
        console.log('recipeInfo', recipeList);
      })
      .catch((err: any) => console.log(err));
    return recipeCardData;
  }
);

// https://bit.ly/3FQtXug
const recipeSlice = createSlice({
  name: 'recipe',
  initialState: INITIAL_STATE,
  reducers: {
    addRecipe: (state, action: PayloadAction<RecipeState>) => {
      const {
        image,
        name,
        baseDrink,
        tags,
        ingredient,
        measure,
        instructions,
      } = action.payload;
      state = {
        image,
        name,
        baseDrink,
        tags,
        ingredient,
        measure,
        instructions,
      };
      return state;
    },
  },
});

// export const recipeData = (state: RootState) => state.recipeInfo;
export const recipeData = (state: RootState) =>
  state.persistedReducer.recipeInfo;
export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
