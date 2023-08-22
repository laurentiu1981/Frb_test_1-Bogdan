import TextField from "../TextField";
import Icon from "../../Icon/Icon";
import PropTypes from "prop-types";
import Button from "../../Button";

SearchBar.propTypes = {
  formMethods: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

SearchBar.defaultProps = {
  name: '',
  label: '',
  formMethods: null,
};

function SearchBar({name , label , formMethods}){
  return (<div className="m-auto flex flex-row gap-0.5 items-center">
    <TextField label={label} name={name} formMethods={formMethods}
               inputAttributes={{className:"border-2 !bg-amber-300 border-amber-700 text-amber-900 rounded"}} />
    <Button rounded type="submit" className="h-[2.2rem]" variation={"primary"} > Search <Icon type={Icon.search} className=" right-0.5 top-7" size={"28px"}/></Button>
  </div>);
}
export default SearchBar;