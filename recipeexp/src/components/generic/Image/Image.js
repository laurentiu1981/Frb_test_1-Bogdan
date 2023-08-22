import React from 'react';
import PropTypes from 'prop-types';
import './ImageStyles.css';
import cls from 'classnames';
import defaultImg from '../../../assets/images/default-image.jpg';

Image.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
  rest: PropTypes.any,
};
Image.defaultProps = {
  name: 'image',
  alt: 'image',
  src: defaultImg,
  className: 'w-[20rem]',
  rest: undefined,
};
function Image({ alt, name, src, className, ...rest }) {
  const divClasses = cls('img-container', className);

  return (
    <div className={divClasses}>
      <img className="w-full h-full" name={name} alt={src} src={src} {...rest} />
    </div>
  );
}

export default Image;
