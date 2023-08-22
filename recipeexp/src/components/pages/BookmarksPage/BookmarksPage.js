import RecipeList from "../../generic/RecipeList";
import {useSelector} from "react-redux";


function BookmarksPage(){
  const recipes = useSelector((state)=>state.favorites.recipes);

  return <div className="flex flex-col items-center w-full gap-10 p-5">
    <h1 className="text-5xl">Your Bookmarks</h1>
    <RecipeList recipes={recipes} />
  </div>
}

export  default BookmarksPage;