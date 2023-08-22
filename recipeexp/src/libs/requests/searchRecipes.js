import axios from "axios";
import config from '../config';
const searchRecipes= async (term)=>{
    const response  = await axios.get(`${config.baseURL}search.php?s=${term}`);
    return response;
};

export default  searchRecipes;