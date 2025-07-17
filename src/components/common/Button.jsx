import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  type = 'button',
  baseStyle = 'base',
  variant = 'primary',
  className = '',
}) => {
  const baseStyles = {
    base: `w-full h-12 flex place-items-center rounded-md font-medium transition`,
    circle: `w-10 h-10 rounded-full flex items-center justify-center`,
  };

  const variants = {
    primary: 'bg-base-primary text-white hover:bg-blue-700',
    secondary: 'bg-white dark:bg-hover-dark hover:bg-hover-primary dark:hover:bg-snowdrift-dark',
    outline: 'text-base-primary dark:text-white hover:bg-red-800 hover:text-white',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles[baseStyle]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  baseStyle: PropTypes.oneOf(['base', 'circle']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  className: PropTypes.string,
};

export default Button;
