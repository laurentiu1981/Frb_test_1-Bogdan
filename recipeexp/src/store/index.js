import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from "./slices/recipe/recipeReducer";
import favoritesReducer from "./slices/favorites/favoritesReducer";
import allRecipesReducer from "./slices/allRecipes/allRecipes";



export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  reducer: {
    recipe: recipeReducer,
    favorites: favoritesReducer,
    all:allRecipesReducer
  },
});
