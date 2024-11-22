import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../context/CartContext';
import './Button.css';

function Button({
  color = 'primary',
  size = 'lg',
  classNames,
  onClick,
  children,
}) {
  const value = useContext(CartContext);
  const componentClassNames = `btn btn-${color} btn-${size} ${classNames}`;

  console.log(value);

  return (
    <button className={componentClassNames} onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'danger', 'success']),
  size: PropTypes.oneOf(['xl', 'lg', 'sm']),
  classNames: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
