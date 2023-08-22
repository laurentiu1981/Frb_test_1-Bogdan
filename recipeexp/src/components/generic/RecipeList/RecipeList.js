import RecipeCard from "../RecipeCard";
import {useCallback} from "react";
import PropTypes from "prop-types";
import {setRecipe} from "../../../store/slices/recipe/recipeReducer";
import {getPath} from "../../../routes/routesObject";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addRecipe, removeRecipe} from "../../../store/slices/favorites/favoritesReducer";
import {markFavorite, remFavorite} from "../../../store/slices/allRecipes/allRecipes";



RecipeList.propTypes = {
  recipes:PropTypes.arrayOf(PropTypes.any),
}
function RecipeList({recipes}){
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const onAdd=useCallback((recipe)=>{
    dispatch(addRecipe({...recipe, bookmarked:true}));
    dispatch(markFavorite(recipe));
  },[]);
  const onRemove=useCallback((recipe)=>{
    dispatch(removeRecipe({...recipe, bookmarked:false}));
    dispatch(remFavorite(recipe));
  },[]);
  const onClick=useCallback((recipe)=>{
    dispatch(setRecipe(recipe));
    navigate(getPath('recipe'));
  },[]);


    let renderedCards;
    if(recipes){
      renderedCards= recipes.map((recipe,index) => {
        return <RecipeCard key={index} recipe={recipe} onAdd={onAdd} onRemove={onRemove} onClick={onClick}/>;
      });
    }

    return (<div className="flex flex-row w-full flex-wrap gap-1 ">
      {renderedCards}
      <hr/>
    </div>);


}
export default RecipeList;