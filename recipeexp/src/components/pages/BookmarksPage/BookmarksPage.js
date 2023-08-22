import RecipeList from "../../generic/RecipeList";

function BookmarksPage(){
  return <div className="flex flex-col items-center w-full gap-10 p-5">
    <h1 className="text-5xl">Your Bookmarks</h1>
    <RecipeList/>
  </div>
}

export  default BookmarksPage;