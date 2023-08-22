import { createSlice } from '@reduxjs/toolkit';

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    data: {
      title:'eggs',
      src:'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
      ingredients:["eggs",'salt', 'paper', "water"],
      guide:"Step1 ............ dsadsa ",
      rating:5.8,

    }
  },
  reducers: {
    setRecipe(state,action){
      state.data = action.payload;
    }
  },
});

const recipeReducer = recipeSlice.reducer;
export default recipeReducer;
