import { createSlice } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    data: null
  },
  reducers: {
    setRecipe(state,action){
      state.data = action.payload;
    }
  },
});

const recipeReducer = recipeSlice.reducer;
export default recipeReducer;
export const {setRecipe} = recipeSlice.actions;