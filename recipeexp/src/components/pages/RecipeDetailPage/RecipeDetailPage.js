import {useSelector, useDispatch} from "react-redux";
import Image from "../../generic/Image";
import Rating from "../../generic/Rating";
import {useCallback} from "react";
function RecipeDetailPage(){
  const recipe = useSelector((state) => {
      return state.recipe.data;
  });

  const onAdd=useCallback(()=>{
      console.log('add');
  },[]);
  const onRate=useCallback(()=>{
    console.log('rate');
  },[]);


  let ingredients = recipe.ingredients.map((item,index)=>{
    return <li key={index}>{item}</li>
  })
  return <div className=" flex flex-col items-center gap-10">
    <div className="relative flex justify-center m-auto h-1/3">
      <Image className="w-full h-full " src={recipe.src}/>
      <h1 className="absolute bottom-2 text-3xl text-white font-semibold">{recipe.title}</h1>
    </div>
    <ul>
      {ingredients}
    </ul>
    <p>{recipe.guide}</p>

    <Rating score={0} onRate={onRate} onAdd={onAdd}/>
  </div>
}
export default RecipeDetailPage;