import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface recipeStateType {
  id: number;
  name: string;
  image: string;
  tags: string;
  ingredient: string;
  measure: number;
  instructions: string;
}

// https://bit.ly/3FQtXug
const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {},
  reducers: {
    addRecipe: (recipeState, action: PayloadAction<recipeStateType>) => {
      const { id, name, image, tags, ingredient, measure, instructions } =
        action.payload;
      recipeState = {
        id,
        name,
        image,
        tags,
        ingredient,
        measure,
        instructions,
      };
      return recipeState;
    },
  },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
