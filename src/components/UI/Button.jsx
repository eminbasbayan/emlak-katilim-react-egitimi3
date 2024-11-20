import './Button.css';

function Button({ color, size, classNames, children }) {
  const componentClassNames = `btn btn-${color} btn-${size} ${classNames}`;

  return <button className={componentClassNames}>{children}</button>;
}

export default Button;
