import RecipeCard from "../RecipeCard";
import {useCallback} from "react";
import PropTypes from "prop-types";

RecipeList.propTypes = {
  recipes:PropTypes.arrayOf(PropTypes.any)
}
function RecipeList(){
  let recipe = [{},{},{},{},{},{}];

  const onAdd=useCallback(()=>{
    console.log('add');
  },[]);
  const onRemove=useCallback(()=>{
    console.log('remove');
  },[]);

  const renderedCards = recipe.map((recipe,index) => {
    return <RecipeCard key={index} recipe={recipe} onAdd={onAdd} onRemove={onRemove}/>;
  });

  return (<div className="flex flex-row w-full flex-wrap gap-1">
    {renderedCards}
    <hr/>
  </div>);
}
export default RecipeList;