import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from "./slices/recipe/recipeReducer";
import favoritesReducer from "./slices/favorites/favoritesReducer";


export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    favorites:favoritesReducer,
  },
});
