export const convertMealFromApi=(apiMeal)=>{
  let ingredients = [];
  for( let index = 1 ; index<=20 ;index++){
    ingredients.push(apiMeal[`strIngredient${index}`]);
  }
  let rating = Math.random() * 5;
  return {
    id:apiMeal.idMeal,
    src:apiMeal.strMealThumb,
    title:apiMeal.strMeal,
    instructions:apiMeal.strInstructions,
    ingredients:ingredients,
    rating:rating,
    bookmarked: false
  }
}
