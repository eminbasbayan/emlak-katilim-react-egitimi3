import PropTypes from 'prop-types';
import './Button.css';

function Button({
  color = 'primary',
  size = 'lg',
  classNames,
  onClick,
  children,
}) {
  const componentClassNames = `btn btn-${color} btn-${size} ${classNames}`;

  return (
    <button className={componentClassNames} onClick={onClick}>
      {children}
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
