import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
      recipes : [],
      },
  reducers: {
    addRecipe(state,action){
        state.recipes.push(action.payload);
    },
    removeRecipe(state,action){
      const updated = state.recipes.filter((recipe)=>{
        return action.payload !== recipe.id;
      });
      state.data=updated;
    }
  },
});

const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;
