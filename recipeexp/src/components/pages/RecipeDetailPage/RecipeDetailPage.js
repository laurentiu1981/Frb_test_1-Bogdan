import {useSelector, useDispatch} from "react-redux";
import Image from "../../generic/Image";
import Rating from "../../generic/Rating";
import {useCallback, useState} from "react";
import Button from "../../generic/Button";
import {addRecipe, modRatingFav, removeRecipe} from "../../../store/slices/favorites/favoritesReducer";
import {setRecipe} from "../../../store/slices/recipe/recipeReducer";
import {markFavorite, modRating, remFavorite} from "../../../store/slices/allRecipes/allRecipes";
function RecipeDetailPage(){
  const recipe = useSelector((state) => {
      return state.recipe.data;
  });
  const dispatch = useDispatch();
  const [isFavorite,setIsFavorite]=useState(recipe.bookmarked);

  const onAdd=useCallback(()=>{
    setIsFavorite(true);
    dispatch(markFavorite(recipe));
    dispatch(addRecipe({...recipe, bookmarked:true}));
  },[]);
  const onRemove=useCallback(()=>{
    setIsFavorite(false);
    dispatch(remFavorite(recipe));
    dispatch(removeRecipe({...recipe, bookmarked:false}));
  },[]);
  const onRate=useCallback((score)=>{
    const newRating = (score + recipe.rating)/2;
    dispatch(setRecipe({...recipe, rating:newRating}));
    dispatch(modRating({recipe, rating:newRating}));
    dispatch(modRatingFav({recipe, rating:newRating}));
  },[]);


  let ingredients = recipe.ingredients.map((item,index)=>{
    return <li key={index}>{item}</li>
  })
  return <div className=" flex flex-col items-center gap-10 bg-amber-100">
    <div className="relative flex justify-center m-auto h-1/3">
      <Image className="w-full h-full " src={recipe.src}/>
      <h1 className="absolute bottom-2 text-3xl text-white font-semibold">{recipe.title}</h1>
    </div>

    <ul>
      <label className="font-semibold">Ingredients:</label>
      {ingredients}
    </ul>
    <p className="w-[70%]">{recipe.instructions}</p>

    <Rating score={recipe.rating} onRate={onRate}/>
    {isFavorite && <Button variation={"danger"} onClick={onRemove}>- Remove from Favorites</Button> ||
    <Button variation={"success"} onClick={onAdd}>+ Add to Favorites</Button>}
  </div>
}
export default RecipeDetailPage;