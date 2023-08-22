import React from 'react';
import PropTypes from 'prop-types';
import trash from '../../../assets/icons/trash-icon.svg';
import close from '../../../assets/icons/close-icon.svg';
import minimize from '../../../assets/icons/minimize-icon.svg';
import settings from '../../../assets/icons/settings-icon.svg';
import change from '../../../assets/icons/change-icon.svg';
import heart from '../../../assets/icons/heart.svg';
import emptyHeart from '../../../assets/icons/empty-heart.svg';
import search from '../../../assets/icons/search.svg';
import cls from 'classnames';

Icon.propTypes = {
  type: PropTypes.oneOf([change, close, trash, minimize, settings,heart,emptyHeart,search]),
  src: PropTypes.string,
  size: PropTypes.string,
  display: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  rest: PropTypes.any,
};
Icon.defaultProps = {
  type: trash,
  className: '',
};

function Icon({ type, src, display, className, onClick, size, ...rest }) {
  const style = {
    width: size ?? '1rem',
    display: display ?? 'inline-flex',
  };
  const iconClasses = cls(className, 'h-auto');
  let source;
  if (src) {
    source = src;
  } else if (type) {
    source = type;
  }
  return (
    <img
      className={iconClasses}
      style={style}
      alt={`${type || 'custom'} icon`}
      src={source}
      {...rest}
      onClick={onClick}
    />
  );
}
Icon.trash = trash;
Icon.close = close;
Icon.settings = settings;
Icon.change = change;
Icon.minimize = minimize;
Icon.heart = heart;
Icon.search = search;
Icon.emptyHeart = emptyHeart;

export default Icon;
