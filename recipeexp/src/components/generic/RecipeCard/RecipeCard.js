import PropTypes from "prop-types";
import Image from "../Image";
import Icon from "../Icon/Icon";

RecipeCard.propTypes = {
  recipe: PropTypes.any,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func,
};

RecipeCard.defaultProps = {
  recipe:{
    bookmarked:false
  }
}

function RecipeCard({recipe,onRemove,onAdd}){
  return <div className="w-44 h-44 p-2 relative border-2 border-amber-500 bg-amber-200 rounded">
    <Image className="w-42 h-24"/>
    {recipe.bookmarked && <Icon size="2rem" className="absolute right-0 top-0" type={Icon.heart} onClick={onRemove}/> ||
        <Icon  size="2rem" className="absolute  right-0 top-0" type={Icon.emptyHeart} onClick={onAdd}/>}
    <h1 className="text-lg">title</h1>
    <p className="text-sm">Ingredients: salt, paper, eggs, salt, paper</p>
  </div>
}
export default RecipeCard;