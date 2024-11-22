import PropTypes from 'prop-types';
import './Button.css';

function Button({
  color = 'primary',
  size = 'lg',
  classNames,
  onClick,
  children,
  disabled,
}) {
  const componentClassNames = `btn btn-${color} btn-${size} ${classNames}`;

  return (
    <button
      className={componentClassNames}
      onClick={onClick}
      disabled={disabled}
    >
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
