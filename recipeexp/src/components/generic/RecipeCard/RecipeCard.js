import PropTypes from "prop-types";
import Image from "../Image";
import Icon from "../Icon/Icon";
import ReactStars from "react-stars";
import {useCallback, useState} from "react";

RecipeCard.propTypes = {
  recipe: PropTypes.any,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func,
  onClick: PropTypes.func,
};

RecipeCard.defaultProps = {
  recipe:{
    bookmarked:true
  }
}

function RecipeCard({recipe,onRemove,onAdd,onClick}){
  let ingredients ='Ingredients: '+ recipe.ingredients[0] + ', '+recipe.ingredients[1] + ', '+recipe.ingredients[2] ;
  const [isFavorite,setIsFavorite]=useState(recipe.bookmarked);

  const handleAdd=useCallback(()=>{
    setIsFavorite(true);
    onAdd(recipe);
  },[]);
  const handleRemove=useCallback(()=>{
    setIsFavorite(false);
    onRemove(recipe);
  },[]);

  return (<div className="w-52 h-auto relative">
    {isFavorite && <Icon size="2rem" className="absolute right-0 top-0" type={Icon.heart} onClick={handleRemove}/> ||
    <Icon  size="2rem" className="absolute  right-0 top-0" type={Icon.emptyHeart} onClick={handleAdd}/>}

    <div className="p-2 border-2 border-amber-500 bg-amber-200 rounded" onClick={()=>{onClick({...recipe,bookmarked: isFavorite})}}>
      <Image className="h-24" src={recipe.src}/>
      <h1 className="text-lg">{recipe.title}</h1>
      <p className="text-sm">{ingredients}</p>
      <ReactStars
        count={5}
        value={recipe.rating}
        size={24}
        color2={'#ffd700'}
        edit={false}
      />
    </div>
  </div>);
}
export default RecipeCard;