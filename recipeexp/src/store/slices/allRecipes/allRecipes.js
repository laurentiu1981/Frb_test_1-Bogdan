import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
  name: 'all',
  initialState: {
    data: []
  },
  reducers: {
    setAllRecipes(state,action){
      state.data = action.payload;
    },
    markFavorite(state,action){
      let ind =  state.data.findIndex((rec)=>rec.id===action.payload.id);
      if(ind !== -1){
        state.data[ind].bookmarked=true;
      }
    },
    remFavorite(state,action){
      let ind =  state.data.findIndex((rec)=>rec.id===action.payload.id);
      if(ind !== -1){
        state.data[ind].bookmarked=false;
      }
    },

    modRating(state,action){
      let ind =  state.data.findIndex((rec)=>rec.id===action.payload.recipe.id);
      if(ind !== -1){
        state.data[ind].rating=action.payload.rating;
      }
    },

  },
});

const allRecipesReducer = recipesSlice.reducer;
export default allRecipesReducer;
export const {setAllRecipes,modRating,remFavorite,markFavorite} = recipesSlice.actions;