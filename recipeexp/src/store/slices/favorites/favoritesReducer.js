import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
      recipes : [],
      },
  reducers: {
    addRecipe(state,action){
     let ind =  state.recipes.findIndex((rec)=>rec.id===action.payload.id);
      if(ind === -1){
        state.recipes.push(action.payload);
      }
    },
    removeRecipe(state,action){
      const updated = state.recipes.filter((recipe)=>{
        return action.payload.id !== recipe.id;
      });
      state.recipes=updated;
    },
    modRatingFav(state,action){
      let ind =  state.recipes.findIndex((rec)=>rec.id===action.payload.recipe.id);
      if(ind !== -1){
        state.recipes[ind].rating=action.payload.rating;
      }
    },
  },
});

const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;
export const {addRecipe,removeRecipe,modRatingFav} = favoritesSlice.actions;