import {  useForm } from 'react-hook-form';
import {useCallback, useState} from "react";
import SearchBar from "../../generic/form/SearchBar";
import searchRecipes from "../../../libs/requests/searchRecipes";
import RecipeList from "../../generic/RecipeList";
import {convertMealFromApi} from "../../../libs/helpers";
import {useDispatch, useSelector} from "react-redux";
import {setAllRecipes} from "../../../store/slices/allRecipes/allRecipes";

function HomePage(){
  const formMethods = useForm({ shouldUnregister: true });
  const {handleSubmit} = formMethods;
  const recipes = useSelector((state)=>state.all.data);
  const dispatch = useDispatch();

  const onSubmit = useCallback(async (searchTerm) => {
    const response  = await searchRecipes(searchTerm.searchTerm);
    console.log('here');
    dispatch(setAllRecipes(response.data.meals.map((recipe)=>{
      return convertMealFromApi(recipe);
    })));

  }, []);


  return <div className="p-6 bg-amber-100">
    <form className="w-[28rem] m-auto  relative" onSubmit={handleSubmit(onSubmit)}>
      <SearchBar formMethods={formMethods} label="Search" name="searchTerm" />
    </form>
      <RecipeList recipes={recipes}/>
  </div>
}

export default HomePage;