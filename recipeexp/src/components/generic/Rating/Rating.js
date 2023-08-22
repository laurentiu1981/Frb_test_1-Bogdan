import PropTypes from "prop-types";
import ReactStars from 'react-stars';
import Button from "../Button";

Rating.propTypes = {
  score: PropTypes.number,
  onRate: PropTypes.func,
};
Rating.defaultProps = {
  score: 0,
};
function Rating({score,onRate}){

  return <div className="flex flex-col m-auto w-[16rem]">

    <div className="flex flex-row flex-wrap justify-around">
      <div>
        <label>Average rating: </label>
        <ReactStars
          count={5}
          value={score}
          size={24}
          color2={'#ffd700'}
          edit={false}
        />
      </div>
      <div>
        <label>Rate recipe: </label>
        <ReactStars
          count={5}
          value={0}
          onChange={onRate}
          size={24}
          color2={'#ffd700'} />
      </div>
    </div>
  </div>;
}
export default Rating;