import {  useForm } from 'react-hook-form';
import {useCallback} from "react";
import SearchBar from "../../generic/form/SearchBar";
import searchRecipes from "../../../store/apis/searchRecipes";
import RecipeList from "../../generic/RecipeList";
function HomePage(){
  const formMethods = useForm();
  const {handleSubmit} = formMethods;
  let content;
  const onSubmit = useCallback((searchTerm) => {
    content = searchRecipes(searchTerm.searchTerm);
  }, []);



  return <div className="p-6">
    <form className="w-[28rem] m-auto  relative" onSubmit={handleSubmit(onSubmit)}>
      <SearchBar formMethods={formMethods} label="Search" name="searchTerm"/>
    </form>
      <RecipeList/>
  </div>
}

export default HomePage;