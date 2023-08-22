import axios from "axios";

const searchRecipes= async (term)=>{
  const results = await axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
  return results.data.results;
};

export  default searchRecipes;