import React from 'react';
import { BasicLayout, TopBarLayout } from '../components/layouts';
import {BookmarksPage, Homepage, RecipeDetailPage} from "../components/pages";


const getRoutes = () => ({
  home: {
    title: 'Homepage',
    path: '/',
    layout: TopBarLayout,
    element: Homepage,
  },
  recipe: {
    title: 'Recipe Details',
    path: '/recipe',
    layout: BasicLayout,
    element: RecipeDetailPage,
  },
  bookmarks: {
    title: 'Bookmarks',
    path: '/bookmarks',
    layout: TopBarLayout,
    element: BookmarksPage,
  },
});

const getPath = (key) => {
  const routes = getRoutes();
  return routes[key].path;
};
export default getRoutes;

export { getPath };
