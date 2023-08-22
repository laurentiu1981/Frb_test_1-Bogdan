import TextField from "../TextField";
import Icon from "../../Icon/Icon";
import PropTypes from "prop-types";

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
  return (<div className="m-auto  relative">
    <TextField label={label} name={name} formMethods={formMethods}
               inputAttributes={{className:"border-2 !bg-amber-300 border-amber-700 text-amber-900 rounded"}} />
    <Icon type={Icon.search} className="absolute right-0.5 top-7" size={"28px"}/>
  </div>);
}
export default SearchBar;