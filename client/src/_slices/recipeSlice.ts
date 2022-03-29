import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

const INITIAL_STATE: RecipeState = {
  image: '/defaultImg.png',
  name: '',
  baseDrink: '',
  tags: [],
  ingredient: [],
  measure: [],
  instructions: '',
};

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

export const recipeData = (state: RootState) => state.recipeInfo;
export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
